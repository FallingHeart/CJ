<template>
<div style="position:relative;overflow:hidden;">
  <div class="historyback"
    data-center-top="top:0px"
    data-bottom="top:1080px">
  </div>
  <img
    :src="historyBlock"
    style="height:100%;width:100%;top: 0;position: absolute;"
    data-center-top="transform[bounce]:scale(1,1);opacity:1"
    data-bottom="transform[bounce]:scale(1,1);opacity:1"
    data--1080-top="transform[bounce]:scale(1.5,1.5);opacity:0"
    >
</div>
</template>

<style>

</style>


<style scoped>
.historyback{
  background-color: aquamarine;
  width:100%;
  height:1080px;
  position:relative;
}
</style>

<script>
  import historyBlock from 'index/assets/images/history-block.png'
  export default {
    data () {
      return {
        historyBlock
      }
    },
    mounted () {
      var s = skrollr.init()
    }
  }
</script>
