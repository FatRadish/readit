<template>
  <div>
    <!-- <p id="no-item">暂无数据。</p> -->
    <div id="items">
      <div class="read-item">
        <img src="" alt="">
        <h2>23333</h2>
        <button> x </button>
      </div>
      <div class="read-item">
        <img src="" alt="">
        <h2>23333</h2>
        <button> x </button>
      </div>
      <div class="read-item">
        <img src="" alt="">
        <h2>23333</h2>
        <button> x </button>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang = 'less' scoped>
#items {
  display: flex;
  flex-wrap: wrap;

  .read-item {
    display: flex;
    width: 100%;
    height: 13vh;
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
}
</style>