//  plugins/analytics.client.ts

// example: initialization based on enabled cookies
// export default defineNuxtPlugin((nuxtApp) =>{
const cookieControl = useCookieControl()

if (cookieControl.cookiesEnabledIds.value.includes('google-analytics')) {
  initGoogleAnalytics() // placeholder for your custom initialization
}

// })