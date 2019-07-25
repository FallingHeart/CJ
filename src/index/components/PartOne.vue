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
          ref="open"
          autoplay="autoplay"
          controls="controls"
          @mouseover="playVideo('open')"
          @mouseout="pauseVideo('open')"
          @ended="end">
          <source src="http://qiniu.dat-day.com/video/opening.mp4" type="video/mp4" />
        </video>
      </div>
      </transition>
      <div id="man" data-0="left:42%;top:0%;" data-100p="left:-40%;top:100%;">
        <img src="images/opening/man.png" style="width:100%">
      </div>
      <div class="des des-man" data-0="left:5%" data-100p="left:-100%">
        <p>“微信支付宝？”王宁在最后三个字上顿了几顿，显得字字分明。他左手虚点着收银台键盘，低头盯着收银台，目光并不从屏幕上离开。</p>
        <p>“微信吧。”顾客打开微信支付，将它向前伸到王宁手边。</p>
        <p>王宁右手握上扫码器，翻花似的在半空中利落地转了一圈手腕，然后用扫码器的红外线对准条形码，一声清脆的“嘀”。</p>
      </div>
    </div>

    <div class="section store" style="background:url(images/bg/store.png);background-size:100% 100%;height: 100%;width:100%">
      <div id="store" data-0="right:50%;top:0%;" data-100p="right:0%;top:0%;">
        <img src="images/opening/store.png" style="width:100%">
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
          @mouseout="pauseVideo('intro')"
          >
          <source src="http://qiniu.dat-day.com/video/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="section intro" style="background:url(images/bg/store.png);background-size:100% 100%;height: 100%;width:100%">
      <div id="scan" data-200p="right:0%;top:0%;" data-300p="right:50%;top:0%;">
        <img src="images/opening/scan.png" style="width:100%">
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
          @mouseout="pauseVideo('scan')"
          >
          <source src="http://qiniu.dat-day.com/video/scan.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="section sequence" style="background:url(images/bg/store.png);background-size:100% 100%;height: 100%;width:100%">
      <div class="des des-seq" data-400p="left:5%;top:20%;" data-500p="left:5%;top:10%;">
        <p>晚班的顾客相对少，但也并不十分清闲。公司每天都会派人来送货，分两拨。</p>
        <p>第一拨速冻食品，一般凌晨一两点来，如果当天货品少，还可能到四点多；</p>
        <p>第二拨是常温货品，固定在四五点天将亮未亮之时抵达。</p>
      </div>
      <div id="sequence" data-400p="left:48%;top:5%;" data-500p="left:48%;top:30%;" style="height:50%;width:50%;position:absolute;z-index:2;">
        <video
          ref="purchase"
          controls="controls"
          poster="images/thumbnail/purchase.jpeg"
          @mouseover="playVideo('purchase')"
          @mouseout="pauseVideo('purchase')"
          >
          <source src="http://qiniu.dat-day.com/video/purchase.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="section sequence" style="background:url(images/bg/wumei.png);background-size:100% 100%;height: 100%;width:100%">
      <div class="des des-pre" style="right:5%;top:0%;">
        <p><span style="font-size:2.5em">物美便利店</span>在标准化便利店的经营模式的基础上，又很好地融入了北京本土小卖部和超市的传统：</p>
        <p>物美便利店可以使用物美超市卡，这对老年人尤其有吸引力——刚从国瑞商场旁的物美便利店出来的刘女士今年72岁，拖着一辆布袋购物车，手上拿着物美超市卡：“它们（标准化便利店）那个什么手机支付我不会用，我一般就用卡和现金。”对他们来说，标准化的便利店仿佛是只有都市年轻人才会光顾的场所。</p>
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
        data-1150p="left:100%;top:2%;"
        data-1250p="left:68.2%;top:3%;"
        data-1430p="left:68.2%;top:66%;"
        style="position:absolute;width:27.7%;">
      </div>
      <div><img src="images/talk/2.png" alt=""
        data-1150p="left:100%;top:2%;"
        data-1250p="left:52.3%;top:3%;"
        data-1430p="left:52.3%;top:66%;"
        style="position:absolute;width:39%;">
      </div>
      <div><img src="images/talk/3.png" alt=""
        data-1150p="right:100%;top:2%;"
        data-1250p="right:70%;top:3%;"
        data-1430p="right:70%;top:66%;"
        style="position:absolute;width:30.8%;">
      </div>

      <div><img src="images/talk/4.png" alt=""
        data-1190p="left:100%;top:2%;"
        data-1210p="left:60%;top:3%;"
        style="position:absolute">
      </div>
      <div><img src="images/talk/5.png" alt=""
        data-1190p="right:100%;top:2%;"
        data-1210p="right:60%;top:6%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/6.png" alt=""
        data-1210p="left:100%;top:2%;"
        data-1230p="left:60%;top:9%;"
        style="position:absolute">
      </div>
      <div><img src="images/talk/7.png" alt=""
        data-1210p="right:100%;top:2%;"
        data-1230p="right:60%;top:12%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/8.png" alt=""
        data-1230p="left:100%;top:2%;"
        data-1250p="left:60%;top:15%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/9.png" alt=""
        data-1290p="right:100%;top:2%;"
        data-1310p="right:60%;top:36%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/10.png" alt=""
        data-1290p="left:100%;top:2%;"
        data-1310p="left:60%;top:39%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/11.png" alt=""
        data-1310p="right:100%;top:2%;"
        data-1330p="right:60%;top:42%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/12.png" alt=""
        data-1310p="right:100%;top:2%;"
        data-1330p="right:60%;top:45%;"
        style="position:absolute">
      </div>
      
      <div><img src="images/talk/13.png" alt=""
        data-1370p="left:50%;top:2%;margin-left:0%;width:0%;"
        data-1390p="left:50%;top:51%;;margin-left:-12%;width:25.4%;"
        style="position:absolute;">
      </div>

      <div><img src="images/talk/14.png" alt=""
        data-1390p="left:100%;top:2%;"
        data-1410p="left:60%;top:72%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/15.png" alt=""
        data-1390p="right:100%;top:2%;"
        data-1410p="right:60%;top:75%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/17.png" alt=""
        data-1430p="left:100%;top:2%;"
        data-1450p="left:60%;top:84%;"
        style="position:absolute">
      </div>

      <div><img src="images/talk/16.png" alt=""
        data-1410p="right:100%;top:2%;"
        data-1430p="right:60%;top:81%;"
        style="position:absolute">
      </div>
    </div>
    
    <div class="section slider" style="background:url(images/slider.png) 0 0 / contain no-repeat">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(slider,index) in sliderList" :key="index">
          <el-row style="height:80%;margin-top: 15%;">
            <el-col :span="10" :offset="1" style="margin-top: 10%;">
              <video
              :ref="slider.ref"
              :poster="slider.poster"              
              controls="controls" 
              @mouseover="playVideo(slider.ref)"
              @mouseout="pauseVideo(slider.ref)"
              >
                <source :src="slider.video" type="video/mp4" />
              </video>
            </el-col>
            <el-col :span="10" :offset="2" v-html="slider.des" style="line-height:1.5;font-size: 2.5vh;background-color:#fef4ca;padding:5%"></el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>

