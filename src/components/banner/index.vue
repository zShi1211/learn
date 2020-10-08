<template>
  <div class="banner">
    <el-row class="c">
      <el-col :span="4">
        <my-menu />
      </el-col>
      <el-col :span="20">
        <my-banner />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "./Menu";
import MyBanner from "./Banner";
export default {
  components: {
    MyMenu,
    MyBanner
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/banner/index.scss";
</style>
