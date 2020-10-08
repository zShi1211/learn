<template>
  <div class="nav">
    <router-link :to="{name: 'index'}">{{ city }}美团</router-link>
    <i class="el-icon-arrow-right"></i>
    <router-link :to="{name: 'shops', ...$route.params}">{{ city }}{{ $route.params.id }}</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/shops/nav.scss";
</style>
