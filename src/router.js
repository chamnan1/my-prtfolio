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
  { path: '/projects',
    component: projects,
    meta: {
      progress: {
        func: [
          { call: 'color', modifier: 'temp', argument: '#ffb000' },
          { call: 'fail', modifier: 'temp', argument: '#6e0000' },
          { call: 'location', modifier: 'temp', argument: 'top' },
          { call: 'transition', modifier: 'temp', argument: { speed: '1.5s', opacity: '0.6s' } },
        ],
      },
    } },
];
// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active',
});
