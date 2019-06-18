<template>
<div>
  <div data-top="background-color:rgb(0,0,255);" data-bottom="background-color:rgb(255,0,0);" style="height:200px">WOOOT</div>
  <!-- <Parallax
  :parallax="true"
  :fixed="false"
  :direction="'up'"
  :speedFactor="0.15"
  >
    <img :src="historyBlock" alt="very cool bg">
    SOMETING
  </Parallax> -->
</div>
</template>

<style>
.Masthead{
  z-index:1 !important;
  font-size: 100px;
}
</style>


<style scoped>

</style>

<script>
  import Parallax from 'vue-parallaxy'
  import historyBlock from 'index/assets/images/history-block.png'
  export default {
    data () {
      return {
        historyBlock
      }
    },
    components: {
      Parallax
    },
    mounted () {
      var s = skrollr.init()
    }
  }
</script>
