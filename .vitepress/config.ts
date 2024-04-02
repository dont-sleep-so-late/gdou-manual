import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-Hans",
  title: "广海手册",
  description: "Online manual for GDOUer",
  srcDir: "./docs",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }]],
  themeConfig: {
    siteTitle: "广海手册",
    logo: "/logo.svg",
    nav: [
      { text: "主页", link: "/" },
      { text: "关于", link: "/about/" },
    ],
    sidebar: [
      { text: "导航", link: "/guide/" },
      {
        text: "常用信息",
        items: [
          { text: "企业微信", link: "/" },
          { text: "黄页", link: "/" },
          { text: "媒体", link: "/" },
        ],
      },
      {
        text: "海大生活",
        items: [
          { text: "饮食", link: "/" },
          { text: "住宿", link: "/" },
          { text: "交通", link: "/" },
          { text: "网络", link: "/" },
        ],
      },
      {
        text: "学在海大",
        items: [
          { text: "课程", link: "/" },
          { text: "学生手册", link: "/" },
          { text: "培养计划", link: "/" },
        ],
      },
    ],
    algolia: {
      appId: "K880G321DE",
      apiKey: "5c9b9d0f591eb08ace149bf3d24ed065",
      indexName: "myTeamManual",
      placeholder: "快乐搜索吧",
      translations: {
        button: {
          buttonText: "搜索",
          buttonAriaLabel: "搜索",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询条件",
            resetButtonAriaLabel: "清除查询条件",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除",
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "你可能需要检查你的网络连接",
          },
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
            searchByText: "搜索提供者",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈",
          },
        },
      },
    },
  },
});
