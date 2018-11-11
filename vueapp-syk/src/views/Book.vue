<template>
    <!-- <h1>图书</h1> -->
    <div>
            <swipe class="my-swipe">
                <swipe-item class="slide1"></swipe-item>
                <swipe-item class="slide2"></swipe-item>
                <swipe-item class="slide3"></swipe-item>
            </swipe>
            <div>
                
            </div>
    </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import store from "@/store.js";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    data(){
        return{
            itemName:'book'
        }
    },
    components:{
        Swipe,
        SwipeItem,
    },
      created(){
       this.$emit('flashAfter','book');

    }
}
</script>


<style lang="scss" scoped>
h1{
    margin: 1rem 0;
}
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
   margin: 1rem 0;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
