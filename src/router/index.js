import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import VueCookies from 'vue-cookies'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/Home',
    name: 'home',
    component: Home,
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.auth) && to.meta.auth) {
    let token = VueCookies.get('token');
    if(token) {
      next()
    } else {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  next();
});

export default router
