import type { App } from 'vue'
import Hello from './Hello.vue'
import SvgIcon from './SvgIcon/index.vue'

const globalComponents = { Hello, SvgIcon }

const install = (app: App) => {
  Object.entries(globalComponents).forEach(([k, v]) => {
    app.component(k, v)
  })
}

export default install
