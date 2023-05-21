import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: () => import('@/views/tabbar-view.vue'),
            redirect:'/home',
            meta: {routeDeep:0},
            children:[
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/HomeView/homeView.vue')
                },
                {
                    path: '/sorts',
                    name: 'sorts',
                    
                    component: () => import('@/views/SortsView/sortsView.vue')
                },
                {
                    path: '/shopCar',
                    name: 'shopCar',
                
                    component: () => import('@/views/ShopCarView/shopCarView.vue')
                },
                {
                    path: '/my',
                    name: 'my',
                  
                    component: () => import('@/views/MyView/myView.vue')
                }
            ]
        },
        {
            path:"/searchView",
            name: 'searchView',
            meta: {routeDeep:1},
            component: () => import('@/views/HomeView/searchView.vue')
        },
        {
            path:"/mySon",
            name: 'mySon',
            meta: {routeDeep:2},
            component: () => import('@/views/MyView/mySonView.vue')
        }
        
    ]
})


router.afterEach((to, from) => {

console.log(to,from);

    //动态设置 路由过渡动画方式
    const toDepth = to.meta.routeDeep
    const fromDepth = from.meta.routeDeep
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  })

export default router
