import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/page-editor'
  },
  {
    path: '/page-editor',
    name: 'page-editor',
    component: () => import('@/views/page-editor')
  },
  {
    path: '/template-editor',
    name: 'template-editor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/template-editor')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
