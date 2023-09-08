// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true, ssr: true },
    modules: ['nuxt-icon', '@pinia/nuxt', {
        autoImports: [
            'defineStore',
            ['defineStore', 'definePiniaStore'],
        ],
    }
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'RU'
            }
        }
    }
})

