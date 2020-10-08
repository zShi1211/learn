<template>
  <div class="productl-item">
    <router-link tag="div" :to='{name: "detail"}' class="pic">
      <img :src="data.image" alt />
    </router-link>
    <div class="content">
      <div class="info">
        <router-link tag="p" :to="{name: 'detail'}" class="name">{{ data.title }}</router-link>
        <p class="score">
          <el-rate v-model="data.score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
          <span v-if="data.score > 4.5">很好</span>
          <span v-else-if="data.score > 4">好</span>
          <span v-else-if="data.score > 3.5">不错</span>
          <span v-else-if="data.score > 3">一般</span>
          <span v-else>差</span>
          <span>{{ data.score }}分</span>
          <span class="commentNum">{{ data.commentNum }}人评论</span>
        </p>
        <p class="address">
          <span
            v-for="(area, index) in data.tab"
            :key="area"
          >{{ area }} {{ data.tab.length -1 > index ? '|' : '' }}</span>
          {{ data.address }}
          <a href="#">
            <i class="el-icon-location"></i>
            查看地图
          </a>
        </p>
        <p class="ave-price">人均￥{{ data.avgPrice }}</p>
      </div>
      <div class="ticket">
        <ul>
          <li v-for="item in data.dealItems" :key="item.title">
            <p class="title">{{ item.title }}</p>
            <p class="ticket-price">
              <span class="current-price">￥{{ item.price }}</span>
              <span>门市价￥{{ item.counterPrice }}</span>
              <span>已销售{{ item.saleNum }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  created() {
    console.log(this.data);
  }
};
</script>

<style lang="scss" spoced>
@import "@/assets/css/shops/productItem.scss";
</style>
