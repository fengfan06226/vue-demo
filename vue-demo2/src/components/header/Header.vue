<template>

    <div>
        <h2>{{title}}</h2>
        <v-dashboard :childTitle = "title" :run = "run" ref="dashboard"></v-dashboard>
        <v-button></v-button>
        <v-home></v-home>
        <button @click= "run1()">父组件调用子组件的方法</button>
    </div>
</template>

<script>
    import DashboardVue from '../main/Dashboard.vue';
    import ButtonVue from '../main/Button.vue';
    import HomeVue  from '../main/Home.vue';

    export default {
        data(){
            return {
                title:'头部 html'
            }
        },
        methods:{
            run(data){
                alert(data);
            },
            run1(){
                this.$refs.dashboard.change();
                alert(this.$refs.dashboard.title);
            },
            run2(){
                alert('子组件调用父组件方法，，不传值，，用 ref');
            }
        },
        components:{
            "v-dashboard":DashboardVue,
            "v-button":ButtonVue,
            "v-home":HomeVue
        }
    }
</script>

<style lang="scss" scoped>
    h2{
        background: black;
        color: white;
    }
</style>

