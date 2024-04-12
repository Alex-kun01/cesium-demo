import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Map from '../views/map/Index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            redirect: '/map',
            children: [
                {
                    path: 'map',
                    name: 'Map',
                    component: Map,
                }
            ]
        },
    ],
})

export default router;
