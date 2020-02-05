import Vue from 'vue'
import Router from 'vue-router'

// 引入路由
// import login from '@/components/login'
// import index from '@/components/index'
 import userlist from '@/components/userlist'
 import adduser from '@/components/adduser'
 import deluser from '@/components/deluser'
 import home from '@/components/home'

// 企业项目常用异步组件加载
const login = ()=> import('@/components/login');
const index = ()=> import('@/components/index');
// const userlist = ()=> import('@/components/serlist');
// const adduser = ()=> import('@/components/adduser');
// 注册路由
Vue.use(Router)

// 导出路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
          path:'/home',
          name:'home',
          component:home
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: userlist
        },
        {
          path: '/adduser',
          name: 'adduser',
          component: adduser
        },
        {
          path: '/deluser',
          name: 'deluser',
          component: deluser
        }
      ]
    }
  ]
})
