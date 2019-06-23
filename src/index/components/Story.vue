<template>
<div style="position:relative;overflow:hidden;">
  <div class="storyback"
    data-1000p="top:0px"
    data-1100p="top:1080px">
  </div>
  <img
    :src="storyBlock"
    style="height:100%;width:100%;top: 0;position: absolute;"
    data-950p="transform[bounce]:scale(1,1);opacity:1"
    data-1050p="transform[bounce]:scale(1,1);opacity:1"
    data-1100p="transform[bounce]:scale(1.5,1.5);opacity:0"
    >
</div>
</template>

<style>

</style>


<style scoped>
.storyback{
  background-color: aqua;
  width:100%;
  height:1080px;
  position:relative;
}
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
