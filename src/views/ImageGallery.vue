<template>
  <div class="img-container">
    <img v-for="fl in fileList" :src="`/uploads/${fl}`" alt="">
  </div>
</template>

<script setup lang='ts'>
import {onMounted , ref} from 'vue'

const fileList = ref<Array<string>>([])

onMounted(async ()=>{
  const files = await window.myApi.getFileList()
  fileList.value =files
})
</script>

<style lang = 'less' scoped>
.img-container{
  padding: 20px;
  img{
    width: 15vw;
    margin-right: 10px ;
  }
}
</style>