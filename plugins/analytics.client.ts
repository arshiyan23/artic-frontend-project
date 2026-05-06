export default defineNuxtPlugin(() => {
  // @ts-ignore (Nuxt auto-import)
  const cookieControl = useCookieControl?.()

  const enabledCookies = cookieControl?.cookiesEnabledIds?.value || []

  if (enabledCookies.includes('google-analytics')) {
    initGoogleAnalytics()
  }
})

function initGoogleAnalytics() {
  if (typeof window === 'undefined') return

  // prevent duplicate init
  if ((window as any).gtag) return

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'

  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []

  window.gtag = function (...args: any[]) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', 'GA_MEASUREMENT_ID')

  console.log('Google Analytics initialized')
}