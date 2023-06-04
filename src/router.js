import { createRouter, createWebHistory } from "vue-router";
import MyMain from './pages/MyMain.vue';
import AppContact from './pages/AppContact.vue';
import SingleProject from './pages/SingleProject.vue'
const router = createRouter(
    {

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'home',
            component: MyMain
        },
        {
            path: '/contatti',
            name:'contact',
            component: AppContact
        },
        {
            path: '/blog/:id',
            name:'singleproject',
            component: SingleProject
        }
    ]
});
export default router;