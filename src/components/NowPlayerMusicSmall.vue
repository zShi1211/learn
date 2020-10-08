<template>
  <div class="nowPlayMusicSmall">
    <div
      class="picture"
      @mouseenter="showUnfold = true"
      @mouseleave="showUnfold = false"
      @click="showDetailHandle"
    >
      <img
        :src="isHaveMusic ? nowPlayerMusic.musicInfo.al.picUrl : 'https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'"
        alt=""
      />
      <img
        src="@/assets/img/unfold.png"
        alt=""
        v-if="showUnfold"
        class="unfold"
      />
    </div>
    <div class="right">
      <p class="songName">
        {{ isHaveMusic ? nowPlayerMusic.allInfo.name : "曲名" }}
      </p>
      <p class="singer">
        {{ isHaveMusic ? nowPlayerMusic.allInfo.singer : "歌手" }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showUnfold: false,
    };
  },
  methods: {
    showDetailHandle() {
      if (!this.isHaveMusic) {
        this.$message({
          type: "warning",
          message: "请选择歌曲",
        });
        return;
      }
      this.$emit("changeShowDetail", true);
    },
  },
  computed: {
    ...mapState(["nowPlayerMusic"]),
    isHaveMusic() {
      if (this.nowPlayerMusic.musicInfo) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.nowPlayMusicSmall {
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
  height: 80px;
  display: flex;
  align-items: center;
  .picture {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    position: relative;
        flex-shrink: 0;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    .unfold {
      opacity: 0.5;
      width: 70%;
      height: 70%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100px;
    p {
      padding: 8px 0px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .singer {
      font-size: 14px;
      color: #333;
    }
  }
}
</style>