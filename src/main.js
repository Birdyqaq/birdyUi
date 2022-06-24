import { createApp } from 'vue'
import App from './App.vue'

import birdyUI from '@/components'

console.log(birdyUI)

createApp(App).use(birdyUI).mount('#app')
