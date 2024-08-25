import { createRouter, createWebHistory } from 'vue-router'
import Editor from '@/views/Editor.vue'
import Home from '@/views/Home.vue'
import AllTemplate from '@/views/AllTemplate.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
    },
    {
      path: '/editor',
      component: Editor,
      name: 'Editor',
    },
    {
      path: '/template/:id',
      component: AllTemplate,
      name: 'AllTemplate',
    },
  ],
})
