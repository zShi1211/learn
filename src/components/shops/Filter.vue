<template>
  <div class="filter">
    <el-row>
      <el-col tag="span" :span="1" class="classify">分类</el-col>
      <el-col tag="span" :span="1" class="all">全部</el-col>
      <el-col tag="ul" :span="19">
        <select-item v-for="item in classifyList" :key="item.title" :data="item" />
      </el-col>
    </el-row>
    <el-row>
      <el-col tag="span" :span="1" class="classify">区域</el-col>
      <el-col tag="span" :span="1" class="all">全部</el-col>
      <el-col tag="ul" :span="19">
        <select-item v-for="item in areaList" :key="item.title" :data="item" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getClassify } from "@/axios/api";
import SelectItem from "./SelectItem";
export default {
  components: {
    SelectItem
  },
  data() {
    return {
      classifyList: [],
      areaList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        },
        {
          title: "南岗区",
          subList: [
            {
              name: "中央大街",
              id: 123
            },
            {
              name: "西客站",
              id: 11
            },
            {
              name: "花园街",
              id: 222
            },
            {
              name: "通乡街/果园街",
              id: 21
            },
            {
              name: "爱建社区",
              id: 1
            },
            {
              name: "学府路",
              id: 34
            }
          ]
        }
      ]
    };
  },
  async created() {
    const resClassify = await getClassify();
    this.classifyList = resClassify.data;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/shops/filter.scss";
</style>
