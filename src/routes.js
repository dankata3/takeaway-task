import AppForm from './components/AppForm.vue';
import Person from './components/Person.vue';

export const routes = [
  { path: '/', component: AppForm },
  { path: '/person', component: Person }
];
