<template>
  <div class="search">
    <el-row class="c">
      <el-col :span="6">
        <div class="logo">
          <router-link :to="{name: 'index'}">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
          </router-link>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="search-area">
          <el-input v-model="searchVal" placeholder="请输入内容" @focus="changeResList(true)"></el-input>
          <el-button plain @click="handelSearch">
            <i class="el-icon-search"></i>
          </el-button>
          <div class="search-list" v-show="resListResList">
            <dl v-if="!searchVal">
              <dt>热门搜索</dt>
              <dd>
                <router-link
                  tag="span"
                  :to="{name : 'shops', params:{id: item}}"
                  v-for="item in hotsSerachList"
                  :key="item"
                  @click.native="changeResList(false)"
                >{{ item }}</router-link>
              </dd>
            </dl>
            <ul v-else>
              <router-link
                tag="li"
                :to="{name: 'shops', params:{id: item}}"
                v-for="(item, index) in filterSerachList"
                :key="item + index"
                @click.native="changeResList(false)"
              >{{ item }}</router-link>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getSearchHotWords, getSearch } from "@/axios/api";
export default {
  data() {
    return {
      serachList: [],
      hotsSerachList: [],
      searchVal: "",
      resListResList: false
    };
  },
  computed: {
    filterSerachList() {
      return this.serachList.filter(item => item.includes(this.searchVal));
    }
  },
  methods: {
    changeResList(flag) {
      this.resListResList = flag;
    },
    handelSearch() {
      if (this.searchVal === "") {
      } else {
        this.$router.push({ name: "shops", params: { id: this.searchVal } });
      }
    }
  },
  async created() {
    const resHotSearch = await getSearchHotWords();
    this.hotsSerachList = resHotSearch.data;
    const resSearch = await getSearch();
    this.serachList = resSearch.data.list;
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/header/search.scss";
</style>
