import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

import VueRouter from 'vue-router';

import MintUI from 'mint-ui';

import 'mint-ui/lib/style.css';

Vue.use( VueResource );
Vue.use( VueRouter );
Vue.use( MintUI );

import { pageA, pageB, content, user, useradd, userlist } from './components/router/index';

const routes = [
  { path: '', redirect: '/pageB' },
  { path: '/pageA', component: pageA, name:'hhh' },
  { path: '/pageB', component: pageB },

  // 之前会写的写法
  { path: '/content/:id', component: content, name:'aaa' },

  // 新写法
  // { path: '/content', component: content }

  { path: '/user', component: user, children:[
    {path: 'add', component: useradd },
    {path: 'list', component: userlist }
  ]}
];

const router = new VueRouter({
  // 如果 mode 改为 history 的话，apache nginx 等代理配置路由的时候也要一并修改
  // mode:"history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
