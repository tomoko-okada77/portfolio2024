// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/scss/_mixin.scss" as *;'
  //       }
  //     }
  //   }
  // },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components', // サブフォルダのコンポーネントのオートインポートを可能に
      pathPrefix: false,
    },
  ],
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  experimental: {
    viewTransition: true
  },
})
