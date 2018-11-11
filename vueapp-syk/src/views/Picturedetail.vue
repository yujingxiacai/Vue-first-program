<template>
    <router-link to="/picture">
      
      <v-touch v-on:swipeleft="left" @swiperight="right" :style="{background:'url(/img/'+(pictureSrc+1)+'.jpg) no-repeat center/contain #cccccc'} " class="bigpic" ></v-touch>
    
    </router-link>
</template>
<script>

export default {
    data(){
        return{
            pictureSrc:-1,
        }
    },
    methods:{
        right(){
          
              if(this.pictureSrc==0){
                            this.pictureSrc=23;
                            //  console.log(this.pictureSrc)
                        }else{
                        this.pictureSrc--;}
                        //  console.log(this.pictureSrc)
                    },
        
        left(){  
            if(this.pictureSrc==23){
                // console.log(this.pictureSrc)
                this.pictureSrc=0;
            }else{
            this.pictureSrc++;
            //  console.log(this.pictureSrc)
            }
            },
          
    },
    created(){
    //   let a= this.$route.params.index;
      let b= this.$route.params.index;
      this.pictureSrc=parseInt(b);
        // console.log(b);
        // console.log(12333);
    }
}
</script>

<style lang="scss" scoped>
.bigpic{
    // margin: 1rem 0;
    background: #cccccc;
    position: fixed;
    top:1rem;
    bottom: 1rem;
    left:0;
    right: 0;

}
.slide{
   &-enter{
       opacity: 0;
       
   }
   &-to{
       opacity: 1;

   }
   &-active{
        transition: opacity 2s ease;
   }
   &-leave{
       opacity: 1;
   }
   &-to{
       opacity: 0;
   }
   &-active{
        transition: opacity 2s ease;
   }
}
</style>
