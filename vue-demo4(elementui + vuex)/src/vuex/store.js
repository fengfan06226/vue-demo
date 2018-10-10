import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 存储数据
var state = {
    count:1,
    list:[]
}

// 存放方法
var mutations = {
    intCount(){
        state.count++;
    },
    saveTransforValue(state,payload){
        state.list = payload;
    }
}

// getter 方法
var getters = {
    computedState: (state) => {
        return state.count*2;
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters
})

export default store;
