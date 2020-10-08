<template>
  <transition
    enter-active-class="animate__animated animate__rotateInDownLeft"
    leave-active-class="animate__animated animate__rotateOutDownRight"
  >
    <div class="music-detail-wrapper" v-if="showDetail">
      <div class="top">
        <div class="music-detail">
          <div
            class="bg"
            :style="{
              backgroundImage: `url(${nowPlayerMusic.musicInfo.al.picUrl})`,
            }"
          ></div>
          <div class="content">
            <div class="pic">
              <img
                src="@/assets/img/player_bar.png"
                alt=""
                class="player-bar"
                :class="{ isPause: isPause }"
              />
              <div class="back-area" :class="{ isPause: isPause }">
                <img :src="nowPlayerMusic.musicInfo.al.picUrl" alt="" />
              </div>
            </div>
            <div class="info">
              <div class="info-top">
                <h1 class="song-name">
                  {{ nowPlayerMusic.allInfo.name }}
                </h1>
                <div class="album-singer">
                  <div class="left">
                    <span>专辑：</span>
                    <span class="album-name">
                      {{ nowPlayerMusic.allInfo.al }}
                    </span>
                  </div>
                  <div class="right">
                    <span>歌手：</span>
                    <span class="singer">
                      {{ nowPlayerMusic.allInfo.singer }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="info-bottom">
                <Lyric />
              </div>
            </div>
          </div>
        </div>
        <el-button @click="showDetailHandle">最小化</el-button>
      </div>
      <div class="comment">
        <CommentList
          :commentList="commentList"
          :total="total"
          :loading="loading"
          @pageChange="pageChange"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import CommentList from "@/components/CommentList";
import { commentMusic } from "api";
import { mapState } from "vuex";
import Lyric from "@/components/Lyric";
export default {
  components: {
    Lyric,
    CommentList,
  },
  props: {
    showDetail: {
      type: Boolean,
    },
  },
  data() {
    return {
      commentList: [],
      total: 0,
      loading: false,
    };
  },
  computed: {
    ...mapState(["nowPlayerMusic", "isPause"]),
  },
  methods: {
    showDetailHandle() {
      this.$emit("changeShowDetail", false);
    },
    async getCommentRes(...args) {
      this.loading = true;
      const r = await commentMusic(...args);
      this.loading = false;
      return r;
    },
    async pageChange(nowPage) {
      const result = await this.getCommentRes(
        this.nowPlayerMusic.musicInfo.id,
        20,
        nowPage
      );
      this.commentList = result.comments;
    },
  },
  watch: {
    async nowPlayerMusic() {
      const commentResult = await this.getCommentRes(
        this.nowPlayerMusic.musicInfo.id,
        20,
        1
      );
      this.commentList = commentResult.comments;
      this.total = commentResult.total;
    },
  },
};
</script>

<style lang="scss" scoped>
.music-detail-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  left: 0;
  padding: 20px;
  z-index: 3000;
  overflow-y: auto;
}
.top {
  display: flex;
  align-items: flex-start;
}
.music-detail {
  position: relative;
  width: 90%;
  height: 500px;
}
.bg {
  background-size: 90% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  filter: blur(70px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.content {
  position: relative;
  height: 100%;
  display: flex;
}
.pic {
  margin: 80px 50px 0px 150px;
  .player-bar {
    position: absolute;
    top: 0px;
    left: 300px;
    transform-origin: left top;
    transition: all 0.6s;
    transform: rotate(0deg);
    z-index: 1;
  }
  .isPause.player-bar {
    transform: rotate(-35deg);
  }
}
.back-area {
  width: 200px;
  height: 200px;
  border: 60px solid rgb(48, 5, 5);
  border-radius: 50%;
  overflow: hidden;
  animation: turn 20s linear infinite;
  img {
    width: 100%;
    height: 100%;
  }
}
.isPause.back-area {
  animation-play-state: paused;
}
@keyframes turn {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.info {
  margin-left: 80px;
  width: 600px;
  .info-bottom {
    margin-top: 20px;
    height: 400px;
    overflow: auto;
  }
}

.song-name {
  color: #222;
  font-size: 26px;
  margin-bottom: 15px;
}
.album-singer {
  font-size: 12px;
  display: flex;
  .left {
    margin-right: 10px;
  }
  .left,
  .right {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>