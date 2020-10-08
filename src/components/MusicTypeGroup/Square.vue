<template>
  <div :class="[isSamll ? 'smallPicture' : 'BigPicture']">
    <img :src="imgSrc" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    alt: String,
    isSamll: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.smallPicture {
  width: 200px;
  height: 200px;
}
.BigPicture {
  width: 250px;
  height: 250px;
}
img{
  width: 100%;
  height: 100%;
}
</style>