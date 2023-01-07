<template>
  <div class="dialog-wrap" v-if="isShow">
    <div class="content">
      <div class="input">
        <input type="text" v-model="url" placeholder="请输入网址...">
      </div>
      <div class="btns">
        <button @click="handleAddList">添加</button>
        <button @click="handleDialog(false)">取消</button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { inject, ref } from 'vue'

const url = ref<string>('')

const handleDialog = (value: boolean) => {
  setIsShow(value)
}
const handleAddList = async () => {
  const result = await window.myApi.sendUrl(url.value)
  console.log(result)
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