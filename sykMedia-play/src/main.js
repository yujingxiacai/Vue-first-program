import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/js/rem.js';
import VueTouch from 'vue-touch';
// var VueTouch = require('vue-touch');

Vue.use(VueTouch, {name: 'v-touch'});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
