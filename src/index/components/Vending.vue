<template>
    <div id="box">
        <div id="machine" style="background:url('images/vending.png') no-repeat center;background-size:100% 100%">
            <div id="window">
                <img class="logo" src="#">
                <img class="logo" src="#">
                <img class="logo" src="#">
                <img class="logo" src="#">
                <img class="logo" src="#">
                <img class="logo" src="#">
            </div>
            <div id="operate">                
                <img class="output" src="#">
                <img class="button" src="#" @click="toNext()">
            </div>
        </div>
    </div>
    
</template>

<style scoped>

#box{
    background:#71ba2f;
    height: 760px;    
    padding: 160px 0;
}

#machine{
    width: 70%;
    height: 100%;
    margin: 0 auto;
    padding: 100px 0 0 50px;
}

#window{
    width: 1085px;
    height: 435px;
    padding: 50px 0 0 68px;
}

.logo{
    width: 275px;
    height: 145px;
    margin: 0 77px 76px 0;
}

.logo:hover{
    width: 325px;
    height: 195px;
    margin: -25px 52px 54px -25px;
}

#operate{    
    width: 1145px;
    height: 105px;
    margin: 67px 72px;
}
.output{
    width: 350px;
    height: 100px;
}
.button{
    width: 310px;
    height: 105px;
    margin-left: 480px;
}
</style>

<script>
export default {
  methods: {
    toNext () {
      this.$parent.api.moveSectionDown()
    }
  }
}
</script>
