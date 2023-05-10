import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/vuesax.css';
import './assets/main.css';
import 'bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


// import './assets/js/bootstrap/bootstrap';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App)

app.use(router)

.component('font-awesome-icon', FontAwesomeIcon)
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
