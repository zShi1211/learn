<template>
  <li class="wrapper">
    <span class="title">
      {{ data.title }}
      <i class="el-icon-caret-bottom"></i>
    </span>
    <dl>
      <dt>{{ data.title }}</dt>
      <dd v-for="item in data.subList" :key="item.name">{{ item.name }}</dd>
    </dl>
  </li>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/shops/selectItem.scss";
</style>
