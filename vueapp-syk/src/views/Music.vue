<template>
   <Musicplayer :musicList="musicList"></Musicplayer>
</template>

<script>
import Musicplayer from '@/components/Musicplayer';
import axios from 'axios';
export default {
    data(){
        return{
            itemName:'music',
            musicList: [],
        }
    },
      created(){
       this.$emit('flashAfter','music');
       let urlMusic='/data/musicdata.json';//这里如果直接是一个斜杠开头的地址就是绝对地址，是直接寻址到public文件夹下面。
       axios.get(urlMusic).then(res=>{ 
            this.musicList=res.data.musicData;
            console.log(this.musicList);
       })

    },
    components: {
        Musicplayer,
    },
    
    
}
</script>


<style lang="scss" scoped>
h1{
    margin: 1rem 0;
}
</style>
