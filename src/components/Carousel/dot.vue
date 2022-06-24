<template>
  <div class="container" v-if="hasDot">
    <div class="dot-item" v-for="item in imgLen" :key="item">
      <a
        href="javascript:;"
        class="dot-lk"
        :style="{ backgroundColor: item - 1 === currentIndex ? bgColor : '' }"
        @click="dotClick(item - 1)"
      >
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dot",
  props: {
    imgLen: Number, //图片数量
    currentIndex: Number, //当前下标
    hasDot: {
      //显示
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: "#FF5000",
    },
  },
  setup(props, ctx) {
    const dotClick = (index) => {
      ctx.emit("dotClick", index);
    };
    return {
      dotClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 70px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 15px;
  text-align: center;
  font-size: 0;
  left: 50%;
  z-index: 1;
  margin-left: -39px;
  background-color: rgba(255, 255, 255, 0.3);
  .dot-item {
    display: inline-block;
    margin: 3px;
    .dot-lk {
      display: block;
      padding-top: 8px;
      width: 8px;
      height: 0;
      border-radius: 50%;
      background: #ffff;
    }
  }
}
</style>
