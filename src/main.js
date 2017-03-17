import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';
import navbar from './components/navbar';
import router from './router';


const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
  },
  autoRevert: true,
  location: 'top',
  inverse: false,
};

Vue.use(VueProgressBar, options);

/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container is-fluid">
        <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  components: {
    navbar,
  },
}).$mount('#app');
