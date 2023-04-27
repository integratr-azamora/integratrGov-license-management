<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import '@fortawesome/fontawesome-free/css/all.css'

=======
import { createApp } from 'vue';
import App from './App.vue';
// import Vuesax from 'vuesax';
import router from './router';
import './assets/vuesax.css' //Vuesax styles
import './assets/main.css';
import 'material-icons/iconfont/material-icons.css';
>>>>>>> 42b905e4b00b13ceefaea2d98320c011e10e7060
const app = createApp(App)

app.use(router)

app.mount('#app')


Vue.use(Vuesax, {
    theme:{
        colors:{
          primary:'#5b3cc4',
          success:'rgb(23, 201, 100)',
          danger:'rgb(242, 19, 93)',
          warning:'rgb(255, 130, 0)',
          dark:'rgb(36, 33, 69)'
        }
      }
})
