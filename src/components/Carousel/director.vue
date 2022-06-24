<template>
  <div v-if="isHide">
    <div class="director dir-next" v-if="dir === 'next'">
      <a href="javascript:;" @click="dirClick(dir)">&gt;</a>
    </div>
    <div class="director dir-prev" v-else-if="dir === 'prev'">
      <a href="javascript:;" @click="dirClick(dir)">&lt;</a>
    </div>
  </div>
</template>
<script>
export default {
  name:'Director',
  props: {
    dir: {
      type:String,

    },
    isHide:{
        type: Boolean,
        default:false
    }
  },
  setup(props, ctx) {
    const dirClick = (dir) => {
      ctx.emit("dirClick", dir);
    };
    return {
      dirClick,
    };
  },
};
</script>
<style scoped lang="scss">
.director {
  position: absolute;
  top: 50%;
  z-index: 1;
  margin-top: -15px;
  width: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #ffff;
  background-color: rgba(0, 0, 0.5);
  a {
    color: #ffff;
    text-decoration: none;
  }
  &.dir-next {
    right: 0;
  }
  &.dir-prev {
    left: 0;
  }
}
</style>