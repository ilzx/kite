<template>
  <div id="app">
    <Nav />
    <router-view />
    <ra-scrolltop>
      <at-button icon="icon-arrow-up" size="large" circle></at-button>
    </ra-scrolltop>
  </div>
</template>
<script>
import Nav from "@/views/Layout/Nav";
export default {
  components: { Nav },
};
</script>
<style>
.at-card__body {
  padding: 20px !important;
}
.slider-pagination-bullets {
  width: 15% !important;
}
body {
  /* background-repeat: repeat !important;
  background-attachment: fixed !important;
  background-position: center top !important;
  background-image: url(https://desktop.github.com/images/star-bg.svg) !important;
  background-position: 50% 0 !important;
  background-size: auto 100% !important; 
  background-attachment: fixed !important;
  background-color: #f5fcff !important;
  background-position: 0 60px !important;
  background-image: url(//f.bmcx.com/img/bg.gif?v=17052205) !important;
  background-repeat: repeat-x !important;*/
    background-image: url(https://desktop.github.com/images/star-bg.svg) !important;
    background-repeat: repeat-x !important;
    background-position: center 0, 0 0, 0 0 !important;
}
#nprogress .bar {
  background: #6190e8 !important;
}
</style>
