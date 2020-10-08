<template>
  <div>
    <el-table
      :data="songInfoList"
      style="width: 100%"
      stripe
      size="small"
      v-loading="loading"
      element-loading-text="歌曲加载中"
      @row-dblclick="changeMusic"
    >
      <el-table-column width="90" type="index" :index="indexMethod">
      </el-table-column>
      <el-table-column prop="name" label="音乐标题" width="180">
      </el-table-column>
      <el-table-column prop="singer" label="歌手"> </el-table-column>
      <el-table-column prop="al" label="专辑"> </el-table-column>
      <el-table-column prop="duration" label="时长"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { NOW_PLAYER_MUSIC, PLAYER_LIST } from "@/store/mutationsType";
export default {
  props: {
    songList: Array,
    loading: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    ...mapMutations([NOW_PLAYER_MUSIC, PLAYER_LIST]),
    changeMusic(row) {
      this.NOW_PLAYER_MUSIC(row);
      if (this.playerList !== this.songInfoList) {
        this.PLAYER_LIST(this.songInfoList);
      }
    },
    indexMethod(index) {
      return (this.page - 1) * this.limit + index + 1;
    },
  },
  computed: {
    ...mapState(["playerList"]),
    songInfoList() {
      if (!this.songList) {
        return [];
      }
      return this.songList.map((item, index) => {
        item = item.songs[0];
        let duration = item.dt;
        const minute = Math.floor(duration / 1000 / 60)
          .toString()
          .padStart(2, 0);
        const second = Math.floor((duration / 1000) % 60)
          .toString()
          .padStart(2, 0);
        duration = `${minute}:${second}`;
        return {
          info: item,
          name: item.name,
          singer: item.ar.map((ar) => ar.name).join(" / "),
          al: item.al.name,
          duration,
          index,
        };
      });
    },
  },
};
</script>

<style >
.el-table .el-table__row div.cell {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>