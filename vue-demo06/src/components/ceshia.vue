<template>
    <div class="a">
        aaa  {{this.$store.state.count}}
        <button @click="add">增加</button>
        <button @click="minus">减少</button>
    </div>
</template>

<script>
  import store from '../store.js'

  export default {
    data () {
      return {
        num: 5
      }
    },
    methods: {
      add () {
        this.$store.dispatch('addA', this.num)
      },
      minus () {
        this.$store.dispatch('minusA', this.num)
      }
    }
  }
</script>
