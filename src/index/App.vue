<template>  
  <el-container style="height: 100vh; border: 1px solid #eee">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </el-container>
</template>  

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>

<script>

</script>