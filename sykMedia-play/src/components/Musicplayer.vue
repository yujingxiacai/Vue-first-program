<template>
    <div class="music"> 
       <!--此处是专辑介绍 -->
         <div class="music-header">
            <div class="music-header-bg" :style="{background: 'url('+imgT+')  no-repeat center/cover' }"></div>
            <div class="music-header-img"><img :src="imgT" alt=""></div>

            <div class="music-header-content">
                <h4>{{musicTitle}}</h4>
                <p>歌手：<span> {{musicAuthor}}</span></p>
                <div class="music-header-content-control">
                    <i class="font iconfont icon-shangyishou" @click="pre"></i>
                    <i class="font iconfont icon-zanting" v-show="isShow" @click="pause"></i>
                    <i class="font iconfont icon-bofang" v-show="!isShow" @click="play"></i>
                    <i class="font iconfont icon-xiayishou" @click="next"></i>
                    <span class="musiclsitbotton" @click="isList=!isList">歌单</span>
                </div>
            </div>
        </div>
        <!--此处是歌词 -->
        <div class="music-lyric">
            <ul class="music-lyric-text" ref="UL">
                <li class="music-lyric-text-line" v-for="(lyrs,line) in lyricLsit" :key="line" :style="{color:line==lineIndex?colorFont:''}">{{lyrs.lrcText}}</li>
            </ul>
        </div>
        <!--此处是歌单列表-->
        <transition name="fade">
                <ul class="music-list" v-show="isList">
                    <li class="music-list-item" v-for="(item ,index) in  musicList " :key="index" @click="changelist(index)" :style="{color:index==listIndex?colorFont:''}">
                        <span>{{item.title}} - </span><span>{{item.author}}</span>
                    </li>
                </ul>
        </transition>
        <!--此处是audio    ref这里是vue提供的一个获取所加的元素的dom结构，相当于id。-->
        <div class="music-audio">
            <audio id="adio"  ref="musicAudio" :src="musicSrc" autoplay controls  @play="isShow=true" @pause="isShow=false" class="music-audio-bo"></audio>
        </div>
    </div>
</template>

