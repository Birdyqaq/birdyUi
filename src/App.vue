<template>
  <div id="app">
    <div class="container">
      <Carousel
      :autoplay="true"
      :duration="3000"
      :initFirst="0"
      :hasDot="true"
      :hasDirector="true"
      >
       <CarItem 
       v-for="(item,index) in imgList"
       :key="index"
       >
         <img :src="require(`./assets/img/${item}.webp`)">
       </CarItem>
     </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let imgList = ref([1,2,3])
</script>

<style lang="scss" scoped>
.container{
  width:520px;
  height:280px;
  margin:150px auto;
  img{
    width: 100%;
  }
}
</style>
