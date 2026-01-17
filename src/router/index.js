import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import BlogPost from '../views/BlogPost.vue'
import Blogs from '../views/Blogs.vue'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router