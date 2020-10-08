<template>
  <div class="menu">
    <dl>
      <dt>全部分类</dt>
      <dd
        v-for="item in typeList"
        :key="item.food"
        @mouseenter="showDetail(item.items,true)"
        @mouseleave="showDetail(item.items,false)"
      >
        <span>{{ item.name }}</span>
        <i class="el-icon-arrow-right icon"></i>
      </dd>
    </dl>
    <div
      class="detaiList"
      v-show="isShowDatail"
      @mouseenter="showDetail(detailList,true)"
      @mouseleave="showDetail(detailList,false)"
    >
      <dl class="item" v-for="data in detailList" :key="data.title">
        <dt class="title">{{ data.title }}</dt>
        <dd>
          <a href="#" v-for="item in data.items" :key="item">{{ item }}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { getMenu } from "@/axios/api";
export default {
  data() {
    return {
      typeList: [],
      detailList: [
        {
          title: "美食",
          items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
        }
      ],
      isShowDatail: false,
      timer: null
    };
  },
  async created() {
    const res = await getMenu();
    this.typeList = res.data;
  },
  methods: {
    showDetail(data, flag) {
      if (flag) {
        this.detailList = data;
        this.isShowDatail = flag;
        clearInterval(this.timer);
      } else {
        this.timer = setTimeout(() => {
          this.isShowDatail = flag;
        }, 200);
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/banner/menu.scss";
</style>
