<template>
  <div class="province item">
    <span>按省份选择：</span>
    <el-row class="provinceSelect">
      <el-col :span="12">
        <my-input title="省份" :data="province" @changeProvince="changeProvince" />
      </el-col>
      <el-col :span="12">
        <my-input title="城市" :data="cityList" :isClick="cityList.length === 0" @changeCity="selectChangeCity" />
      </el-col>
    </el-row>
    <span class="searchTitle">直接搜索：</span>
    <div class="provinceSearch">
      <el-autocomplete
        v-model="searchCity"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入城市"
        @select="searchChangeCity"
      ></el-autocomplete>
    </div>
  </div>
</template>
<script>
import { getCityList, getProvince } from "@/axios/api";
import MyInput from "./Input";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      searchCity: "",
      province: [],
      cityList: [],
      allCityList: []
    };
  },
  async created() {
    const resProvince = await getProvince();
    const resAllCityList = await getCityList();
    this.province = resProvince.data;
    this.allCityList = resAllCityList.data;
  },
  components: {
    MyInput
  },
  methods: {
    ...mapMutations(["changeCityM"]),
    changeProvince(city) {
      this.cityList = city;
    },
    querySearchAsync(queryString, cb) {
      const resFilter = this.allCityList.filter(item =>
        item.name.includes(queryString)
      );
      setTimeout(() => {
        const data = resFilter.map(item => ({
          value: item.name
        }));
        cb(data);
      }, 1000);
    },
    selectChangeCity(value) {
      this.changeCityM(value);
      this.$router.push('/');
    },
    searchChangeCity({ value }) {
      this.changeCityM(value);
      this.$router.push('/');
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/city/select.scss";
</style>
