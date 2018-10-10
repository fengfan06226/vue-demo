<template>
  <div>
    第二页 {{this.$store.state.count}}  --- {{this.$store.getters.computedState}}

    <ol>
      <li v-for="(item,index) of list" :key="index">
        {{item.title}}
      </li>
    </ol>
  </div>
</template>

<script>

import store from '../vuex/store.js';

export default {
  data () {
    return {
      list:[]
    }
  },
  store,
  methods:{
    getData(){
      var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.get(api)
      .then((res)=>{
        this.list = res.body.result;
        this.$store.commit("saveTransforValue",res.body.result);
      },(error)=>{
        console.log(error);
      })
    }
  },
  mounted(){
    var dataList = this.$store.state.list;
    if(dataList.length){
      this.list = dataList;
    }else{
      this.getData();
    }
  }
}
</script>

<style>

</style>
