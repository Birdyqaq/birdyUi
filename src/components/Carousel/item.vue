<template>
    <transition>
        <div class="car-item" v-if="state.selfIndex === state.currentIndex">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
  name: "CarItem",
}
</script>
<script setup>
import { getCurrentInstance, reactive, watch, onMounted } from 'vue';

let instance = getCurrentInstance()  //获取当前组件实例
const state = reactive({
    selfIndex: instance.vnode.key, //获取当前组件循环的key值
    currentIndex: instance.parent.ctx.currentIndex//获取父级组件的值
})

onMounted(() => {
    watch(() => {
        return instance.parent.ctx.currentIndex //监听值改变
    }, (value) => {
        state.currentIndex = value
    })
})
console.log(getCurrentInstance(), 'getCurrentInstance');
</script>
<style lang="scss" scoped>
.car-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
    }
}
// .v-enter-active{

// }
.v-enter-active,.v-leave-active{
 transition: all .3s linear;
}
.v-enter-active{
  transform: translateX(100%);
}
.v-enter-to{
    transform: translateX(0);
}
.v-leave-active{
 transform: translateX(0);
}

.v-leave-to{
    transform: translateX(-100%);
}
</style>