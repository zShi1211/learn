<template>
  <div class="hot-city item">
    <span class="title">热门城市：</span>
    <span
      v-for="item in hotCityList"
      :key="item.name"
      class="itemCity"
      @click="changeCity(item.name)"
    >{{ item.name }}</span>
  </div>
</template>

<script>
import { getHotCity } from "@/axios/api";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      hotCityList: []
    };
  },
  methods: {
    ...mapMutations(["changeCityM"]),
    changeCity(val) {
      this.changeCityM(val);
      this.$router.push("/");
    }
  },
  async created() {
    const result = await getHotCity();
    this.hotCityList = result.data;
  }
};
</script>

<style lang="scss" spoced>
@import "@/assets/css/city/hotCity.scss";
</style>
