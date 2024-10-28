import Vue from 'vue'
import VueRouter from 'vue-router'

import AppHome from '@/views/AppHome.vue'
import AppViews from '@/views/AppViews.vue'
import AppPublishArticle from '@/views/AppPublishArticle.vue'
import APPContact from '@/views/APPContact.vue'
import AppAbout from '@/views/AppAbout.vue'
import GoodBlog from '@/views/GoodBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/AppViews',
    name: 'AppViews',
    component: AppViews
  },
  {
    path: '/AppPublishArticle',
    name: 'AppPublishArticle',
    component: AppPublishArticle
  },
  {
    path: '/contact',
    name: 'APPContact',
    component: APPContact
  },
  {
    path: '/about',
    name: 'AppAbout',
    component: AppAbout
  },
  {
    path: '/blog',
    name: 'GoodBlog',
    component: GoodBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
