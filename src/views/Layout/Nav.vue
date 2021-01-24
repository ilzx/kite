<template>

  <header class="header-navigation">
    <nav>
      <div class="logo"><router-link to="/">

      <img :src="logo_img" class="logo">
      </router-link></div>
      <h2 id="mnavh"><span class="navicon"></span></h2>
      <ul id="starlist" class="row">
        <li><router-link to="/"><i class="icon icon-home"></i> 首页</router-link></li>
        <popper
            trigger="hover"
            :options="{
      placement: 'bottom',
      modifiers: { offset: { offset: '0,2px' } }
    }">
          <div class="popper" style="width: 250px;line-height: 3.3;">
            <div class="flex-middle">
              <router-link class="sub-a" to="/category/1" v-for="n in 6" :key="n"><at-button hollow>前端{{n}}</at-button></router-link>
            </div>
          </div>

          <li class="menu" slot="reference"><a href="javascript:;"><i class="icon icon-box"></i> 分类</a></li>
        </popper>
        <li><router-link to="/timemachine"><i class="icon icon-server"></i> 时光机</router-link></li>

        <li><router-link to="/about"><i class="icon icon-user"></i> 关于我</router-link></li>
      </ul>
      <div class="searchbox row">

        <at-popover placement="bottom" v-model="show_search">
          <at-input placeholder="请输入搜索内容" icon="search" style="margin-right: 15px;"></at-input>
          <template slot="content">
            <p>这是一段内容，确定删除吗？</p>
            <div style="text-align: right; margin-top: 8px;">
              <at-button size="smaller" @click="show_search = false">取消</at-button>
              <at-button type="primary" size="smaller" @click="show_search = false">确定</at-button>
            </div>
          </template>
        </at-popover>

        <at-button type="info" hollow @click="login_modal=true">登录</at-button>
        <at-modal v-model="login_modal" :showFooter="false" :width="400">
          <div style="text-align:center;padding: 100px 40px 30px 40px;">
            <at-input v-model="inputValue" size="large" placeholder="输入账号或邮箱"></at-input>
            <at-input v-model="inputValue" type="password" size="large" placeholder="输入密码"></at-input>

            <div class="row at-row">
              <div class="col-md-4">
                <at-checkbox v-model="checkboxValue1" label="深圳">下次自动登录</at-checkbox>
              </div>
              <div class="col-md-6 col-md-offset-14" style="line-height: 2.2;">
                <router-link to="/"><span>忘记密码？</span></router-link>
              </div>
            </div>
            <at-button class="mg-top-30" style="width:100%;" type="info" @click="closeModal2" size="large">登 录</at-button>
            <h6 style="color: #007AFF;float:right;cursor: pointer;" @click="login_modal=false;register_modal=true">立即注册</h6>

            <div class="flex-middle" style="text-align: center;margin-top: 50px;">
              <a href=""><at-button circle class="mg-lr-5"><i class="iconfont icon-gongzhonghao"></i></at-button></a>
              <a href=""><at-button circle class="mg-lr-5"><i class="iconfont icon-weibo"></i></at-button></a>
              <a href=""><at-button circle class="mg-lr-5"><i class="iconfont icon-GitHub"></i></at-button></a>
              <a href=""><at-button circle class="mg-lr-5"><i class="iconfont icon-qq"></i></at-button></a>
            </div>
          </div>
        </at-modal>
        <at-modal v-model="register_modal" :showFooter="false" :width="400">
          <div style="text-align:center;padding: 100px 40px 50px 40px;">
            <at-input v-model="inputValue4" size="large" placeholder="输入邮箱" append-button>
              <template slot="append">
                <span>获得验证码</span>
              </template>
            </at-input>
            <at-input v-model="inputValue" size="large" placeholder="输入验证码"></at-input>
            <at-input v-model="inputValue" type="password" size="large" placeholder="输入密码"></at-input>
            <at-input v-model="inputValue" type="password" size="large" placeholder="确认密码"></at-input>

            <at-button class="mg-top-30" style="width:100%;" type="info" @click="closeModal2" size="large">注 册</at-button>
            <h6 style="color: #007AFF;float:right;cursor: pointer;" @click="login_modal=true;register_modal=false">去登录</h6>
          </div>
        </at-modal>
      </div>
    </nav>
  </header>
</template>

<script>
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
export default {
  name: "Nav",
  data(){
    return {
      logo_img:'https://cdn.115113.xyz/img/logo/kite_logo.svg',
      show_search:false,
      show_category:false,
      login_modal:false,
      register_modal:false
    }
  },
  components: {
    'popper': Popper
  },
  methods:{
    show_menu(res){
      this.show_category = res
    }
  }
}
</script>

<style>
.header{height: 280px;padding-top: 12px;background: #186ff2;}
.logo{width: 35px;float: left;margin:5px 0;}
.header-ul>li{float: left;padding: 15px;color:#ffff;cursor: pointer}
.header-ul>li>a{color: #ffff !important;}
.header-ul-is-current:after{position: absolute;top: 50px;width: 12px;height: 4px;content: "";background: #ffd800;border-radius: 2px;margin-left: -30px;}
.right-icon{float: right !important;color: black !important;line-height:1}
.right-icon>i{font-size:23px;}
.icon-weibo{color: #ea5d5c;}
.icon-gongzhonghao{color:#46bb36;}
.icon-qq{color:#23a0f0;}
.search{clear: both;width: 230px;float: right;margin-top: 70px;}
.sub-a:hover{background: none !important;display: inline !important;}
.at-input+.at-input{margin-top: 15px;}
.at-modal__body{background: url("https://iconfont.alicdn.com/t/9185ed83-e00c-4a7e-b730-cbd1868a4af8.png") no-repeat;}
</style>
