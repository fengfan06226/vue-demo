<template>
  <div id="app">
    <el-button type="primary">主要按钮</el-button>
    <i class="el-icon-loading"></i>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
