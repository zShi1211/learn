<template>
  <div class="city-list item">
    <dl class="code-select">
      <dl>按拼音首字母选择：</dl>
      <dd v-for="(value, key) in codeClassify" :key="key">
        <a :href="`#city-${key}`">{{ key }}</a>
      </dd>
    </dl>
    <ul class="code-list-item">
      <li v-for="(value, key) in codeClassify" :key="key" :id="`city-${key}`">
        <dl class="char">{{ key }}</dl>
        <dd>
          <span v-for="item in value" :key="item" @click="changeCity(item)">{{ item }}</span>
        </dd>
      </li>
    </ul>
  </div>
</template>

<script>
import { getProvince } from "@/axios/api";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      allCity: []
    };
  },
  computed: {
    codeClassify() {
      const obj = {};
      this.allCity.forEach(item => {
        if (!obj[item.firstChar]) {
          obj[item.firstChar] = [];
        }
        obj[item.firstChar].push(item.name);
      });
      return obj;
    }
  },
  methods: {
    ...mapMutations(["changeCityM"]),
    changeCity(val) {
      this.changeCityM(val);
      this.$router.push("/");
    }
  },
  async created() {
    const result = await getProvince();
    const allCity = result.data.flatMap(item => item.cityInfoList);
    allCity.sort((a, b) => {
      return a.firstChar < b.firstChar ? -1 : 1;
    });
    this.allCity = allCity;
  }
};
</script>

<style lang="scss" spoced>
@import "@/assets/css/city/cityList.scss";
</style>
