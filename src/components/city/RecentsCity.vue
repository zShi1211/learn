<template>
  <div class="recents-city item">
    <span class="title">最近访问：</span>
    <span
      v-for="item in recentsCityList"
      :key="item.name"
      class="itemCity"
      @click="changeCity(item.name)"
    >{{ item.name }}</span>
  </div>
</template>

<script>
import { getRecentsCity } from "@/axios/api";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      recentsCityList: []
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
    const result = await getRecentsCity();
    this.recentsCityList = result.data;
  }
};
</script>

<style lang="scss" spoced>
@import "@/assets/css/city/hotCity.scss";
</style>
