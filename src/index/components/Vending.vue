<template>
  <div id="machine" style="background:url('images/vending.png') no-repeat center;background-size:100% 100%">
    <img class="logo row1 col1" src="images/logo/京客隆logo.png" @click="lightbox('jkl')" alt="京客隆">
    <img class="logo row1 col2" src="images/logo/丸町马神logo.png" @click="lightbox('wtms')" alt="丸町马神">
    <img class="logo row1 col3" src="images/logo/711logo.png" @click="lightbox('se')" alt="711">
    <img class="logo row2 col1" src="images/logo/罗森logo.png" @click="lightbox('ls')" alt="罗森超市发">
    <img class="logo row2 col2" src="images/logo/尤拉logo.png" @click="lightbox('yl')" alt="尤拉超市">
    <img class="logo row2 col3" src="images/logo/全家logo.png" @click="lightbox('qj')" alt="全家霞公府">
    <!-- <img class="output" src="#"> -->
    <img class="button" src="images/gotoContent.png" @click="gotoContent()">
    <!-- <div id="scene">
        <div data-depth="0.2">My first Layer!</div>
        <div data-depth="0.6">My second Layer!</div>
    </div> -->
    <el-dialog :title="card.name" :visible.sync="dialogVisible" style="text-align:center;">
      <img :src="card.img" :alt="card.des" style="height:100%;width: 100%;">
    </el-dialog>
  </div>    
</template>

<style scoped>
.el-dialog__body{
  height: 100%;
}
#machine{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.logo{
  width: 19%;
  height: 19%;
  position: absolute;
}
.row1{
  top: 18%;
}
.row2{
  top:44%;
}
.col1{
  left: 10%;
}
.col2{
  left: 34%;
}
.col3{
  left:58%;
}
/* .output{
    width: 350px;
    height: 100px;
} */
.button{
  width: 22%;
  height: 10%;
  top: 75%;
  right: 10%;
  position: absolute;
}
</style>

<script>
  import ParallaxFLEX from 'parallax-js'
  export default {
    data () {
      return {
        dialogVisible: false,
        card: {}
      }
    },
    methods: {
      gotoContent () {
        this.$router.push('/Content')
      },
      lightbox (key) {
        switch (key) {
          case 'jkl':
            this.card = {
              name: '京客隆',
              des: '本土零售商大佬在北京开启的第一家卖药品的便利店。',
              img: 'images/logo/京客隆detail.png'
            }
            break
          case 'wtms':
            this.card = {
              name: '丸町马神',
              des: '一家隐藏在自动贩卖机后的网红酒吧。',
              img: 'images/logo/丸町马神detail.png'
            }
            break
          case 'se':
            this.card = {
              name: '711',
              des: '全国销量前三的便利店，拥有自有品牌产品体系，同时还兜售药品。',
              img: 'images/logo/711detail.png'
            }
            break
          case 'ls':
            this.card = {
              name: '罗森超市发',
              des: '京城最文艺便利店，买到甜品的同时可以坐下来看看书。',
              img: 'images/logo/罗森detail.png'
            }
            break
          case 'yl':
            this.card = {
              name: '尤拉超市',
              des: '一家以俄罗斯商品为主的便利店，水果蔬菜日杂，一概都有。',
              img: 'images/logo/尤拉detail.png'
            }
            break
          case 'qj':
            this.card = {
              name: '全家霞公府',
              des: '樱花主题，满满都是少女心的便利店，同时还卖樱花味的薯片。',
              img: 'images/logo/全家detail.png'
            }
            break
          default:
            break
        }
        console.log(this.card)
        this.dialogVisible = true
      }
    },
    mounted () {
      var scene = document.getElementById('scene')
      var parallaxInstance = new ParallaxFLEX(scene, {
        relativeInput: true
      })
  
      var s = skrollr.init()
    }
  }
</script>
