<template>
  <div class="main">
    <el-row >
      <my-banner />
    </el-row>
    <el-row class="c">
      <list-show />
    </el-row>
  </div>
</template>

<script>
import MyBanner from "@/components/banner/index";
import ListShow from "@/components/listShow/index";
export default {
  components: {
    MyBanner,
    ListShow
  }
};
</script>

<style lang='scss'>
.main{
  // position: absolute;
  // margin-top: -50px;
  transform: translateY(-50px);
}
</style>
