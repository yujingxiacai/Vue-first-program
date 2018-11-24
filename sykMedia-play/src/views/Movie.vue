<template>
    <div class="test">
        <ul class="movie">
            
            <li class="movie-list" v-for=" list in movieList" :key="list.id" @click="movieInfo(list)" v-show="isDetel">    
                   <div class="movie-list-img"><img :src="list.images.large" alt="加载失败"></div>
                   <div class="movie-list-content">
                       <h4>{{list.title}}</h4>
                       <p>评分<span>{{list.rating.average}}</span></p>
                       <p>主演: <span v-for="item in list.casts" :key="item.id">{{item.name}} </span></p> 
                   </div>
            </li>
        </ul>
        <div class="loading" v-show="isloading"><img src="@/assets/img/loading.gif" alt=""></div>
        <div class="end" v-show="isend">到底了不好意思</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            movieList:[],
            isloading: true,
            isend:false,
            isDetel: true,
            isDetelIn:false,
        }
    },
    methods: {
        geturl(){
                let Url= "https://api.myjson.com/bins/1f34fo";
                //异步 请求
                this.isloading =true;

                axios.get(Url).then(res => {
                   
                    if((res.data.subjects.slice(this.movieList.length,this.movieList.length+5)).length<5){
                       this.isend=true;
                    }
                     this.movieList=this.movieList.concat(res.data.subjects.slice(this.movieList.length,this.movieList.length+5));  
                    console.log(this.movieList);   
                    this.isloading=false; //经过上面显然已经完成了加载，所以这里就可以重置loading显示状态
                })
                // console.log(this.movieList);//这里肯定是不能输出有用的值的
                
            },
            movieInfo(thatobj){//这里处理rooter变化为当前电影对象的详细界面
                    this.isDetel=false;
                    this.isDetelIn= true;
                    console.log(thatobj);
                    this.$router.push('/movieinfo');
            }
    },
  
    created(){
       this.$emit('flashAfter','movie');
        this.geturl(); 
       
    },
    mounted(){
        window.onscroll=()=>{
            
           let htmlscroheight= document.documentElement.scrollHeight;
           let htmlscrolltop= document.documentElement.scrollTop;
           let htmlclientheight= document.documentElement.clientHeight;
            
            let sum=Math.floor(htmlscrolltop+htmlclientheight);
            console.log(htmlscroheight,htmlscrolltop,htmlclientheight,sum);
            if(htmlscroheight==sum){
                this.geturl();
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.test{
margin:1rem 0;
}
.movie{
       
    &-list{
         display: flex;
         padding: 0.2rem;
         border-bottom: 0.02rem solid #cccccc;
        &-img{
            width: 0;
            flex-grow: 1;
           
            img{
                width: 100%;
            }
        }
        &-content{
            width: 0;
            flex-grow: 3;
        }
    }
}
.loading{
    position: fixed;
    bottom: 0;
    
    
}
.end{
    position: fixed;
    bottom: 0;
}
</style>
