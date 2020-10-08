<template>
  <div>
    <PlayListTable
      :songList="searchMusicDetailList"
      :loading="loading"
      :page="nowPage"
      :limit="20"
    />
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="pageChange"
      :current-page="nowPage"
    >
    </el-pagination>
  </div>
</template>

<script>
import { searchMusic, songDetail } from "api";
import PlayListTable from "@/components/PlayListTable";
export default {
  components: {
    PlayListTable,
  },
  data() {
    return {
      searchList: [],
      total: 0,
      loading: false,
      searchMusicDetailList: [],
      nowPage: 1,
    };
  },
  methods: {
    pageChange(newPage) {
      this.$router.push({
        query: {
          ...this.$route.query,
          page: newPage,
        },
      });
    },
  },
  async created() {
    this.nowPage = +this.$route.query.page || 1;
    this.loading = true;
    const { key, page } = this.$route.query;
    const result = await searchMusic(key, 20, page);
    this.searchList = result.result.songs;
    this.total = result.result.songCount;
  },
  watch: {
    "$route.query": {
      async handler() {
        this.nowPage = +this.$route.query.page || 1;
        this.loading = true;
        const { key, page } = this.$route.query;
        const result = await searchMusic(key, 20, page);
        this.searchList = result.result.songs;
        this.total = result.result.songCount;
      },
    },
    async searchList() {
      const promises = this.searchList.map((item) => songDetail(item.id));
      const result = await Promise.all(promises);
      this.searchMusicDetailList = result;
      this.loading = false;
    },
  },
};
</script>

<style>
</style>