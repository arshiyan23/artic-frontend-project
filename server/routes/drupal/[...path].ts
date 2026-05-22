import { defineEventHandler, getRequestHeaders, getRequestURL, readRawBody } from 'h3'

const hopByHopHeaders = new Set([
  'connection',
  'content-length',
  'host',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade'
])

function rewriteDrupalUrls(value: string, drupalBaseUrl: string): string {
  return value
    .split(drupalBaseUrl).join('/drupal')
    .split(drupalBaseUrl.replaceAll('/', '\\/')).join('\/drupal')
}

function rewriteJsonStrings(value: unknown, drupalBaseUrl: string): unknown {
  if (typeof value === 'string') {
    const rewritten = rewriteDrupalUrls(value, drupalBaseUrl)

    if (!rewritten.trim().startsWith('{') && !rewritten.trim().startsWith('[')) {
      return rewritten
    }

    try {
      return JSON.stringify(rewriteJsonStrings(JSON.parse(rewritten), drupalBaseUrl))
    } catch {
      return rewritten
    }
  }

  if (Array.isArray(value)) {
    return value.map((item) => rewriteJsonStrings(item, drupalBaseUrl))
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, rewriteJsonStrings(item, drupalBaseUrl)])
    )
  }

  return value
}

function rewriteJsonResponse(text: string, drupalBaseUrl: string) {
  try {
    return JSON.stringify(rewriteJsonStrings(JSON.parse(text), drupalBaseUrl))
  } catch {
    return rewriteDrupalUrls(text, drupalBaseUrl)
  }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const drupalBaseUrl = String(config.drupalBaseUrl || '').replace(/\/$/, '')
  const requestUrl = getRequestURL(event)
  const targetPath = requestUrl.pathname.replace(/^\/drupal/, '') || '/'
  const targetUrl = `${drupalBaseUrl}${targetPath}${requestUrl.search}`
  const headers = new Headers()

  for (const [key, value] of Object.entries(getRequestHeaders(event))) {
    if (!value || hopByHopHeaders.has(key.toLowerCase())) continue
    headers.set(key, Array.isArray(value) ? value.join(',') : value)
  }

  headers.set('ngrok-skip-browser-warning', 'true')

  const method = event.method || 'GET'
  const body = method === 'GET' || method === 'HEAD' ? undefined : await readRawBody(event)
  const response = await fetch(targetUrl, {
    method,
    headers,
    body,
    redirect: 'manual'
  })
  const responseHeaders = new Headers(response.headers)
  const contentType = responseHeaders.get('content-type') || ''

  responseHeaders.delete('content-encoding')
  responseHeaders.delete('content-length')

  if (contentType.includes('json')) {
    const text = rewriteJsonResponse(await response.text(), drupalBaseUrl)
    return new Response(text, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders
    })
  }

  if (contentType.startsWith('text/')) {
    const text = rewriteDrupalUrls(await response.text(), drupalBaseUrl)
    return new Response(text, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders
    })
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders
  })
})
