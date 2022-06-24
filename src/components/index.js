import Carousel from './Carousel' //引入轮播组件
import CarItem from './Carousel/item'
import Dot from './Carousel/dot'
import Director from './Carousel/director'
let birdyUI = {
  Carousel,  
  CarItem,
  Dot,
  Director
}

birdyUI.install  = function (Vue) {
  for( let key in birdyUI){
    Vue.component(key,birdyUI[key])  
  }
}

export default  birdyUI