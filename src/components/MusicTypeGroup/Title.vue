<template>
  <div class="title">
    <h2>
      {{ this.title }}
    </h2>
    <router-link :to="to">更多&gt;</router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    to: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  border-bottom: 2px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #777;
  }
}
</style>