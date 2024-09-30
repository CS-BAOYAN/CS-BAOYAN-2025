// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import googleAnalytics from 'vitepress-plugin-google-analytics'
import "./components/Layout.vue"
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesPlugin,
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import './style.css'

export default {
  extends: DefaultTheme,
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'CS-BAOYAN/CS-BAOYAN-2025', //仓库
      repoId: 'R_kgDOM44fMA', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOM44fMM4Ci6RT', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu)
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    googleAnalytics({
      id: 'G-Y4NJEXCBER', //跟踪ID，在analytics.google.com注册即可
    }),
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      spotlight: {
        defaultToggle: true,
      },
    })
  }
} satisfies Theme
