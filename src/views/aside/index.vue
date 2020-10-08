<template>
    <el-menu
      router
      background-color="#fefefefe"
      :default-active="defaultActive"
    >
      <el-menu-item-group>
        <template slot="title">推荐</template>
        <el-menu-item index="/findMusic">
          <i class="iconfont icon-yinyue"></i>
          发现音乐</el-menu-item
        >
        <el-menu-item index="/privateFM">
          <i class="iconfont icon-iconset0397"></i>
          私人FM</el-menu-item
        >
        <el-menu-item index="/look">
          <i class="iconfont icon-kanguo"></i>
          LOOK直播</el-menu-item
        >
        <el-menu-item index="/video">
          <i class="iconfont icon-video"></i>
          视频</el-menu-item
        >
        <el-menu-item index="/friend">
          <i class="iconfont icon-pengyou"></i>
          朋友</el-menu-item
        >
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">我的音乐</template>
        <el-menu-item index="/locaMusic">
          <i class="iconfont icon-dilanxianxingiconyihuifu_huabanfuben"></i>
          本地音乐</el-menu-item
        >
        <el-menu-item index="/downLoad">
          <i class="iconfont icon-xiazai"></i>
          下载管理</el-menu-item
        >
        <el-menu-item index="/musicCloud">
          <i class="iconfont icon-cloud"></i>
          我的音乐云盘</el-menu-item
        >
        <el-menu-item index="/myCollect">
          <i class="iconfont icon-soucang"></i>
          我的收藏</el-menu-item
        >
        <el-submenu index="3-1">
          <template slot="title">创建歌单</template>
          <el-menu-item index="/myLike">
            <i class="iconfont icon-aixin"></i>
            我喜欢的</el-menu-item
          >
        </el-submenu>
      </el-menu-item-group>
    </el-menu>
</template>

<script>
import { splitPath } from "@/utils/path";
export default {
  data() {
    return {
      defaultActive: "",
    };
  },
  watch: {
    $route: {
      handler() {
        const pathFragment = splitPath(this.$route.path);
        this.defaultActive = "/" + pathFragment[0];
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: calc(100% - 80px);
  overflow: auto;
  i {
    font-size: 14px;
    margin-right: 5px;
  }
  .el-menu-item-group {
    .el-menu-item-group__title {
      font-size: 14px;
    }
  }

  .el-menu-item {
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }
}
</style>