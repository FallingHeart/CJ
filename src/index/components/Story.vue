<template>
<div style="position:relative;overflow:hidden;background-color:#67DDE0">
  <div class="storyback"
    data-1400p="top:0px"
    data-1500p="top:1080px">
  </div>
  <img
    :src="storyBlock"
    style="height:100%;width:100%;top: 0;position: absolute;"
    data-1350p="transform[bounce]:scale(1,1);opacity:1"
    data-1450p="transform[bounce]:scale(1,1);opacity:1"
    data-1500p="transform[bounce]:scale(1.5,1.5);opacity:0"
    >
</div>
</template>

<style>

</style>


<style scoped>
.storyback{
  background-color: #5170B5;
  width:100%;
  height:1080px;
  position:relative;
}
</style>

<script>
  import skrollr from '../../../static/js/skrollr.js'
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
