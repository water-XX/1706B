import Vue from 'vue'
import VueRouter from 'vue-router'

//配置一级路由
import Main from '@/views/main.vue'
import Detail from '@/views/detail.vue'


//配置二级路由
import Home from '@/views/two/home.vue'
import Edu from '@/views/two/edu.vue'
import Idea from '@/views/two/idea.vue'
import Message from '@/views/two/message.vue'
import My from '@/views/two/my.vue'

//配置三级路由
import Type from '@/views/two/three/type.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/main/home/attenion'
  },
  {
    path:'/detail/:id?',
    component:Detail
  },
  {
    path:'/main',
    component:Main,
    children:[
      {
        path:'/main/home',
        component:Home,
        children:[
          {
            path:'/main/home/:type',
            component:Type
          }
        ]
      },
      {
        path:'/main/edu',
        component:Edu
      },
      {
        path:'/main/idea',
        component:Idea
      },
      {
        path:'/main/message',
        component:Message
      },
      {
        path:'/main/my',
        component:My
      }
    ] 
  }

  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
