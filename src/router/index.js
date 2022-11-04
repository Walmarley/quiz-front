import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import index from '../views/index'
import login from '../views/login'
import editar from '../views/editar'
import criarUser from '../views/criarUser'
import criarQuestion from '../views/criarQuestion'
import listarQuestions from '../views/listarQuestions'
import quiz from '../views/quiz'
import homeAdmin from '../views/homeAdmin'
import homeUser from '../views/homeUser'
import desloga from '../views/desloga'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },

  // users

  {
    path:'/index',
    name:'index',
    component:index
  },

  {
    path:'/login',
    name:'login',
    component:login
  },

  {
    path:'/editar/:id',
    name:'editar',
    component:editar
  },

  {
    path:'/criarUser',
    name:'criarUser',
    component:criarUser
  },

  // Questoes

  {
    path:'/criarQuestion',
    name:'criarQuestion',
    component:criarQuestion
  },
  
  {
    path:'/listarQuestions',
    name:'listarQuestions',
    component:listarQuestions
  },

  {
    path:'/homeUser',
    name:'homeUser',
    component:homeUser
  },

  {
    path:'/homeAdmin',
    name:'homeAdmin',
    component:homeAdmin
  },

  {
    path:'/quiz',
    name:'quiz',
    component:quiz
  },

  {
    path:'/desloga',
    name:'desloga',
    component:desloga
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
