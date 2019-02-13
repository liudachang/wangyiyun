import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// import './lib/mui/css/mui.min.css'
// import './lib/mui/js/mui.min.js'   mui的js 有问题不能引
//  Vue.use("hanbaobao")
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/mui.css' 
import './lib/mui/css/icons-extra.css'


//1:引入mint-ui组件库
//1:引入指定组件 Header
//Navbar 组件
import { Header,Navbar,Swipe,SwipeItem,TabItem } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入第三方模块
//引入axios库 不加{} 库里的全部
import axios from "axios"
//修改配置信息 跨域保存session值 登陆的信息保存在session里
axios.defaults.withCredentials=true;// 必加
//注册组件
Vue.prototype.axios = axios

//右划菜单
//  import {offcanvas-drag-right} from "mui-master"
//  vue.component(offcanvas-drag-right.name,offcanvas-drag-right)

// 全局组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
