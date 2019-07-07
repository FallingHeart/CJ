<template>
<div id="partone">

        <!-- background:url(images/man.jpg);background-size:100% 100%;height: 100%;width:100% -->
    <div class="section opening" style="background:url(images/bg/first.png);background-size:100% 100%;height: 100%;width:100%">
      <div style="position:fixed;z-index:999;background-color:none;font-family:宋体;"
        v-bind:class="{ fullheight: isActive }"
        @mouseover="openNav"
        @mouseleave="closeNav">
        <el-menu
          ref="nav"
          default-active="#jishi"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          :router="true"
          background-color='#ffffff00'
          text-color='#ffffff'>
          <el-submenu index="1" style="">
            <template slot="title">
              <i class="el-icon-s-operation" style="color:#000;font-size: 30px;"></i>
            </template>
              <el-menu-item style="text-align:right;border-bottom: 2px solid;" index="#jishi">纪事</el-menu-item>
              <el-menu-item style="text-align:right;border-bottom: 2px solid;" index="#fazhan">发展</el-menu-item>
              <el-menu-item style="text-align:right;border-bottom: 2px solid;" index="#renqing">人情</el-menu-item>
              <el-menu-item style="text-align:right;border-bottom: 2px solid;" index="#kunjing">困境</el-menu-item>
              <el-menu-item style="text-align:right;border-bottom: 2px solid;" index="#weilai">未来</el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- <router-link to="#jishi">纪事</router-link>
        <router-link to="#fazhan">发展</router-link>
        <router-link to="#renqing">人情</router-link>
        <router-link to="#kunjing">困境</router-link>
        <router-link to="#weilai">未来</router-link> -->
      </div>

      <a id="jishi"></a>
      <transition name="fade" mode="out-in">
      <div id="opening" v-if="show">
        <video
         autoplay="autoplay"
          controls="controls"
          @ended="end">
          <source src="http://ptmwfaugr.bkt.clouddn.com/video/opening.mp4" type="video/mp4" />
        </video>
      </div>
      </transition>
      <div id="man" data-0="left:42%;top:0%;" data-100p="left:-40%;top:100%;">
        <img src="images/opening/man.png">
      </div>
      <div class="des des-man" data-top="left:5%" data-top-bottom="left:-100%">
        <p>“微信支付宝？”王宁在最后三个字上顿了几顿，显得字字分明。他左手虚点着收银台键盘，低头盯着收银台，目光并不从屏幕上离开。</p>
        <p>“微信吧。”顾客打开微信支付，将它向前伸到王宁手边。</p>
        <p>王宁右手握上扫码器，翻花似的在半空中利落地转了一圈手腕，然后用扫码器的红外线对准条形码，一声清脆的“嘀”。</p>
      </div>
    </div>

    <div class="section store" style="background:url(images/bg/store.png);background-size:100% 100%;height: 100%;width:100%">
      <div id="store" data-0="right:50%;top:0%;" data-100p="right:0%;top:0%;">
        <img src="images/opening/store.png">
      </div>
      <div class="des des-store" data-0="right:80%;" data-100p="right:45%;">
        <p>这是王宁在北京东花市物美便利店工作的第二年。2017年10月，他从老家河南来到北京，先在餐饮行业管了几个月库房，然后在18年经朋友介绍加入物美，“这里待遇更好一点，现在每个月八九千吧。”</p>
        <p>王宁现在是物美便利店东花市店的店长。这家店正处在东花市大街与东花市东街交叉路口的西南角，每天的营业额大概可以达到五千元。物美便利店由北京物美商业集团股份有限公司直营，租金、货源都由公司统一管理，店铺利润也都归公司所有，到月底再进行清算。</p>
      </div>
    </div>
    
    <div class="section intro">
      <div id="intro" style="height:100%;width:100%;">
        <video
          ref="intro"
          controls="controls"
          poster="images/thumbnail/intro.jpg"
          @mouseover="playVideo('intro')"
          @ended="end">
          <source src="http://ptmwfaugr.bkt.clouddn.com/video/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="section intro" style="background:url(images/bg/store.png);background-size:100% 100%;height: 100%;width:100%">
      <div id="scan" data-200p="right:0%;top:0%;" data-300p="right:50%;top:0%;">
        <img src="images/opening/scan.png">
      </div>
      <div class="des des-scan" data-200p="left:5%;" data-300p="left:45%;">
        <p>物美便利店的工作分早晚班。王宁通常是早班，早上八点到店，简单地与晚班人员交接，然后到店内的隔间中换上大红色的物美工作服。接下来，他会一边整理货架一边接待顾客，迎接整整十二个小时的忙碌。</p>
      </div>

    </div>
        
    <div class="section intro">
      <div id="sequence" style="height:100%;width:100%;">
        <video
          ref="scan"
          controls="controls"
          poster="images/thumbnail/scan.jpg"
          @mouseover="playVideo('scan')"
          >
          <source src="http://ptmwfaugr.bkt.clouddn.com/video/scan.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="section sequence" style="background:url(images/bg/store.png);background-size:100% 100%;height: 100%;width:100%">
      <div class="des des-scan" data-400p="left:5%;top:5%;" data-500p="left:5%;top:-10%;">
        <p>晚班的顾客相对少，但也并不十分清闲。公司每天都会派人来送货，分两拨。</p>
        <p>第一拨速冻食品，一般凌晨一两点来，如果当天货品少，还可能到四点多；</p>
        <p>第二拨是常温货品，固定在四五点天将亮未亮之时抵达。</p>
      </div>
      <div id="sequence" data-400p="left:50%;top:5%;" data-500p="left:50%;top:30%;" style="height:50%;width:50%;position:absolute;z-index:2;">
        <video
          ref="purchase"
          controls="controls"
          poster="images/thumbnail/purchase.jpeg"
          @mouseover="playVideo('purchase')"
          >
          <source src="http://ptmwfaugr.bkt.clouddn.com/video/purchase.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="section sequence" style="background:url(images/bg/wumei.png);background-size:100% 100%;height: 100%;width:100%">
      <div class="des des-pre" style="right:5%;top:0%;">
        <p><span style="font-size:60px">物美便利店</span>在标准化便利店的经营模式的基础上，又很好地融入了北京本土小卖部和超市的传统：物美便利店可以使用物美超市卡，这对老年人尤其有吸引力——刚从国瑞商场旁的物美便利店出来的刘女士今年72岁，拖着一辆布袋购物车，手上拿着物美超市卡：“它们（标准化便利店）那个什么手机支付我不会用，我一般就用卡和现金。”对他们来说，标准化的便利店仿佛是只有都市年轻人才会光顾的场所。</p>
        <p>但物美也在求新求变。</p>
        <p>2017年4月,物美与新零售平台多点联合推出的“自由购”手机自助结帐,只需扫描商品码并线上支付,就可跳过收银台结账环节。</p>
        <p>2018年12月11日，物美旗下多点便利店宣布开通外卖业务，接入O2O模式。</p>
        <p>2019年4月13日，物美便利店东花市店上线了饿么外卖平台。但王宁表示，目前还没有多少人发现物美已经在外卖平台上线，每天的线上接单量只有十来笔。</p>
        <p>然而，整个便利店行业发展却在数年间有了质的飞跃。</p>
      </div>
    </div>    

    <div class="section history">
      <a id="fazhan"></a>
      <History></History>
    </div>
    
    <div class="section timeline">
      <Timeline></Timeline>
    </div>

    <div class="section story">
      <a id="renqing"></a>
      <Story></Story>
    </div>
    
    <div class="section talk" style="background:url(images/bg/talk.png);">
      <div><img src="images/talk/1.png" alt=""
        data-1500p="left:100%;top:2%;"
        data-1600p="left:68.2%;top:3%;"
        data-1780p="left:68.2%;top:66%;"
        style="position:absolute">
      </div>
      <div><img src="images/talk/2.png" alt=""
        data-1500p="left:100%;top:2%;"
        data-1600p="left:52.3%;top:3%;"
        data-1780p="left:52.3%;top:66%;"
        style="position:absolute">
      </div>
      <div><img src="images/talk/3.png" alt=""
        data-1500p="right:100%;top:2%;"
        data-1600p="right:70%;top:3%;"
        data-1780p="right:70%;top:66%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/4.png" alt=""
        data-1540p="left:100%;top:2%;"
        data-1560p="left:60%;top:3%;"
        style="position:absolute">
      </div>
      <div><img src="images/talk/5.png" alt=""
        data-1540p="right:100%;top:2%;"
        data-1560p="right:60%;top:6%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/6.png" alt=""
        data-1560p="left:100%;top:2%;"
        data-1580p="left:60%;top:9%;"
        style="position:absolute">
      </div>
      <div><img src="images/talk/7.png" alt=""
        data-1560p="right:100%;top:2%;"
        data-1580p="right:60%;top:12%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/8.png" alt=""
        data-1580p="left:100%;top:2%;"
        data-1600p="left:60%;top:15%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/9.png" alt=""
        data-1640p="right:100%;top:2%;"
        data-1660p="right:60%;top:36%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/10.png" alt=""
        data-1640p="left:100%;top:2%;"
        data-1660p="left:60%;top:39%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/11.png" alt=""
        data-1660p="right:100%;top:2%;"
        data-1680p="right:60%;top:42%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/12.png" alt=""
        data-1660p="right:100%;top:2%;"
        data-1680p="right:60%;top:45%;"
        style="position:absolute">
      </div>
      
      <div><img src="images/talk/13.png" alt=""
        data-1720p="left:50%;top:2%;margin-left:-1px;width:2px;"
        data-1740p="left:50%;top:51%;;margin-left:-244px;width:488px;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/14.png" alt=""
        data-1740p="left:100%;top:2%;"
        data-1760p="left:60%;top:72%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/15.png" alt=""
        data-1740p="right:100%;top:2%;"
        data-1760p="right:60%;top:75%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/17.png" alt=""
        data-1760p="left:100%;top:2%;"
        data-1780p="left:60%;top:84%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/16.png" alt=""
        data-1760p="right:100%;top:2%;"
        data-1780p="right:60%;top:81%;"
        style="position:absolute">
      </div>
    </div>
    
    <div class="section slider" style="background:url(images/slider.png)">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(slider,index) in sliderList" :key="index">
          <el-row style="height:80%;margin-top: 15%;">
            <el-col :span="10" :offset="1" style="margin-top: 10%;">
              <video
              :ref="slider.ref"
              :poster="slider.poster"
              :src="slider.video"
              controls="controls" 
              @mouseover="playVideo(slider.ref)"></video>
            </el-col>
            <el-col :span="10" :offset="2" v-html="slider.des" style="line-height:1.5;font-size: 28px;background-color:#fef4ca;padding:5%"></el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>

