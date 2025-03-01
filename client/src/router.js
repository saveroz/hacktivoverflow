import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import questionDetail from './views/questionDetail.vue'
import userQuestion from './views/userQuestion.vue'
import userAnswer from './views/userAnswer'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/question/:id',
      name: 'question',
      component: questionDetail
    },
    { path: '/user',
      name: 'user',
      component: userQuestion

    },
    {
      path: '/answer',
      name: 'answer',
      component: userAnswer
    }
  ]
})
