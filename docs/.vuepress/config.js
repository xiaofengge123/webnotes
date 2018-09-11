module.exports = {
    // base:基础目录
    // base: '/VueDoc/',
    // 指定 vuepress build 的输出目录
    dest: 'dist',
    // 网站的标题。这将是所有页面标题的前缀，并显示在默认主题的导航栏中
    title: '前端小峰哥的学习笔记',
    // 网站描述。这将在页面 HTML 中表现为一个 <meta> 标签。
    description: '前端小峰哥的学习笔记！包括HTML,CSS,JavaScript,Vue,React,Angular,Nodejs,webpack,微信小程序,React Native,iOS,Android,混合开发,CentOS等',
    // 被注入页面 HTML <head> 额外的标签。
    head: [
    ],
    // 如果设置为 true，VuePress 将自动生成并注册一个 service worker ，这个 worker 将内容缓存以供离线使用（仅在生产环境中启用）
    serviceWorker: false,
    // 为使用的主题提供配置选项。这些选项将根据你使用的主题而有所不同
    themeConfig: {
        // 你可以通过 themeConfig.nav 将链接添加到导航栏中
        nav: [
            {
                text: '支持我们',
                items:[
                    { text:'给我们点赞 -- github', link:'https://github.com/xuefeng666/webnotes'},
                ],
            },
            {
                text: '友情链接',
                items:[
                    { text:'小峰哥笔记', link:'http://www.xuefeng666.com'},
                ],
            }
        ],
        // 这里是是侧边栏配置
        sidebar:[
            // 用对象分组，一个对象代表一组
            {
                title: 'Web前端',
                collapsable:true,
                children:[
                    ['Web/','核心内容'],
                    ['Web/React/','React'],
                    ['Web/Vue/','Vue'],
                    ['Web/VueSrc/','Vue源码学习'],
                ],  
            },
            {
                title: '前端开发环境',
                collapsable:true,
                children:[
                    ['WebSDE/','核心内容'],
                    ['WebSDE/WebSDE/','前端开发环境'],
                ], 
            },
            {
                title: 'CSS',
                collapsable:true,
                children:[
                    ['Css/','核心内容'],
                    ['Css/Flex/','Flex'],
                ], 
            },
            {
                title: '前端模块化',
                collapsable:true,
                children:[
                    ['Module/','核心内容'],
                    ['Module/Module/','前端模块化'],
                ], 
            },
            {
                title: '微信小程序',
                collapsable:true,
                children:[
                    ['miniprogram/','核心内容'],
                    ['miniprogram/miniprogram/','微信小程序'],
                ], 
            },
            {
                title: 'Git',
                collapsable:true,
                children:[
                    ['Git/','核心内容'],
                    ['Git/Git/','Git'],
                ], 
            },
            {
                title: 'CentOS',
                collapsable:true,
                children:[
                    ['CentOS/','核心内容'],
                    ['CentOS/CentOS/','CentOS'],
                ], 
            }
        ],
        sidebarDepth:2
    }
}
