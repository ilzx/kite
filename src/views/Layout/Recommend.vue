<template>
  <div class="subscribe-content-tag mg-top-10">
    <at-card :style="{ width: '100%' }" :no-hover="true">
      <h4 class="hot_title">热门文章</h4>
      <div class="feed_activiey_calendar">
        <ul class="tracking-statistics">
          <li v-for="n in 6" :key="n">
            <div class="hot_content hot_content_border" v-if="n<6">
              <span class="activity_name"><a href="http://openinfradays.csdn.net/?utm_source=44769593" target="_blank">【科技前沿】面试了十个应届生九个都是秒杀系统，你确定你们那是秒杀？</a></span>
            </div>
            <div class="hot_content" v-else >
              <span class="activity_name"><a href="http://openinfradays.csdn.net/?utm_source=44769593" target="_blank">【深度学习实践】如何降低电力行业的运维成本，提高巡检智能水平</a></span>
            </div>
          </li>
        </ul>
      </div>
    </at-card>
  </div>
</template>

<script>
export default {
name: "Recommend"
}
</script>

<style scoped>

</style>