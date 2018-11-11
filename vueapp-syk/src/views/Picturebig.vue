<template>
    <ul class="tupian clearfix">      
            <li v-for="(item,index) in pictureList" :key="item.src" class="tupian-item " @click="tranMessge(item,index)">
              <img :src="item.src" alt="">
            </li> 
    </ul> 
</template>



<script>
import axios from 'axios';
export default {
    data(){
        return{
            pictureList:[],
        }
    },
    created(){
        let url='/data/photodata.json';
        axios.get(url).then(res=>{
            this.pictureList=res.data.photoData;
            // console.log(res.data.photoData);
            // console.log(this.pictureList)
        })
    },
    methods:{
        tranMessge(item,i){
            this.$router.push(`/picturedetail/${i}`);//i这里接受的是点击时的图片在数组中的索引位置！
        }
    },
    watch:{

    }
}
</script>


<style lang="scss" scoped>
.tupian{
    
    &-item{
        float: left;
        width: 50%;
    }
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
</style>
