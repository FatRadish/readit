<template>
  <div class="search-container">
    <div class="button" @click="handleDialog(true)">+</div>
    <div class="input">
      <input type="text" placeholder="请输入关键字" @keyup="search">
    </div>
  </div>
</template>

<script setup lang='ts'>
import { inject } from 'vue'
import _ from 'lodash'

const handleDialog = (value: boolean) => {
  setIsShow(value)
}
const { setIsShow } = inject('dialog-visible') as dialogState
const { setKeywords } = inject('searchbar-keywords') as searchState

const search = _.debounce((e: any) => {
  setKeywords(e.target.value)
}, 500)

</script>

<style lang = 'less' scoped>
div.search-container {
  height: 60px;
  background: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;

  .button {
    width: 40px;
    height: 40px;
    background-color: #1e90ff;
    padding-left: 0px;
    border-radius: 5px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .input {
    flex: 1;
    height: 36px;
    padding: 0 10px;

    input {
      height: 100%;
      width: 100%;
      border: solid 1px #ccc;
      border-radius: 5px;
      padding: 0 10px;
    }
  }
}
</style>