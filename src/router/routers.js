import Work from '@/view/work'
import Login from '@/view/login/login.vue'
import error_404 from '@/view/error-page/404.vue'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

// 不作为Work组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
      title: 'Login - 登录'
  },
  component: Login
}

export const page404 = {
  path: '*',
  name: 'error_404',
  meta: {
      title: '404-页面不存在'
  },
  component: error_404
}

export const page403 = {
  path: '/403',
  meta: {
      title: '403-权限不足'
  },
  name: 'error-403',
  component: () => import('@/view/error-page/403.vue')
}

export const page500 = {
  path: '/500',
  meta: {
      title: '500-服务端错误'
  },
  name: 'error-500',
  component: () => import('@/view/error-page/500.vue')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/work/mywork',
  component: Work,
  children: [
    { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/view/own-space/own-space.vue') }
  ]
};

// 作为Work组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/manager',
    name: 'manager',
    component: Work,
    meta: {
      tabtag: 'manager',
      title: '管理'
    },
    children: [
      {
        path: 'test',
        name: 'test',
        meta: {
          tabtag: 'manager',
          icon: 'ios-book',
          title: '组织架构'
        },
        component: () => import('@/view/single-page/test')
      }
    ]
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('@/view/work'),
    meta: {
      tabtag: 'manager',
      title: '企业管理'
    },
    children: [
      {
        path: 'mycompany',
        name: 'mycompany',
        meta: {
          tabtag: 'manager',
          icon: 'ios-book',
          title: '我的企业'
        },
        component: () => import('@/view/single-page/test')
      },
      {
        path: 'mycompany1',
        name: 'mycompany1',
        meta: {
          tabtag: 'manager',
          icon: 'ios-book',
          title: '我的企业1'
        },
        component: () => import('@/view/single-page/test')
      }
    ]
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('@/view/work'),
    meta: {
      tabtag: 'work',
      title: '工作'
    },
    children: [
      {
        path: 'mywork',
        name: 'mywork',
        meta: {
          tabtag: 'work',
          icon: 'ios-book',
          title: '我的工作'
        },
        component: () => import('@/view/single-page/testwork')
      }
    ]
  },
  {
    path: '/customer',
    name: 'customer',
    meta: {
      tabtag: 'work',
      title: '工作'
    },
    component: Work,
    children: [
      {
        path: 'mycustomer',
        name: 'mycustomer',
        meta: {
          tabtag: 'work',
          icon: 'ios-contacts',
          title: '我的客户'
        },
        component: () => import('@/view/single-page/manager')
      }
    ]
  }
]
// 所有上面定义的路由都要写在下面的routers里
export const routes = [
  loginRouter,
  ...appRouter,
  otherRouter,
  page500,
  page403,
  page404
]

// export default routers


