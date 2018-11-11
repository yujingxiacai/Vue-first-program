<template>
    <ul class="footer" :style="{background: flashafter.bgcolor}">
        <li @click="changebg(item)" class="footer-content" v-for="(item, index) in menuList" :key="index">
            <router-link :to="item.path" >{{item.title}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            themcolor: "",
            selected: [],
        }
    },
    props:['menuList','flashafter'],
    // mounted(){
    //     console.log(menuList);
    // }
    methods:{
        
        changebg(item){
            this.themcolor=item.bgcolor;
            this.selected=item;
            this.$emit('changtitle',item);
            // console.log(this.selected);
          
        }
    },
    
};
</script>

<style lang="scss" scoped>
.footer{
    height: 1rem;
    background: #e54847;
    line-height: 1rem;
    position: fixed;
    font-weight: bold;
    bottom: 0;
    left:0;
    width:100%;
    color: #ffffff;
    display: flex;
    &-content{
        text-align: center;
        flex-grow: 1;
        & a{
            color: #ffffff;
            outline: none;
            text-decoration: none;
        }
    }
}
</style>

