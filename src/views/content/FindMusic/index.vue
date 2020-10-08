<template>
  <div>
    <el-menu mode="horizontal" router :default-active="defaultActive">
      <el-menu-item index="recommend">个性推荐</el-menu-item>
      <el-menu-item index="songList">歌单</el-menu-item>
      <el-menu-item index="zBRadio">主播电台</el-menu-item>
      <el-menu-item index="arrange">排行榜</el-menu-item>
      <el-menu-item index="singer">歌手</el-menu-item>
      <el-menu-item index="newsetMusic">最新音乐</el-menu-item>
    </el-menu>
      <router-view />
  </div>
</template>

<script>
import { splitPath } from "@/utils/path";
export default {
  data() {
    return {
      defaultActive: "",
    };
  },
  created() {
    const pathFragment = splitPath(this.$route.path);
    this.defaultActive = pathFragment[1];
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  display: flex;
  justify-content: center;
  .el-menu-item {
    font-size: 14px;
    height: 40px;
    line-height: 40px;
  }
}
</style>