<template>
  <div style="width:100%;">
    <PartOne></PartOne>
    <!-- <History></History>
    <Store></Store>
    <Timeline></Timeline>
    <Story></Story>
    <Htmlfive></Htmlfive>
    <Vertical></Vertical> -->
  </div>
</template>  

<style>

</style>


<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .timeline{
    background-color: #e9f0f5;
  }
</style>

<script>
  import PartOne from 'C/PartOne.vue'
  import History from 'C/History.vue'
  import Store from 'C/Store.vue'
  import Timeline from 'C/Timeline.vue'
  import Story from 'C/Story.vue'
  import Htmlfive from 'C/Htmlfive.vue'
  import Vertical from 'C/Vertical.vue'

  export default {
    components: {
      PartOne,
      History,
      Store,
      Timeline,
      Story,
      Htmlfive,
      Vertical
    },
    data () {
      return {
  
      }
    }
  }
</script>