import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import home from './containers/Home';
import dashboard from './containers/dashboard';
import projects from './containers/projects';

Vue.use(VueAxios, axios);
Vue.use(Router);


// application routes
const routes = [
  { path: '/', component: home },
  { path: '/dashboard', component: dashboard },
  { path: '/projects', component: projects },
];
// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active',
});
