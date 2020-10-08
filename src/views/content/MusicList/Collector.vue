<template>
  <div>
    <ul>
      <li v-for="item in detail.subscribers" :key="item.userId">
        <div class="wrapper">
          <div class="avatar">
            <img :src="item.avatarUrl" alt="" />
          </div>
          <p class="nickname">
            {{ item.nickname }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
    padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 20%;
    margin-bottom: 50px;
  }
}
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>