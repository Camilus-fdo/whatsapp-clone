import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLogin from '../pages/auth/UserLogin.vue'
import MainPage from '../pages/MainPage.vue'
import utils from '@/utils'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/main-page',
    name: 'main',
    component: MainPage,
    meta: {
      authRequired: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = utils.isLoggedIn()

  if (to.meta.authRequired && loggedIn) {
    return next()
  } else if (to.meta.authRequired && !loggedIn) {
    return next({ name: 'login' })
  } else if (to.meta.authRedirect && loggedIn) {
    return next({ name: 'main' })
  }

  return next()
})

export default router
