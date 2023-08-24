import { createRouter, createWebHistory } from 'vue-router';

import TheHome from './components/pages/TheHome.vue'
import ItemDetails from './components/pages/ItemDetails.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: TheHome},
        { path: '/itemdetails/:id', component: ItemDetails}
    ]
})

export default router;