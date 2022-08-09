<template>
  <div class="container">
    <div class="article_panal">
      <at-badge value="3">
        <at-button icon="icon-thumbs-up" size="large" circle></at-button>
      </at-badge>
      <at-badge value="3">
        <at-button icon="icon-message-square" size="large" circle></at-button>
      </at-badge>
      <at-badge value="3" :show="false">
        <at-button icon="icon-share-2" size="large" circle></at-button>
      </at-badge>
    </div>
    <article class="row at-row main-content">
      <div class="col-md-17 mg-top-10">
        <!--        文章内容-->
        <at-card :no-hover="true">
          <div class="markdown-body ">
            <h1><a id="user-content-github-markdown-css-demo" class="anchor" href="#github-markdown-css-demo" aria-hidden="true"><span class="octicon octicon-link"></span></a>优化PHP和Laravel以提高Web应用的性能</h1>
            <at-breadcrumb separator="/">
              <at-breadcrumb-item>发布于 2020年8月30日 03:03:17</at-breadcrumb-item>
              <at-breadcrumb-item to="/">PHP</at-breadcrumb-item>
            </at-breadcrumb>

            <p><a name="user-content-headers"></a></p><a name="user-content-headers">

          </a><h2><a name="user-content-headers"></a><a id="user-content-headers" class="anchor" href="#headers" aria-hidden="true"><span class="octicon octicon-link"></span></a>Headers</h2>

            <pre lang="no-highlight"><code># H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
</code></pre>

            <h1><a id="user-content-h1" class="anchor" href="#h1" aria-hidden="true"><span class="octicon octicon-link"></span></a>H1</h1>

            <h2><a id="user-content-h2" class="anchor" href="#h2" aria-hidden="true"><span class="octicon octicon-link"></span></a>H2</h2>

            <h3><a id="user-content-h3" class="anchor" href="#h3" aria-hidden="true"><span class="octicon octicon-link"></span></a>H3</h3>

            <h4><a id="user-content-h4" class="anchor" href="#h4" aria-hidden="true"><span class="octicon octicon-link"></span></a>H4</h4>

            <h5><a id="user-content-h5" class="anchor" href="#h5" aria-hidden="true"><span class="octicon octicon-link"></span></a>H5</h5>

            <h6><a id="user-content-h6" class="anchor" href="#h6" aria-hidden="true"><span class="octicon octicon-link"></span></a>H6</h6>

            <p>Alternatively, for H1 and H2, an underline-ish style:</p>

            <h1><a id="user-content-alt-h1" class="anchor" href="#alt-h1" aria-hidden="true"><span class="octicon octicon-link"></span></a>Alt-H1</h1>

            <h2><a id="user-content-alt-h2" class="anchor" href="#alt-h2" aria-hidden="true"><span class="octicon octicon-link"></span></a>Alt-H2</h2>

            <p><a name="user-content-headers"></a><a name="user-content-emphasis"></a></p><a name="user-content-emphasis">

          </a><h2><a name="user-content-emphasis"></a><a id="user-content-emphasis" class="anchor" href="#emphasis" aria-hidden="true"><span class="octicon octicon-link"></span></a>Emphasis</h2>

            <pre lang="no-highlight"><code>Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
</code></pre>

            <p>Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.</p>

            <p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>

            <p>Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.</p>

            <p>Strikethrough uses two tildes. <del>Scratch this.</del></p>

            <p><a name="user-content-emphasis"></a><a name="user-content-lists"></a></p><a name="user-content-lists">

          </a><h2><a name="user-content-lists"></a><a id="user-content-lists" class="anchor" href="#lists" aria-hidden="true"><span class="octicon octicon-link"></span></a>Lists</h2>

            <p>(In this example, leading and trailing spaces are shown with with dots: ⋅)</p>

            <pre lang="no-highlight"><code>1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