<!-- :style="{top:index*10+'%',left:index*10+'%'}" -->
    <div class="section future" style="background:url(images/bg/dif.png);">
      <a id="kunjing"></a>
      <!-- <div class="des des-future"
      :data-950p="fromData(index)"
      :data-1400p="toData(index)" 
      style="padding:5%;"
      v-for="(article,index) in difficulties"
      :key="index"
      v-html="article.content">
      </div> -->
      <div class="des" style="background:url('images/difficulty/1.png') 0 0 / contain no-repeat;width:50%;height:8.3%;left:7.5%;" data-1600p="top:2%" data-1650p="top:0%"></div>
      <div class="des" style="background:url('images/difficulty/2.png') 0 0 / contain no-repeat;width:50%;height:12.5%;left:46.4%;" data-1650p="top:8%" data-1700p="top:2%"></div>
      <div class="des" style="background:url('images/difficulty/3.png') 0 0 / contain no-repeat;width:50%;height:12.5%;left:7.5%;" data-1650p="top:15%" data-1750p="top:10%"></div>
      <div class="des" style="background:url('images/difficulty/4.png') 0 0 / contain no-repeat;width:50%;height:12.5%;left:46.4%;" data-1700p="top:22%" data-1750p="top:15%"></div>
      <div class="des" style="background:url('images/difficulty/5.png') 0 0 / contain no-repeat;width:50%;height:20.8%;left:7.5%;" data-1750p="top:25%" data-1850p="top:20%"></div>
      <div class="des" style="background:url('images/difficulty/6.png') 0 0 / contain no-repeat;width:50%;height:12.5%;left:46.4%;" data-1750p="top:45%" data-1900p="top:25%"></div>
      <div class="des" style="background:url('images/difficulty/7.jpg') 0 0 / contain no-repeat;width:50%;height:12.5%;left:7.5%;" data-1850p="top:45%" data-1950p="top:20%"></div>
      <div class="des" style="background:url('images/difficulty/8.jpg') 0 0 / contain no-repeat;width:50%;height:12.5%;left:46.4%;" data-1870p="top:52%" data-1950p="top:25%"></div>
      <div class="des" style="background:url('images/difficulty/9.jpg') 0 0 / contain no-repeat;width:50%;height:24%;left:7.5%;" data-1900p="top:54%" data-2050p="top:20%"></div>
      <!-- <div id="intro" style="height:10%;width:100%;">
        <img        
          style="height:18%;width:100%;top: 60%;position: absolute;"
          data-1980p="transform[bounce]:scale(1,1);opacity:0"
          data-2020p="transform[bounce]:scale(1,1);opacity:1"
          src="images/difficulty/view.png">
      </div> -->
    </div>

    <div class="section sequence" style="background:url(images/bg/dif.png);background-size:100% 100%;height: 100%;width:100%">
      <div class="des des-left" style="right:23%;top:0%;">
        <p><span style="font-size:2.5vh">六月中旬，王宁离开这家自己工作了一年便利店回老家河南工作。</span></p>
        <p>在他走前，我们问他，回老家后打算做什么？</p>
        <p>“做农业吧。”王宁低着头，说话的时候习惯性地不看人，只是偶尔抬眼以示尊重。</p>
        <p>农业比便利店更挣钱吗？</p>
        <p>“也不好说。但是便利店行业的前景确实一般。”</p>
        <p>北京便利店整体不景气的现状几乎人尽皆知。在三里屯soho经营艾沃家便利店的店主天使美指指旁边就隔了一条回廊的vingo，“你看华润万家的便利店，几乎每天都亏，他们自己的员工都没什么信心了。要不是华润万家这个集团有钱，这店根本开不下去。”而她自己经营的艾沃家并不是集团连锁，大多依赖着熟客生意，也用低廉的价格优势赢得了部分市场，其实更像是间小卖部。</p>
        <p>王宁所在的这间物美便利店营业额还算不错，每天收入5000元，小有利润。然而王宁还提到了另一个让便利店店员可能亏损的小麻烦——职业打假人。</p>
        <p>“就是来找你商品的毛病，找完这个毛病就投诉你，就是问你店里面要钱。”那个时候王宁刚做便利店没几个月，就有一批专门打假的人来把店里所有过期的、质量不好的商品都买走，“趁你在忙的时候到处转，到处找东西”，然后去有关部门（国家食品药品监督管理局）投诉，“感觉就像勒索一样叫你赔钱”。打假人一共买了40块钱左右的商品，根据国家1000元以下自行协商解决的标准，向王宁要价一千，最后经过协商，王宁自掏腰包赔偿了900元。</p>
        <p>“这是个人经营不当，是我的责任。怨自己没有做到位，之后自己就认真点天天检查，也没有什么事了。”</p>
        <p>王宁离开后，物美便利店将由颇富经验的刘店长接管。对于北京便利店的困境与发展，刘店长向我们提供了有更多看法。</p>
      </div>
    </div>

