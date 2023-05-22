import './assets/main.css'
// 2. 引入组件样式
import 'vant/lib/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


//引入vant组件 全局注册
import {Tabbar, TabbarItem,Search, NavBar,Swipe,
     SwipeItem,Sticky,NoticeBar,Tab,
     Tabs,BackTop,PullRefresh,List,
     Image as VanImage, Lazyload, Sidebar, SidebarItem} from 'vant';


app.use(createPinia())
app.use(router)
app.use(Tabbar).use(TabbarItem).use(Search)
   .use(NavBar).use(Swipe).use(SwipeItem)
   .use(Sticky).use(NoticeBar).use(Tab).use(Tabs)
   .use(BackTop).use(PullRefresh).use(List).use(VanImage)
   .use(Lazyload).use(Sidebar).use(SidebarItem)



app.mount('#app')
