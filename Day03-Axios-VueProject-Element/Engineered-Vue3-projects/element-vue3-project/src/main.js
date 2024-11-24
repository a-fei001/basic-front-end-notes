/*
element-ui对应vue2
这个项目是vue3的 因此 需要引入element-plus(引入方法上官网)
npm install element-plus --save
*/



import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* 引入element相关 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

/* 使用element相关 */
app.use(ElementPlus) 

app.use(router)

app.mount('#app')
