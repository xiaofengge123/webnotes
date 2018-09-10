## Web SDE 

:::tip

**最后更新时间：2018年09月10日**

**字数：15812**

:::

Web软件开发环境（Web Software Development Environment，Web SDE）

程序员到了一家新的公司，上班第一天一般工作都是熟悉安装公司团队开发环境，今天给大家介绍一下，前端基础开发环境的配置。

当然，这里只是说一些必须或者是极大概率用到的，因为每个公司开发环境都可能有一些不一样的地方，我们可以根据实际情况进行相关修改。

## 基本入职须知
* 安装开发环境
  * 统一的系统环境
  * 统一的开发编辑器
* 代码管理
  * git
  * gitlab
  * svn
  * source tree
* 开发规范
  * 统一的技术框架 
  * 代码管理规范
  * 代码编写规范
  * 开发文档
* 开发须知
  * 测试服务器
  * 接口管理
  * 公司项目开发部署流程
  * bug测试修改流程  

::: tip

**建议上面的流程都熟悉一下，不知道的可以百度一下**

**大家针对每家公司的具体情况再进行安装一些必要的软件**

**下面的软件大家按照顺序安装就可以了**

:::

## 开发工具

### Visual Studio Code

**开源 免费 功能强大**

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/08/21/3d8309a640f5db0480793f9a3c569772.png" />

