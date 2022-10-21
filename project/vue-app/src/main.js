import { createApp } from 'vue' // node_mudules 資料夾載入 vue 物件的 createApp 方法
import App from './App.vue'
import router from './router'

//import './assets/main.css'

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
