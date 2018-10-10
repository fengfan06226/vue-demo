import Vue from 'vue'
import App from './App.vue'

// 全部引入的写法
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);

// 按需引入的写法
import { Button } from 'element-ui';
Vue.use(Button);

import {home, dashboard, second} from './components/index';

const routes = [
  { path: '', redirect: '/dashboard' },
  { path: '/dashboard', component: dashboard },
  { path: '/home', component: home },
  { path: '/second', component: second }
];

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
