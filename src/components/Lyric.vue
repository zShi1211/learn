<template>
  <div>
    <ul>
      <li v-for="(item, index) in lyric" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getLyric } from "api";
import { mapState } from "vuex";
export default {
  data() {
    return {
      lyric: [],
    };
  },
  methods: {
    splitLyric(str) {
      let lyricArr = str.split("\n");
      return lyricArr
        .map((item) => {
          return item.replace(/^\[.*\]/, "");
        })
        .filter((item) => item !== "");
    },
  },
  async created() {
    const result = await getLyric(this.nowPlayerMusic.musicInfo.id);
    this.lyric = this.splitLyric(result.lrc.lyric);
  },
  computed: {
    ...mapState(["nowPlayerMusic"]),
  },
  watch: {
    async nowPlayerMusic() {
      const result = await getLyric(this.nowPlayerMusic.musicInfo.id);
      this.lyric = this.splitLyric(result.lrc.lyric);
    },
  },
};
</script>

<style scoped>
li {
  font-size: 18px;
  height: 20px;
  line-height: 20px;
  margin-bottom: 8px;
  font-weight: 400;
}
</style>