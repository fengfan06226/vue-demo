<template>
  <div id="app">
    <hello-world number="22" @receive="alertMsg">
      <!-- <p>123</p> -->
      <p slot="header">头部</p>
    </hello-world>
    <!-- <p :is="isRender"></p> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: { HelloWorld },
  data () {
    return {
      isRender: 'hello-world'
    }
  },
  methods: {
    alertMsg (msg) {
      alert(msg)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
