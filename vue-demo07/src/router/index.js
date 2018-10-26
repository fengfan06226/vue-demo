import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/template/a'
import B from '@/components/template/b'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect: '/helloworld' },
    { path: '/helloworld', name: 'HelloWorld', component: HelloWorld },
    { path: '/a', name: 'pageA', component: A },
    { path: '/b', name: 'pageB', component: B }
  ]
})
