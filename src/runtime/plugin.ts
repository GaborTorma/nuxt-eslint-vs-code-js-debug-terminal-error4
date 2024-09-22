import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
  name: 'nuxt-eslint-vs-code-js-debug-terminal-error4-plugin',
  // eslint-disable-next-line unused-imports/no-unused-vars
  setup: (nuxtApp) => {
    console.log('nuxt-eslint-vs-code-js-debug-terminal-error4-plugin setup')
  },
  hooks: {
    'app:created'() {
      console.log('nuxt-eslint-vs-code-js-debug-terminal-error4-plugin app:created')
    },
  },
})
