<template>
  <div class="wrapper">
    <div class="picture">
      <img :src="detail.coverImgUrl" alt="" />
    </div>
    <div class="content">
      <div class="top">
        <div class="title">
          <h1 class="name">{{ detail.name }}</h1>
          <div class="count">
            <div class="songCount">
              <p>歌曲数</p>
              <span>{{ detail.trackIds.length }}</span>
            </div>
            <div class="playerCount">
              <p>播放数</p>
              <span>{{ detail.playCount | playCount }}</span>
            </div>
          </div>
        </div>
        <div class="creator-info">
          <div class="avatar">
            <img :src="detail.creator.avatarUrl" alt="" />
          </div>
          <span class="creator-name">
            {{ detail.creator.nickname }}
          </span>
          <span class="create-date"
            >{{ detail.createTime | date }}创建</span
          >
        </div>
      </div>
      <div class="bottom">
        <p class="label">标签：{{ detail.tags.join("/") }}</p>
        <p class="introduction">简介：{{ detail.description }}</p>
      </div>
    </div>
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
  filters: {
    playCount(number) {
      if (number < 10000) {
        return number;
      }
      return Math.floor(number / 10000) + "万";
    },
    date(time) {
      const date = new Date(time);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, 0);
      const day = date.getDay().toString().padStart(2, 0);
      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  .picture {
    flex-shrink: 0;
    margin-right: 30px;
    width: 300px;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top {
    .title {
      display: flex;
      justify-content: space-between;
      h1 {
        font-size: 25px;
        font-weight: 700;
      }
    }

    .creator-info {
      color: #888;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .creator-name {
        font-size: 20px;
      }
      .creator-name,
      .create-date {
        margin-left: 10px;
      }
    }
  }
}
.count {
  display: flex;
  color: #ccc;
  padding: 0 20px;
  .songCount {
    border-right: 1px solid #ccc;
    margin-right: 10px;
    padding-right: 10px;
  }
  .songCount,
  .playerCount {
    line-height: 1.2em;
    text-align: right;
  }
}
.bottom {
    line-height: 1.2em;
  .label {
    margin-bottom: 10px;
  }
}
</style>