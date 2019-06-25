<template>
<div style="position:relative;overflow:hidden;background-color:#F6DC65">
  <div class="historyback"
    data-650p="top:0px"
    data-750p="top:1080px">
  </div>
  <img
    :src="historyBlock"
    style="height:100%;width:100%;top: 0;position: absolute;"
    data-600p="transform[bounce]:scale(1,1);opacity:1"
    data-700p="transform[bounce]:scale(1,1);opacity:1"
    data-750p="transform[bounce]:scale(1.5,1.5);opacity:0"
    >
</div>
</template>

<style>

</style>


<style scoped>
.historyback{
  background-color: #F6B458;
  width:100%;
  height:1080px;
  position:relative;
}
</style>

<script>
  import skrollr from '../../../static/js/skrollr.js'
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
