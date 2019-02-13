import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/tabbar/Home.vue"
import Friends from "./components/tabbar/Friends.vue"
import Diantai from "./components/tabbar/Diantai.vue"
import My from "./components/tabbar/My.vue"
import Bofang from "./components/tabbar/Bofang.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/Home"},
    {path:'/Home',component:Home},
    {path:'/Friends',component:Friends},
    {path:'/Diantai',component:Diantai},
    {path:'/My',component:My},
    {path:'/Bofang',component:Bofang},
  ]
})