<!-- :style="{top:index*10+'%',left:index*10+'%'}" -->
    <div class="section future" style="background:url(images/bg/dif.png);">
      <a id="kunjing"></a>
      <!-- <div class="des des-future"
      :data-1300p="fromData(index)"
      :data-1750p="toData(index)" 
      style="padding:5%;"
      v-for="(article,index) in difficulties"
      :key="index"
      v-html="article.content">
      </div> -->
      <div class="des" style="background:url('images/difficulty/1.png') no-repeat;width:50%;height:10%;left:7.5%;" data-1950p="top:2%" data-2000p="top:0%"></div>
      <div class="des" style="background:url('images/difficulty/2.png') no-repeat;width:50%;height:15%;left:46.4%;" data-2000p="top:8%" data-2050p="top:2%"></div>
      <div class="des" style="background:url('images/difficulty/3.png') no-repeat;width:50%;height:15%;left:7.5%;" data-2000p="top:15%" data-2100p="top:10%"></div>
      <div class="des" style="background:url('images/difficulty/4.png') no-repeat;width:50%;height:15%;left:46.4%;" data-2050p="top:22%" data-2100p="top:15%"></div>
      <div class="des" style="background:url('images/difficulty/5.png') no-repeat;width:50%;height:25%;left:7.5%;" data-2100p="top:25%" data-2200p="top:20%"></div>
      <div class="des" style="background:url('images/difficulty/6.png') no-repeat;width:50%;height:15%;left:46.4%;" data-2100p="top:45%" data-2250p="top:25%"></div>
      <div class="des" style="background:url('images/difficulty/7.jpg') no-repeat;width:50%;height:15%;left:7.5%;" data-2200p="top:45%" data-2300p="top:20%"></div>
      <div class="des" style="background:url('images/difficulty/8.jpg') no-repeat;width:50%;height:15%;left:46.4%;" data-2220p="top:48%" data-2300p="top:25%"></div>
      <div class="des" style="background:url('images/difficulty/9.jpg') no-repeat;width:50%;height:25%;left:7.5%;" data-2300p="top:50%" data-2400p="top:20%"></div>
      <div id="intro" style="height:10%;width:100%;">
        <img        
          style="height:18%;width:100%;top: 60%;position: absolute;"
          data-2330p="transform[bounce]:scale(1,1);opacity:0"
          data-2370p="transform[bounce]:scale(1,1);opacity:1"
          src="images/difficulty/view.png">
      </div>
    </div>
