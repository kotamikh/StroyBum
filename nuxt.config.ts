// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true, ssr: true },
  modules: ['nuxt-icon', 'cookie-universal-nuxt'],
})

// module.exports = {
//   head: {
//     htmlAttrs: {
//       lang: 'ru'
//     }
//   }
// }