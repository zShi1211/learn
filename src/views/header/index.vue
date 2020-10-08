<template>
  <div class="header-wrapper">
    <h1 class="title">网易云音乐</h1>
    <div class="button-group">
      <el-button-group>
        <el-button
          type="primary"
          icon="el-icon-arrow-left"
          size="small"
          @click="$router.back()"
        ></el-button>
        <el-button type="primary" size="small" @click="$router.forward()"
          ><i class="el-icon-arrow-right el-icon--right"></i
        ></el-button>
      </el-button-group>
    </div>
    <div class="search-input" @keydown.enter="handleSearch">
      <el-autocomplete
        v-model="searchKey"
        :fetch-suggestions="querySearchAsync"
        placeholder="搜音乐"
        @select="handleSelect"
        size="mini"
        width="300px"
      >
        <i
          class="el-icon-search el-input__icon"
          slot="suffix"
          @click="handleSearch"
        >
        </i>
      </el-autocomplete>
    </div>
  </div>
</template>

<script>
import { searchHot, searchSuggest } from "api";
export default {
  data() {
    return {
      searchList: [],
      searchKey: "",
    };
  },
  methods: {
    async querySearchAsync(queryString, cb) {
      let result = [];
      if (queryString === "" || queryString === undefined) {
        result = this.searchList;
      } else {
        const res = (await searchSuggest(queryString)).result;
        const arr = [];
        res.order.forEach((item) => {
          if (Array.isArray(res[item])) {
            arr.push(res[item]);
          }
        });
        result = arr.flat().map((item) => ({
          value: item.name,
        }));
      }
      cb(result);
    },
    handleSelect(item) {
      this.pushRoute(item.value);
    },
    handleSearch() {
      console.log(this);
      this.pushRoute(this.searchKey);
    },

    pushRoute(key) {
      if (key === "") return;
      this.$router.push({
        name: "searchList",
        query: {
          key,
          page: 1,
        },
      });
      this.$emit("changeShowDetail", false);
    },
  },
  async created() {
    // 同步地址栏
    const searchHotRes = await searchHot();
    console.log(searchHotRes);
    this.searchList = searchHotRes.data.map((item) => ({
      value: item.searchWord,
    }));
  },
  watch: {
    "$route.query"() {
      this.searchKey = this.$route.query.key;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  .title {
    font-size: 25px;
    color: #eee;
    font-weight: 500;
  }
  .search-input {
    margin-left: 20px;
  }
}
.el-icon-search.el-input__icon {
  cursor: pointer;
}
.button-group {
  margin-left: 100px;
}
</style>