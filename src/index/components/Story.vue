<template>
<div style="position:relative">
  <div
    style="background-color: red;width:100%;height:100%;position:absolute"
    data--540-top="height:0%;top:1080px"
    data-bottom-top="height:100%;top:0px">
  </div>
  <img
    :src="storyBlock"
    style="height:100%"
    data-center-top="transform[bounce]:scale(1,1);height:100%;opacity:1"
    data-top="transform[bounce]:scale(1.5,1.5);height:100%;opacity:0"
    data--500-top="transform[bounce]:scale(1.5,1.5);height:5%;opacity:0">
</div>
</template>

<style>

</style>


<style scoped>

</style>

<script>
  import storyBlock from 'index/assets/images/story-block.png'
  export default {
    data () {
      return {
        storyBlock
      }
    },
    mounted () {
      var s = skrollr.init()
    }
  }
</script>
