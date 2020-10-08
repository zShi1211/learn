<template>
  <div class="recommend-list">
    <dl>
      <dt>猜你喜欢</dt>
      <dd v-for="item in recommendList" :key="item.itemId">
        <recommend-item :data="item" />
      </dd>
    </dl>
  </div>
</template>

<script>
import { getRecommend } from "@/axios/api";
import RecommendItem from "./RecommendItem";
export default {
  components: {
    RecommendItem
  },
  data() {
    return {
      recommendList: []
    };
  },
  async created() {
    const res = await getRecommend();
    res.data.forEach(item => {
      item.score = Number(item.score);
    });
    this.recommendList = res.data;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/shops/recommendList.scss"
</style>
