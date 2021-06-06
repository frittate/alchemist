import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NoteDetail from '../views/NoteDetail.vue'
import NewNote from '../views/NewNote.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/note/:id',
    component: NoteDetail
  },
  {
    path: '/new',
    component: NewNote
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
