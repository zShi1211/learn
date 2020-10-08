<template>
  <div class="product-list">
    <ul class="sort">
      <li v-for="item in ['智能排序','价格排序','人气最高','评价最高']" :key="item">{{ item }}</li>
    </ul>
    <ul class="list" v-if="goodList.lenght !== 0">
      <li v-for="item in goodList" :key="item.image">
        <product-item  :data="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
import { getGoodsList } from "@/axios/api";
export default {
  data() {
    return {
      goodList: []
    };
  },
  components: {
    ProductItem
  },
  async created() {
    const res = await getGoodsList();
    this.goodList = res.data;
  }
};
</script>

<style lang="scss" spoced>
@import "@/assets/css/shops/productList.scss";
</style>
