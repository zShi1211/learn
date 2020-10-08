<template>
  <div class="bottom">
    <audio
      :src="musicUrl"
      autoplay
      ref="audio"
      @loadedmetadata="musicLoadHandle"
      @ended="endedHandle"
    ></audio>
    <div class="container">
      <div class="control">
        <div class="left">
          <i class="iconfont icon-shangyishou" @click="prev"></i>
        </div>
        <div class="middle">
          <i class="iconfont icon-bofang" v-if="isPause" @click="play"></i>
          <i class="iconfont icon-zanting" v-else @click="pause"></i>
        </div>
        <div class="right">
          <i class="iconfont icon-xiayishou" @click="next"></i>
        </div>
      </div>
      <div class="progress-bar">
        <div class="nowDuration">
          {{ nowDuration | date }}
        </div>
        <el-slider
          v-model="progressBar"
          @change="progressBarChange"
          :show-tooltip="false"
          :disabled="!isHaveMusic"
        ></el-slider>
        <div class="totalDuraiton">
          {{ totalDuraiton | date }}
        </div>
      </div>
      <div class="volume">
        <span class="volume-control">
          <i
            class="iconfont icon-jingyin2"
            v-if="volume === 0"
            @click="volume = oldVolume"
          ></i>
          <i class="iconfont icon-laba" v-else @click="setMute"></i>
        </span>
        <el-slider v-model="volume"></el-slider>
      </div>
      <el-dialog
        title="歌单"
        width="30%"
        :visible.sync="dialogVisible"
        :modal="false"
        :modal-append-to-body="false"
      >
        <el-table
          :data="playerList"
          style="width: 100%"
          stripe
          size="mini"
          :show-header="false"
          :highlight-current-row="true"
          height="500px"
          @row-dblclick="changeMusic"
        >
          <el-table-column prop="name" label="音乐标题" width="180">
          </el-table-column>
          <el-table-column prop="singer" label="歌手"> </el-table-column>
          <el-table-column prop="duration" label="时长"> </el-table-column>
        </el-table>
      </el-dialog>
      <div class="showList">
        <i
          class="iconfont icon-quanbu"
          @click="dialogVisible = !dialogVisible"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { getSongUrl } from "api";
import { NOW_PLAYER_MUSIC, CHANGE_PAUSE } from "@/store/mutationsType";
export default {
  data() {
    return {
      progressBar: 0,
      volume: 100,
      musicUrl: "",
      audio: null,
      nowDuration: 0,
      totalDuraiton: 0,
      oldVolume: 0, //原来的音量
      timer: null,
      dialogVisible: false,
    };
  },
  async created() {
    if (this.isHaveMusic) {
      const result = await getSongUrl(this.nowPlayerMusic.musicInfo.id);
      this.musicUrl = result.data[0].url;
    }
  },
  mounted() {
    this.audio = this.$refs.audio;
    this.audio.volume = this.volume / 100;

    // 进度条按钮按下时清除定时器
    document
      .querySelector(".progress-bar .el-slider__button")
      .addEventListener("mousedown", () => {
        this.clearTimer();
      });
  },
  computed: {
    ...mapState(["nowPlayerMusic", "playerList", "isPause"]),
    isHaveMusic() {
      if (this.nowPlayerMusic.musicInfo) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapMutations([NOW_PLAYER_MUSIC,CHANGE_PAUSE]),
    changeMusic(row) {
      this.NOW_PLAYER_MUSIC(row);
    },
    progressBarChange(num) {
      this.audio.currentTime = (this.totalDuraiton * num) / 100;
      this.setTimer();
    },
    musicLoadHandle() {
      this.nowDuration = this.audio.currentTime;
      this.totalDuraiton = this.audio.duration;
      this.play();
    },
    endedHandle() {
      this.clearTimer();
      this.next();
    },
    setMute() {
      this.oldVolume = this.volume;
      this.volume = 0;
    },
    pause() {
      this.audio.pause();
      this.CHANGE_PAUSE(true);
      this.clearTimer();
    },
    play() {
      if (!this.isHaveMusic) {
        this.$message({
          type: "warning",
          message: "请选择歌曲",
        });
        return;
      }
      this.audio.play();
      this.CHANGE_PAUSE(false);
      this.setTimer();
    },
    next() {
      if (!this.isHaveMusic) {
        this.$message({
          type: "warning",
          message: "请选择歌单",
        });
        return;
      }
      this.clearTimer();
      const index = this.nowPlayerMusic.index;
      let nextIndex = index + 1;
      const playerListLength = this.playerList.length;
      if (nextIndex >= playerListLength) {
        nextIndex = 0;
      }
      this.NOW_PLAYER_MUSIC(this.playerList[nextIndex]);
    },
    prev() {
      if (!this.isHaveMusic) {
        this.$message({
          type: "warning",
          message: "请选择歌单",
        });
        return;
      }
      this.clearTimer();
      const index = this.nowPlayerMusic.index;
      let prevIndex = index - 1;
      const playerListLength = this.playerList.length;
      if (prevIndex < 0) {
        prevIndex = playerListLength - 1;
      }
      this.NOW_PLAYER_MUSIC(this.playerList[prevIndex]);
    },
    setTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.nowDuration = this.audio.currentTime;
        this.progressBar = (this.nowDuration / this.totalDuraiton) * 100;
      }, 1000);
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  watch: {
    async nowPlayerMusic() {
      this.clearTimer();
      this.progressBar = 0;
      if (this.isHaveMusic) {
        const result = await getSongUrl(this.nowPlayerMusic.musicInfo.id);
        this.musicUrl = result.data[0].url;
      }
    },
    volume: {
      handler(num) {
        num = num / 100;
        this.audio.volume = num;
      },
    },
    progressBar(num) {
      this.nowDuration = (this.totalDuraiton * num) / 100;
    },
  },
  filters: {
    date(time) {
      time = Math.floor(time);
      const minute = Math.floor(time / 60)
        .toString()
        .padStart(2, 0);
      const second = Math.floor(time % 60)
        .toString()
        .padStart(2, 0);
      return ` ${minute}: ${second}`;
    },
  },
  destroyed() {
    this.clearTimer();
  },
};
</script>

<style lang="scss" scoped>
.bottom {
  height: 100%;
}
.container {
  display: flex;
  align-items: center;
  height: 100%;
  .control {
    width: 200px;
    display: flex;
    justify-content: space-between;
    div {
      width: 50px;
      height: 50px;
      background: #c20c0c;
      border-radius: 50%;
      display: flex;
      color: #fff;
      cursor: pointer;
      overflow: hidden;
      i {
        font-size: 22px;
        line-height: 50px;
        text-align: center;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .progress-bar {
    display: flex;
    margin-left: 50px;
    width: 700px;
    .nowDuration,
    .totalDuraiton {
      white-space: nowrap;
      display: flex;
      align-items: center;
      padding: 0 15px;
    }
    .el-slider {
      width: 90%;
    }
  }
  .volume {
    display: flex;
    align-items: center;
    .volume-control {
      cursor: pointer;
    }
    i {
      font-size: 22px;
      margin-right: 20px;
    }
    margin-left: 50px;
    width: 200px;
    .el-slider {
      width: 100%;
    }
  }
}
.showList {
  margin-left: 50px;
  cursor: pointer;
  i {
    font-size: 22px;
  }
}
</style>