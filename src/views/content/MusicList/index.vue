<template>
  <div>
    <template v-if="detail">
      <div>
        <SongListTitle :detail="detail.playlist" />
        <el-menu mode="horizontal" router :default-active="defaultActive">
          <el-menu-item index="playList">歌曲列表</el-menu-item>
          <el-menu-item index="musicListcommentList"
            >评论({{ detail.playlist.commentCount }})</el-menu-item
          >
          <el-menu-item index="collector">收藏者</el-menu-item>
        </el-menu>
        <router-view :detail="detail.playlist" />
      </div>
    </template>
  </div>
</template>
歌单
<script>
import { palyListDetail } from "api";
import SongListTitle from "@/components/SongListTitle";
import { splitPath } from "@/utils/path";
export default {
  components: {
    SongListTitle,
  },
  props: {
    id: {
      type: [String, Number],
    },
  },
  data() {
    return {
      detail: null,
      defaultActive: "",
    };
  },
  async created() {
    const detailResult = await palyListDetail(this.id);
    this.detail = detailResult;

    const pathFragment = splitPath(this.$route.path);
    this.defaultActive = pathFragment[2];
  },
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  font-size: 20px;
}
</style>