</code></pre>

            <ol>
              <li>First ordered list item</li>
              <li>Another item

                <ul>
                  <li>Unordered sub-list.</li>
                </ul></li>
              <li>Actual numbers don't matter, just that it's a number

                <ol>
                  <li>Ordered sub-list</li>
                </ol></li>
              <li><p>And another item.</p>

                <p>You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).</p>

                <p>To have a line break without a paragraph, you will need to use two trailing spaces.
                  Note that this line is separate, but within the same paragraph.
                  (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)</p></li>
            </ol>

            <ul>
              <li>Unordered list can use asterisks</li>
              <li>Or minuses</li>
              <li><p>Or pluses</p></li>
            </ul>

            <ol>
              <li>foo

                <ol>
                  <li>bar

                    <ol>
                      <li>baz

                        <ol>
                          <li>faz</li>
                        </ol></li>
                    </ol></li>
                </ol></li>
              <li><p>foo2</p></li>
            </ol>

            <ul>
              <li>foo

                <ul>
                  <li>bar

                    <ul>
                      <li>baz

                        <ul>
                          <li>faz</li>
                        </ul></li>
                    </ul></li>
                </ul></li>
              <li><p>foo2</p></li>
            </ul>

          </div>
        </at-card>
        <div class="row at-row mg-top-10">
          <div class="col-md-12">
            <at-card :no-hover="true">
              上一篇：<router-link to="/">用「增量」思想提升代码检查和打包构建的效率
            </router-link>
            </at-card>
          </div>
          <div class="col-md-12">
            <at-card :no-hover="true">
              下一篇：<router-link to="/">实现一个简单的基于 WebAssembly 的图片处理应用
            </router-link>
            </at-card>
          </div>
        </div>
        <at-card :no-hover="true" class="mg-top-10">
          <at-textarea v-model="inputValue" placeholder="请输入评论..."></at-textarea>
          <at-button type="primary" class="mg-top-10" style="float: right;">发表</at-button>
          <div class="row at-row mg-top-10" style="clear: right;" v-for="n in 2" :key="n">
            <div class="col-md-3">
              <img src="https://tvax1.sinaimg.cn/crop.0.0.1080.1080.1024/9efdb6a4ly8g16mfcju4aj20u00u0tdk.jpg?KID=imgbed,tva&Expires=1598812326&ssig=A0sDggmvOp" alt="" width="55px">
            </div>
            <div class="col-md-21">
              <h6>lizhixu</h6>
              <span>WASM 有啥应用场景吗 除了web游戏.举例 假设你现在有一套自定义协议和配套协议实现的应用(譬如是 C/Cpp/Rust 程序) 然后有一种基于此协议的文件(譬如某格式视频) 然后你想在前端使用这种文件 你是用 JS 重新实现一遍该协议 还是直接把配套应用转到 wasm 呢</span>
              <div class="row mg-top-10">
                <div class="col-md-3">2个月前</div>
                <div class="col-md-3 col-md-offset-18">
                  <i class="icon icon-message-square"></i> 回复
                </div>
              </div>
            </div>

            <div class="fixed mg-top-10" style="margin-left: 50px;width: 100%">

              <at-textarea v-model="inputValue" placeholder="请输入评论..."></at-textarea>
              <at-button type="primary" class="mg-top-10" style="float: right;">发表</at-button>
            </div>
            <div class="row at-row mg-top-10" style="clear: right;background: #fafbfc;padding: 8px;margin-left: 50px;" v-for="i in 2" :key="i">
              <div class="col-md-3">
                <img src="https://tvax4.sinaimg.cn/crop.0.0.996.996.1024/e318a1b0ly8ggeuuuuuofj20ro0rotbk.jpg?KID=imgbed,tva&Expires=1598810504&ssig=1CsIXMyzEv" alt="" width="55px">
              </div>
              <div class="col-md-21">
                <h6>lizhixu</h6>
                <span>Laravel是一套简洁、优雅的PHP Web开发框架(PHP Web Framework)。它可以让你从面条一样杂乱的代码中解脱出来；它可以帮你构建一个完美的网络APP，而且每行代码都可以简洁、富于表达力。</span>
                <div class="row mg-top-10">
                  <div class="col-md-3">2个月前</div>
                  <div class="col-md-3 col-md-offset-18">
                    <i class="icon icon-message-square"></i> 回复
                  </div>
                </div>
              </div>
            </div>
          </div>
        </at-card>
      </div>
      <div class="col-md-7">
        <vueStickySidebar class="sidebar" containerSelector=".container" innerWrapperSelector='.sidebar__inner'>
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

          <at-card :no-hover="true" class="mg-top-10">
            <h4 class="hot_title">目录</h4>
            <t-anchor :affixProps="{ offsetTop: 150 }">
              <t-anchor-item href="#github-markdown-css-demo" title="基础锚点"></t-anchor-item>
              <t-anchor-item href="#多级锚点" title="多级锚点"></t-anchor-item>
              <t-anchor-item href="#指定容器锚点" title="指定容器锚点"></t-anchor-item>
              <t-anchor-item href="#特定交互锚点" title="特定交互锚点"></t-anchor-item>
              <t-anchor-item href="#不同尺寸的锚点" title="不同尺寸的锚点" />
            </t-anchor>
          </at-card>
        </vueStickySidebar>
      </div>
    </article>
  </div>
</template>

<script>
import Recommend from "@/views/Layout/Recommend";
import vueStickySidebar from "vue-sticky-sidebar";
export default {
name: "Article",
  components: {Recommend,
    vueStickySidebar},
  mounted() {
    this.$scrollReveal().reveal('.scrollreveal');
  },
  methods:{
  }
}
</script>

<style>

</style>