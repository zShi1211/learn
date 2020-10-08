<template>
  <div>
    <!-- 横幅 -->
    <div class="banner">
      <el-carousel :interval="3000" type="card" height="250px">
        <el-carousel-item v-for="item in bannerList" :key="item.imageUrl">
          <a :href="item.imageUrl">
            <img :src="item.imageUrl" :alt="item.typeTitle" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 推荐歌单 -->
    <div class="recommend">
      <Title title="推荐歌单" />
      <ul class="personalizedList">
        <li v-for="item in personalizedList" :key="item.id">
          <RecommendListItem
            :itemInfo="item"
            :to="{ name: 'musicList', params: { id: item.id } }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { banner, personalized } from "api";
import Title from "@/components/MusicTypeGroup/Title";
import RecommendListItem from "@/components/RecommendListItem";
export default {
  components: {
    Title,
    RecommendListItem,
  },
  data() {
    return {
      bannerList: [],
      personalizedList: [],
    };
  },
  async created() {
    // 获取横幅图片
    const bannerResult = await banner(0);
    this.bannerList = bannerResult.banners;

    // 过去推荐歌单数据
    const personalizedResult = await personalized(10);
    this.personalizedList = personalizedResult.result;
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 10px 0px;
  img {
    width: 100%;
    height: 100%;
  }
}

.recommend {
  .personalizedList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      margin-bottom: 20px;
      width: 200px;
      margin-left: 5px;
    }
  }
}
</style>