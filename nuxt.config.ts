import viteCompression from 'vite-plugin-compression'
export default defineNuxtConfig({
  // Disable server-side rendering
  ssr: true,

  // Use static site generation
  target: 'static',

  generate: {
    fallback: true // Fallback for SPA
  },

  buildModules: ['@averjs/nuxt-compression'],

  vite: {
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        filter: /\.(js|mjs|json|css|html)$/i
      })
    ]
  },

  // buildModules: ['nuxt-compress'],

  // Enable production mode

  // mode: 'production',
  // // Other Nuxt configuration
  // build: {
  //   // Enable modern mode
  //   modern: true,
  // },
  runtimeConfig: {
    // Make environment variables accessible here
    // API_AUTH_KEY:process.env.API_AUTH_KEY,
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      IMG_BASE_URL: process.env.IMG_BASE_URL,
      API_AUTH_KEY:process.env.API_AUTH_KEY,
      FRONTEND_BASE_URL:process.env.FRONTEND_BASE_URL,
      gtagId: 'G-TTNXS1ZH7X',
      // Add more environment variables as needed
    },
  },

  nitro: {
    // firebase: {
    //   gen: 2
    // },
    preset: "azure",
    compressPublicAssets: {
      brotli: true
    },
    // plugins: [
    //   '~/server/middleware/compression.ts'
    // ]
  },

  app: {
    head: {
      title: 'ARTIC',
      htmlAttrs: {
        lang: 'en' 
      },
       meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=2.0, user-scalable=1'}
    ],
      // link: [
      //   { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css' }
      // ],
      script: [
        // { src: '/js/dropdown.js', async: true, tagPosition: 'bodyClose'},
        { src: '/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose' },
        { src: "/js/lazysizes.min.js", tagPosition: 'bodyClose'},
        { src: '/js/aos.js', tagPosition: 'bodyClose' },
      ]
    }
  },

  modules: [
    'nuxt-aos',
    "@nuxt/ui",
    "@stefanobartoletti/nuxt-social-share",
    "@nuxt/image",
    // 'nuxt-compress'
    // 'nuxt-delay-hydration'
    'nuxt-purgecss',
    '@dargmuesli/nuxt-cookie-control'
  ],

  plugins: [
    { src: '~/plugins/aos.client.js', mode: 'client'},
   { src: '~/plugins/detectSafari.js'},
    
  ],

  cookieControl: {
        // Position of cookie bar.
    // 'top-left', 'top-right', 'top-full', 'bottom-left', 'bottom-right', 'bottom-full'
    barPosition: 'bottom-right',

    // Switch to toggle if clicking the overlay outside the configuration modal closes the modal.
    closeModalOnClickOutside: true,

    // Component colors.
    // If you want to disable colors set colors property to false.
    colors: {
      barBackground: '#000',
      barButtonBackground: '#fff',
      barButtonColor: '#000',
      barButtonHoverBackground: '#333',
      barButtonHoverColor: '#fff',
      barTextColor: '#fff',
      checkboxActiveBackground: '#000',
      checkboxActiveCircleBackground: '#fff',
      checkboxDisabledBackground: '#ddd',
      checkboxDisabledCircleBackground: '#fff',
      checkboxInactiveBackground: '#000',
      checkboxInactiveCircleBackground: '#fff',
      controlButtonBackground: '#fff',
      controlButtonHoverBackground: '#000',
      controlButtonIconColor: '#000',
      controlButtonIconHoverColor: '#fff',
      focusRingColor: '#808080',
      modalBackground: '#fff',
      modalButtonBackground: '#000',
      modalButtonColor: '#fff',
      modalButtonHoverBackground: '#333',
      modalButtonHoverColor: '#fff',
      modalOverlay: '#000',
      modalOverlayOpacity: 0.8,
      modalTextColor: '#000',
      modalUnsavedColor: '#fff',
    },

    // The cookies that are to be controlled.
    // See detailed explanation further down below!
    // cookies: {
    //   necessary: [{
    //     description: {
    //       en: 'This cookie stores preferences.'
    //     },
    //     id: 'p', // use a short cookie id to save bandwidth and prefixes to separate
    //     isPreselected: false ,// `true` is not GDPR compliant! This flag does not enable any cookies, it only preselects the cookie's modal toggle. The default is `false`.
    //     name: {
    //       en: 'Preferences' // you always have to specify a cookie name (in English)
    //     },
    //     links: {
    //       'https://example.com/privacy': 'Privacy Policy',
    //       'https://example.com/terms': 'Terms of Service',
    //     },
    //     src: 'https://example.com/preferences/js?id=<API-KEY>',
    //     targetCookieIds: ['xmpl_a', 'xmpl_b'],
    //   }
    //   ],
    //   optional: [{
    //     name:'Markting',
    //     description:'Used for google mreting',
    //     cookies:['ga','ga-<token>'],
    //   }],
    // },

    // The milliseconds from now until expiry of the cookies that are being set by this module.
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year

    // Names for the cookies that are being set by this module.
    cookieNameIsConsentGiven: 'ncc_c',
    cookieNameCookiesEnabledIds: 'ncc_e',

    // Options to pass to nuxt's useCookie
    cookieOptions: {
      path: '/',
      sameSite: 'strict',
    },

    // Switch to toggle the "accept necessary" button.
    isAcceptNecessaryButtonEnabled: true,

    // Switch to toggle the button that opens the configuration modal.
    isControlButtonEnabled: true,

    // Switch to toggle the concatenation of target cookie ids to the cookie description.
    isCookieIdVisible: false,

    // Switch to toggle the inclusion of this module's css.
    // If css is set to false, you will still be able to access your color variables.
    isCssEnabled: true,

    // Switch to toggle the css variables ponyfill.
    isCssPonyfillEnabled: false,

    // Switch to toggle the separation of cookie name and description in the configuration modal by a dash.
    isDashInDescriptionEnabled: true,

    // Switch to toggle the blocking of iframes.
    // This can be used to prevent iframes from adding additional cookies.
    isIframeBlocked: false,

    // Switch to toggle the modal being shown right away, requiring a user's decision.
    isModalForced: false,

    // The locales to include.
    locales: ['en'],

    // Translations to override.
    localeTexts: {
      en: {
        bannerTitle: 'This site uses cookies to improve your experience.',
        bannerDescription: 'We use cookies to personalise content and to analyse our traffic. We also share information about your use of our site with our analytics partners. View our <a href="#">cookies page.</a>',
        accept: 'Accept all Cookies',
        decline: 'Decline Cookies',
        manageCookies: '',
        unsaved: 'You have unsaved settings1',
        close: 'Close1',
        save: 'Save1',
        necessary: 'Necessary cookies1',
        optional: 'Optional cookies1',
        functional: 'Functional cookies1',
        blockedIframe: '1To see this, please enable functional cookies',
        here: 'here1'

      }
    }

  },

  css: [
    //'@/assets/fonts/bootstrap-icons.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/aos.css',
    //'animate.css/animate.min.css',
    '@/assets/scss/main.scss',
    '@/assets/css/main.css',   
    '@/assets/css/media.css',
    //'@/assets/css/variables.css',
    '@/assets/css/variables-purple.css',
    '@/assets/css/responsive.css',
    'aos/dist/aos.css',
    '~/assets/css/global.css'
    // '@/assets/css/tailwind.css' 
    // Consider using a CSS preprocessor (like Sass) for better organization and maintainability
    // '@/node_modules/aos/src/sass/aos.scss' // Example of importing preprocessor file
  ],

  // compression: {
  //   algorithm: 'brotliCompress',
  //   threshold: 10240,
  //   deleteOriginalAssets: false
  // },
  // serverMiddleware: [
  //   { path: '/', handler: '~/server/middleware/compression.ts' }
  // ]
  // delayHydration: {
  //   // enables nuxt-delay-hydration in dev mode for testing
  //   debug: process.env.NODE_ENV === 'development',
  //   mode: 'init'
  // },
  // ... other Nuxt.js configuration options
  purgecss: {
    enabled: true, // Always enable purgecss
    safelist: ['canvas','mainGlobeWrapper','globeWrapper','#globeViz'], // Add my-class token to the safelist (e.g. .my-class)
  },

  compatibilityDate: '2024-08-19'
});