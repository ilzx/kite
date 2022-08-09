<template>
  <div class="container">
    <article class="row at-row main-content">
      <div class="col-md-17">
        <div class="subscribe-content-banner-head">
          <h1 style="color: #fd6260;"><i class="iconfont icon-tubiao- hot-icon"></i></h1>
          <router-link to="/cover_article">历史封面文章 <i class="iconfont icon-you"></i></router-link>
        </div>
        <div style="width:100%;height:270px;">
          <!-- Using the slider component -->
          <slider ref="slider" :options="options">
            <!-- slideritem wrapped package with the components you need -->
            <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
              <img class="no-right-key swiper-lazy swiper-lazy-loaded slider-img" :src="item.img">
              <div class="slider-title">
                <router-link to="/1">{{ item.title }}</router-link>
                <div></div>
              </div>
            </slideritem>
            <!-- Customizable loading -->
            <div slot="loading">loading...</div>
          </slider>
        </div>
        <ul id="blogtab">
          <li class="current">最新文章</li>
          <li><a href="list.html">心得笔记</a></li>
          <li><a href="list.html">CSS3|Html5</a></li>
          <li><a href="list.html">网站建设</a></li>
          <li><a href="list.html">文字标签</a></li>
          <li><a href="list.html">文字广告</a></li>
        </ul>

        <Articles/>

      </div>
      <div class="col-md-7">
        <vueStickySidebar class="sidebar" containerSelector=".container" :bottomSpacing="10" innerWrapperSelector='.sidebar__inner'>
          <at-card class="mg-top-10" :no-hover="true">
            <div class="row at-row no-gutter">
              <div class="col-md-12">
                <div class="at-box-row bg-c-brand-dark">
                  <div class="ProfileSideCreator-readCountTitle">昨日被阅读数</div>
                  <h2 class="ProfileSideCreator-readCountNumber">0</h2>
                  <div class="css-u2c28s">
                    <div class="css-1086365">较前日 --</div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="at-box-row bg-c-brand-light">
                  <div class="ProfileSideCreator-readCountTitle">网站文章数</div>
                  <h2 class="ProfileSideCreator-readCountNumber">88</h2>
                  <div class="css-u2c28s">
                    <div class="css-1086365">较前日 --</div>
                  </div>
                </div>
              </div>
            </div>
          </at-card>

          <Qcode/>
          <div class="subscribe-content-tag cloud mg-top-10">
            <at-card :style="{ width: '100%' }" :no-hover="true">
              <at-tag color="default">PHP</at-tag>
              <at-tag color="primary">js</at-tag>
              <at-tag color="success">面向对象</at-tag>
              <at-tag color="error">历史封面文章</at-tag>
              <at-tag color="warning">vue</at-tag>
              <at-tag color="#dddddd">科技兴行</at-tag>
              <at-tag color="info">ScrollReveal</at-tag>
              <at-tag color="#ecefce">科技兴行</at-tag>
            </at-card>
          </div>

          <Recommend/>

          <at-card class="mg-top-10" :no-hover="true">
            <h4 class="hot_title">友情链接</h4>
            <ul class="row">
              <li v-for="n in 8" :key="n">
                <a href="">iLzx博客{{ n }}</a>
                <span class="split-line" v-if="n != 8">·</span>
              </li>
            </ul>
          </at-card>

          <div class="beian-mark mg-top-10">
            <ul>
              <li style="font-size:13px;"><a href="https://beian.miit.gov.cn/" target="_blank">陇ICP备20001047号-1</a></li>
              <li style="font-size:13px;">联系方式 BASE64：ZW1haWw6d3h1bnNAcXEuY29t</li>
              <li>
                <p class="beian-mark-design">
                  DESIGN BY <a href="https://github.com/wxuns" target="_blank">WXUNS</a>. <i class="icon icon-heart-on"
                                                                                             style="color: #F04151;font-size: 16px;"></i>
                </p>
              </li>
            </ul>
          </div>
        </vueStickySidebar>
      </div>
    </article>
  </div>
</template>

<script>
import {slider, slideritem} from 'vue-concise-slider'
import vueStickySidebar from "vue-sticky-sidebar";
import Articles from "@/views/Layout/Articles";
import Recommend from "@/views/Layout/Recommend";
import Qcode from "@/views/Layout/Qcode";

export default {
  name: "Index",
  data() {
    return {
      recommend: {width: '200px', margin: '-80px 10px 0 0px', float: 'left'},
      someList: [
        {
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1796441972,2017789362&fm=26&gp=0.jpg',
          title: '怕得要死也要看！恐怖片为啥那么有吸引力？',
          style: {
            'background': '#1bbc9b'
          }
        },
        {
          img: 'https://img.zcool.cn/community/01ee5b5541be46000001e78c526ad2.jpg@1280w_1l_2o_100sh.jpg',
          title: '面对生活我毫无办法，但可以做张meme取笑它',
          style: {
            'background': '#4bbfc3'
          }
        },
        {
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156567015,2696730006&fm=26&gp=0.jpg',
          title: '还在「黑盒炼丹」？ 教你如何实现一行代码透视炼丹过程',
          style: {
            'background': '#7baabe'
          }
        },
        {
          img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3156567015,2696730006&fm=26&gp=0.jpg',
          title: '还在「黑盒炼丹」？ 教你如何实现一行代码透视炼丹过程',
          style: {
            'background': '#7baabe'
          }
        }
      ],
      //Slider configuration [obj]
      options: {
        thresholdDistance: 100, // Sliding distance threshold
        thresholdTime: 300, // Sliding time threshold decision
        grabCursor: true, // Scratch style
        speed: 300, // Sliding speed
        loop: true, // Infinite loop
        autoplay: 3000 // Auto play[ms]
      },
      loading: true
    }
  },
  components: {
    Articles,
    Recommend,
    slider,
    Qcode,
    slideritem,
    vueStickySidebar
  }, mounted() {
  }
}
</script>

<style>

</style>
