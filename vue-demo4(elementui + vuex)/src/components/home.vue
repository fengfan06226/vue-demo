<template>
  <div>
    首页 {{this.$store.state.count}}
    
    <button @click="add()">增加</button>
  </div>
</template>

<script>

import store from '../vuex/store.js';

export default {
  data () {
    return {

    }
  },
  store,
  methods:{
      add(){
          this.$store.commit('intCount');
      }
  }
}
</script>

<style>

</style>
