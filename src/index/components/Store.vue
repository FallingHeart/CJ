<template>
<section>

<!-- <img :src="store" alt="Ad" style="height:100%;margin: 0px 220px;"> -->
<video autoplay="autoplay" :poster="store" style="height:100%;">
	<!-- <source data-src="video/opening.mov" type="video/mp4" /> -->
</video>

</section>
    
</template>

<style scoped>
section{
    height: 100vh;
    background-color: darkseagreen;
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