<!-- background:url(images/opinion/man.jpg);background-size:100% 50%;height: 200%;width:100%; -->
    <div class="section opinion" style="height: 200%;background:url(images/bg/liu.jpeg);">
      <a id="weilai"></a>
      <transition name="fade" mode="out-in">
      <div id="opinion" v-if="show2">
        <video
          ref="liu"
          controls="controls"
          poster="images/thumbnail/liu.jpeg"
          @mouseover="playVideo('liu')"
          @ended="end2">
          <source src="http://ptmwfaugr.bkt.clouddn.com/video/liu.mp4" type="video/mp4" />
        </video>
      </div>
      </transition>
      <div id="liu" data-2480p="left:22%;top:0%;" data-2550p="left:5%;top:50%;">
        <img src="images/opinion/talk.png">
      </div>
      <div class="des des-man" data-2480p="right:-50%;top:85%;height: 25%;" data-2550p="right:3%;top:50%;height: 25%;">
        <el-carousel :interval="5000" arrow="always">
        <el-carousel-item>
          <b>大量品牌涌入，市场竞争惨烈</b>
          <p>在几年前，北京便利店行业的市场竞争并没有如今这么激烈，整个北京内只有7-11和物美这两个品牌在市场中对峙。后来随着全家、便利蜂等各大品牌的涌入，便不可同日而语。直营便利店便利蜂以一个月开三十家甚至五十家的速度迅速扩张。开店具有明确的流程，在十五天到十七天内完成从选址到最后开业的全部过程。物美在二十一天就结束了，<b>大家都在赶时间</b>。</p>
        </el-carousel-item>
        <el-carousel-item>
          <b>连锁店靠规模化取胜，盈利时间金钱成本双高</b>
          <p>在北京市政府政策的支持下，除了物美、7-11等在北京有着稳固地位的便利店企业之外，还萌生出了很多新增便利店品牌——斑马惠购”就是一个例子。</p><p>新兴品牌的便利店都是资本投入，要求在一定时间内有一定的利润。但便利店不可能在短时间形成利润。在这种长期的巨额亏损的情况下，便利店到底什么时候才能盈利呢—假如开50家的店的时候亏1个亿，开到100家的时候可能就亏了8000万...开到400家的时候就持平了，等到开到600家的时候，就赚钱了。</p>
        </el-carousel-item>
        <el-carousel-item>
          <b>传统内资企业体系刻板，店铺升级效率低</b>
          <p>农行银行总部大厦里边都有物美的影子，连钓鱼台还有物美便利店。因为龙头企业受当地保护。这种企业一般只要物美销售额的3%当租金，水电费、租金全免。所以除了店员的工资，剩下的全是利润。</p><p>物美的店铺一直升级，但而正是因为高昂的利润，物美才<b>“不思进取”</b>。由于内资企业传统而落后的体制，每项决策的实施都要经过很多层级，不容易进行彻底的颠覆。</p>
        </el-carousel-item>
      </el-carousel>
      </div>
    </div>

    <div class="section intro" v-for="(img,index) in imgList" v-bind:key="index">
      <img
        :src="img.url"
        style="height:100%;width:100%;top: 0;position: absolute;"
        >
    </div>
    
    <div class="section post" style="background:url(images/bg/hope.jpeg);">
      <div class="des des-post" data-3180p="right:5%;top:50%;" data-3250p=right:5%;top:0%;>
        <p><span style="font-size:60px">人来人去，车来车往。</span>在无数个十字路口、街道、商厦，一家家便利店在晨曦中迎来客人，在日暮里见证奋斗的身影。王宁走了，刘店长来了，在不断的交替更迭中，我们始终相信，便利店会越来越好.......</p>
      </div>
    </div>    

    <div class="section end">
      <div id="end" style="height:100%;width:100%;">
        <video
          ref="end"
          controls="controls"
          poster="images/thumbnail/end.jpeg"
          @mouseover="playVideo('end')"
          >
          <source src="http://ptmwfaugr.bkt.clouddn.com/video/end.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

