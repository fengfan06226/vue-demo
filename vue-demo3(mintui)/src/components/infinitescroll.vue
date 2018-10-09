<template>
    <div>
        <ol
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
          <li v-for="(item,index) in list" :key="index">{{ item.title }}</li>
        </ol>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                loading:false,
                list:[],
                pageNum:1
            }
        },
        methods:{
            loadMore(){
                this.httpInfo();
            },
            httpInfo(){
                this.loading = true;
                var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page="+this.pageNum;
                this.$http.get(api)
                .then((res)=>{
                    this.list = this.list.concat(res.body.result);
                    this.pageNum++;
                    if(res.body.result.length >= 20){
                        this.loading = false;
                    }
                },(err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>
