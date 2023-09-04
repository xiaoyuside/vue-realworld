import { ConfigEnv, UserConfigExport, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

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
      viteMockServe({
        enable: command === 'serve',
        mockPath: 'mock', // default
      }),
    ],
    // scss 全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variables.scss";', // NB: ";" in the tail
        },
      },
    },
    // 代理跨域
    // server: {
    //   proxy: {
    //     [env.VITE_APP_BASE_API]: {
    //       target: env.VITE_SERVE,
    //       // 需要代理跨域
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
  }
}
