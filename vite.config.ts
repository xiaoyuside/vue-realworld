import { ConfigEnv, UserConfigExport, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const currentDir = process.cwd()

  // 获取各种环境下对应的变量
  const env = loadEnv(mode, currentDir)

  const src = './src'
  const iconDir = 'src/assets/icons'

  return {
    base: './',

    resolve: {
      // 别名配置
      alias: {
        '@': path.resolve(src),
      },
    },

    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(currentDir, iconDir)],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    // resolve: { alias: { '@': path.resolve('./src') } },
  }
}
