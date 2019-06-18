<template>  
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Vending></Vending>
      </div>
      <div class="section">
        <Opening></Opening>
      </div>
      <div class="section">
        <Horizontal></Horizontal>
      </div>
      <div class="section">
        <History></History>
      </div>
      <div class="section">
        <Store></Store>
      </div>
      <div class="section fp-auto-height muchheight">
        <div class="timeline">
          <Timeline></Timeline>
        </div>
      </div>
      <div class="section">
        <Story></Story>
      </div>
      <div class="section">
        <Htmlfive></Htmlfive>
      </div>
      <div class="section fp-auto-height muchheight">        
        <div class="vertical">
          <Vertical></Vertical>
        </div>
      </div>
      <div class="section">
        End.
      </div>
    </full-page>
        <!-- <Vending></Vending>
        <Opening></Opening>
        <Horizontal></Horizontal>
        <History></History>
        <Store></Store>
        <Timeline></Timeline>
        <Story></Story>
        <Htmlfive></Htmlfive>
        <Vertical></Vertical>
        <div style="height:1920px">End</div> -->
  </div>
</template>  

<style>
  .muchheight .fp-tableCell{
    height:2920px !important
  }
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
  .muchheight{
    height:2920px !important
  }
  .muchheight .fp-tableCell,.timeline,.vertical{
    height:2920px !important
  }
  .timeline{
    background-color: #e9f0f5;
  }
</style>

<script>
  import Vending from 'C/Vending.vue'
  import Opening from 'C/Opening.vue'
  import Horizontal from 'C/Horizontal.vue'
  import History from 'C/History.vue'
  import Store from 'C/Store.vue'
  import Timeline from 'C/Timeline.vue'
  import Story from 'C/Story.vue'
  import Htmlfive from 'C/Htmlfive.vue'
  import Vertical from 'C/Vertical.vue'

  export default {
    components: {
      Vending,
      Opening,
      Horizontal,
      History,
      Store,
      Timeline,
      Story,
      Htmlfive,
      Vertical
    },
    data () {
      return {
        options: {
          anchors: ['Vending', 'Opening', 'Horizontal', 'History', 'Store', 'Timeline', 'Story', 'Htmlfive', 'Vertical'],
          // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6', '#ADD8E6', '#e9f0f5', '#ADD8E6', '#ADD8E6', '#ADD8E6'],
          // autoScrolling: false,
          licensekey: 'OPEN-SOURCE-GPLV3-LICENSE'
          // scrollOverflow: true
        }
      }
    }
  }
</script>