<template>
  <div>
    <el-row class="header">
      <div class="c">
        <router-link tag="div" :to="{name: 'index'}" class="pic">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
        </router-link>
        <div class="login">
          <span>没有美团账号?</span>
          <router-link :to="{name: 'login' }">
            <el-button size="mini">登录</el-button>
          </router-link>
        </div>
      </div>
    </el-row>
    <el-row class="content c">
      <el-form :model="info" status-icon :rules="rules" ref="form" label-width="100px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="info.userName"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="pass">
          <el-input type="password" v-model="info.pass" auto-complete="off"></el-input>
          <div class="pass-safety">
            <div class="textWrap">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
            <div :class="['bg', safetyClass]"></div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="info.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">同意以下协议并注册</el-button>
        </el-form-item>
      </el-form>
      <p class="deal">
        <a href="#">《美团点评用户服务协议》</a>
        <a href="#">《美团点评隐私政策》</a>
      </p>
    </el-row>
    <el-row class="footer">
      <p class="c">©meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </el-row>
  </div>
</template>

<script>
import { register } from "@/axios/api";
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度大于6"));
      } else if (value.length > 12) {
        callback(new Error("密码长度不能超于12"));
      } else {
        if (this.info.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.info.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      info: {
        pass: "",
        checkPass: "",
        userName: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur" }]
      },
      safetyClass: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const data = {
            userName: this.info.userName,
            password: this.info.pass,
            rePassword: this.info.checkPass
          };
          const res = await register(data);
          if (res.status === "success") {
            this.$router.push({
              name: "login"
            });
          } else {
            alert(res.msg);
          }
        } else {
          return false;
        }
      });
    }
  },
  watch: {
    "info.pass": function(val) {
      if (val === "") {
        this.safetyClass = "";
        return;
      }
      // const weakReg = /^(?=.*\d).{6,12}$/;
      const middleReg = /^(?=.*\d)(?=.*[A-z]).{6,12}$/;
      const strongReg = /^(?=.*\d)(?=.*[A-z])(?=.*[_@#$%]).{6,12}$/;
      if (strongReg.test(val)) {
        this.safetyClass = "strong";
      } else if (middleReg.test(val)) {
        this.safetyClass = "middle";
      } else {
        this.safetyClass = "weak";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/register/index.scss";
</style>
