<template>
<div style="position:relative;overflow:hidden;">
  <div class="historyback"
    data-450p="top:0px"
    data-550p="top:1080px">
  </div>
  <img
    :src="historyBlock"
    style="height:100%;width:100%;top: 0;position: absolute;"
    data-400p="transform[bounce]:scale(1,1);opacity:1"
    data-500p="transform[bounce]:scale(1,1);opacity:1"
    data-550p="transform[bounce]:scale(1.5,1.5);opacity:0"
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
