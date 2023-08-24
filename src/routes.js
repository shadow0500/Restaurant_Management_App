import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import { createRouter,createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import AddRestro from './components/AddRestro.vue';
import UpdateRestro from './components/UpdateRestro.vue';
const routes = [
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'SignUp',
        path:'/signup',
        component:SignUp
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'AddRestro',
        path:'/add',
        component:AddRestro
    },
    {
        name:'UpdateRestro',
        path:'/update/:id',
        component:UpdateRestro
    },


];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;