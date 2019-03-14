import Vue from 'vue'
import Router from 'vue-router'

import About from '~/pages/about.vue'
import BlogPosts from '~/pages/blog-posts/index.vue'
import BlogPost from '~/pages/blog-posts/_slug'
import Contact from '~/pages/contact/index.vue'
import ContactSuccess from '~/pages/contact/success.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      return savedPosition ? savedPosition : { x: 0, y: 0 }
    },
    routes: [
      {
        name: 'homepage',
        path: '/',
        redirect: '/blog'
      },
      {
        name: 'blogPosts',
        path: '/blog',
        component: BlogPosts
      },
      {
        name: 'blogPost',
        path: '/blog/:slug',
        component: BlogPost
      },
      {
        name: 'about',
        path: '/about',
        component: About
      },
      {
        name: 'contact',
        path: '/contact',
        component: Contact
      },
      {
        name: 'contact-success',
        path: '/contact-message-sent',
        component: ContactSuccess
      }
    ]
  })
}
