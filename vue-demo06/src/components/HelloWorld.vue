<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    {{ number }}
    <button @click="transValueToParent">点击一下</button>
    <!-- 插槽，显示父组件中该子组件之间出现的值，可在插槽中设置默认值 -->
    <slot name="header">aaa</slot>

    <slot name="footer">bbb</slot>

    <hr/>
    <transition name="fade">
      <p v-show="judge">显示</p>
    </transition>
    <button @click="judge=!judge">转换</button>

    <hr/>

    <transition name="change-status" mode="out-in">
      <p :is="switchRender"></p>
    </transition>
    <button @click="switchComponents">换组件</button>

    <hr/>

    <div class="jsAnimate">
      <transition @before-enter="beforeEnter"
                  @enter="enter"
                  @leave="leave"
                  :css="false">
        <p class="animate-p" v-show="show">显示</p>
      </transition>
      <button @click="show = !show">toggle</button>
    </div>

    <hr/>
    <span v-color="'red'">kkk</span>
    <input type="text" v-focus/>
  </div>
</template>

<script>
import ceshia from './ceshia'
import ceshib from './ceshib'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      judge: true,
      switchRender: 'ceshia',
      show: true
    }
  },
  components: {
    ceshia, ceshib
  },
  directives: {
    color (el, binding) {
      el.style.color = binding.value
    },
    focus: {
      inserted (el, binding) {
        el.focus()
      }
    }
  },
  methods: {
    transValueToParent () {
      this.$emit('receive', this.msg)
    },
    changeStatus () {
      this.judge = !this.judge
    },
    switchComponents () {
      if (this.switchRender === 'ceshia') {
        this.switchRender = 'ceshib'
      } else {
        this.switchRender = 'ceshia'
      }
    },

    beforeEnter: function (el) {
      $(el).css({
        left: '-500px',
        opacity: 0
      })
    },
    enter (el, done) {
      $(el).animate({
        left: 0,
        opacity:1
      }, {
        duration: 1500,
        complete: done
      })
    },
    leave (el, done) {
      $(el).animate({
        left: '500px',
        opacity: 0
      }, {
        duration: 1500,
        complete: done
      })
    }
  },
  props: ['number']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jsAnimate{
  position: relative;
}
.animate-p{
  position: absolute;
  top: 0;
  left: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */

.change-status-enter-active, .change-status-leave-active {
  transition: opacity 5s;
}
.change-status-enter, .change-status-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in-out;
}
.fade-enter {
  transform: translateY(-500px);
  opacity: 0;
}
.fade-leave-active {
  transform: translateY(500px);
  opacity: 0;
}
</style>
