<template>
  <main>
    <SearchBar ref="searchbarRef"></SearchBar>
    <Dialog></Dialog>
    <List></List>
  </main>
</template>

<script setup lang='ts'>
import {onMounted , ref} from 'vue'
import SearchBar from './SearchBar.vue';
import Dialog from './Dialog.vue';
import List from './list/List.vue'

const searchbarRef = ref()

const cb = ()=>{
  searchbarRef.value.handleDialog(true)
}

onMounted(()=>{
  console.log('home-onMounted')
  window.myApi.opendialog()
  window.myApi.onRendererEvent(cb)
})
</script>

<style lang = 'less' scoped>

</style>