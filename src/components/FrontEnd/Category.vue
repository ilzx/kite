<template>
  <div class="container">
    <article class="row at-row main-content">
      <div class="col-md-17 mg-top-10">
        <Articles/>
      </div>
      <div class="col-md-7">
        <vueStickySidebar class="sidebar" containerSelector=".container" innerWrapperSelector='.sidebar__inner'>

          <at-card :no-hover="true" class="mg-top-10">
            <div class="row at-row">
              <div class="col-md-8">
                <img style="width: 100%" src="https://ddcdn.jd.com/ddimg/jfs/t1/126033/20/10167/27143/5f3eae3cE1b4e33d0/a2fc5eb19e3038db.jpg">
              </div>
              <div class="col-md-16" style="line-height: 1.8;padding: 13px 0;">
                <h5>关注“文讯学堂”公众号</h5>
                <p>随时随地获取创作内容</p>
              </div>
            </div>
          </at-card>

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


          <div class="beian-mark mg-top-10">
            <ul>
              <li style="font-size:13px;"><a href="https://beian.miit.gov.cn/" target="_blank">陇ICP备20001047号-1</a></li>
              <li style="font-size:13px;">联系方式 BASE64：ZW1haWw6d3h1bnNAcXEuY29t</li>
              <li>
                <p class="beian-mark-design">
                  DESIGN BY <a href="https://github.com/wxuns" target="_blank">WXUNS</a>. <i class="icon icon-heart-on" style="color: #F04151;font-size: 16px;"></i></p>
              </li>
            </ul>
          </div>
        </vueStickySidebar>

      </div>
    </article>
  </div>
</template>

<script>
import Articles from "@/views/Layout/Articles";
import vueStickySidebar from "vue-sticky-sidebar";
import Recommend from "@/views/Layout/Recommend";
export default {
  name: "Category",
  components: {Articles,Recommend,vueStickySidebar}
}
</script>

<style scoped>

</style>
