import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
// use svg icons
import 'virtual:svg-icons-register'
import globalComponentRegisterPlugin from './components'
import '@/styles/index.scss'
import router from './router'
import pinia from './store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(globalComponentRegisterPlugin) // register all global component by using our customized plugin

app.use(router) // register our router

app.use(pinia)

app.mount('#app')

console.log(import.meta.env) // get env var on runtime
console.log(import.meta.url)
