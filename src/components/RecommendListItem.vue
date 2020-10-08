<template>
  <router-link :to="to">
    <div>
      <div class="picture">
        <p class="copywriter">{{ itemInfo.copywriter }}</p>
        <p class="playCount">
          <i class="iconfont icon-V"></i>
          {{ itemInfo.playCount | playCount }}
        </p>
        <div><Square :imgSrc="itemInfo.picUrl" /></div>
        <i class="iconfont icon-iconset0481"></i>
      </div>
      <p class="name">
        {{ itemInfo.name }}
      </p>
    </div>
  </router-link>
</template>

<script>
import Square from "./MusicTypeGroup/Square";
export default {
  components: { Square },
  props: {
    itemInfo: {
      type: Object,
      required: true,
    },
    to: {
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
  },
};
</script>

<style lang="scss">
.name {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  line-height: 1.5em;
  margin-top: 10px;
}

.picture {
  position: relative;
  overflow: hidden;
  .copywriter,
  .playCount {
    position: absolute;
    top: 0;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    padding: 5px;
    font-size: 13px;
    width: 100%;
    line-height: 1.5em;
  }
  .copywriter {
    transform: translateY(-100%);
    transition: transform 0.3s linear 0.2s;
  }
  .playCount {
    right: 0;
    text-align: right;
  }
  .iconfont.icon-iconset0481 {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 25px;
    color: #fff;
    display: none;
  }
  &:hover {
    .copywriter {
      transform: translateY(0);
      transition: transform 0.3s linear 0.2s;
    }
    .playCount {
      display: none;
    }
    .iconfont.icon-iconset0481 {
      display: block;
    }
  }
}
</style>