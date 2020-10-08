<template>
  <div class="right-content">
    <el-row class="nav">
      <el-col tag="ul" :span="17">
        <li v-for="item in ['美团外卖','猫眼电影','美团酒店','民宿/公寓','商家入驻','美团公益']" :key="item">{{ item }}</li>
      </el-col>
    </el-row>
    <el-row class="carousel">
      <el-col :span="13">
        <el-carousel>
          <el-carousel-item
            v-for="item in
          ['http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg','http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg','http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg']
          "
            :key="item"
          >
            <a href="#">
              <img :src="item" alt />
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4">
        <div class="pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="info">
          <div class="avatar">
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
          </div>
          <div v-if="!login.isLogin">
            <p>
              <router-link :to="{name: 'register'}">
                <el-button round>注册</el-button>
              </router-link>
            </p>
            <p>
              <router-link :to="{name : 'login'}">
                <el-button round>立即登录</el-button>
              </router-link>
            </p>
          </div>
          <div v-else>
            <p>欢迎你！{{ login.userName }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="guanggao">
      <el-col :span="6">
        <a href="#">
          <div class="jiudian"></div>
        </a>
      </el-col>
      <el-col :span="7">
        <a href="#">
          <div class="zishi"></div>
        </a>
      </el-col>
      <el-col :span="4">
        <a href="#">
          <div class="hezuo"></div>
        </a>
      </el-col>
      <el-col :span="6">
        <div class="download">
          <div class="qrcode-box">
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP" />
          </div>
          <p class="name">美团APP手机版</p>
          <p class="chwl">
            <span>1元起</span>吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["login"])
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/banner/banner.scss";
</style>
