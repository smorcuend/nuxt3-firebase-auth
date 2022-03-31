import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import RadioButton from 'primevue/radiobutton'
import Menubar from 'primevue/menubar'
import Menu from 'primevue/menu'
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import PanelMenu from 'primevue/panelmenu'
import ScrollPanel from 'primevue/scrollpanel'
import Card from 'primevue/card'
import Fieldset from 'primevue/fieldset'
import SpeedDial from 'primevue/speeddial';
import Dialog from 'primevue/dialog';
import Breadcrumb from 'primevue/breadcrumb';
import Password from 'primevue/password';
import Toolbar from 'primevue/toolbar'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'
import Textarea from 'primevue/textarea'
import FileUpload from 'primevue/fileupload'
import Badge from 'primevue/badge'
import Timeline from 'primevue/timeline'
import Avatar from 'primevue/avatar';
import ProgressSpinner from 'primevue/progressspinner';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.use(ToastService)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('RadioButton', RadioButton)
  nuxtApp.vueApp.component('Menubar', Menubar)
  nuxtApp.vueApp.component('Menu', Menu)
  nuxtApp.vueApp.component('Panel', Panel)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('Toast', Toast)
  nuxtApp.vueApp.component('TabView', TabView)
  nuxtApp.vueApp.component('TabPanel', TabPanel)
  nuxtApp.vueApp.component('Splitter', Splitter)
  nuxtApp.vueApp.component('SplitterPanel', SplitterPanel)
  nuxtApp.vueApp.component('DataTable', DataTable)
  nuxtApp.vueApp.component('Column', Column)
  nuxtApp.vueApp.component('PanelMenu', PanelMenu)
  nuxtApp.vueApp.component('ScrollPanel', ScrollPanel)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Fieldset', Fieldset)
  nuxtApp.vueApp.component('SpeedDial', SpeedDial)
  nuxtApp.vueApp.component('Dialog', Dialog)
  nuxtApp.vueApp.component('Breadcrumb', Breadcrumb)
  nuxtApp.vueApp.component('Password', Password)
  nuxtApp.vueApp.component('Toolbar', Toolbar)
  nuxtApp.vueApp.component('InputNumber', InputNumber)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
  nuxtApp.vueApp.component('Textarea', Textarea)
  nuxtApp.vueApp.component('FileUpload', FileUpload)
  nuxtApp.vueApp.component('Badge', Badge)
  nuxtApp.vueApp.component('Timeline', Timeline)
  nuxtApp.vueApp.component('Avatar', Avatar)
  nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner)

  //other components that you need
})
