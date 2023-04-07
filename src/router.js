import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import InterventionsListing from './views/Interventions/Interventions-listing.vue';
import InterventionDetail from './views/Interventions/Intervention-detail.vue';
import IntervenersListing from './views/Interveners/Interveners-listing.vue';
import IntervenerInterventions from './views/Interventions/Interventions-intervener.vue';
import Search from './views/search.vue';

const routes = [
  { 
    path: '/',
    redirect: { name: 'Dashboard' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/interventions',
    name: 'Interventions',
    component: InterventionsListing,
  },
  {
    path: '/intervention/detail/:id',
    name: 'InterventionDetail',
    component: InterventionDetail,
  },
  {
    path: '/interveners',
    name: 'Interveners',
    component: IntervenersListing,
  },
  {
    path: '/intervener/:name/interventions',
    name: 'IntervenerInterventions',
    component: IntervenerInterventions,
  },
  {
    path: '/search/:q/:by',
    name: 'Search',
    component: Search,
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active',
});

export default router;