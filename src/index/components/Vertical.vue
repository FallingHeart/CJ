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
  <!-- <div id="scene">
    <div data-depth="0.2">My first Layer!</div>
    <div data-depth="0.6">My second Layer!</div>
  </div> -->
  <!-- <div data-top="position:fix;top:100px;left:100px;" data-bottom="position:fix;top:200px;left:300px;" style="height:200px">WOOOT</div> -->
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
  import ParallaxFLEX from 'parallax-js'
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
      // var scene = document.getElementById('scene')
      // var parallaxInstance = new ParallaxFLEX(scene, {
      //   relativeInput: true
      // })
  
      var s = skrollr.init()
  }
  }
</script>
