<template>
  <div>
    <CommentList
      :commentList="commentList"
      :total="total"
      :loading="loading"
      @pageChange="pageChange"
    />
  </div>
</template>

<script>
import CommentList from "@/components/CommentList";
import { commentPlayList } from "api";
export default {
  components: {
    CommentList,
  },
  data() {
    return {
      commentList: [],
      total: 0,
      loading: false,
    };
  },
  methods: {
    async getCommentRes(...args) {
      this.loading = true;
      const r = await commentPlayList(...args);
      this.loading = false;
      return r;
    },
    async pageChange(nowPage) {
      const result = await this.getCommentRes(
        this.$route.params.id,
        20,
        nowPage
      );
      this.commentList = result.comments;
    },
  },
  async created() {
    const commentResult = await this.getCommentRes(
      this.$route.params.id,
      20,
      1
    );
    this.commentList = commentResult.comments;
    this.total = commentResult.total;
  },
};
</script>

<style lang="scss" scoped>
</style>