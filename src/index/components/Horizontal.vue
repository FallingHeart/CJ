<template>
<div class="horizontal">
  <img :src="man" id="man" data-bottom-top="left:80%" data-100-bottom="left:0%">
  <img :src="star" id="star" data-bottom-top="right:-50%;top:0%" data--750-bottom="right:50%;top:20%" width="150px">
  <img :src="circle" id="circle" data-bottom-top="right:-40%;top:20%" data--550-bottom="right:-10%;top:0%" width="150px">
  <div id="des" data-bottom-top="left:100%" data--100-bottom="left:30%">
    <p>“微信支付宝？”王宁在最后三个字上顿了几顿，显得字字分明。他左手虚点着收银台键盘，低头盯着收银台，目光并不从屏幕上离开。</p>
    <p>“微信吧。”顾客打开微信支付，将它向前伸到王宁手边。</p>
    <p>王宁右手握上扫码器，翻花似的在半空中利落地转了一圈手腕，然后用扫码器的红外线对准条形码，一声清脆的“嘀”。</p>
  </div>
</div>    
</template>

<style scoped>
.horizontal{
  position: relative;
  height: 100vh;
  background-color: darkseagreen;
  overflow: hidden;
}
#man{
  height:100%;
  position: relative;
}
#star{
  bottom: 900px;
  position: relative;
}
#circle{
  bottom: 700px;
  position: relative;
}
#des{
  text-align: justify;
  bottom: 650px;
  width: 1200px;
  padding: 20px;
  font-size: 40px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>

<script>
  import Parallax from 'vue-parallaxy'
  import man from 'index/assets/images/man.png'
  import star from 'index/assets/images/star.png'
  import circle from 'index/assets/images/circle.png'
  import round from 'index/assets/images/round.png'
  export default {
    data () {
      return {
        man,
        star,
        circle,
        round
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