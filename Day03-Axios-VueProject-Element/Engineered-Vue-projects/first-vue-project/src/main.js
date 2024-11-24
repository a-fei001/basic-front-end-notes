import Vue from 'vue'
/* 引入App.vue文件   .vue结尾的被称为组件文件 */
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  /*
  自己引入的插件功能 
  作用：（热部署）修改代码 无需手动加载页面 即可展示新页面
  */
  router,//== “ router:router, ”
  /* 
  用于告诉Vue如何渲染虚拟DOM树
  当Vue实例通过$mount('#app')方法挂载到页面的#app元素时，它会根据render函数的指导来渲染组件。
  */
  render: h => h(App)
}).$mount('#app')//和自己写的那个el:"app" 一个意思
