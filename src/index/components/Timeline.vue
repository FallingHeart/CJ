<template>
  <div id="cd-timeline" class="cd-container" style="background: url('images/bg/his.png');">

      <div class="cd-timeline-block" v-for="(item, index) in list.slice(0,1)" :key="'1-'+index">
        <div class="cd-timeline-content">
          <!-- <h2>{{item.place}}</h2>
          <p>{{item.event}}</p>
          <a href="http://www.helloweba.com/view-blog-284.html" class="cd-read-more" target="_blank">阅读全文</a> -->
          <span class="cd-date">{{item.time}}</span>
          <img :src="'images/timeline/'+item.img+'.png'" alt="">
        </div>
      </div>

      <div class="cd-timeline-block">
        <div class="cd-timeline-content">
          <span class="cd-date">1946年</span>
          <img src="images/timeline/1946.png" alt="" style="height:25%">
          <video
            ref="first"
            controls="controls"
            poster="images/thumbnail/first.jpg"
            @mouseover="playVideo('first')"
            @mouseout="pauseVideo('first')"
            style="height:75%"
            >
            <source src="http://qiniu.bamo.tech/video/first.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="cd-timeline-block" v-for="(item, index) in list.slice(2,6)" :key="'2-'+index">
        <div class="cd-timeline-content">
          <!-- <h2>{{item.place}}</h2>
          <p>{{item.event}}</p>
          <a href="http://www.helloweba.com/view-blog-284.html" class="cd-read-more" target="_blank">阅读全文</a> -->
          <span class="cd-date">{{item.time}}</span>
          <img :src="'images/timeline/'+item.img+'.png'" alt="">
        </div>
      </div>

      <div class="cd-timeline-block" v-for="(item, index) in list.slice(6,9)" :key="'3-'+index">
        <div class="cd-timeline-content" style="height:20vh">
          <!-- <h2>{{item.place}}</h2>
          <p>{{item.event}}</p>
          <a href="http://www.helloweba.com/view-blog-284.html" class="cd-read-more" target="_blank">阅读全文</a> -->
          <span class="cd-date">{{item.time}}</span>
          <img :src="'images/timeline/'+item.img+'.png'" alt="" style="height:100%">
        </div>
      </div>

      <div class="cd-timeline-block" v-for="(item, index) in list.slice(9,list.length)" :key="'4-'+index">
        <div class="cd-timeline-content">
          <!-- <h2>{{item.place}}</h2>
          <p>{{item.event}}</p>
          <a href="http://www.helloweba.com/view-blog-284.html" class="cd-read-more" target="_blank">阅读全文</a> -->
          <span class="cd-date">{{item.time}}</span>
          <img :src="'images/timeline/'+item.img+'.png'" alt="">
        </div>
      </div>

      <div class="cd-timeline-block">
        <div class="cd-timeline-content" style="height:15vh">
          <img :src="'images/timeline/tobe.png'" alt="">
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>


<script>
export default {
  data () {
    return {
      list: [
        {
          time: '1927年',
          place: '美国德克萨斯州',
          event: '南方公司首创便利店原型',
          img: '1927'
        },
        {
          time: '1946年',
          place: '',
          event: '世界上第一家真正意义上的便利店 “7-Eleven”诞生',
          img: '1946'
        },
        {
          time: '1992年',
          place: '深圳',
          event: '7-Eleven开出五家门店，成为首个进入中国市场的外资便利店品牌',
          img: '1992'
        },
        {
          time: '1995年',
          place: '上海',
          event: '第一家国营便利店可的在',
          img: '1995'
        },
        {
          time: '1999年',
          place: '北京',
          event: '物美成为北京第一个本土便利店品牌',
          img: '1999'
        },
        {
          time: '2001年',
          place: '北京',
          event: '第一家外资便利店由倍顺好邻居在中轴路开出',
          img: '2001'
        },
        {
          time: '2002年',
          place: '北京',
          event: '全北京有 200 家 24 小时便利店，包括好邻居、物美、超市发、金象大药房、佐川急便等。',
          img: '2002'
        },
        {
          time: '2003年',
          place: '北京',
          event: 'SARS（非典）席卷中国大地，便利店作为居民购买生活必需品和防疫消毒用品的主要渠道，迎来了新的发展机遇。',
          img: '2003'
        },
        {
          time: '2004年',
          place: '北京',
          event: '7-ELEVEn在东直门开设了第一家门店，从此“零售+速食”模式成为北京便利店风靡一时的经营妙方。',
          img: '2004'
        },
        {
          time: '2017年2月',
          place: '北京',
          event: '互联网、北京奥运会以及电商网站的快速发展让北京便利店进入了新的发展阶段，以O2O拓展线上业务。',
          img: '2017.2'
        },
        {
          time: '2017年6月',
          place: '北京',
          event: '便利店又出现“生鲜+零售”的标配模式，东直门的7-Eleven也开始了卖菜生涯',
          img: '2017.6'
        }
      ]
    }
  },
  mounted () {
    function VerticalTimeline (element) {
      this.element = element
      this.blocks = this.element.getElementsByClassName('cd-timeline-block')
      // this.images = this.element.getElementsByClassName('cd-timeline-img')
      this.contents = this.element.getElementsByClassName('cd-timeline-content')
      this.offset = 0.8
      this.hideBlocks()
    } ;
    VerticalTimeline.prototype.hideBlocks = function () {
      var self = this
      for (var i = 0; i < this.blocks.length; i++) {
        (function (i) {
          if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
            // self.images[i].classList.add('cd-timeline-img--hidden')
            self.contents[i].classList.add('cd-timeline-content--hidden')
          }
        }
        )(i)
      }
    }

    VerticalTimeline.prototype.showBlocks = function () {
      var self = this
      for (var i = 0; i < this.blocks.length; i++) {
        (function (i) {
          if (self.contents[i].classList.contains('cd-timeline-content--hidden') && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
            // self.images[i].classList.add('cd-timeline-img--bounce-in')
            self.contents[i].classList.add('cd-timeline-content--bounce-in')
            // self.images[i].classList.remove('cd-timeline-img--hidden')
            self.contents[i].classList.remove('cd-timeline-content--hidden')
          }
        }
        )(i)
      }
    }

    var verticalTimelines = document.getElementsByClassName('cd-container')
    var verticalTimelinesArray = []
    var scrolling = false
    if (verticalTimelines.length > 0) {
      for (var i = 0; i < verticalTimelines.length; i++) {
        (function (i) {
          verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]))
        }
        )(i)
      }
      window.addEventListener('scroll', function (event) {
        if (!scrolling) {
          scrolling = true;
          (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll)
        }
      })
    }
    function checkTimelineScroll () {
      verticalTimelinesArray.forEach(function (timeline) {
        timeline.showBlocks()
      })
      scrolling = false
    }
  },
  methods: {
    playVideo (key) {
      this.$refs[key].play()
    },
    pauseVideo (key) {
      this.$refs[key].pause()
    }
  }
}
</script>


