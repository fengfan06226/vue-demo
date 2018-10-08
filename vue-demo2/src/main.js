import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

import VueRouter from 'vue-router';

Vue.use( VueResource );
Vue.use( VueRouter )

import { pageA, pageB, content } from './components/router/index';

const routes = [
  { path: '', redirect: '/pageB' },
  { path: '/pageA', component: pageA },
  { path: '/pageB', component: pageB },
  // 之前会写的写法
  // { path: '/content/:id', component: content }
  // 新写法
  { path: '/content', component: content }
];

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
