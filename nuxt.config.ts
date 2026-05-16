import viteCompression from 'vite-plugin-compression'

const drupalBaseUrl = process.env.NUXT_DRUPAL_BASE_URL
  || process.env.DRUPAL_BASE_URL
  || 'https://8cf3-2401-4900-1f38-65d-45a4-63a7-363a-147a.ngrok-free.app'

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,

  devServer: {
    port: 3001
  },

  vite: {
    server: {
      strictPort: true,
      hmr: {
        host: 'localhost',
        protocol: 'ws',
        clientPort: 3001
      }
    },
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
    drupalBaseUrl,
    public: {
      API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL || '/drupal',
      IMG_BASE_URL: process.env.NUXT_PUBLIC_IMG_BASE_URL || '/drupal',
      FRONTEND_BASE_URL: process.env.NUXT_PUBLIC_FRONTEND_BASE_URL || 'http://localhost:3001/',
      API_AUTH_KEY: process.env.NUXT_PUBLIC_API_AUTH_KEY || 'YXBpYWRtaW5HM2g3UjpQIzJzNkxqQDlFIXE=',
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || 'G-TTNXS1ZH7X'
    }
  },

  nitro: {
    compatibilityDate: '2026-05-07',
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

  image: {
    provider: 'none'
  },

  plugins: [
    { src: '~/plugins/aos.client.js', mode: 'client' },
    { src: '~/plugins/detectSafari.js' }
  ],

  ...({
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
    }
  } as any),

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
    enabled: process.env.NODE_ENV === 'production',
    safelist: ['canvas', 'mainGlobeWrapper', 'globeWrapper', '#globeViz']
  },

  compatibilityDate: '2024-08-19'
})
