<template>
  <div id="app">
  <Headerapp :flashafter="flashafter"></Headerapp>
   <router-view @flashAfter="flashAfter"></router-view>
   <Footerapp  :menuList="menuList" :flashafter="flashafter"></Footerapp>

  </div>
</template>

<script>
import Footerapp from './components/Footerapp.vue';
import Headerapp from './components/Headerapp.vue';
import store from "@/store.js";

import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  methods:{
    // changT(menu){
    //    this.selectMenu = menu;
    //     // console.log(this.selectMenu );
    // },
  //调用vuex中store的改变函数
    
    flashAfter(Name){
      // console.log(Name);这里是由子组件传递过来的函数，变量是直接隐藏在数据流中传递过来的，
      // 所以在上面对应的地方不能用一个变量，这里调用时用变量就是在调用隐藏的传递过来的数据。
      
      // console.log(this.menuList);
      this.menuList.forEach((item)=>{
          if(item.name==Name){
            // console.log(item);
            // mapState={item};
            this.flashafter=item;//此处获取到的就是当前的rooter中的关键字，由此找到的就是对应要的对象，我们获取到的属性就可以设置了 
          }
      })
    }
  },
  components:{
    Footerapp,
    Headerapp,
   
  },
  data(){
    return{
        flashafter: {},
        menuList:[
          {
            title:'电影',
            bgcolor:'#e54847',
            path:'/movie',
            name:'movie'
          }, {
            title:'音乐',
            bgcolor:'#ea2000',
            path:'/music',
            name:'music'
          }, {
            title:'图书',
            bgcolor:'#7f8000',
            path:'/book',
            name:'book'
          }, {
            title:'图片',
            bgcolor:'#006666',
            path:'/picture',
            name:'picture'
          },
          
        ],
        selectMenu: {},
    }
  }
}


</script>

<style lang="scss">

</style>
