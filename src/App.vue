<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <ra-scrolltop>
      <at-button icon="icon-arrow-up" size="large" circle></at-button>
    </ra-scrolltop>
  </div>
</template>
<script>
import Nav from "@/views/Layout/Nav";
export default {
  components: {Nav}
}
</script>
<style>
.at-card__body{padding: 20px !important;}
.slider-pagination-bullets {width: 15% !important;}
body{background-image:url(assets/body.png)!important;background-repeat: repeat !important;background-attachment: fixed !important;background-position: center top !important;}
#nprogress .bar {background: #6190e8 !important;}
</style>
