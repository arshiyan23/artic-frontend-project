import viteCompression from 'vite-plugin-compression'

export default defineNuxtConfig({
  ssr: false,

  vite: {
    plugins: [
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        filter: /\.(js|mjs|json|css|html)$/i
      })
    ]
  },

  imports: {
    autoImport: true
   },

   runtimeConfig: {
    public: {
      API_BASE_URL: 'https://artic-apis.ddev.site',
      IMG_BASE_URL: 'https://artic-apis.ddev.site',
      FRONTEND_BASE_URL: 'http://localhost:3001',
      API_AUTH_KEY: '',
      gtagId: 'G-TTNXS1ZH7X'
    }
  },

  nitro: {
    preset: "node-server",
    compressPublicAssets: {
      brotli: true
    }
  },


  app: {
    head: {
      title: 'ARTIC',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=2.0, user-scalable=1' }
      ],
      script: [
        { src: '/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose' },
        { src: "/js/lazysizes.min.js", tagPosition: 'bodyClose' },
        { src: '/js/aos.js', tagPosition: 'bodyClose' }
      ]
    }
  },

  modules: [
    'nuxt-aos',
    '@nuxt/ui',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxt/image',
    'nuxt-purgecss',
    '@dargmuesli/nuxt-cookie-control'
  ],

  plugins: [
    { src: '~/plugins/aos.client.js', mode: 'client' },
    { src: '~/plugins/detectSafari.js' }
  ],

  cookieControl: {
    barPosition: 'bottom-right',
    closeModalOnClickOutside: true,
    colors: {
      barBackground: '#000',
      barButtonBackground: '#fff',
      barButtonColor: '#000',
      barTextColor: '#fff'
    },
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365,
    cookieNameIsConsentGiven: 'ncc_c',
    cookieNameCookiesEnabledIds: 'ncc_e',
    cookieOptions: { path: '/', sameSite: 'strict' },
    isAcceptNecessaryButtonEnabled: true,
    isControlButtonEnabled: true,
    locales: ['en']
  },

  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/aos.css',
    '@/assets/scss/main.scss',
    '@/assets/css/main.css',
    '@/assets/css/media.css',
    '@/assets/css/variables-purple.css',
    '@/assets/css/responsive.css',
    'aos/dist/aos.css',
    '~/assets/css/global.css'
  ],

  purgecss: {
    enabled: true,
    safelist: ['canvas', 'mainGlobeWrapper', 'globeWrapper', '#globeViz']
  },

  compatibilityDate: '2024-08-19'
})