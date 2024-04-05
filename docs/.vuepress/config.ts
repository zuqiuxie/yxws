/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { defineConfig4CustomTheme } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'

import head from './config/head'
import plugins from './config/plugin'
import themeConfig from './config/themeConfig'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  title: "医学微视",
  description: '“Medical Video医学微视”是以“让人们多了解一点医学知识，健康就多一份保障”为宗旨的大型医学科普平台，旨在满足公众对权威而专业医学知识需求，提高公众医学素养水平。',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig,
  head,
  plugins,

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
