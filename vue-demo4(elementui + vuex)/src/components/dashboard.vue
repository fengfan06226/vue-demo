<template>
  <div>
    主页
    <el-button type="danger" @click="jump('home')">跳转home</el-button>
    <el-button type="success" @click="jump('second')">跳转second</el-button>
  </div>
</template>

<script>

export default {
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
