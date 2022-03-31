import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Nuxt3 + Firebase Authentication Demo",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt3 + Firebase Authentication Demo"
      }
    ],
    link: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato&display=swap" }
    ]
  },
  css: [
    "primevue/resources/themes/lara-light-teal/theme.css",
    "primevue/resources/primevue.css",
    "primeflex/primeflex.css",
    "primeicons/primeicons.css"
  ],
  publicRuntimeConfig: {
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
  },
  typescript: {
    shim: false,
  },
  build: {
    // Add exception
    transpile: [
      "vee-validate/dist/rules"
    ]
  }
})
