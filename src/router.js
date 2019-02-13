import Vue from 'vue';
import Router from 'vue-router';
import UserPage from './components/UserPage.vue';
import Users from './components/Users.vue';
import AppForm from './components/AppForm.vue';

Vue.use(Router);

export const routes = [
  { path: '/', component: AppForm }, // not working
  { path: '/users/:id', component: UserPage }, // not working
  { path: '*', redirect: '/' }
];

export const router = new Router({
  routes,
  mode: 'history'
});

export default {};
