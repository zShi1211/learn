<template>
  <el-row class="c">
    <el-col :span="17">
      <ul>
        <li>
          <p class="name">{{ data.title}}</p>
          <p class="score">
            <el-rate
              v-model="data.score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}分"
            ></el-rate>
            <span>人均￥{{ data.avgPrice }}</span>
          </p>
        </li>
        <li>
          <p class="address">地址：{{ data.address }}</p>
          <p class="phone">电话：{{ data.phone }}</p>
          <p class="business-time">{{ data.businessTime}}</p>
        </li>
        <li>
          <span v-for="item in data.service" :key="item">{{ item }}</span>
        </li>
      </ul>
    </el-col>
    <el-col :span="7">
        <div class="pic">
            <img :src="data.imgUrl" alt="">
        </div>
    </el-col>
  </el-row>
</template>

<script>
import { getDetail } from "@/axios/api";
export default {
  data() {
    return {
      data: {}
    };
  },
  async created() {
    const res = await getDetail();
    this.data = res.data;
    console.log(this.data);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/detail/index.scss";
</style>
