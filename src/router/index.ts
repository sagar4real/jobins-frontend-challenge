import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const routes = [
    {
        path: "/app",
        component: AppLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: () => import('@/Views/Dashboard.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
