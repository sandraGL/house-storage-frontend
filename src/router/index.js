import Login from '@/views/Login.vue';
import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        "path": "/login",
        "name": "Login",
        component: Login
    },
    {
        "path": "/",
        "redirect": "/login"
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;