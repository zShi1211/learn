<template>
  <div class="c">
    <el-row class="content">
      <el-row class="logo">
        <router-link :to="{name: 'index'}" tag="a" href="http://meituan.com"></router-link>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="pic">
            <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
          </div>
        </el-col>
        <el-col :span="12" class="login">
          <p class="error-msg" :class="{'active': error}">
            <i class="el-icon-error"></i>
            {{ error }}
          </p>
          <p class="title">
            <span>账号登录</span>
            <span class="mode" @click="modePhone = !modePhone">{{modePhone ? "普通登录" : "验证码"}}方式</span>
          </p>
          <p class="phone">
            <el-input placeholder="手机号" v-model="userName"></el-input>
          </p>
          <p class="password">
            <el-input placeholder="验证码" v-model="password" v-if="modePhone"></el-input>
            <el-input placeholder="密码" v-model="password" type="password" v-else></el-input>
          </p>
          <p class="forget-pwd">忘记密码？</p>
          <p class="button">
            <el-button plain @click="handelClick">登录</el-button>
          </p>
          <p class="register">
            还没有账号？
            <router-link :to="{name: 'register'}">免费注册</router-link>
          </p>
          <div class="other-login">
            <p>用合作网站账号登录</p>
            <a href="#" class="qq"></a>
            <a href="#" class="weibo"></a>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="footer">
      <el-row class="link">
        <ul>
          <li v-for="(item) in linkList" :key="item">{{ item }}</li>
        </ul>
      </el-row>
      <p>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userName: "",
      password: "",
      modePhone: false,
      linkList: ["关于美团", "加入我们", "商家入驻", "帮助中心", "美团手机版"],
      error: ""
    };
  },
  methods: {
    ...mapActions(["loginHandel"]),
    async handelClick() {
      const res = await this.loginHandel({
        userName: this.userName,
        password: this.password
      });
      if (res.status === "fail") {
        this.error = res.msg;
      } else {
        this.$router.push({ name: "index" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/login/index.scss";
</style>
