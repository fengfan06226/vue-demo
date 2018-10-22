import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  count: 0
}

var mutations = {
  // 如果想直接调 mutations 的方法 直接在组件中用 this.$store.commit(方法名，变量)即可
  add (state, addNum) {
    state.count += addNum
  },
  minus (state, minusNum) {
    state.count -= minusNum
  }
}

var actions = {
  // context  就是 store
  // 如果想调用 actions 的方法异步改变 state 值，在组件中要 this.$store.dispatch(方法名，变量)即可
  addA (context, addNum) {
    context.commit('add', addNum)
  },
  minusA (context, minusNum) {
    context.commit('minus', minusNum)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
