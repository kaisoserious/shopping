import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './router'
//完整引入element-ui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 按需引入
// import {Button,Row} from 'element-ui';
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

// Vue.component('el-button', Button);
// Vue.component('el-Row', Row);
// Vue.component(Select.name, Select);
//或写为
//  Vue.use(Button)
//  Vue.use(Row)
//  Vue.use(DatePicker)
 
new Vue({
  render: h => h(App),
  router:Router
}).$mount('#app')