* [官方下载地址](https://code.visualstudio.com/)

* 版本
    * Windows
    * Mac OS
    * Linux

* [基本使用教程](https://jingyan.baidu.com/article/2f9b480d890faa41cb6cc208.html) 百度百科

* 推荐安装插件：
    * [vscode 前端插件推荐](https://segmentfault.com/a/1190000011779959)  **推荐**
    * [vscode 编辑器常用插件推荐](https://blog.csdn.net/Che_rish/article/details/78893019) 

* 推荐配置：
    * [2018 vscode 前端最佳配置](https://blog.csdn.net/win7583362/article/details/79315055/)    

::: tip

**Windows版本下，添加右击在Visual Studio Code中打开，可以快速打开项目哦**

:::


### webstorm

**功能强大 收费**

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/08/21/a1637ce2406399b8806a82b36c1e71be.png" />

* 集成开发环境（IDE，Integrated Development Environment ）
* WebStorm 是jetbrains公司旗下一款JavaScript 开发工具。
* 目前已经被广大中国JS开发者誉为“**Web前端开发神器**”、“**最强大的HTML5编辑器**”、“**最智能的JavaScript IDE**”等

* [官方下载地址](http://www.jetbrains.com/webstorm/)

* 版本
    * Windows
    * Mac OS
    * Linux

* 使用教程：
    * [Webstorm 超实用教程](https://www.jianshu.com/p/4ce97b360c13)
    * [Webstorm使用教程详解](https://www.cnblogs.com/baiyangyuanzi/p/6761714.html)
    * [Webstorm使用教程](https://cnodejs.org/topic/59a8bffe6c90694908d81592)


### sublime text

**代码编辑器 可配置程度高**

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/08/21/b9052d6d406ccd3e80c7f479ec38c5b1.png" />

* [官方下载地址](https://www.sublimetext.com/)

**Sublime Text 2是收费软件，但可以无限期试用**

* 版本
    * Windows
    * Mac OS
    * Linux

* 使用教程：
    * [Sublime Text 全程指引 by Lucida](https://www.cnblogs.com/figure9/p/sublime-text-complete-guide.html)  **推荐**
    * [Sublime Text 词条](https://baike.baidu.com/item/Sublime%20Text) **百度百科**
    * [如何优雅地使用Sublime Text3](https://www.jianshu.com/p/3cb5c6f2421c)
    * [sublime text 3设置中文](https://jingyan.baidu.com/article/9c69d48fea00ca13c9024e18.html)

## 浏览器

### Chrome

**webkit 免费 功能强大 首选**

* [下载地址](https://www.google.cn/chrome/)

* 使用教程：
    * [Chrome使用教程](https://www.jianshu.com/p/7976e4662527)
    * [谷歌浏览器开发工具综述](http://wiki.jikexueyuan.com/project/chrome-devtools/overview.html)
    * [推荐 Chrome 扩展](http://www.runoob.com/w3cnote/chrome-extensions-recommended.html)

### Firefox

**开源 免费 功能强大**

* [下载地址](http://www.firefox.com.cn/)
* [火狐简介](https://baike.baidu.com/item/Mozilla%20Firefox?fromtitle=%E7%81%AB%E7%8B%90%E6%B5%8F%E8%A7%88%E5%99%A8&fromid=213444)     **百度百科**
* 版本
  - Windows
  - Mac OS
  - Linux
  - 移动版
* 使用教程：
  * [火狐浏览器使用教程](https://jingyan.baidu.com/article/9f63fb9161c1ebc8400f0e2e.html)
  * [firefox火狐浏览器使用技巧大全](https://www.kafan.cn/edu/40404504.html)

## NodeJs

* 介绍：
  * Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境
  * Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
  * Node.js 的包管理器 npm，是全球最大的开源库生态系统
* [官网下载地址](https://nodejs.org/en/)
* [Nodejs官网](https://nodejs.org/en/)
* [Nodejs中文网](http://nodejs.cn/)
  * 与官方文档同步的中文文档
* 版本
  - Windows
  - Mac OS
  - Linux
* 安装：
  * Windows：
    * 图形界面安装，下一步下一步即可
  * [CentOS安装教程](http://www.xuefeng666.com/CentOS/notes/#node-js%E9%83%A8%E7%BD%B2)
    * http://www.xuefeng666.com/CentOS/notes/#node-js%E9%83%A8%E7%BD%B2
* 查询是否安装成功：
  * 命令行输入：node -v ，显示版本即可

## npm

* npm是跟随Nodejs自动安装的
* 查询是否安装成功：
  - 命令行输入：npm  -v ，显示版本即可
* 使用教程：
  * [npm使用教程 -- 菜鸟教程](https://www.runoob.com/nodejs/nodejs-npm.html)
  * [手把手教你玩转npm包](https://blog.csdn.net/uikoo9/article/details/79010842)
  * [npm scripts 使用指南 -- 阮一峰](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

### 切换淘宝镜像源

* 临时使用

```bash
npm --registry https://registry.npm.taobao.org
```

* 持久使用

```bash
npm config set registry https://registry.npm.taobao.org
```

* 配置后可通过下面方式来验证是否成功 

```bash
npm config get registry
```

找到`taobao`关键字即可

* 通过`cnpm`使用

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

* 使用示例 

```bash
cnpm install express
```

## webpack

Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

* 核心功能：
  * 模块化
  * 打包
* [webpack官网](http://webpack.github.io/)
* [webpack 中文文档](https://www.webpackjs.com/)
* 使用教程：
  * [webpack入门教程](http://www.runoob.com/w3cnote/webpack-tutorial.html)
  * [入门 Webpack，看这篇就够了](https://segmentfault.com/a/1190000006178770)

### 安装
```bash
// 全局安装
npm install --global webpack

// 本地安装
// 要安装最新版本
npm install --save-dev webpack
// 安装特定版本
npm install --save-dev webpack@<version>

// 如果你使用 webpack 4+ 版本，你还需要安装 CLI
npm install --save-dev webpack-cli

// 安装体验版本
npm install webpack@beta
npm install webpack/webpack#<tagname/branchname>

// 安装这些最新体验版本时要小心！它们可能仍然包含 bug，因此不应该用于生产环境

```
:::tip
  **npm install --global webpack**

  全局安装有风险，会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。
:::
### webpack 开发配置

```javascript
// webpack.config.js
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

// 导入配置文件
const { productConfig, productName } = require('./config')

module.exports = {
  // 入口
  // entry: path.join(__dirname, './src/main.js'),
  entry: path.join(__dirname, productConfig[productName].entry),
  // entry:['babel-polyfill',path.join(__dirname, productConfig[productName].entry)],

  // 出口
  output: {
    // 输出文件目录
    path: path.join(__dirname, productConfig[productName].output),
    // 输出文件名称
    filename: 'bundle.js'
  },

  // 有利于开发期间定位错误信息
  devtool: 'eval-source-map',

  // webpack-dev-server
  devServer: {
    // 自动打开浏览器
    open: true,
    // 端口号
    port: 3000,
  },

  // 用来处理非JS的静态资源
  module: {
    rules: [
      // 添加浏览器私有前缀postcss-loader
      // 需要postcss.config.js配置文件，也需要postcss-loader和autoprefixer
      { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] ,exclude: /node_modules|lib/ },
      { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.less$/,use:["style-loader!css-loader!less-loader"] },
      { 
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // limit 就是阀值，值的单位：字节(byte)
            limit: 8192
          }
        } 
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            // limit 就是阀值，值的单位：字节(byte)
            limit: 8192
          }
        }
      },

      // 处理ES6或者更高级的JS语法：
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules|lib/ },

      // 处理 Vue单文件组件
      { test: /\.vue$/, use: 'vue-loader' },

      // 让 html-loader 来处理HTML页面，此时，页面就会被webpack处理了
      { test: /\.html$/, use: 'html-loader' }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, productConfig[productName].html)
    })
  ]
}

```

### webpack 打包配置

```javascript
// webpack.prod.js
const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

// 自动删除目录的包
const cleanWebpackPlugin = require('clean-webpack-plugin')
// 分离 css 到独立的文件中
const ExtractTextPlugin = require("extract-text-webpack-plugin")
// 压缩 css 资源文件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// 导入配置文件
const {productConfig,productName} = require('./config')

module.exports = {
  // 入口
  entry: {
    // 我们写的js代码的入口
    // app: path.join(__dirname, './src/main.js'),
    app: path.join(__dirname, productConfig[productName].entry),
    // 第三方js文件的入口
    vendor: ['vue', 'vuex', 'vue-router', 'axios']
  },

  // 出口
  output: {
    // 输出文件目录
    // path: path.join(__dirname, './dist'),
    path: path.join(__dirname,productConfig[productName].output ),
    // 修改出口js文件名称格式
    // js 表示将生成的js文件放到js目录中
    // [name] 表示入口entry中配置的文件名称
    filename: 'js/[name].[chunkhash].js',
    // 设置公共路径，用来解决CSS中引用字体路径的bug
    publicPath: '/',
    // 指定 代码分离 后的每个js文件的名称和文件路径
    chunkFilename: 'js/[name].[chunkhash].js',
  },

  // postcss-loader 处理CSS浏览器私有前缀
  // 用来处理非JS的静态资源
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use:["css-loader","postcss-loader"],
        })
      },
      { 
        test: /\.(sass|scss)$/, 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // limit 就是阀值，值的单位：字节(byte)
            limit: 7168,

            // images 表示将图片打包的images文件夹中
            // [hash:10] 表示采用hash命名方式，并且名称长度为：10个字母
            // [ext] 表示保留图片原始的后缀名称
            name: 'images/[hash:10].[ext]'
          }
        }
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            // limit 就是阀值，值的单位：字节(byte)
            limit: 8192,
            name: 'fonts/[hash:7].[ext]'
          }
        }
      },

      // 处理ES6或者更高级的JS语法：
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules|lib/ },

      // 处理 Vue单文件组件
      { test: /\.vue$/, use: 'vue-loader' },

      // 让 html-loader 来处理HTML页面，此时，页面就会被webpack处理了
      { test: /\.html$/, use: 'html-loader' }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, productConfig[productName].html),

      // 压缩HTML
      minify: {
        // 移除空白
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
        // 移除属性中的双引号
        removeAttributeQuotes: true
      }
    }),

    new cleanWebpackPlugin([productConfig[productName].output]),

    // 抽离第三方包
    new webpack.optimize.CommonsChunkPlugin({
      // 将 entry 中指定的 ['vue', 'vue-router', 'axios'] 打包到名为 vendor 的js文件中
      // 第三方包入口名称，对应 entry 中的 vendor 属性
      name: 'vendor',
    }),

    // 压缩JS代码
    new webpack.optimize.UglifyJsPlugin({
      // 压缩
      compress: {
        // 移除警告
        warnings: false
      }
    }),

    // 指定环境为生产环境：vue会根据这一项启用压缩后的vue文件
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // 通过插件抽离 css (参数)
    new ExtractTextPlugin('css/style.css'),
    // 抽离css 的辅助压缩插件
    new OptimizeCssAssetsPlugin(),
  ]
}

```

### config 配置文件

```javascript
// 导出配置文件
module.exports = {
    productName:'demo',//指定当前的项目名称
    // 当前的项目配置：
    // entry： 入口
    // output：出口
    // html： html文件位置
    productConfig:{
        demo:{
            entry:'./src/demo/main.js',
            output:'./dist/demo',
            html:'./src/demo/index.html',
        },
    }
}
```

* **通过配置config.js文件，可以运行开发多个项目，互不干扰**

## Git

Git是目前世界上最先进的分布式版本控制系统（没有之一）

* [官方网站](https://git-scm.com/)
* [下载地址](https://git-scm.com/)
* 版本
  - Windows
  - Mac OS
  - Linux
* 使用教程：
  * [廖雪峰Git使用教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
  * [Git入门教程](http://www.runoob.com/git/git-tutorial.html)

### 配置用户名和邮箱
初次安装git需要配置用户名和邮箱，否则git会提示：please tell me who you are

```bash
git config --global user.name "你的用户名"

git config --global user.email "你的密码"
```

:::tip

**用户名和邮箱是git提交代码时用来显示你身份和联系方式的，并不是github用户名和邮箱**
:::

### 生成密钥对（Mac）
大多数 Git 服务器都会选择使用 SSH 公钥来进行授权。系统中的每个用户都必须提供一个公钥用于授权，没有的话就要生成一个。

生成公钥的过程在所有操作系统上都差不多。

首先你要确认一下本机是否已经有一个公钥。

**SSH 公钥默认储存在账户的主目录下的 ~/.ssh 目录**
```bash
 // 进入目录
 cd ~/.ssh
 // 查看当前目录下面的文件
 ls
```
* 有 .pub 后缀的文件就是公钥，另一个文件则是密钥
* 如果么有文件就自己生成
```bash
ssh-keygen -t rsa -C "your_email@youremail.com"
```
* -t：是选择kye的type。分别有 RSA 和 DSA 两种
* -c：指定所指定的注释，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息，用自己的邮箱即可
* 连续三次回车：一个密语字符串(passphrase)和2次口令(password)，空都代表没有
* **最后把公司文件发给相关人员即可**

## SVN

Apache Subversion 通常被缩写成 SVN，是一个开放源代码的版本控制系统

* [官方网站](https://subversion.apache.org/)
* [下载地址](http://subversion.apache.org/packages.html)
* 版本
  - Windows
  - Mac OS
  - Linux
  - 等等，非常多
* 使用教程：
  * [SVN入门教程](http://www.runoob.com/svn/svn-tutorial.html)
  * [SVN入门图解教程 — 超详细](http://www.cnblogs.com/Renyi-Fan/p/9201937.html)    **推荐**

## http-server

* **http-server 是一个简单的零配置命令行HTTP服务器, 基于 nodeJs**


* 只需要进入指定的目录，运行http-server命令，即可以当前目录为网站根目录开启一个服务器，非常方便快捷
* **安装** (全局安装加 -g) : 

```bash
 npm install http-server 
```

* **运行网站**

在站点目录下开启命令行输入

```
 http-server
 可以通过 -p 指定端口
```

* 访问: 


* http://localhost:8080
* http://127.0.0.1:8080

参数配置：

```bash
-p 端口号 (默认 8080)

-a IP 地址 (默认 0.0.0.0)

-d 显示目录列表 (默认 'True')

-i 显示 autoIndex (默认 'True')

-e or --ext 如果没有提供默认的文件扩展名(默认 'html')

-s or --silent 禁止日志信息输出

--cors 启用 CORS via the Access-Control-Allow-Origin header

-o 在开始服务后打开浏览器
-c 为 cache-control max-age header 设置Cache time(秒) , e.g. -c10 for 10 seconds (defaults to '3600'). 禁用 caching, 则使用 -c-1.
-U 或 --utc 使用UTC time 格式化log消息

-P or --proxy Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com

-S or --ssl 启用 https

-C or --cert ssl cert 文件路径 (default: cert.pem)

-K or --key Path to ssl key file (default: key.pem).

-r or --robots Provide a /robots.txt (whose content defaults to 'User-agent: *\nDisallow: /')

-h or --help 打印以上列表并退出
```

