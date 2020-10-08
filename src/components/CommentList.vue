<template>
  <div>
    <dl v-loading.lock="loading">
      <dt>精彩评论</dt>
      <dd v-for="comment in commentList" :key="comment.time">
        <div class="avatar">
          <img :src="comment.user.avatarUrl" alt="" />
        </div>
        <div class="wrapper">
          <div class="top">
            <span class="nickname">
              {{ comment.user.nickname }}
              :
            </span>
            <span class="text">
              {{ comment.content }}
            </span>
          </div>
          <div class="bottom">
            <span class="date"> {{ comment.time | date }} </span>
            <div class="triplet">
              <span class="jubao">举报</span>
              <span>
                <i class="iconfont icon-ziyuan"></i>
                ({{ comment.likedCount }})
              </span>
              <span> 分享 </span>
              <span> 回复 </span>
            </div>
          </div>
        </div>
      </dd>
    </dl>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="20"
      @current-change="pageChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    commentList: {
      type: Array,
      default() {
        return [];
      },
    },
    total: {
      type: Number,
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async pageChange(nowPage) {
      this.$emit("pageChange", nowPage);
    },
  },
  filters: {
    date(time) {
      const date = new Date(time);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, 0);
      const day = date.getDay().toString().padStart(2, 0);
      const hour = date.getHours().toString().padStart(2, 0);
      const minute = date.getMinutes().toString().padStart(2, 0);
      return `${year}-${month}-${day}  ${hour}: ${minute}`;
    },
  },
};
</script>

<style lang="scss" scoped>
dt {
  margin: 20px 0;
}
dd {
  font-size: 14px;
  line-height: 1.1em;
  padding: 15px 10px;
  display: flex;
  border-top: 1px solid #eee;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &:hover .jubao {
    display: inline;
  }
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.top {
  .nickname {
    margin-right: 10px;
    color: #0088cc;
  }
  margin-bottom: 10px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  color: #ccc;
  font-size: 12px;
  .triplet {
    span:not(:last-of-type) {
      border-right: 1px solid #ccc;
      margin-right: 5px;
      padding-right: 5px;
    }
  }
}
.jubao {
  display: none;
}
</style>