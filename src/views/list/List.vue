<template>
  <div>
    <p id="no-item" v-if="websiteStore.find(keywords).length <= 0">暂无数据。</p>
    <div id="items" v-else>
      <div class="read-item" :class="{ selected: currentIndex === index }"
        v-for="(ws, index) in websiteStore.find(keywords)" @click="handleItemIndex(index, ws.url)">
        <img :src="ws.screenshot" :alt="ws.title">
        <h2>{{ ws.title }}</h2>
        <button @click.stop="websiteStore.deleteItem(ws.url)"> x </button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import useIndex from './useIndex'
import useWebsites from './useWebsites'
const { currentIndex, handleItemIndex } = useIndex()
const { websiteStore, keywords } = useWebsites()

</script>

<style lang = 'less' scoped>
#items {
  display: flex;
  flex-wrap: wrap;

  .read-item {
    display: flex;
    width: 100%;
    height: 18vh;
    margin-left: 10px;
    margin-bottom: 5px;
    background: #ebe8e8;
    justify-content: center;
    align-items: center;

    &:hover {
      background: rgba(204, 201, 201, 0.8);

      button {
        visibility: visible;
      }
    }

    img {
      height: 100%;
      width: 20%;
    }

    h2 {
      flex: 1;
      font-size: 30px;
    }

    button {
      width: 30px;
      height: 30px;
      margin-bottom: 40px;
      margin-right: 20px;
      background: red;
      color: #fff;
      text-align: center;
      border: red;
      border-radius: 50%;
      visibility: hidden;
      cursor: pointer;
    }
  }

  .selected {
    h2 {
      color: rgb(96, 171, 241);
    }
  }
}
</style>