<template>
  <div class="footer-copyright">
    <el-row class="c">
      <el-col :span="12">
        <p v-for="item in 4" :key="item">
          <span>©美团网团购 meituan.com</span>
          <span>京ICP证070791号京ICP</span>
          <span>备10211739号</span>
        </p>
      </el-col>
      <el-col :span="12" class="right">
        <p v-for="item in 4" :key="item">
          <span>©美团网团购 meituan.com</span>
          <span>京ICP证070791号京ICP</span>
          <span>备10211739号</span>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/footer/footer-copyright.scss";
</style>
