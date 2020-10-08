<template>
  <el-row class="c">
    <el-row class="nav">
      <dl>
        <dt>吃喝玩乐</dt>
        <dd
          v-for="(item, index) in [{title:'全部', type:'all'},{title:'美食', type:'food'},{title:'电影', type:'movie'}, {title: '丽人', type: 'spa'},{title:'旅游', type:'travel'}]"
          :key="item.title"
          :class="{'active': iconShow === index}"
          @mouseenter="changeInfo(item.type,index)"
        >{{ item.title }}</dd>
      </dl>
    </el-row>
    <el-row class="items">
      <ul>
        <li v-for="item in info" :key="item.image">
          <div class="pic">
            <img :src="item.image" alt />
          </div>
          <p class="title">{{ item.title }}</p>
          <p class="subTitle">{{ item.subTitle }}</p>
          <p class="pri-add">
            <span class="price">￥{{ item.price }}</span>
            <span class="address">{{ item.address }}</span>
          </p>
        </li>
      </ul>
    </el-row>
  </el-row>
</template>

<script>
import { getRsultsByKeywords } from "@/axios/api";
export default {
  data() {
    return {
      data: {},
      iconShow: 0,
      info: {}
    };
  },
  async created() {
    const res = await getRsultsByKeywords();
    this.data = res.data;
    this.info = this.data.all;
  },
  methods: {
    changeInfo(type, index) {
      this.iconShow = index;
      this.info = this.data[type];
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/listShow/template.scss";
</style>
