import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
// use svg icons
import 'virtual:svg-icons-register'
import globalComponentRegisterPlugin from './components'
import '@/styles/index.scss'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(globalComponentRegisterPlugin)

app.mount('#app')

console.log(import.meta.env) // get env var on runtime
console.log(import.meta.url)
