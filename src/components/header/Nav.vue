<template>
  <div class="header">
    <el-row class="c">
      <el-col :span="10">
        <i class="el-icon-location"></i>
        <span class="area">{{ city }}</span>
        <router-link :to="{name: 'changecity'}" class="change-city">切换城市</router-link>
        <span>
          [
          <span
            v-for="item in ['门头沟区','大厂回族自治县','廊坊']"
            :key="item"
            class="address"
          >{{ item }}&nbsp;</span>
          ]
        </span>
        <span v-if="!login.isLogin">
          <router-link :to="{name: 'login'}" class="login">立即登录</router-link>
          <router-link :to="{name: 'register'}" class="register">注册</router-link>
        </span>
        <span v-else>
          <span class="userName">{{ login.userName }}</span>
          <span class="exit" @click="handelExit">退出</span>
        </span>
      </el-col>
      <el-col :span="14" tag="ul" class="nav-list">
        <li>
          <span>我的美团</span>
          <ul>
            <li v-for="item in ['我的订单', '我的收藏' ,'抵用券' , '账号设置']" :key="item">
              <span>{{ item }}</span>
            </li>
          </ul>
        </li>
        <li class="phoneAPP">
          <span>手机APP</span>
        </li>
        <li>
          <span>商家中心</span>
          <ul class="shops-center">
            <li v-for="item in ['美团餐饮商户中心', '登录商家中心' ,'美团智能收银' , '我想合作']" :key="item">
              <span>{{ item }}</span>
            </li>
          </ul>
        </li>
        <li>
          <span>美团规则</span>
          <ul>
            <li v-for="item in ['我的订单', '我的收藏' ,'抵用券' , '账号设置']" :key="item">
              <span>{{ item }}</span>
            </li>
          </ul>
        </li>
        <li>
          <span>网站导航</span>
          <el-row tag="ul" class="site-map">
            <el-col tag="li" class="travel" :span="6">
              <dl>
                <dt>酒单旅游</dt>
                <dd>
                  <span
                    v-for="item in ['国际机票','火车票','民宿','经济型酒店','主题酒店','商务酒店','公寓','豪华酒店','青年旅社','度假酒店','农家院']"
                    :key="item"
                  >{{ item }}</span>
                </dd>
              </dl>
            </el-col>
            <el-col tag="li" class="food" :span="5">
              <dl>
                <dt>吃美食</dt>
                <dd>
                  <span v-for="item in ['国际机票','火车票','民宿','经济型酒店','主题酒店']" :key="item">{{ item }}</span>
                </dd>
              </dl>
            </el-col>
            <el-col tag="li" class="movie" :span="3">
              <dl>
                <dt>看电影</dt>
                <dd>
                  <span v-for="item in ['国际机票','火车票','民宿','经济型酒店','主题酒店']" :key="item">{{ item }}</span>
                </dd>
              </dl>
            </el-col>
            <el-col tag="li" :span="10" class="app">
              <dl>
                <dt>手机应用</dt>
                <dd>
                  <a href="#">
                    <img
                      class="appicon"
                      src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                      title="美团app"
                      alt="美团app"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="appicon"
                      src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                      title="美团app"
                      alt="美团app"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="appicon"
                      src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                      title="美团app"
                      alt="美团app"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="appicon"
                      src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                      title="美团app"
                      alt="美团app"
                    />
                  </a>
                </dd>
              </dl>
            </el-col>
          </el-row>
        </li>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["city", "login"])
  },
  methods: {
    ...mapActions(["getPositionA"]),
    ...mapMutations(["changeLogin"]),
    handelExit() {
      window.localStorage.removeItem("userName");
      window.localStorage.removeItem("password");
      this.changeLogin({
        userName: '',
        isLogin: false
      })
      this.$router.push({
        name: 'index'
      })
    }
  },
  created() {
    this.getPositionA();
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/header/nav.scss";
</style>
