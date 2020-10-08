<template>
  <div class="footer-link">
    <el-row class="c">
      <el-col :span="4" v-for="item in 5" :key="item">
        <dl>
          <dt>用户帮助</dt>
          <dd
            v-for="item in [ '申请退款','查看美团券密码',
'常见问题',
'用户协议',
'隐私政策',
'反诈骗公告',
'消费者权益保障']"
            :key="item"
          >
            <a href="#">{{item}}</a>
          </dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/footer/footer-link.scss";
</style>
