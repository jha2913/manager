import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'password',
    component: () => import(/* webpackChunkName: "about" */ '../views/password.vue')
  },
  {
    path: '/manager',
    name: 'manager',
    component: () => import(/* webpackChunkName: "about" */ '../views/manager.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/adoption',
    name: 'adoption',
    component: () => import(/* webpackChunkName: "about" */ '../views/adoption.vue')
  },
  {
    path: '/lost',
    name: 'lost',
    component: () => import(/* webpackChunkName: "about" */ '../views/lost.vue')
  },
  {
    path: '/found',
    name: 'found',
    component: () => import(/* webpackChunkName: "about" */ '../views/found.vue')
  },
  {
    path: '/password',
    name: 'password',
    component: () => import(/* webpackChunkName: "about" */ '../views/password.vue')
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
