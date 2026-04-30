// Example: Initialization based on enabled cookies
export default defineNuxtPlugin((nuxtApp) => {
  const cookieControl = useCookieControl();

  // Define the initGoogleAnalytics function
  const initGoogleAnalytics = () => {
    console.log('Initializing Google Analytics...');
    // Add your Google Analytics initialization logic here
    // Example: gtag('config', 'GA_MEASUREMENT_ID');
  };

  // Check if `cookieControl` and `cookiesEnabledIds` are properly initialized
  if (cookieControl?.cookiesEnabledIds?.value?.includes('google-analytics')) {
    try {
      initGoogleAnalytics(); // Call the initialization function
      console.log('Google Analytics initialized successfully.');
    } catch (error) {
      console.error('Failed to initialize Google Analytics:', error);
    }
  } else {
    console.warn('Google Analytics is not enabled due to missing or disabled cookies.');
  }
});