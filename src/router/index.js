import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import MenuView from "@/views/MenuView"
import BookView from "@/views/BookView"
import BookTime from "@/views/BookTime"
import BookSeat from "@/views/BookSeat"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'MenuView',
    component: MenuView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "home" */ '@/views/AboutView.vue')
  },
  {
    path: "/book",
    name: "BookView",
    component: BookView
  },
  {
    path: "/book/booktime",
    name: "BookTime",
    component: BookTime
  },
  {
    path: "/book/booktime/bookseat",
    name: "BookSeat",
    component: BookSeat
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