<!-- background:url(images/opinion/man.jpg);background-size:100% 50%;height: 200%;width:100%; -->
    <div class="section opinion" style="height: 200%;background:url(images/bg/liu.jpeg) 0 0 / cover no-repeat;">
      <a id="weilai"></a>
      <transition name="fade" mode="out-in">
      <div id="opinion" v-if="show2">
        <video
          ref="liu"
          controls="controls"
          poster="images/thumbnail/liu.jpeg"
          @mouseover="playVideo('liu')"
          @mouseout="pauseVideo('liu')"
          @ended="end2">
          <source src="http://qiniu.dat-day.com/video/liu.mp4" type="video/mp4" />
        </video>
      </div>
      </transition>
      <div id="liu" data-2130p="left:22%;top:0%;width: 50%;" data-2200p="left:5%;top:50%;width: 50%;">
        <img src="images/opinion/talk.png" style="width: 100%;">
      </div>
      <div class="des des-liu" data-2130p="right:-50%;top:65%;" data-2200p="right:3%;top:50%;">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="(dif,index) in difficulties" v-bind:key="index" v-html="dif.content">
           
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
      <div class="des des-post" data-2830p="right:5%;top:50%;" data-2900p=right:5%;top:0%;>
        <p><span style="font-size:5vh">人来人去，车来车往。</span>在无数个十字路口、街道、商厦，一家家便利店在晨曦中迎来客人，在日暮里见证奋斗的身影。王宁走了，刘店长来了，在不断的交替更迭中，我们始终相信，便利店会越来越好.......</p>
      </div>
    </div>    

    <div class="section end">
      <div id="end" style="height:100%;width:100%;">
        <video
          ref="end"
          controls="controls"
          poster="images/thumbnail/end.jpeg"
          @mouseover="playVideo('end')"
          @mouseout="pauseVideo('end')"
          >
          <source src="http://qiniu.dat-day.com/video/end.mp4" type="video/mp4" />
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
  width:38.5%;
  height:100%;
  position: absolute;
}
#store{
  width:50%;
  height: 100%;
  position: absolute;
  z-index: 1;
}
#scan{
  width:44.7%;
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
  font-family: 宋体;
}
.des-man{
  width: 40%;
  height: 85%;
  margin: 5% 5%;
  padding: 0 5%;
  font-size: 4vh;
}
.des-store{
  width: 40%;
  height: 75%;
  margin: 5% 5%;
  padding: 0 5%;
  font-size: 3vh;
}
.des-scan{
  width: 40%;
  height: 50%;
  margin: 5% 0;
  padding: 0 5%;
  font-size: 4vh;
  top: 20%;
}
.des-seq{
  width: 35%;
  height: 50%;
  margin: 5% 0;
  padding: 0 5%;
  font-size: 4vh;
  top: 20%;
}
.des-pre{
  width: 60%;
  height: 80%;
  margin: 0;
  padding: 0 5%;
  font-size: 2.5vh;
}
.des-future{
  width: 45%;
  height: 20%;
  font-size: 28px;
}
.des-left{
  width: 52%;
  height: 80%;
  margin: 0 auto;
  padding: 1%;
  font-size: 2.3vh;
}
.des-liu{
  width: 40%;
  height: 70%;
  margin: 5% 5%;
  padding: 5%;
  font-size: 3.5vh;
}
.des-post{
  width: 60%;
  height: 50%;
  margin: 5% 0;
  padding: 5%;
  font-size: 4vh;
  line-height: 1.5;
}
.timeline{
  height: 350%;
  background: linear-gradient(to bottom,#fff,#ffbf42);
}
.talk{
  height: 300%;
}
.future{
  height: 500%;
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
            video: 'http://qiniu.dat-day.com/video/slider/jp.mp4',
            poster: 'images/slider/jp.jpg',
            ref: 'jp'
          },
          {
            des: '<p>便利店最早起源于美国。但由于面积大，人口少，便利店对美国人而言意义不大，分散的居住点使得大型的shopping mall才是美国特色，美国人把购物当作一种任务，每周定期去大型超市进行采购。此外，激烈的竞争和极低的利润导致便利店在美国普遍不多。所以，美国便利店多开在加油站中，白领通常会在通勤途中进入加油站，并非为了加油，而是为了去便利店购物。</p>',
            video: 'http://qiniu.dat-day.com/video/slider/us.mp4',
            poster: 'images/slider/us.jpg',
            ref: 'us'
          },
          {
            des: '<p>美国加油站便利店：在美国，加油站等于服务站，由于政府法律规定营业场所及工作场所必须与个人居住地严格分开，生活居住区不准有商店营业，在中国随处可见的食杂店、便利店在美国的居住区中难觅其踪。所以，购物对美国人而言便成了一项专门任务，而非休闲活动。这时，上下班途中或生活区附近那些24小时营业的加油站里的便利店便填补了这个空缺。有些人去服务站并不是为了加油，而是为了到里面的便利店购物。</p>',
            video: 'http://qiniu.dat-day.com/video/slider/oil.mp4',
            poster: 'images/slider/oil.jpg',
            ref: 'oil'
          },
          {
            des: '<p>韩国便利店：在韩国，便利店和咖啡店一样随处可见。无论是上班族的午餐，还是游客喜爱的特色小食都可以在这里找到。便利店更是众多浪漫韩剧必备的拍摄地点，男女主人公在便利店门口的小桌上分享着一杯热乎乎的拉面看着都如此美好。“除了没有的都有了”，韩国人这么形容便利店。韩国多家便利店品牌还多推出了快递配送服务。顾客可凭条形码到便利店取货或由便利店职员送货上门。此外，韩国还有提供洗涤服务的便利店。</p>',
            video: 'http://qiniu.dat-day.com/video/slider/kr.mp4',
            poster: 'images/slider/kr.jpg',
            ref: 'kr'
          }

        ],
        difficulties: [
          {
            content: '<b>大量品牌涌入，市场竞争惨烈</b><p>在几年前，北京便利店行业的市场竞争并没有如今这么激烈，整个北京内只有7-11和物美这两个品牌在市场中对峙。后来随着全家、便利蜂等各大品牌的涌入，便不可同日而语。直营便利店便利蜂以一个月开三十家甚至五十家的速度迅速扩张。开店具有明确的流程，在十五天到十七天内完成从选址到最后开业的全部过程。物美在二十一天就结束了，<b>大家都在赶时间</b>。</p>'
          },
          {
            content: '<b>连锁店靠规模化取胜，盈利时间金钱成本双高</b><p>在北京市政府政策的支持下，除了物美、7-11等在北京有着稳固地位的便利店企业之外，还萌生出了很多新增便利店品牌——斑马惠购”就是一个例子。</p><p>新兴品牌的便利店都是资本投入，要求在一定时间内有一定的利润。但便利店不可能在短时间形成利润。在这种长期的巨额亏损的情况下，便利店到底什么时候才能盈利呢—假如开50家的店的时候亏1个亿，开到100家的时候可能就亏了8000万...开到400家的时候就持平了，等到开到600家的时候，就赚钱了。</p>'
          },
          {
            content: '<b>传统内资企业体系刻板，店铺升级效率低</b><p>农行银行总部大厦里边都有物美的影子，连钓鱼台还有物美便利店。因为龙头企业受当地保护。这种企业一般只要物美销售额的3%当租金，水电费、租金全免。所以除了店员的工资，剩下的全是利润。</p><p>物美的店铺一直升级，但而正是因为高昂的利润，物美才<b>“不思进取”</b>。由于内资企业传统而落后的体制，每项决策的实施都要经过很多层级，不容易进行彻底的颠覆。</p>'
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
        if (['jp', 'kr', 'us', 'oil'].indexOf(key) !== -1) {
          this.$refs[key][0].play()
        } else {
          this.$refs[key].play()
        }
      },
      pauseVideo (key) {
        if (['jp', 'kr', 'us', 'oil'].indexOf(key) !== -1) {
          this.$refs[key][0].pause()
        } else {
          this.$refs[key].pause()
        }
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
