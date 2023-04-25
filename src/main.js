import { createApp } from 'vue';
import App from './App.vue';
// import Vuesax from 'vuesax';
import router from './router';
import './assets/vuesax.css' //Vuesax styles
import './assets/main.css';
import 'material-icons/iconfont/material-icons.css';
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
