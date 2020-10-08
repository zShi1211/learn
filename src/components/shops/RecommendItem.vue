<template>
  <div class="recommend-item">
    <div class="pic">
      <img
        src="http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c"
        alt
      />
    </div>

    <p class="name">{{ data.title }}</p>
    <p class="score">
      <el-rate v-model="data.score" disabled text-color="#ff9900"></el-rate>
      <span>{{ data.commentNum }}人评论</span>
    </p>
    <p class="price">
      <span class="avgPrice">￥{{ data.avgPrice }}</span>
      <span class="text">起</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/shops/recommendItem.scss";
</style>
