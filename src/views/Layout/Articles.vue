<template>
  <div class="article">
    <div class="blogs scrollreveal" v-for="n in 12" :key="n">
      <h3 class="blogtitle"><router-link :to="{name:'Article',params: {id: n}}" >别让这些闹心的套路，毁了你的网页设计!</router-link></h3>
      <span class="blogpic" v-if="n%2 == 0">
              <router-link :to="{name:'Article',params: {id: n}}" title=""><img src="https://www.17sucai.com/preview/385871/2018-09-17/bolg2/images/1.jpg" alt=""></router-link>
            </span>
      <span class="bplist" v-if="n%7 == 0">
              <a href="/" title="">
                <li><img src="https://www.17sucai.com/preview/385871/2018-09-17/bolg2/images/2.jpg" alt=""></li>
                <li><img src="https://www.17sucai.com/preview/385871/2018-09-17/bolg2/images/3.jpg" alt=""></li>
                <li><img src="https://www.17sucai.com/preview/385871/2018-09-17/bolg2/images/4.jpg" alt=""></li>
              </a>
            </span>
      <p class="blogtext">如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！... </p>
      <div class="bloginfo">
        <ul>
          <li class="author"><a href="/">XXX</a></li>
          <li class="lmname"><router-link :to="{name:'Category',params: {category_name: n}}">学无止境</router-link></li>
          <li class="timer">2018-5-13</li>
          <li class="view"><span>34567</span>已阅读</li>
          <li class="like">9999</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles"
}
</script>

<style scoped>

</style>