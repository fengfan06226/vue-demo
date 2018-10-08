<template>
    <div>
        <h5>h5 {{childTitle}}</h5>
        <button @click="run(123)">点击看看</button>

        <button @click="change1()">传给 button 值</button>
        <h1 @click ="change()">{{ceshi}}</h1>
    </div>
</template>

<script>

    import vueEvent  from '../../model/vueEvent.js';

    export default {
        data(){
            return {
                title:'头部 html',
                ceshi:this.childTitle
            }
        },
        methods:{
            change(){
                this.ceshi = Math.random();
                this.$parent.run2();
            },
            change1(){
                vueEvent.$emit('to-button',this.title);
            }
        },
        props:['childTitle','run']
    }
</script>

<style lang="scss" scoped>
    h2{
        background: black;
        color: white;
    }
</style>

