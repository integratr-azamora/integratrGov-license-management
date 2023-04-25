import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})
