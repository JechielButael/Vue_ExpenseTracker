import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routers from './routers'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons'; // Correct package

library.add(faFacebook, faInstagram, faXTwitter, faYoutube, faLinkedin, faCalendar, faComment);

const app = createApp(App);

app.use(routers);
app.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-center',
});
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
