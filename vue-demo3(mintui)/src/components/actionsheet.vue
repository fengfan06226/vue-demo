<template>
    <div>
        <mt-button type="primary" @click="showAction(true)">primary</mt-button>
        <mt-actionsheet
            :actions="actions"
            v-model="sheetVisible">
            </mt-actionsheet>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                sheetVisible:false,
                actions:[
                    {name:'确认',method:this.controlMethods},
                    {name:'取消',method:this.controlMethods},
                    {name:'返回上一级',method:this.goback}
                ] 
            }
        },
        methods:{
            showAction(judge){
                this.sheetVisible = judge;
            },
            controlMethods(){
                alert(111)
            },
            goback(){
                window.history.back(-1);
            }
        }
    }
</script>
