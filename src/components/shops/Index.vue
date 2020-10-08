<template>
  <el-row class="c">
    <el-col :span="19">
      <my-nav />
      <my-filter />
      <product-list />
    </el-col>
    <el-col :span="5">
      <recommend-list />
    </el-col>
  </el-row>
</template>

<script>
import MyNav from "./Nav";
import MyFilter from "./Filter";
import ProductList from "./ProductList";
import RecommendList from "./RecommendList";
export default {
  components: {
    MyNav,
    MyFilter,
    ProductList,
    RecommendList
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/shops/index.scss";
</style>
