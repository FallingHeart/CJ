<template>
<div class="opening">

<!-- <img :src="store" alt="Opening Video" style="height:100%;margin: 0px 220px;"> -->
<video autoplay="autoplay" :poster="store" style="height:100%;margin: 0px 220px;">
	<!-- <source data-src="video/opening.mov" type="video/mp4" /> -->
</video>

</div>    
</template>

<style scoped>
.opening{
  height: 100vh;
  background-color:#b0cdc7
}
</style>

<script>
import store from 'index/assets/images/store.png'
export default {
  data () {
    return {
      store
    }
  }
}
</script>
