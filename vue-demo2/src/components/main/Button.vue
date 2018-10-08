<template>
    <div>
        <h5>button page</h5>
    </div>
</template>

<script>
    
    import vueEvent  from '../../model/vueEvent.js';
    
    export default {
        mounted(){
            vueEvent.$on('to-button',(data)=>{
                console.log(data);
            })
        }
    }
</script>

<style lang="scss" scoped>
    h2{
        background: black;
        color: white;
    }
</style>

