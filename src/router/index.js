import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import CongestionView from "@/views/CongestionView"
import MenuView from "@/views/MenuView"
import BookView from "@/views/BookView"
import BookTime from "@/views/BookTime"
import BookSeat from "@/views/BookSeat"
import BookCheck from "@/views/BookCheck"


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
  {
    path: "/book/booktime/bookseat/bookcheck",
    name: "BookCheck",
    component: BookCheck
  },
  {
    path: "/congestion",
    name: "CongestionView",
    component: CongestionView
  },
]

const routerSettings = {
  routes
}

const router = new VueRouter(routerSettings)

export default router
