<template>
  <el-container>
    <el-header height="auto">
      <MyHeader />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from "@/components/header/index";
import MyFooter from "@/components/footer/index";
import { mapActions } from "vuex";
export default {
  components: {
    MyHeader,
    MyFooter
  },
  methods: {
    ...mapActions(["loginHandel"])
  },
  created() {
    if (!window.localStorage.getItem("userName")) {
      return;
    }
    const data = {
      userName: window.localStorage.getItem("userName"),
      password: window.localStorage.getItem("password")
    };
    this.loginHandel(data);
  }
};
</script>

<style lang="scss">
.el-main {
  overflow: initial;
}
</style>