</div>
</template>
<style>
.el-menu {
  border-right: none !important;
}
.el-submenu__icon-arrow{
  display: none !important;
}
.el-menu-item.is-active{
  color: #fff !important;
}
  .el-carousel__container {
    position: relative;
    height: 100% !important;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #edb668 !important;
}
.fullheight{
  height: 100%;background-color:#65625aad;
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
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel--horizontal {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
  }
#partone{
  height: 100%;
  position: relative;
}
.section{
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #eee;
  overflow: hidden;
}
video{
  width: 100%;
  height: 100%;
}
#opening{
  height:100%;
  width:100%;
  position:absolute;
  z-index:2;
  /* opacity: 0; */
}
#opinion{  
  height:50%;
  width:100%;
  position:absolute;
  z-index:2;
  /* opacity: 0; */
}
#man{
  height:100%;
  position: absolute;
}
#store{
  height: 100%;
  position: absolute;
  z-index: 1;
}
#scan{  
  height:100%;
  position: absolute;
  z-index: 3;
}
#liu{
  height:100%;
  position: absolute;  
}
.des{
  text-align: justify;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  height: 100%;

}
.des-man{
  width: 45%;
  margin: 15% 5%;
  padding: 5%;
  font-size: 28px;
}
.des-store{
  width: 40%;
  margin: 15% 5%;
  padding: 5%;
  font-size: 28px;
}
.des-scan{
  width: 30%;
  height: 50%;
  margin: 15% 0;
  padding: 5%;
  font-size: 28px;
}
.des-pre{
  width: 60%;
  height: 70%;
  margin: 5% 0;
  padding: 5%;
  font-size: 28px;
}
.des-future{
  width: 45%;
  height: 20%;
  font-size: 28px;
}
.des-post{
  width: 60%;
  height: 50%;
  margin: 5% 0;
  padding: 5%;
  font-size: 28px;
  line-height: 1.5;
}
.timeline{
  height: 700%;
  background: linear-gradient(to bottom,#fff,#ffbf42);
}
.talk{
  height: 300%;
}
.future{
  height: 600%;
  margin-bottom: -75%;
}
.post{
  height: 60%;
}
.opinion{  
  background: linear-gradient(to bottom,#fff,#f8dc65);
}
</style>

<script>
  import skrollr from '../../../static/js/skrollr.js'
  import Timeline from 'C/Timeline.vue'
  import History from 'C/History.vue'
  import Story from 'C/Story.vue'
  export default {
    components: {
      Timeline,
      History,
      Story
    },
    data () {
      return {
        show: true,
        show2: true,
        isCollapse: false,
        isActive: false,
        sliderList: [
          {
            des: '<p>日本便利店：日本便利店是熟悉的驿站。“站读文化”是日本便利店特有的一道风景线。不让客人等待也是日本便利店服务的一大原则。一旦客人排队，其他店员会立即跑到其他的收银台，一边向客人致歉，一边给客人结帐并提供一站式驿站服务。无论何时何地，日本便利店都是行业的标杆。</p>',
            video: 'http://ptmwfaugr.bkt.clouddn.com/video/slider/jp.mp4',
            poster: 'images/slider/jp.jpg',
            ref: 'jp'
          },
          {
            des: '<p>便利店最早起源于美国。但由于面积大，人口少，便利店对美国人而言意义不大，分散的居住点使得大型的shopping mall才是美国特色，美国人把购物当作一种任务，每周定期去大型超市进行采购。此外，激烈的竞争和极低的利润导致便利店在美国普遍不多。所以，美国便利店多开在加油站中，白领通常会在通勤途中进入加油站，并非为了加油，而是为了去便利店购物。</p>',
            video: 'http://ptmwfaugr.bkt.clouddn.com/video/slider/us.mp4',
            poster: 'images/slider/us.jpg',
            ref: 'us'
          },
          {
            des: '<p>美国加油站便利店：在美国，加油站等于服务站，由于政府法律规定营业场所及工作场所必须与个人居住地严格分开，生活居住区不准有商店营业，在中国随处可见的食杂店、便利店在美国的居住区中难觅其踪。所以，购物对美国人而言便成了一项专门任务，而非休闲活动。这时，上下班途中或生活区附近那些24小时营业的加油站里的便利店便填补了这个空缺。有些人去服务站并不是为了加油，而是为了到里面的便利店购物。</p>',
            video: 'http://ptmwfaugr.bkt.clouddn.com/video/slider/oil.mp4',
            poster: 'images/slider/oil.jpg',
            ref: 'oil'
          },
          {
            des: '<p>韩国便利店：在韩国，便利店和咖啡店一样随处可见。无论是上班族的午餐，还是游客喜爱的特色小食都可以在这里找到。便利店更是众多浪漫韩剧必备的拍摄地点，男女主人公在便利店门口的小桌上分享着一杯热乎乎的拉面看着都如此美好。“除了没有的都有了”，韩国人这么形容便利店。韩国多家便利店品牌还多推出了快递配送服务。顾客可凭条形码到便利店取货或由便利店职员送货上门。此外，韩国还有提供洗涤服务的便利店。</p>',
            video: 'http://ptmwfaugr.bkt.clouddn.com/video/slider/kr.mp4',
            poster: 'images/slider/kr.jpg',
            ref: 'kr'
          }

        ],
        difficulties: [
          {
            content: '<p>物美便利店的运作模式其实是在日式便利店模式基础上加入了一定的中国特色、北京特色。虽然王宁经营的物美便利店是国产便利店”小霸王“，然而，纵观中国，小卖部亟需向标准化世界便利店变革。</p><p>在被戏称为“便利店荒漠（甚至是死地）”的北京，从小卖部到标准化便利店的转变更为艰难。主要原因有两个，一是北京市场的城市规划和生活习惯不适合便利店发展；其二，在北京证照办理审批耗时长，让从业者颇为挠头。零售前沿社在2017年专访全时便利店总经理杨波时，聊到北京便利店市场的问题，北京只能做“三个半”生意：季节原因造成的半年的生意，城市规划带来的半条马路的生意，生活习惯只能做半天的生意。</p><p>只有在东花市这样的居民区和二环内的写字楼办公区附近才会遍地开花，越向五环外走，便利店密度越低，呈几何倍数减少。</p>'
          },
          {
            content: '<p>虽然目前国内已经形成内外资便利店百花齐放的格局。便利店的地域性发展差异十分明显，除了美宜佳、全家、7-11和罗森等少数几家进行了多地区布局，其他便利店企业主要以所在的省、市为中心进行发展和延伸，经营区域相对局限。此外，国内外资和内资便利店也有着明显的布局特征，7-11、全家、罗森等外资便利店主要布局于一二线城市，且店对商圈要求更高，而内资便利店则主要在优势区域深耕，抢占居民社区。</p><p>外资便利店依靠先进的经营方式和独特的品牌营销，在中国开展加盟经营可谓轻车熟路，主要客户是白领阶层。本土便利店依靠密集开店战略，打响区域知名度，比如东莞起家的美宜佳90%的店铺分布于广东、十足便利店密集分布于浙江，目标客户是当地大众消费者。</p>'
          },
          {
            content: '<p>同时，由便利店分布可以看出，目前仅有上海和广东的便利店门店数量超过5000个，大多数地区的便利店总数都少于1000家。相比一线城市，二三线城市拥有更低的人力和租金成本，也使得其有可能成为便利店企业利润的重要来源，因此经济的持续增长以及消费习惯的培育有望帮助便利店企业实现市场的扩张。</p>'
          },
          {
            content: '<p>总体上来说，虽然国内的便利店行业增长迅猛，但仍然存在很大的不足。据中国连锁经营协会统计，国内多数城市便利店饱和度远低于日本和台湾，24h便利店普及率更低，店均客单量不高、单店盈利能力不足、竞争压力大、品牌忠诚度低等更是行业普遍的痛点。</p>'
          },
          {
            content: '<p>由于个人原因，王宁将在6月离开这家便利店回老家工作，而物美便利店将由颇富经验的刘店长接管。对于北京便利店的发展命运，刘店长似乎有更多的看法。</p><p>放刘店长视频，刘店长变成漫画，载入对北京市困境的表现：</p>'
          },
          {
            content: '<h2>大量品牌涌入，市场竞争惨烈</h2><p>在几年前，北京便利店行业的市场竞争并没有如今这么激烈，整个北京内只有7-11和物美这两个品牌在市场中对峙。后来随着全家、便利蜂等各大品牌的涌入，便不可同日而语。直营便利店便利蜂以一个月开三十家甚至五十家的速度迅速扩张。开店具有明确的流程，在十五天到十七天内完成从选址到最后开业的全部过程。物美在二十一天就结束了，<b>大家都在赶时间</b>。</p>'
          },
          {
            content: '<h2>连锁店靠规模化取胜，盈利时间金钱成本双高</h2><p>在北京市政府政策的支持下，除了物美、7-11等在北京有着稳固地位的便利店企业之外，还萌生出了很多新增的便利店品牌。由金融公司起家的“斑马惠购”就是一个例子。</p><p>新兴品牌的便利店都是资本投入，但由于资本逐利的特点，要求在一定时间内有一定的利润。便利店不可能在短时间内形成体系，也不可能形成利润。物美现在有400家店，但其中的将近250家都是亏损店。导致店铺亏损的因素有很多，比如房租、水电等等，和店铺的营业额没有太大的关系。</p><p>那么，在这种长期的巨额亏损的情况下，便利店到底什么时候才能盈利呢——<b>连锁模式的便利店是靠规模取胜的</b>。假如开50家的店的时候亏1个亿，开到100家的时候可能就亏了8000万，开200家的时候亏5000万，开到400家的时候就持平了，等到开到600家的时候，就赚钱了。因此，即使是7-11这种在全球著名的连锁便利店，在刚入驻北京的时候，也面临了同样的困境。</p>'
          },
          {
            content: '<h2>传统内资企业体系刻板，店铺升级效率低</h2><p>便利店门店类型分为流动型、商务型、大厦型便利店。大厦类型的门店是除物美品牌以外不可能有的，因为物美是地方龙头、地方企业，受到地方保护。工行，农行这些银行的总部大厦里边都有物美的影子，连钓鱼台还有物美便利店的身影。</p><p>因为相关国家的政策，政府机构不能和日系企业合作。而物美正是靠着这些门店赚钱。这种企业一般只要物美销售额的3%当租金，其余的水电费、租金都不需要交。所以除了店员的工资，剩下的全是利润。而正是因为高昂的利润，物美才<b>“不思进取”</b>。</p><p>物美的店铺一直在升级，但“就是动作步子不跟迈那么大，因为怕劈了胯了”，由于内资企业传统而落后的体制，每项决策的实施都要经过很多层级，不容易进行彻底的颠覆。</p>'
          },
          {
            content: '<h2>“中国特色”才是“国产”便利店的发展之道</h2><p>国内的便利店企业要走“中国特色的便利店之路”，目前国内便利店发展已经从单纯的模范向自主创新转变，其中不乏美宜佳、Today便利店等区域特色便利店品牌。但在坚持便利店地方特色的同时，企业发展也要遵守便利店行业基本的发展规律，确保好的经营能力、供应链能力，最终还是要在商品力、供应链上实现升级和突破。当然，北京市政府也正持续关注便利店发展，助力人民便捷生活。</p><p>2016.4，印发《提升生活性服务业品质促进消费增长措施》的通知，鼓励大型品牌连锁超市发展“小型化”业态，推动社区商业线上线下融合，搭建更多便民服务，建设10个以上的社区商业便民服务综合体。做好便利店（超市）、早餐、蔬菜零售、家政服务、末端配送以及社区商业便民服务综合体的标准或行业规范的修订完善与制定工作。</p><p>2016.12北京市连锁便利店行业规范（试行），规定了便利店面积、便利店经营范围、便利店服务项目等</p><p>2018．1印发《进一步优化连锁便利店发展环境的工作方案》通知，缩短了食品经营许可办理时长，办理总时限由20个工作日缩短至12个工作日。（市食药监局）。同时，连锁便利店由自动化设备完成制作、销售等后续工序的饮品，按散装食品销售的经营项目进行许可，无需标注为自制饮品制售项目。允许便利店内设立简易就餐区。（市工商局、市食药监局）</p><p>2018．10 ，北京市人民政府关于印发<关于进一步促进便利店发展的若干措施>的通知。主要就“加大资金支持，降低经营成本”、“改革经营许可，创新监管模式”等方面探索北京便利店的发展之路。不仅提供不超过500万元金额给予支持，更是简化审批程序，开拓更多便利店服务范围，为便利店迅速发展提供条件......</p>'
          },
          {
            content: '<h2>革命尚未成功，同志仍需努力，纵观北京便利店发展趋势，我们仍应</h2><p>一、拓展便利店的发展空间，优化便利店运营体系</p><p>二、增加便利店资金投入，降低运营成本</p><p>三、简化便利店的注册建立体系（从政府角度)</p><p>四、创新政府、机构的监管模式</p><p>五、培育品牌优势</p>'
          },
          {
            content: '<p>人来人去，车来车往。在无数个十字路口、街道、商厦，一家家便利店在晨曦中迎来客人，在日暮里见证奋斗的身影。王宁走了，刘店长来了，在不断的交替更迭中，我们始终相信，便利店会越来越好.......</p>'
          }
        ],
        imgList: [
          { url: 'images/opinion/开头.jpeg' },
          { url: 'images/opinion/1.png' },
          { url: 'images/opinion/2.png' },
          { url: 'images/opinion/3.png' },
          { url: 'images/opinion/4.png' },
          { url: 'images/opinion/结尾.jpeg' }
        ]
      }
    },
    mounted () {
      this.show = true
      this.$refs.nav.close('1')
      var s = skrollr.init({
        smoothScrolling: true,
        smoothScrollingDuration: 100,
        constants: {
          foo: function () {
          // Note: you can access the skrollr instance with `this` for things like `this.relativeToAbsolute`
            return Math.random() * 100// trolololol
          },
          vh: '100p'
        }
      })
    },
    methods: {
      playVideo (key) {
        this.$refs[key].play()
      },
      handleOpen () {
        this.isActive = true
      },
      handleClose () {
        this.isActive = false
      },
      openNav () {
        this.$refs.nav.open('1')
        this.handleOpen()
      },
      closeNav () {
        this.$refs.nav.close('1')
        this.handleClose()
      },
      end () {
        this.show = !this.show
      },
      end2 () {
        this.show2 = !this.show2
      },
      fromData (index) {
        return 'color:rgb(' + 255 * Math.random() + ',' + 255 + ',' + 255 + ');' +
        'width:' + (40 + Math.random() * 10) + '%;' +
        'top:' + index * 20 + '%;' +
        ((index % 2 === 0 ? 'left:' : 'right:') + Math.random() * 10 + '%')
      },
      toData (index) {
        return 'color:rgb(' + 255 * Math.random() + ',' + 1 + ',' + 1 + ');' +
        'width:' + (40 + Math.random() * 10) + '%;' +
        'top:' + index * 20 + '%;' +
        ((index % 2 === 0 ? 'left:' : 'right:') + Math.random() * 10 + '%')
      }
    }
  }
</script>
