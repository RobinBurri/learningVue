import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import NotFound from './pages/NotFound.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import CoachesList from './pages/coaches/CoachesList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:coachId',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
})

export default router
