<template>
  <div class="wrapper">
    <el-container>
      <el-header height="60px" class="header">
        <Header @changeShowDetail="changeShowDetail" />
      </el-header>
      <el-container class="content">
        <el-aside width="250px">
          <Aside />
          <NowPlayerMuiscSmall @changeShowDetail="changeShowDetail" />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
        <NowPlayerMusicDetail
          :showDetail="showDetail"
          @changeShowDetail="changeShowDetail"
        />
      </el-container>
      <el-footer height="70px">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/views/aside/index";
import Footer from "@/views/footer";
import NowPlayerMuiscSmall from "@/components/NowPlayerMusicSmall";
import NowPlayerMusicDetail from "@/views/content/NowPlayerMusicDetail";
import Header from "@/views/header/index";
export default {
  components: {
    Aside,
    Footer,
    NowPlayerMuiscSmall,
    NowPlayerMusicDetail,
    Header,
  },
  data() {
    return {
      showDetail: false,
    };
  },
  methods: {
    changeShowDetail(val) {
      this.showDetail = val;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./element-variables.scss";

.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  width: 1500px;
  margin: 0 auto;
}
.header {
  background: $--color-primary;
}
.el-aside {
  padding: 10px;
  overflow: hidden;
}
.content {
  position: absolute;
  top: 60px;
  bottom: 70px;
  right: 0;
  left: 0;
  overflow: hidden;
}
.el-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #eee;
}
</style>

