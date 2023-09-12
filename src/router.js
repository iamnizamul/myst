import { createRouter, createWebHistory } from 'vue-router';

import TheHome from './components/pages/TheHome.vue';
import ItemDetails from './components/pages/ItemDetails.vue';
import MyCart from './components/pages/MyCart.vue';
import NotFound from './components/pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: TheHome },
        { path: '/itemdetails/:id', component: ItemDetails },
        { path: '/mycart', component: MyCart },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

export default router;