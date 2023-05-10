import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas, } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import './assets/vuesax.css';
import './assets/main.css';
import 'bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import './assets/js/bootstrap/bootstrap';
library.add(fas);
const app = createApp(App)
app.use(router)
.component('fa', FontAwesomeIcon)
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
