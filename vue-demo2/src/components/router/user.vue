<template>

    <div class="user-side">
        <h2>用户相关</h2>
        <ul>
            <li v-for="item of list" :key="item.id" @click="jump(item.label)">{{item.title}}</li>
        </ul>

        <div class="main-side">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list: [
                    {label:'add',title:'增加用户'},
                    {label:'list',title:'用户列表'},
                ]
            }
        },
        methods:{
            jump(id){
                location.href = "/#/user/"+id;
            }
        }
    }
</script>

<style lang="scss" scoped>
.user-side{
    display: flex;
    ul{
        width: 200px;
        border-right: 1px solid #eee;
    }

    .main-side{
        flex: 1;
        border: 1px solid #eee;
    }
}

</style>


