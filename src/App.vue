<template>
  <Home></Home>
</template>

<script setup lang='ts'>
import { ref, provide } from 'vue'
import Home from './views/Home.vue'

//控制dialog的显示
const isShow = ref<boolean>(false);
const setIsShow = (value: boolean) => {
  isShow.value = value
}

//searchbar keywords
const keywords = ref<string>('')
const setKeywords = (word: string) => {
  keywords.value = word
}

provide('dialog-visible', {
  isShow,
  setIsShow
})

provide('searchbar-keywords', {
  keywords,
  setKeywords
})
</script>

<style lang = 'less' scoped>

</style>