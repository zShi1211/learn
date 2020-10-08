<template>
  <div>
    <PlayListTable :songList="songList" :loading="loading"/>
  </div>
</template>

<script>
import { songDetail } from "api";
import PlayListTable from "@/components/PlayListTable";
export default {
  components: {
    PlayListTable,
  },
  props: {
    detail: {
      type: Object,
    },
  },
  data() {
    return {
      songList: null,
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    const promises = this.detail.trackIds.map(async (item) => {
      return await songDetail(item.id);
    });
    const resultResult = await Promise.all(promises);
    this.songList = resultResult;
    this.loading = false;
  },
};
</script>

<style >
</style>