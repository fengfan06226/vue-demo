<template>
    <div>
        <div class="app-head">
            <div class="app-head-inner">
                <img src="../assets/logo.png" alt="">
                <div class="head-nav">
                    <ul class="nav-list">
                        <li>登录</li>
                        <li class="nav-pile"></li>
                        <li>注册</li>
                        <li class="nav-pile"></li>
                        <li>关于</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="app-content">
            <side-bar></side-bar>
            <div class="main">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
        <div class="app-foot">
            <p>© 2018 fishenal MIT</p>
        </div>
    </div>
</template>

<script>
    import menu from './menu.vue';

    export default {
        name: 'app-content',

        data(){
            return {

            }
        },
        components:{
            'side-bar': menu
        }
    }

</script>

<style scoped>
    .app-head{
        height: 60px;
        background: #333;
    }
    .app-head-inner{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .app-head-inner img{
        width: 30px;
        height: 30px;
        margin-top: 15px;
    }
    .nav-list li{
        float:left;
        color: #fff;
        font-weight: bold;
        font-size: 13px;
        list-style: none;
        width: 50px;
        text-align: center;
        margin-top: 5px;
        cursor: pointer;
    }
    .app-content{
        display: flex;
    }
    .app-content ul{
        width: 200px;
    }
    .app-content .main{
        flex: 1;
        text-align: center;
    }
    .app-foot{
        height: 60px;
        background: #ececec;
        width: 100%;
        text-align: center;
    }
    .app-foot p{
        line-height: 60px;
    }
</style>