// export default [
//   {
//     path: '/login',
//     name: 'login',
//     meta: {
//       title: 'Login - 登录',
//       hideInMenu: true
//     },
//     component: () => import('@/view/login/login.vue')
//   },
//   {
//     path: '/',
//     name: 'work',
//     redirect: '/work',
//     component: () => import('@/view/work'),
//     meta: {
//       hideInMenu: true,
//       notCache: true,
//       topheader: true,
//       title: '工作',
//       icon: 'ios-navigate'
//     }
//   },
//   {
//     path: '/manager',
//     name: 'manager',
//     component: () => import('@/view/work'),
//     meta: {
//       hideInMenu: true,
//       notCache: true,
//       topheader: true,
//       title: '管理',
//       icon: 'ios-keypad'
//     }
//   },
//   {
//     path: '/manager',
//     name: 'manager',
//     component: () => import('@/view/work'),
//     meta: {
//       tabtag: 'manager',
//       title: '管理'
//     },
//     children: [
//       {
//         path: 'test',
//         name: 'test',
//         meta: {
//           tabtag: 'manager',
//           icon: 'ios-book',
//           title: '组织架构'
//         },
//         component: () => import('@/view/single-page/test')
//       }
//     ]
//   },
//   {
//     path: '/company',
//     name: 'company',
//     component: () => import('@/view/work'),
//     meta: {
//       tabtag: 'manager',
//       title: '管理'
//     },
//     children: [
//       {
//         path: 'mycompany',
//         name: 'mycompany',
//         meta: {
//           tabtag: 'manager',
//           icon: 'ios-book',
//           title: '我的企业'
//         },
//         component: () => import('@/view/single-page/test')
//       },
//       {
//         path: 'mycompany1',
//         name: 'mycompany1',
//         meta: {
//           tabtag: 'manager',
//           icon: 'ios-book',
//           title: '我的企业1'
//         },
//         component: () => import('@/view/single-page/test')
//       }
//     ]
//   },
//   {
//     path: '/work',
//     name: 'work',
//     component: () => import('@/view/work'),
//     meta: {
//       tabtag: 'work',
//       title: '工作'
//     },
//     children: [
//       {
//         path: 'testwork',
//         name: 'testwork',
//         meta: {
//           tabtag: 'work',
//           icon: 'ios-book',
//           title: '我的工作'
//         },
//         component: () => import('@/view/single-page/testwork')
//       }
//     ]
//   },
//   {
//     path: '/customer',
//     name: 'customer',
//     meta: {
//       tabtag: 'work',
//       title: '工作'
//     },
//     component: Work,
//     children: [
//       {
//         path: 'mycustomer',
//         name: 'mycustomer',
//         meta: {
//           tabtag: 'work',
//           icon: 'ios-contacts',
//           title: '我的客户'
//         },
//         component: () => import('@/view/single-page/manager')
//       }
//     ]
//   },
  // {
  //   path: '',
  //   name: 'doc',
  //   meta: {
  //     title: 'iviewAdmin文档',
  //     href: 'https://lison16.github.io/iview-admin-doc/#/',
  //     icon: 'ios-book'
  //   }
  // },
  // {
  //   path: '',
  //   name: 'vuex',
  //   meta: {
  //     access: ['admin'],
  //     title: 'vuex文档',
  //     href: 'https://vuex.vuejs.org/zh/installation.html',
  //     icon: 'ios-book'
  //   }
  // },
  // {
  //   path: '/work',
  //   name: 'work',
  //   component: Work,
  //   children: [
  //     {
  //       path: 'test',
  //       name: 'test',
  //       meta: {
  //         icon: '_qq',
  //         title: 'test'
  //       },
  //       component: () => import('@/view/single-page/test')
  //     }
  //   ]
  // },
  
  // {
  //   path: '/components',
  //   name: 'components',
  //   meta: {
  //     icon: 'logo-buffer',
  //     title: '组件'
  //   },
  //   component: Work,
  //   children: [
  //     {
  //       path: 'count_to_page',
  //       name: 'count_to_page',
  //       meta: {
  //         icon: 'md-trending-up',
  //         title: '数字渐变'
  //       },
  //       component: () => import('@/view/components/count-to/count-to.vue')
  //     },
  //     {
  //       path: 'tables_page',
  //       name: 'tables_page',
  //       meta: {
  //         icon: 'md-grid',
  //         title: '多功能表格'
  //       },
  //       component: () => import('@/view/components/tables/tables.vue')
  //     },
  //     {
  //       path: 'split_pane_page',
  //       name: 'split_pane_page',
  //       meta: {
  //         icon: 'md-pause',
  //         title: '分割窗口'
  //       },
  //       component: () => import('@/view/components/split-pane/split-pane.vue')
  //     },
  //     {
  //       path: 'markdown_page',
  //       name: 'markdown_page',
  //       meta: {
  //         icon: 'logo-markdown',
  //         title: 'Markdown编辑器'
  //       },
  //       component: () => import('@/view/components/markdown/markdown.vue')
  //     },
  //     {
  //       path: 'editor_page',
  //       name: 'editor_page',
  //       meta: {
  //         icon: 'ios-create',
  //         title: '富文本编辑器'
  //       },
  //       component: () => import('@/view/components/editor/editor.vue')
  //     },
  //     {
  //       path: 'icons_page',
  //       name: 'icons_page',
  //       meta: {
  //         icon: '_bear',
  //         title: '自定义图标'
  //       },
  //       component: () => import('@/view/components/icons/icons.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/update',
  //   name: 'update',
  //   meta: {
  //     icon: 'md-cloud-upload',
  //     title: '数据上传'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'update_table_page',
  //       name: 'update_table_page',
  //       meta: {
  //         icon: 'ios-document',
  //         title: '上传Csv'
  //       },
  //       component: () => import('@/view/update/update-table.vue')
  //     },
  //     {
  //       path: 'update_paste_page',
  //       name: 'update_paste_page',
  //       meta: {
  //         icon: 'md-clipboard',
  //         title: '粘贴表格数据'
  //       },
  //       component: () => import('@/view/update/update-paste.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/directive',
  //   name: 'directive',
  //   meta: {
  //     hide: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'directive_page',
  //       name: 'directive_page',
  //       meta: {
  //         icon: 'ios-navigate',
  //         title: '指令'
  //       },
  //       component: () => import('@/view/directive/directive.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/multilevel',
  //   name: 'multilevel',
  //   meta: {
  //     icon: 'md-menu',
  //     title: '多级菜单'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'level_2_1',
  //       name: 'level_2_1',
  //       meta: {
  //         icon: 'arrow-graph-up-right',
  //         title: '二级-1'
  //       },
  //       component: () => import('@/view/multilevel/level-2-1.vue')
  //     },
  //     {
  //       path: 'level_2_2',
  //       name: 'level_2_2',
  //       meta: {
  //         access: ['super_admin'],
  //         icon: 'arrow-graph-up-right',
  //         showAlways: true,
  //         title: '二级-2'
  //       },
  //       component: parentView,
  //       children: [
  //         {
  //           path: 'level_2_2_1',
  //           name: 'level_2_2_1',
  //           meta: {
  //             icon: 'arrow-graph-up-right',
  //             title: '三级'
  //           },
  //           component: () => import('@/view/multilevel/level-2-2/level-3-1.vue')
  //         },
  //         {
  //           path: 'level_2_2_2',
  //           name: 'level_2_2_2',
  //           meta: {
  //             icon: 'arrow-graph-up-right',
  //             title: '四级'
  //           },
  //           component: () => import('@/view/multilevel/level-2-2/level-3-2.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: 'level_2_3',
  //       name: 'level_2_3',
  //       meta: {
  //         icon: 'arrow-graph-up-right',
  //         title: '二级-3'
  //       },
  //       component: () => import('@/view/multilevel/level-2-3.vue')
  //     },
  //   ]
  // },
//   {
//     path: '/403',
//     name: 'error_403',
//     meta: {
//       hideInMenu: true
//     },
//     component: () => import('@/view/error-page/403.vue')
//   },
//   {
//     path: '/500',
//     name: 'error_500',
//     meta: {
//       hideInMenu: true
//     },
//     component: () => import('@/view/error-page/500.vue')
//   },
//   {
//     path: '*',
//     name: 'error_404',
//     meta: {
//       hideInMenu: true
//     },
//     component: () => import('@/view/error-page/404.vue')
//   }
// ]
