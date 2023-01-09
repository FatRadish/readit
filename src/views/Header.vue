<template>
  <div class="header-container">
    <router-link to="/home" custom v-slot="{ isActive, navigate }">
      <div :class="{ active: isActive }" @click="navigate">
        网站收藏
      </div>
    </router-link>
    <RouterLink to="/imageGallery" custom v-slot="{ isActive, navigate }">
      <div :class="{ active: isActive }" @click="navigate">
        图片收藏
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang='ts'>


</script>

<style lang = 'less' scoped>
.header-container {
  display: flex;
  background: #1e90ff;
  height: 44px;

  div {
    padding-left: 10px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    cursor: pointer;

    &.active {
      color: #fff;
    }

    svg {
      margin-right: .2rem;
      fill: #ccc;
    }

    &.actice svg {
      fill: #fff;
    }
  }
}
</style>