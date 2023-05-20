import './assets/main.css'
// 2. 引入组件样式
import 'vant/lib/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//引入vant组件 全局注册
import { Tabbar, TabbarItem,Tab, Tabs} from 'vant';


app.use(createPinia())
app.use(router)
app.use(Tabbar).use(TabbarItem).use(Tab).use(Tabs)

app.mount('#app')
