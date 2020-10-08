<template>
  <div class="city c">
    <select-city />
    <hot-city />
    <recents-city />
    <city-list />
  </div>
</template>
<script>
import SelectCity from "./SelectCity";
import HotCity from "./HotCity";
import RecentsCity from "./RecentsCity";
import CityList from "./CityList";
export default {
  components: {
    SelectCity,
    HotCity,
    RecentsCity,
    CityList
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/city/index.scss";
</style>
