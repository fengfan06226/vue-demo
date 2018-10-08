<template>
  <div id="app">
    <v-header></v-header>
    {{msg}}---{{obj.name}}
    <div v-for = "(item,index) in list" :key= "index" :class= "{'red': index == 0}">
      {{item}}
    </div>
    <div :style= "{'width':boxWidth + 'px', 'background': boxColor}">sdf</div>
    <div v-for = "(item,index) in listObj" :key= "index+'b'">
      {{item.title}}
    </div>
    <div :title = "obj.name">
      aaa
    </div>
    <img :src= "url"/>
    <div v-html= "h"></div>
    <div v-text= "h"></div>
    <br/>

    <div>{{msg}}</div>
    <input type="text" v-model= "msg"/>
    <button @click= "getMsg()">获取数据</button>
    <button @click= "setMsg()">设置数据</button>

    <div ref="box">box</div>
    <button @click= "setStyleOfBox()">改变box样式</button>

    <hr/>
    <div>
      <button @click= "addData()">增加数据</button>
      <button data-aid="123" @click= "getDom($event)">获取dom</button>
      <ul>
        <li v-for= "(item, index) in listObj" :key= "index">
          <input type="checkbox"/> {{index}} -- {{item.title}}
        </li>
      </ul>
    </div>

    <hr/>

    <div>
      <input type="text" v-model= "todo" @keydown= "addTodoList($event)"/>
      <hr/>
      <div>
        <ul>
          <h2>未审核</h2>
          <li v-for= "(item, index) in todoList" :key= "index" v-if= "!item.checked">
            <input type="checkbox" v-model= "item.checked" @change= "saveStatus(index)">{{item.title}}
            <button @click= "deleteTodoList(index)">-删除</button>
          </li>
        </ul>
        <ul>
          <h2>已审核</h2>
          <li v-for= "(item, index) in todoList" :key= "index" v-if= "item.checked">
            <input type="checkbox" v-model= "item.checked" @change= "saveStatus(index)">{{item.title}}
            <button @click= "deleteTodoList(index)">-删除</button>
          </li>
        </ul>
      </div>
    </div>

    <hr/>

    <!-- 请求数据 -->
    <div>
      <button @click ="getDataByVueResource()">获取数据</button>
    </div>


    <hr/>

    <!-- 路由 -->
    <router-link to="/pageA">pageA</router-link>
    <router-link to="/pageB">pageB</router-link>


    <router-view></router-view>
  </div>
</template>

<script>

import storage from './model/storage.js';
import Header from './components/header/Header';

import Axios  from 'axios';

export default {

  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: {
        name: "123"
      },
      url: 'https://www.itying.com/themes/itying/images/logo.gif',
      list: [1,2,3,4,5,6],
      listObj: [
        {
          title:'123'
        },{
          title:'456'
        }
      ],
      h:'<h1>ssss</h1>',
      boxWidth:500,
      boxColor:'red',
      todo:'',
      todoList:[]
    }
  },

  methods:{
    getMsg(){
      alert(this.msg);
    },
    setMsg(){
      this.msg = 'aaa'
    },
    setStyleOfBox(){
      this.$refs.box.style.color = "red"
    },
    addData(){
      this.listObj.push({title:'aaa'});
    },
    getDom(e){
      console.log(e.srcElement.dataset.aid);
    },
    addTodoList(e){
      if(e.keyCode == 13){
        this.todoList.push({
          title:this.todo,
          checked:false
        });
        this.todo = '';
      }
      storage.set('list',this.todoList);
    },
    deleteTodoList(num){
      this.todoList.splice(num,1);
      storage.set('list',this.todoList);
    },
    saveStatus(index){
      storage.set('list',this.todoList);
    },
    getDataByVueResource(){
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      // vue-resource
      // this.$http.get(api).then(response => {
      //   console.log(response);
      // }, response => {
      //   console.log(response);
      // });
      // axios
      Axios.get(api).then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },

  mounted() {
    var initData = storage.get('list');
    this.todoList = initData ? initData : [];
  },

  components:{
    'v-header':Header
  }
}
</script>

<style lang="scss">
  .red{
    color: red;
  }
</style>
