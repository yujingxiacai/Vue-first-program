<template>
    <picturebig class="componen">

    </picturebig>
</template>

<script>
import picturebig from '@/views/Picturebig.vue';
export default {
    data(){
        return{
            itemName:'picture'
        }
    },
      created(){
       this.$emit('flashAfter','picture');
    },
    components:{
        picturebig,
    }
}
</script>


<style lang="scss" scoped>
.componen{
    margin: 1rem 0;
}
</style>