<script>
import '@/assets/font/iconfont.css' ;
import Axios from 'axios';
// import lrc1 from'/lrc/我要你.lrc';
// import lrc2 from'/lrc/广东爱情故事.lrc';
// import lrc3 from'/lrc/就是爱你.lrc';
// import lrc4 from'/lrc/最美的期待.lrc';
// import lrc5 from'/lrc/追光者.lrc';
// import lrc6 from'/lrc/刚好遇见你.lrc';
var timer;
export default {
    
    props:['musicList'],//musicLsit在这里是一个数组！！！，
    data(){
        return{
            imgT: 'http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg',
            musicTitle:'',
            musicAuthor:'',
            musicSrc:'',
            isList:false,
            listIndex:-1,
            isShow:false,
            colorFont:'#ea2000',
            lyricLsit:[],
            playTime:0,//记录当前歌曲播放的时间。
            lineIndex:0,//记录当前应该播放的歌曲行号
            
        }
    },
    methods:{
        play(){
            this.$refs.musicAudio.play();
        },
        pause(){
            this.$refs.musicAudio.pause();
        },
        change(index){
            console.log(this.musicList);
             this.musicList.forEach((element,indexs)=> {
                if(indexs==index){
                     this.musicSrc=element.src;
                     this.imgT=element.musicImgSrc;
                     this.musicTitle=element.title;
                     this.musicAuthor=element.author;

                }
            });
        },
     changelist(index){
            // console.log(index);
            
            this.listIndex=index;
            this.change(index)
            // axios.get(urlMusic).then(res=>{ 
            // this.musicList=res.data.musicData;
            console.log(this.musicSrc);
    //    })
          
     },
     pre(){
         if(this.listIndex==-1){
             this.listIndex=5
             }
         else this.listIndex--;
         this.change(this.listIndex);
        
     },
     next(){
         if(this.listIndex==5){
             this.listIndex=0;
         }
         else this.listIndex++;
        //  console.log(this.listIndex);
          this.change(this.listIndex);
     },
     //正则处理字符串
    regularprase(lyric){
        let reg=lyric.split('\n');//目前就是把歌词按行分割一下。
        this.lyricLsit=[];
        reg.forEach((item,index)=>{
            // console.log(item);
        let time=item.match(/\[\d{2}:\d{2}.\d{2}\]/);
        if(time!=null){
            // console.log(time[0]);
            let lrctext=item.split(time[0]);
            // console.log(lrctext[1]);
            if(lrctext[1].trim()!=''){//取消有时间但是没歌词的地方，我们只要有时间又有歌词的list，但是这里没有歌词的行有一个空格，所以有一个去掉空格的条件
            let timeReg=time[0].match(/(\d{2}):(\d{2}).(\d{2})/);
            // console.log(timeReg);
            let  time2Second=parseInt(timeReg[1])*60+parseInt(timeReg[2])+parseInt(timeReg[3])/1000 ;
            this.lyricLsit.push({
                lrcTime: time2Second,
                lrcText: lrctext[1],
            })
            }
            }
        })
        // console.log(reg);
        // console.log(this.lyricLsit);
    }

    },
    watch:{//这里监控一个值就变不变，根据这个值是否改变来牵制所有的应变量。易于分析到这里就是listIndex是否改变，如果改变联动的其他均要改变。
         //但是上面例子我没有用到这里，但这里用watch一定没有问题！！！

         listIndex(){//时刻监听listIndex，也就是当前所选的歌曲代表的唯一索引。一旦变化就要新获取对应的lrc歌词！
           clearInterval(timer);
                let key = this.musicList[this.listIndex].lrc;
                let urlLrc=`/${key}`;
                Axios.get(urlLrc).then(res=>{
                    // console.log(res.data);//当前歌词可见版
                    //现在就是怎么将歌词放到lyricList这个数组中去
                    // this.lyricLsit=res.data
                    // console.log(typeof res.data);//输出的结果显示是string型
                 this.regularprase(res.data);
                 this.lineIndex=0;

             }) ;
             let a=document.getElementById('adio');
            //  if(a!=null){//这里是之前避免定时器
             timer= setInterval(()=>{//js 线程不随页面销毁, 比如 setTimeout 和 setInterval。
            //  这里跳转页面时会销毁页面，dom结构消失，但是定时器不会消失，会一直执行，这时只有手动清除定时器，才能避免问题
                 console.log('我来自音乐播放组件，我在运行！！');
                        this.playTime=Math.ceil(a.currentTime);
                        this.lyricLsit.forEach((item,index)=>{
                        // console.log(item.lrcText);
                            if(Math.floor(item.lrcTime)==this.playTime){
                                this.lineIndex=index;
                                
                            }
                    })
                   
    
                },1000) 
         },
         lineIndex(){
             let a=this.lineIndex*24.8;
             this.$refs.UL.scrollTop = a;
         }
         
    },
    computed:{
        currentTime(){
            
             
        } 
    },
    beforeDestroy() {
        console.log('我准备销毁了！');
        clearInterval(timer);
    },
    destroyed() {
        console.log('销毁了！')
    },



}
</script>


<style lang="scss" scoped>
.music{
    margin:1rem 0;
    &-lyric{
            //  position: fixed;
            // top:3.4rem;
            // bottom: 2rem;
            // left:0;
            // right: 0;
        &-text{
            padding: 2rem 0;
            text-align: center;
            position: fixed;
            top:3.4rem;
            bottom: 2rem;
            left:0;
            right: 0;
            overflow-Y:scroll;
            z-index: -1;
        }
    }
    &-audio{
        position: fixed;
        bottom: 1rem;
        width: 100%;
        background-color: #f1f3f4;
        &-bo{
            width: 100%;
        }
    }
    &-list{
        color: #cccccc;
        background-color: #2e2d2b;
        position: fixed;
        bottom: 2rem;
        width: 100%;
        height: 3rem;
        text-align: center;
        overflow-Y:scroll;
        &-item{
            margin: 0.5rem 0;
        }
    }
    &-header{
        margin: 1.1rem 0.2rem;
        display: flex;
        position: relative;
        &-bg{
            filter: blur(20px);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
        }
        &-img{  
                width: 0;
                flex-grow: 1;
                img{
                    width: 100%;
                }
        }  
        &-content{ 
                width: 0;
                flex-grow: 2;
                text-align: center;
        }
    }
  
}
.font{
    font-size: 0.5rem;
}
.musiclsitbotton{
    border: 1px solid #cccccc;
    border-radius: 0.1rem;
    padding: 0 0.2rem;
    margin-left: .2rem;
}
.fade{
     &-enter {
    transform: translateY(100%);
    &-to {
      transform: translateY(0);
    }
    &-active {
      transition: transform 1s ease;
    }
  }

  &-leave {
    transform: translateY(0);
    &-to {
      transform: translateY(100%);
    }
    &-active {
      transition: transform 1s ease;
    }
  }
}

</style>

 