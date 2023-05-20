import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: () => import('@/views/tabbar-view.vue'),
            redirect:'/home',
            children:[
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/HomeView/homeView.vue')
                },
                {
                    path: '/sorts',
                    name: 'sorts',
                    meta: {},
                    component: () => import('@/views/SortsView/sortsView.vue')
                },
                {
                    path: '/shopCar',
                    name: 'shopCar',
                    meta: {},
                    component: () => import('@/views/ShopCarView/shopCarView.vue')
                },
                {
                    path: '/my',
                    name: 'my',
                    meta: {},
                    component: () => import('@/views/MyView/myView.vue')
                }
            ]
        },
        {
            path:"/mySon",
            name: 'mySon',
            component: () => import('@/views/MyView/mySonView.vue')
        }
        
    ]
})

export default router
