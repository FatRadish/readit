<template>
  <Home></Home>
</template>

<script setup lang='ts'>
import { ref, provide } from 'vue'
import Home from './views/Home.vue'

const isShow = ref<boolean>(false);
const setIsShow = (value: boolean) => {
  isShow.value = value
}
provide('dialog-visible', {
  isShow,
  setIsShow
})
</script>

<style lang = 'less' scoped>

</style>