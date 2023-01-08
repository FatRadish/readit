<template>
  <div class="dialog-wrap" v-if="isShow">
    <div class="content">
      <div class="input">
        <input type="text" v-model="url" @keyup.enter="handleAddList" placeholder="https://">
      </div>
      <div class="btns">
        <button @click="handleAddList" :disabled="isSubmit">添加</button>
        <button @click="handleDialog(false)" :disabled="isSubmit">取消</button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { inject, ref } from 'vue'
import useWebsiteStore from '../store/websiteStore'

const websiteStore = useWebsiteStore()
const isSubmit = ref<boolean>(false)
const url = ref<string>('https://')

const handleDialog = (value: boolean) => {
  url.value = 'https://'
  setIsShow(value)
}
const handleAddList = async () => {
  isSubmit.value = true;
  const result = await window.myApi.sendUrl(url.value)

  if (result.screenshot.length < 7000) {
    window.myApi.alert('该url地址错误')
    isSubmit.value = false;
  } else {
    websiteStore.add(result)
    isSubmit.value = false;
    setIsShow(false)
    url.value = 'https://'
  }

}
const { isShow, setIsShow } = inject('dialog-visible') as dialogState

</script>

<style lang = 'less' scoped>
.dialog-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 100%;
    padding: 0 20px;

    input {
      height: 30px;
      width: 100%;
      outline: none;
      margin-bottom: 10px;
      font-size: 12px;
    }

    .btns {
      // display: flex;

      button {
        // justify-content: space-between;
        height: 30px;
        margin-right: 10px;
        font-size: 12px;
        font-weight: 700;
        padding: 0 20px;
      }
    }
  }
}
</style>