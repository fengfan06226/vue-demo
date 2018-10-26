<template>
    <ul class="sidebar">
        <li class="product-type" v-for="(item,index) of menuData" :key="index">
            <span class="product-type-name">&nbsp;&nbsp;{{item.category}}</span>
            <ul class="product-list" v-if="item.list && item.list.length>0">
                <li v-for="(res,num) of item.list" :key="num" @click="jump(res.url)">
                    <a>
                        <span><img class="flag-img" :src=res.imgUrl></span>
                        <span class="product-name">{{res.name}}</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    import menu from '../data/menuData.js'; 

    export default {
        data(){
            return {
                menuData: menu
            }
        },
        methods:{
            jump(url){
                location.href = "/#/" + url;
            }
        }
    }
</script>

<style>
    ul,li{
        list-style: none;
    }
    a{
        color: black;
        text-decoration: none;
    }
    a:hover{
        color: black;
    }

    .product-type{
        margin-bottom: 20px;
    }
    .product-type>span{
        display: inline-block;
        width: 200px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-weight: bold;
        background: #41B883;
        border: 1px solid #41b883;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        box-shadow: 0px 0px 5px rgba(0,0,0,.2);
    }
    .product-list{
        width: 200px;
        padding-left: 0px;
        border: 1px solid #eee;
        border-top: 0px;
        box-shadow: 0px 0px 5px rgba(0,0,0,.2);
    }
    .product-list li{
        padding: 10px 0px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
    }
    .product-list a{
        position: relative;
        padding-left: 15px;
    }
    
    .flag-img{
        width: 25px;
        height: 25px;
        position: absolute;
        bottom: 0px;
    }
    .product-name{
        display: inline-block;
        padding-left: 30px;
    }
</style>
