<template>

    <div>
        <h2>{{title}}</h2>
        <ul>
            <li v-for="item of list" :key="item.id" @click="jump(item.id)">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title: 'pageA mainPage',
                list: [
                    {id:1,title:'haha'},
                    {id:2,title:'oo'},
                    {id:3,title:'玩去'}
                ]
            }
        },
        methods:{
            jump(id){
                // 原来会写的写法
                // location.href = "#/content/"+id;
                // 新写法
                location.href = '#/content?id='+id;
            }
        }
    }
</script>

