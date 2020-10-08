<template>
  <div class="input" v-blur="hiddeList">
    <el-input
      v-model="value"
      :placeholder="title"
      suffix-icon="el-icon-caret-bottom"
      @focus="isShow = true"
      :disabled="isClick"
    ></el-input>
    <template v-if="isShow">
      <dl v-if="title === '省份'">
        <dt>{{ title }}</dt>
        <dd>
          <span
            v-for="item in data"
            :key="item.provinceName"
            @click="changeProvince(item)"
            :class="{'active': value === item.provinceName}"
          >{{ item.provinceName }}</span>
        </dd>
      </dl>
      <dl v-else class="city">
        <dt>{{ title }}</dt>
        <dd>
          <span v-for="item in data" :key="item.name" @click="changeCity(item.name)">{{ item.name}}</span>
        </dd>
      </dl>
    </template>
  </div>
</template>

<script>
export default {
  props: ["data", "title", "isClick"],
  data() {
    return {
      value: "",
      isShow: false
    };
  },
  methods: {
    changeProvince(city) {
      this.$emit("changeProvince", city.cityInfoList);
      this.value = city.provinceName;
      this.isShow = false;
    },
    changeCity(value) {
      this.$emit("changeCity", value);
    },
    hiddeList() {
      this.isShow = false;
    }
  },
  directives: {
    blur: {
      bind(el, binding, vnode) {
        const { value } = binding;
        const { context } = vnode;
        document.addEventListener("click", e => {
          const isContain = el.contains(e.target);
          if (!isContain) {
            value.apply(context);
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/city/input.scss";
</style>