<style scoped>
/* -------------------------------- 

Primary style

-------------------------------- */
html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-size: 100%;
  color: #7f8c97;
  background-color: #e9f0f5;
}



img {
  height: 100%;
  max-width: 100%;
}

/* -------------------------------- 

Modules - reusable parts of our design

-------------------------------- */
.cd-container {
  /* this class is used to give a max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
  width: 90%;
  /* max-width: 1170px; */
  margin: 0 auto;
}
.cd-container::after {
  /* clearfix */
  content: '';
  display: table;
  clear: both;
}

/* -------------------------------- 

Main components 

-------------------------------- */

#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}
#cd-timeline::before {
  /* this is the vertical line */
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 100px;
  background: #fff;
}
@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -50px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: -4em 0 2em;
}
.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: -6em 0 4em;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}
.cd-timeline-img img {
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;
}
.cd-timeline-img.cd-picture {
  background: #75ce66;
}
.cd-timeline-img.cd-movie {
  background: #c03b44;
}
.cd-timeline-img.cd-location {
  background: #f0ca45;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 60px;
    height: 60px;
    left: 50%;
    margin-left: -30px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
  .cssanimations .cd-timeline-img.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-img.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    -moz-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }
}

.cd-timeline-content {
    height: 36vh;
    /* overflow: hidden; */
  position: relative;
  margin-left: 60px;
  background: white;
  border-radius: 0.25em;
  /* padding: 1em; */
  box-shadow: 0 3px 0 #d7e4ed;
}
.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-content h2 {
  color: #303e49;
}
.cd-timeline-content p, .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
  font-size: 13px;
  font-size: 0.8125rem;
}
.cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
  display: inline-block;
}
.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}
.cd-timeline-content .cd-read-more {
  float: right;
  padding: .8em 1em;
  background: #acb7c0;
  color: white;
  border-radius: 0.25em;
}
.no-touch .cd-timeline-content .cd-read-more:hover {
  background-color: #bac4cb;  
}
a.cd-read-more:hover{text-decoration:none; background-color: #424242;  }
.cd-timeline-content .cd-date {
  float: left;
  padding: .8em 0;
  opacity: .7;
}
.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid white;
}
@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    margin-left: 0;
    /* padding: 1.6em; */
    width: 45%;
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: white;
  }
  .cd-timeline-content .cd-read-more {
    float: left;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 50px;
    /* font-size: 1rem; */
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: white;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
  .cssanimations .cd-timeline-content.is-hidden {
    visibility: hidden;
  }
  .cssanimations .cd-timeline-content.bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    -moz-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}

@media only screen and (min-width: 1170px) {
  /* inverse bounce effect on even content blocks */
  .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    -moz-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}

.cd-timeline-img--hidden, .cd-timeline-content--hidden {
  visibility: hidden;
}

.cd-timeline-img--bounce-in {
  animation: cd-bounce-1 0.6s;
}

.cd-timeline-content--bounce-in {
  animation: cd-bounce-2 .6s
}

@keyframes cd-bounce-1 {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);    
  }
}

@keyframes cd-bounce-2 {
  0% {
    opacity: 0;
    transform: translateX(-100px)
  }

  60% {
    opacity: 1;
    transform: translateX(20px)
  }

  100% {
    transform: translateX(0)
  }
}
</style>

