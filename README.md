# Nuxt3 minimal starter with Firebase Authentication integrated + PrimeVue

Authenticated server-side rendering with Nuxt 3 and Firebase 9

![Screenshot](docs/screenshot.png)

## Features
- [💚 Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc. Are you new in Nuxt3? We recommend to look at the [documentation](https://v3.nuxtjs.org/docs).

- 🔥 The `<script setup>` syntax

- 🚠 Firebase v9 for Firebase Authentication services

- 🚀 The PrimeVue for styled components

- 🚦 VeeValidate for input forms with i18n support

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🏎 Firebase cloud functions and deploy [TODO] 

- 🦾 Mainly TypeScript

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable Vetur if you have it).


## Setup
Make sure to install the dependencies

```bash
npm install
```

## Firebase setup
First of all, you need to create Firebase acount and SDK setup. [Firebase Official Docs](https://firebase.google.com/docs/auth/web/start?)
You need to create `.env` file with this content from Firebase project:
```bash
cp .env.example .env
```

Set [service account](https://firebase.google.com/docs/admin/setup#initialize-sdk) environment variable:
```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
```

## Development
Start the development server on http://localhost:3000

```bash
npm run dev
```

## Preview

Delete .output folder and run below commands

```bash
npm run build
npx nuxi preview
```

## Production

Build the application for production:

```bash
NITRO_PRESET=firebase npm run build
```

Using emulators, you can preview the result on locally
```bash
firebase emulators:start 
```

Deploy
```bash
firebase deploy
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## References
- [Nuxt3](https://v3.nuxtjs.org)
- [Firebase 9](https://firebase.google.com)
- [Primevue](https://www.primefaces.org/primevue/#/)
- [VeeValidate 4](https://vee-validate.logaretm.com/v4/)