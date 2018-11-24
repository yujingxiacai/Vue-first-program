<template>
    <div class="titlew" :style="{background:flashafter.bgcolor}">
        <span class="titlew-s">首页</span>
        <h3 class="titlew-h" @click="test2(flashafter)">{{flashafter.title}}</h3>
    </div>
</template>


<script>
export default {
    props: ['flashafter'],//这里传来的是父组件哪里的“:”后面的属性，是一个变量，代表了对象，不要以为是传递的是属性值。命名的情况容易让人弄混淆！！注意
    methods:{
        test2(flashafter){
            console.log(this.flashafter);
        }
    },
    // created(){
    //     console.log('xuanruan');//重新渲染的是 footerapp.vue 和 此文件
    // }
};
</script>

<style lang="scss" scoped>
.titlew{
    height: 1rem;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    background: #e54847;
    color: #ffffff;
    line-height: 1rem;
    &-s{
        margin-left: 0.2rem;
    }
    &-h{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>
