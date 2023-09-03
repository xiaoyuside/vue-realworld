import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
// use svg icons
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')

console.log(import.meta.env) // get env var on runtime
console.log(import.meta.url)
