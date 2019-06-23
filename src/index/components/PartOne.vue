<template>
<div id="partone">

        <!-- autoplay="autoplay" -->
        <!-- background:url(images/man.jpg);background-size:100% 100%;height: 100%;width:100% -->
    <div class="section opening" style="">
      <transition name="fade" mode="out-in">
      <div id="opening" v-if="show">
        <video
         autoplay="autoplay"
          controls="controls"
          @ended="end">
          <source src="video/opening.mp4" type="video/mp4" />
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

    <div class="section store">
      <div id="store" data-0="right:50%;top:0%;" data-100p="right:0%;top:0%;">
        <img src="images/opening/store.png">
      </div>
      <div class="des des-store" data-0="right:80%;" data-100p="right:45%;">
        <p>这是王宁在北京东花市物美便利店工作的第二年。这位有些高大的年轻人微胖身材，皮肤白皙，一头棕色短发，刘海微微扎眼。2017年10月，他从老家河南来到北京，先在餐饮行业管了几个月库房，然后在18年经朋友介绍加入物美，“这里待遇更好一点，现在每个月八九千吧。”</p>
        <p>王宁现在是物美便利店东花市店的店长。这家店正处在东花市大街与东花市东街交叉路口的西南角，四周全是居民区，经营状况良好，每天的营业额大概可以达到五千元。物美便利店由北京物美商业集团股份有限公司直营，租金、货源都由公司统一管理，店铺利润也都归公司所有，到月底再进行店铺开销和人员工资的清算。</p>
      </div>
    </div>
    
    <div class="section intro">
      <div id="intro" style="height:100%;width:100%;">
        <video
          controls="controls"          
          @ended="end">
          <source src="video/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="section intro">
      <div id="scan" data-200p="right:0%;top:0%;" data-300p="right:50%;top:0%;">
        <img src="images/opening/scan.png">
      </div>
      <div class="des des-scan" data-200p="left:5%;" data-300p="left:45%;">
        <p>物美便利店的工作分早晚班。王宁通常是早班，早上八点到店，简单地与晚班人员交接，然后到店内的隔间中换上大红色的物美工作服。接下来，他会一边整理货架一边接待顾客，迎接整整十二个小时的忙碌。</p>
      </div>

    </div>

    <div class="section sequence">
      <div class="des des-scan" data-300p="left:5%;top:5%;" data-400p="left:5%;top:-10%;">
        <p>晚班的顾客相对少，但也并不十分清闲。公司每天都会派人来送货，分两拨。</p>
        <p>第一拨速冻食品，一般凌晨一两点来，如果当天货品少，还可能到四点多；</p>
        <p>第二拨是常温货品，固定在四五点天将亮未亮之时抵达。</p>
      </div>
      <div id="sequence" data-300p="left:50%;top:5%;" data-400p="left:50%;top:25%;" style="height:50%;width:50%;position:absolute;z-index:2;">
        <video
          controls="controls"
          @ended="end">
          <source src="video/sequence.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <div class="section history">
      <History></History>
    </div>
    
    <div class="section timeline">
      <Timeline></Timeline>
    </div>

    <div class="section story">
      <Story></Story>
    </div>
    
    <div class="section story">
      背影
    </div>
    
    <div class="section slider">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(slider,index) in sliderList" :key="index">
          <el-row>
            <el-col :span="12"><h2>便利情报站</h2><video src="#"></video></el-col>
            <el-col :span="12"><h3>{{ slider.des }}</h3></el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
    
<!-- :style="{top:index*10+'%',left:index*10+'%'}" -->
    <div class="section future">
      <div class="des des-future"
      :data-1300p="fromData(index)"
      :data-1750p="toData(index)" 
      style="padding:5%;"
      v-for="(article,index) in difficulties"
      :key="index"
      v-html="article.content">
      </div>
    </div>

</div>
</template>

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
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel--horizontal {
    overflow-x: hidden;
    width: 60%;
    height: 60%;
    margin: 10% auto;
  }
  .el-carousel__container {
    position: relative;
    height: 100% !important;
  }
#partone{
  height: 100%;
  position: relative;
}
.section{
  position: relative;
  height: 100%;
  width: 100%;
  background-color: darkseagreen;
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
  font-size: 30px;
}
.des-store{
  width: 40%;
  margin: 15% 5%;
  padding: 5%;
  font-size: 30px;
}
.des-scan{
  width: 30%;
  height: 50%;
  margin: 15% 0;
  padding: 5%;
  font-size: 30px;
}
.des-future{
  width: 45%;
  height: 20%;
  font-size: 30px;
}
.timeline{
  height: 450%;
}
.future{
  height: 450%;
}
</style>

<script>
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
        sliderList: [
          {
            des: '日本便利店：温度适宜，窗明几净。无论何时去便利店蹭杂志都不会尴尬，日本便利店是熟悉的驿站。站读文化”是日本便利店特有的一道风景线。'
          },
          {
            des: '不让客人等待，是日本便利店服务的一大原则。一旦客人排队，其他店员会立即跑到其他的收银台，一边向客人致歉，一边给客人结帐。是不是需要加热，是否需要筷子和勺子？”“饮料类是否需要吸管”？驿站服务，一站服务，无论何时何地，日本便利店都是行业的标杆。'
          },
          {
            des: '美国2:便利店最早起源于美国，但是在美国，由于面积大，人口少，所以便利店对于他们来说意义不大，因为人都居住得比较分散，所以大型的shopping mall才是美国特色，再加上由于竞争激烈，便利店盈利不大，导致便利店在美国普遍不多。通常美国人会把购物当作一种任务，每周会定期去大型超市去购买商品。'
          },
          {
            des: '美国加油站便利店：在美国，加油站等于服务站，由于政府法律规定营业场所及工作场所必须与个人居住地严格分开，生活居住区不准有商店营业，在中国随处可见的食杂店、便利店在美国的居住区中难觅其踪。所以，购物对美国人而言便成了一项专门任务，而非休闲活动。这时，上下班途中或生活区附近那些24小时营业的加油站里的便利店便填补了这个空缺。有些人去服务站并不是为了加油，而是为了到里面的便利店购物。'
          },
          {
            des: '韩国便利店：在韩国，和咖啡店一样随处可见的便是各式各样的便利店了。无论是上班族忙中得闲的美味午餐，还是观光客们填饱肚子的特色小食都可以在便利店中寻觅的到。便利店更是众多浪漫韩剧必备的拍摄地点，男女主人公在便利店门口的小桌上分享着一杯热乎乎的拉面看着都如此美好。“除了没有的都有了”，韩国人这么形容便利店。'
          },
          {
            des: '除了销售食物、生活用品、换钱、购买电话卡、手机充电等基础服务外，便利店还提供单人家庭便民服务、定制型服务。韩国多家便利店品牌多推出了快递配送服务。顾客可凭条形码到便利店取货或由便利店职员送货上门。此外，韩国还出现了提供洗涤服务的便利店。'
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
        ]
      }
    },
    mounted () {
      this.show = true
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
      end () {
        this.show = !this.show
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
