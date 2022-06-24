<template>
    <div class="carousel"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
    >
        <div class="content">
            <Dot
            :hasDot="hasDot"
            :imgLen="imgLen"
            :bgColor="bgColor"
            :currentIndex="currentIndex"
            @dotClick="dotClick"
            ></Dot>

            <!-- 左箭头 -->
          <Director         
           dir="prev"
          :isHide="isHide"
          @dirClick="dirClick"
          >

          </Director>
          <!-- 右箭头 -->
         <Director
           dir="next"
           :isHide="isHide"
          @dirClick="dirClick"
          >
          </Director>
            <slot></slot>
        </div>
    </div>
</template>

<script >
import {
    reactive, toRefs,
    getCurrentInstance,
    onMounted, onBeforeUnmount,
} from "vue"
export default {
    name:'Carousel',
    props: {
        autoplay: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 0
        },
        initFirst: {
            type: Number,
            default: 0
        },
        hasDot: {
            type: Boolean,
            default: true,
        },
        hasDirector: {
            type: Boolean,
            default: true,
        },
        bgColor: {
            type: String,
        },

    },
    setup(props) {
        const state = reactive({
            currentIndex: props.initFirst,
            imgLen:0,
            isHide:false
        });
        let timer = null;
        const instance = getCurrentInstance();
        const dotClick = (index) => {
            state.currentIndex = index;
        }
        
        //鼠标移入
        const mouseEnter = () =>{
            clearInterval(timer)
            timer = null
            state.isHide = true
        }
        //鼠标移出
        const mouseLeave = () =>{
           autoPlay()
           state.isHide = false
        }
        
        const dirClick = (dir) => {
          setIndex(dir) //点击控制方向滚动
        }
        //轮播
        const autoPlay = () => {
            if (props.autoplay) {
                timer = setInterval(() => {
                    setIndex("next");
                }, props.duration);
            }
        };
        // 控制方向
        const setIndex = (direction) => {
            switch (direction) {
                case "next": //下一张
                    state.currentIndex += 1;
                    if (state.currentIndex === state.imgLen) {
                        state.currentIndex = 0;
                    }
                    break;
                case "prev": //上一张
                    state.currentIndex -= 1;
                    if (state.currentIndex === -1) {
                        state.currentIndex = state.imgLen - 1;
                    }
                    break;
                default:
                    break;
            }
        };
        onMounted(() => {
            state.imgLen = instance.slots.default()[0].children.length; //获取传入的图片数量
            autoPlay();
        });
        onBeforeUnmount(() => {
            clearInterval(timer);
            timer = null;
        });
        return {
            ...toRefs(state),
            dotClick,
            mouseEnter,
            mouseLeave,
            dirClick
        };
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    width: 100%;
    height: 100%;
    .content {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
}
</style>