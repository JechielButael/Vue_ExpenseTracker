import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import Tracker from '../components/Tracker.vue'
import Home from '../components/Home.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import TermsOfUse from '../components/TermsOfUse.vue';



const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/signin', name: 'SignIn', component: SignIn },
    { path: '/signup', name: 'Signup', component: SignUp },
    { path: '/tracker/:id/:username/:gender', name: 'Tracker', component: Tracker, props: true, },
    { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
    { path: '/terms-of-use', name: 'TermsOfUse', component: TermsOfUse },



];

const routers = createRouter({
    history: createWebHistory(),
    routes,
});

export default routers;
