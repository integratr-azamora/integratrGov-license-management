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

