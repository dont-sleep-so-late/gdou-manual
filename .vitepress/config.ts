import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  title: '广海手册',
  description: 'Online manual for GDOUer',
  srcDir: './docs',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    siteTitle: '广海手册',
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: [
      { text: '导航', link: '/guide/' },
      {
        text: '常用信息',
        items: [
          { text: '企业微信', link: '/' },
          { text: '黄页', link: '/' },
          { text: '媒体', link: '/' },
        ],
      },
      {
        text: '海大生活',
        items: [
          { text: '饮食', link: '/' },
          { text: '住宿', link: '/' },
          { text: '交通', link: '/' },
          { text: '网络', link: '/' },
        ],
      },
      {
        text: '学在海大',
        items: [
          { text: '课程', link: '/' },
          { text: '学生手册', link: '/' },
          { text: '培养计划', link: '/' },
        ],
      },
    ],
  }
})
