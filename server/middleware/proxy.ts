export default defineEventHandler(async (event) => {
    const url = event.path
    if (url.startsWith('/api/')) {
        const backendUrl = 'https://backend-service-703709491101.us-central1.run.app'
        const targetPath = url.replace('/api', '')
        return proxyRequest(event, `${backendUrl}${targetPath}`)
    }
})