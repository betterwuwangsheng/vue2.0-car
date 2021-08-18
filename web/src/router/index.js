import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由懒加载
const HomeUser = () => import('views/home/children/user/HomeUser')
const Home = () => import('views/home/Home')

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    // 子路由
    children: [
      {
        path: '/user',
        name: 'User',
        component: HomeUser,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
