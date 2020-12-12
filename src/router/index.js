import Vue from 'vue'
import VueRouter from 'vue-router'
import Activities from '../views/Activities'
import About from '../views/About'
import Join from '../views/Join'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'activities',
      component: Activities
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    }
  ]
})
