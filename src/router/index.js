import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catetory',
    name: 'catetory',
    component: () => import(/* webpackChunkName: "about" */ '../views/CatetoryView.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingView.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyView.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: ()=> import(/* webpackChunkName: "about" */ '../views/GoodsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
