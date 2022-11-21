import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Card from 'primevue/card'
import Fieldset from 'primevue/fieldset'
import Password from 'primevue/password';
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Fieldset', Fieldset)
  nuxtApp.vueApp.component('Password', Password)
  nuxtApp.vueApp.component('InputNumber', InputNumber)
  nuxtApp.vueApp.component('Textarea', Textarea)
  //other components that you need

  nuxtApp.provide('toast', nuxtApp.vueApp.config.globalProperties.$toast)
})
