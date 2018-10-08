<template>

    <div>
        <h2>{{label}}</h2>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // 之前会写的写法
                // label:this.$route.params.id
                // 新写法
                label: this.$route.query.id
            }
        }
    }
</script>


