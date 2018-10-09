<template>
  <div id="app">
    <mt-button type="default" @click="jump('button')">button</mt-button>
    <mt-button type="primary" @click="jump('indexlist')">indexlist</mt-button>
    <mt-button type="danger" @click="jump('actionsheet')">actionsheet</mt-button>
    <mt-button type="danger" @click="jump('infinitescroll')">infinitescroll</mt-button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods:{
    jump(label){
      location.href = "/#/"+label;
    }
  }
}
</script>

<style>

</style>
