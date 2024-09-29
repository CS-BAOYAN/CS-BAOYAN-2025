import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  /* Options... */
};


// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  appearance: false,
  markdown: {
    image: {
      lazyLoading: true
    },
    math: true
  },
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
      ], 
    }, 
  }, 
  lastUpdated: true,
  lang: 'zh-CN',
  base: '/',
  title: "CSBAOYAN2025",
  description: "CSBAOYAN2025",
  themeConfig: {
    sidebarMenuLabel:'目录', 
    returnToTopLabel:'返回顶部', 
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
    footer: { 
      // message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2024-present CSBAOYAN', 
    }, 
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    editLink: { 
      pattern: 'https://github.com/CS-BAOYAN/CS-BAOYAN-2025/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    }, 
    outline: {
      level: [2,10], // 显示2-6级标题
      label: '目录' // 文字显示
    },
    search: { 
      provider: 'local'
    }, 
    logo: {
      src: '/logo.png',
      alt: 'Logo: CSBAOYAN',
    },
    siteTitle: false, //标题隐藏
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于我们', link: '/关于我们' },
      { text: '贡献指南', link: '/贡献指南' },
      { text: '保研真题', link: '/保研真题/' },
      { text: '保研经验贴', link: '/保研经验贴/' },
      { text: '填报指南', link: '/填报指南/' },
      { text: '复习资料', link: '/复习资料/' },
      { text: '导师推荐', link: '/导师推荐/' },
      { text: '文书准备', link: '/文书准备/' },
      { text: '视频资料', link: '/视频资料/' },
      { text: '院校解析', link: '/院校解析/' },
    ],

    sidebar: generateSidebar({
      documentRootPath: '/docs', 
      useFolderLinkFromIndexFile: true,
      manualSortFileNameByPriority: ['关于我们.md', '贡献指南.md', 'second', 'third.md'],
      useTitleFromFileHeading: true,
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CS-BAOYAN/CS-BAOYAN-2025' }
    ]
  }
})
