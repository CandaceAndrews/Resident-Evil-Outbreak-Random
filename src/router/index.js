import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
// import File1Page from '../views/File1Page.vue';
// import File2Page from '../views/File2Page.vue';


const router = createRouter ({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        // { path: '/file1', component: File1Page},
        // {path: '/file2' component: File2Page},
    ],
});

export default router;