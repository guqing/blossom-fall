module.exports = {
  title: "NightCrying",
  description: 'A Java notes',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Contact', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/guqing', icon: 'reco-github' },
          { text: '微博', link: 'https://weibo.com/guqing3478520', icon: 'reco-weibo' },
          { text: '掘金', link: 'https://www.cnblogs.com/luanhewei/', icon: 'reco-juejin' },
          { text: '个人博客', link: 'https://www.guqing.xyz', icon: 'reco-blog' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/guqing/night-crying', icon: 'reco-github' },
    ],
    logo: '/head.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'guqing',
    // 项目开始时间
    startYear: '2019'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
