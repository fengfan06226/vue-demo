import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';

import VueRouter from 'vue-router';

import MintUI from 'mint-ui';

import 'mint-ui/lib/style.css';

Vue.use( VueResource );
Vue.use( VueRouter );
Vue.use( MintUI );

import { indexList, button, actionsheet, infinitescroll } from './components/index';

const routes = [
  { path: '', redirect: '/button' },
  { path: '/button', component: button },
  { path: '/indexlist', component: indexList },
  { path: '/actionsheet', component: actionsheet },
  { path: '/infinitescroll', component: infinitescroll }
];

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
