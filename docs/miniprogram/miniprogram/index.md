## 小程序
记录小程序学习的点滴

:::tip

**整理人：黄雪峰**

**最后更新时间：2018年09月29日**

**字数：107821**

:::

## 学习资源
* 官方资源：
    * [微信官方小程序文档](https://developers.weixin.qq.com/miniprogram/dev/index.html)
    * [微信官方小游戏文档](https://developers.weixin.qq.com/minigame/dev/index.html?t=18081511)
    * [微信开放平台](open.weixin.qq.com)
    * [微信开发者工具](https://developers.weixin.qq.com/minigame/dev/devtools/download.html)
    * [官方小程序开发指南](https://developers.weixin.qq.com/ebook?action=get_post_info&token=935589521&volumn=1&lang=zh_CN&book=miniprogram&docid=0008aeea9a8978ab0086a685851c0a)
* 开发资源：
    * [wepy官方文档](https://tencent.github.io/wepy/document.html#/) **腾讯官方出品**
    * [mpvue官方文档](http://mpvue.com/) **美团点评团队出品**
    * [使用mpvue开发小程序教程](https://www.jianshu.com/p/8f779950bfd9)

* UI组件库：
    * [WeUI](https://weui.io/)

## 小程序介绍

### 什么是小程序

小程序是一种不需要下载安装即可使用的应用，它实现了应用触手可及的梦想，用户扫一扫或者搜一下即可打开应用。也体现了用完即走的理念，用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无序安装卸载 -- 张小龙

### 生活中的小程序

- 跳一跳
- 圣诞头像：换一个带着圣诞帽的微信头像
- 拼多多
- 京东
- 摩拜单车
- 等等...

### 前世今生

* 2016年1月11日，2016微信公开课PRO版在广州举行，“微信之父”张小龙首次公开演讲，宣布微信公众号将推出“**应用号**”，通过公众号完成一些App的部分功能
* 2016年9月21日，微信小程序正式开启内测，首批内存名额200个，有人报价300万交易
* 2016年9月23日，微信应用号改名小程序，马化腾爆料改名内幕内幕：苹果不让叫应用号
* 2016年11月3日晚间，微信团队宣布：微信小程序正式开放公测
* 2017年1月9日0点，万众瞩目的微信第一批小程序正式上线
* 2017年12月28日，小程序开放游戏类目以及在首页增加下拉访问小程序入口，并且将“跳一跳”作为微信升级版的开屏内容进行推广，从而让日活人数在年末迅速增长
* 2018年1月 “跳一跳”等小游戏在大量微信用户中开始传播，而下拉入口的便捷性也让小程序的访问量大增，日活用户大幅增长到 2.8 亿。
* 2018年3月，微信正式宣布小程序广告组件启动内测
* 2018年7月13日，小程序任务栏功能升级，新增“我的小程序”板块；而小程序原有的“星标”功能升级，可以将喜欢的小程序直接添加到“我的小程序”。

### 与传统应用对比

* 传统应用：下载 —> 安装 —> 注册
* 小程序：打开微信 —>搜索小程序
* 最大特点：
  * 无需安装
  * 无需注册
  * 用完即走

### 小程序优缺点

### 小程序优点

* 无需安装，用完即走
* 微信支持，流量巨大
* 比公众号优势明显
* 与传统App相比，开发成本，获客成本都低，并且市场广阔，传统App市场基本饱和

### 局限性

* **小程序不能分享朋友圈**：
  * 可以分享到聊天、群里，但是达不到朋友圈可以无限级的扩散的病毒式营销的效果
* API局限性，受限于微信
* 严重依赖网络
* 发布审核机制


## 开发须知

### 开发之前就必须指定的坑

* 小程序名称可以由中文、数字、英文。长度在3-20个字符之间，一个中文字等于2个字符
* **小程序和公众号不是一个账号，需要单独注册**
* 小程序名称在帐号信息设置时完成，请谨慎设置，一旦设置暂不支持修改
* 小程序名称不得与公众平台已有的订阅号、服务号重复
* 如果你不是特殊组织，你还是要花300元进行认证，**微信支付需要微信认证后才能使用**
* 小程序头像、介绍每月只能修改5次，服务范围每月只能修改1次。
* **小程序二维码在第一个版本上线后才能获得**
* 一个小程序账号只有一个管理员（可修改），可以绑定10位开发者
* 一个应用同时只能打开5个页面，当已经打开了5个页面之后，wx.navigateTo不能正常打开新页面，**请避免多层级的交互方式**

:::tip

* **最新wx.navigateTo可以打开10层了**
* 要注意不同的想转页面方式，触发的页面生命周期是不一样的，请注意

:::

:::tip

**使用微信的storage一定要注意，同步读取有时候会失败**

:::

:::tip

**一定要详细理解微信授权和openid以及unionid机制，unionid有时候是获取不到的，想起参考本文章unionid记住部分**

:::

:::tip

**使用微信支付，需要线上或者模拟线上环境，要注意**

:::

:::tip

**不校检域名，真机调试可以，但是点击预览，有时候获取不到数据，必须是后台设置的https域名，否则请求不到数据**

:::

:::tip

**小程序是有类目的，不同的小程序上架需要设置不同的类目，有些类目需要资质和证书的**

:::

:::tip

**小程序虚拟支付，iOS端，审核很大可能性会不通过，要注意，Android可以，解决方案看本文虚拟支付部分**

:::

:::tip

**小程序开发板，体验版和正式版缓存是通用的，使用正式版之前，要删掉开发板和体验版，不然会出现一些莫名其妙的问题，尤其是开发体验人员**

**体验版更新，测试人员，也建议在小程序列表中删掉，然后重新扫码体验，不然有时候会出一些莫名其妙的问题**

:::

:::tip

* **小程序仍然使用WebView渲染，并非原生渲染**
* **需要独立开发，不能在非微信环境运行 **
* **开发者不可以扩展新组件。**

:::

:::tip

**依赖浏览器环境的js库不能使用，因为是JSCore执行的，没有window、document对象。**

:::

:::tip

* **WXSS中无法使用本地（图片、字体等）**
* **WXSS转化成js 而不是css，为了兼容rpx**
* **WXSS不支持级联选择器**

:::

:::tip

**小程序不能和公众号重名，于是小程序的名字就成了：自选股+、滴滴出行DiDi 。**

:::

## 关于虚拟支付

### 虚拟支付现状

* **除小游戏类目的安卓内购功能，在苹果（Apple）iOS 系统下，微信小程序不可提供虚拟物品的购买支付，不应展示支付功能，也不得引导至外部网页或APP来实现支付功能**

* 影响最大的就是：**知识付费/在线教育类**
  * 基本无法在小程序进行充值购买课程了，除非是买了线下授课，线上的基本over了

### 问题原因

* 苹果App Store机制原因：App Store每年盈利都在几百亿美金，就是因为用户通过苹果平台充值，苹果需要抽成30%，这其实就是我们平时**用苹果手机，不管干什么，几乎都收费贵的离谱**
* 比如QQ客户端—钱包-- 会员-钻：
  * Android开通超级会员20元一个月
  * iOS开通超级会员25元一个月
* 比如快手：

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/19/a2fc4aae40e67260808db76b52dd76a7.png"  width="300" height="500" />

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/19/5ee67b9840da6784806d6c434b8f2405.jpeg" width="300" height="500" />

* **可很明显看到iOS充值贵得多，给的快币也很少，这其中就是因为苹果抽成，作为渠道费用**

### 苹果的防止套利

:::tip

* 众所周知，在AppStore上架的应用，苹果会按照3:7的比例抽取IAP（ In-App Purchase）三成的收入，作为渠道费用。
* App 内各类虚拟数字产品，比如电子书、在线音乐、充值类虚拟货币、游戏直播中道具、会员类产品、微信表情等都需要走 IAP (in-App Purchase，应用内购买)渠道，开发者收入的 30% 会直接被苹果抽走。

* 而同一款应用在Google play、豌豆荚等Android渠道产生的收入提成被其平台抽走，苹果无法获得这部分分成。
* 所以如果安卓ios数据互通，苹果会分流出很大一部分收入。
* 再比如腾讯发行、代理的游戏，通过在微信、QQ等自家渠道分发，同时使用自己的支付工具，那所有的收入都悉数进了腾讯腰包。
* 所以游戏发行商只要在非苹果渠道给游戏内的商品打个八折，就没有用户在苹果的app中应用内购买了。也就是产生了“套利”。为了避免这种情况的发生，最大化的保护自己的利润，苹果需要制造生态隔离，将封闭化做到底
* 当然有一部分是通用的，具体规则，请大家参考[手机游戏ios和Android数据不互通的原因](https://www.jianshu.com/p/315de16f28e4)

:::

### 微信的不妥协

* 曾经闹得沸沸扬扬的微信打赏功能和苹果进行谈判事件，就是这原因
* 现在微信小程序虚拟支付，大致就是因为虚拟支付苹果要收钱，微信不给，就凉了

### 虚拟支付整改

* 5月8日起小程序关闭虚拟支付
* 基于微信小程序平台运营规范，除小游戏类目的安卓内购功能，小程序暂不支持虚拟支付。**请开发者们对当前小程序内含有虚拟支付的内容或服务进行排查并整改**。如在5月8日前未完成整改，平台将对账号屏蔽iOS系统的支付接口调用。
* 除小游戏以外的虚拟支付被限制，也就意味着**知识付费、话费充值等电商平台将**被屏蔽支付功能，小程序变现将受到重大影响!

### 影响

* 以「腾讯视频」小程序为例，iOS版已经不支持付费开通会员，页面显示“由于平台限制，请在微信公众号或App开通”，在安卓版则可以正常付费开通。
  * 腾讯对“亲儿子”也不放过
* 以读书小程序为例：
  * 微信读书（没有充值，推荐App去阅读）
  * 起点读书（有显示月，没有充值接口）
  * 掌阅

### 是否重新开放虚拟支付

* 早在去年9月初，腾讯高层马化腾、张小龙等赴苹果总部沟通“应用内购买”。而在9月中旬，苹果调整了 IAP 新规，允许不经过 IAP 直接购买虚拟礼物，但是要求赠送者完全自愿，且赠送的全部金额直接归接受者所有，平台本身不能抽成（微信打赏开启）

* 根据最新政策，如果苹果方面认定交易涉及到“digital content(数字内容)”，则仍然要收取“苹果税”。
* 我们可以大胆的猜想，虚拟支付的开放是早晚的事，相信在不久的将来，虚拟支付将会全面开放，更多的变现方式将会出现

### 最新规则

* **不要在平台上展示任何支付功能，包括货架（价格标签）、购买/支付/订阅等功能或按钮。**
  * 诸如知识付费类的小程序，在iOS端与安卓版的界面都会有类似“订阅课程”等标识，但之后，iOS端的小程序界面这些标识都不能再显示了
  * 点击订阅等此类标识都将被禁止
  * 呈现货架价格、提示购买的行为将被禁止

* **不要试图引导用户到微信公众号、H5、App或是任何外链进行付费**
  * 小程序跳转App。
    * 由于小程序支持打开App功能，iOS系统内如需使用“虚拟支付”功能的开发者，可以引导用户跳转至App进行支付
  * 引导至公众号。
    * 很多公众号主页的菜单栏有充值功能，比如移动充租赁类公众号、第三方电信服务公众号等等。
    * 开发者可以在小程序中，为用户提供去往公众号的路径，让用户去公众号完成支付。

:::tip

不是所有提供支付功能的小程序都要被整改，仅仅只有涉及“虚拟支付”的小程序需要调整。

什么是虚拟支付？说白了就是购买非实物，摸不到的物品。比如：**VIP会员、充值、课程、虚拟物品**等等。

受到影响的，首当其冲就是内容付费类的小程序，关停iOS版虚拟支付功能，将对这些小程序既有的变现模式带来极大冲击。

而其他涉及虚拟支付的答题类和虚拟礼物类小程序，也都会受到波及。

影响范围仅限iOS端，**Android不受影响**，开发者们依然可以在安卓版本的小程序内，提供虚拟支付。

:::

### 三大解决方案

* **关闭付费通道**
  * 关闭付费通道是最一劳永逸的解决办法，**最好将虚拟支付的指示文字都一并删除**，以避免毫无必要的误会。
  * 比如会员充值之类的提示，全部干掉，就普通用户浏览，一切充值操作都推荐到其他渠道

* **所有的付费调整成免费**

  * 有些小程序的收费功能，**其实可以变成免费功能**，结合其他比如：分享、签到、会员注册可得到奖励的社交玩法，不仅能增加小程序的用户粘性，还能达到流量增长的目的。
  * 同时，高曝光的小程序还能进一步增加流量主广告收入。

* **直接提示不可服务**

  * 对于虚拟支付比较集中的在线课程，会员等可以以免费的形式对外。
  * 或者先在其他渠道做这些服务。但如果不愿意免费，就最好直接提示不可服务，**提示语最好不要出现Apple和iOS相关关键词**。
  * 小程序「网易公开课精品」已经率先用这种方式完成整改，在线课程显示为无法订阅。不过，依然可以试听，让用户了解产品，以便日后平台规则若有调整，可以重新开放订阅。

  * 最好是弹窗提示：暂不支持：十分抱歉，由于相关规范，您暂时无法在这里购买/订阅课程（图书）
  * **所有小游戏目前仅支持安卓端的道具内购，iOS端小游戏，也一样要进行整改了，类似下图的价格标签与“充值”字样都不能显示。**

* **开发者可以暂时专注安卓端的小程序虚拟支付**

  * 根据市场研究机构Kantar发布的2018年第二季度智能手机行业的报告，在中国市场，安卓在第二季度占据了80.4%的市场份额，iOS只有19.5%，比例为八二开，安卓用户还是拥有数量上的优势。

## 开发的局限性

* 代码包限制：1M -- 2M
* 上架审核：官方：1-3天，实际：3天起步的可能性很大
* 审核机制：
  * 审核机制不透明，没有公开规范
  * 被拒后许多都不会给拒绝理由
* 域名、备案、https

## 小程序内存优化

### 理解小程序机制

* 小程序在启动时，会直接加载所有页面逻辑代码进内存，即便 page2 可能都不会被使用。在 page1 跳转至 page2 时，page1 的逻辑代码 Javascript 数据也不会从内存中消失。page2 甚至可以直接访问 page1 中的数据。
* 从页面响应用户点击行为，开始跳转，到新页面onload事件触发，存在一个延迟，这个延迟大概在100-300ms之间（安卓响应比ios慢些）
* 在小程序启动时，会把所有调用Page()方法的object存在一个队列里（如下图）。每次页面访问的时候，微信会重新创建一个新的对象实例（实际上就是深拷贝）。
* 也就是说，在A页面在执行点击响应事件的时候，B页面的实例还没创建，这时候调用的xxx方法，实际上是Page对象的原型（小程序启动时候创建的那个）

### setData优化

* **不要频繁的去 setData**
* **不要每次 setData 都传递大量新数据**
* **不应该在后台态页面进行 setData**
* **严重时，会造成小程序回收**

### 图片优化

* 目前图片资源的主要性能问题在于大图片和长列表图片上，这两种情况都有可能导致 iOS 客户端内存占用上升，从而触发系统回收小程序页面。
* 在 iOS 上，小程序的页面是由多个 WKWebView 组成的，在系统内存紧张时，会回收掉一部分 WKWebView。
* **从过去我们分析的案例来看，大图片和长列表图片的使用会引起 WKWebView 的回收。**
* **瀑布流在小程序上，真心不是一个好的选择，尤其是要求滑动流畅的情况下**
* 除了内存问题外，大图片也会造成页面切换的卡顿。我们分析过的案例中，有一部分小程序会在页面中引用大图片，在页面后退切换中会出现掉帧卡顿的情况。
* **当前我们建议开发者尽量减少使用大图片资源。**

### 瀑布流策略

* 首先不推荐用瀑布流（勿喷）
* 可以一屏一屏的展现，不展示的部分隐藏掉，不渲染，类似无线轮播图

### 渲染DOM问题

* DOM渲染很消耗性能
* 分批加载DOM，可以节省资源消耗
* `wx:if` 和`hidden` 灵活使用，可以提高性能

## React Native

* Facebook于2015年4月开源的跨平台移动应用开发框架
* React Native产出的并不是“网页应用”， 或者说“HTML5应用”，又或者“混合应用”。
* 最终产品是一个真正的移动应用，从使用感受上和用Objective-C或Java编写的应用相比几乎是无法区分的。
* 打包后是一个完整的原生应用，代码可查

## 小程序与web（个人理解）
* 小程序采用了类似React Native 的语言架构
* 小程序没有提供大部分的 Web API，包括 DOM、多媒体、以及符合 HTML5 标准的设备访问 API 等
* 大部分的 Web 框架都不能直接用在小程序上
* 小程序提供了web-view

::: tip
**小程序底层还是基于Webview来实现的**

**小程序本质其实就是（混合）的app 介于web app与native 原生app之间，具备丰富的调用手机各种功能的接口，同时又具备灵活性，跨平台**

:::

## 第一个小程序

### 体验小程序

[官方体验demo]( https://developers.weixin.qq.com/miniprogram/dev/demo.html)

### 注册账号

* [微信公众平台](https://mp.weixin.qq.com/)
* 注册流程
  * 填写帐号信息
  * 邮件激活
  * 需要实名认证
  * 拿到AppID
* 邮箱要求：
  * 未被微信公众平台注册
  * 未被微信开放平台注册
  * 未被个人微信号绑定

### 开发工具

* [开发者工具下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
  * 包含window macOS 版本
* [开发者工具使用](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

### 创建小程序

<img width="300" src="http://bmob-cdn-4908.b0.upaiyun.com/2018/08/16/b775e051401cdb5180019e211d261a27.png">

* 安装微信开发者工具
* 指定项目目录：注意，要指定一个空目录
* 填写AppID：  使用注册后获取到的AppID
* 填写项目名称：非小程序名称，仅用于电脑中区分多个不同的项目
* 建立普通快速启动模板：初始化项目基本结构（空的项目目录中才有这个提示）
* 点击编译菜单，运行QuickStart项目

### 微信开发者工具

微信开发者工具mac版本截图：

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/08/16/e6595a2f40f2711280a47b99378e3614.png" />

* 菜单栏
* 工具栏
* 模拟器：
  * 适配调试
  * 场景值调试
* 编辑器
  * 文档结构
  * 代码编辑
* 调试器
  * 浏览器debug调试

## 文档结构

```
pages/ ---------------- 页面文件夹，所有页面都应该放到这个目录中
  index/  ------------- index页面文件夹
    index.js ---------- index页面的逻辑代码
    index.wxml -------- index页面的HTML结构
    index.wxss -------- index页面的CSS样式
    index.json -------- 页面配置（可选）
utils/ ---------------- 公共的工具函数
app.js ---------------- 应用级别逻辑代码
app.json -------------- 全局配置（包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等）
app.wxss -------------- 全局样式（CSS）
project.config.json --- 开发工具配置（例如界面颜色、编译配置等）
```

### page目录

* 所有页面放到 pages 目录中
* 所有需要展示的页面都要在 app.json 中进行配置
* 文件名称与文件夹名称相同
* pages 数组的第一项表示首页
* 快速创建页面：在 app.json 中配置 pages 添加一项，可以达到快速创建页面的目的（有时候会无效，尴尬！）

### app.js 

* 注册小程序
* 提供小程序生命周期函数
* 进行一些场景值处理
* 可以定义一些全局方法和数据

### globalData

**由于微信Storage坑实在是太多，所以我们一般会使用微信提供的全局数据GlobalData，GlobalData可以随时在页面中读取和存储数据，比Storage方便很多**

* 在App.js中可以设置GlobalData的初始值。

```javascript
App({
  globalData:{
    appid: 'xxxxxxxx',
    secret: 'xxxxxxxx', 
    openid:'xxxxx', 
    userInfo:{}
  },
)
```

* 在App.js中修改GlobalData数据

```javascript
// this代表的是当前文件
this.globalData.openid = e.detail.openid;
```

* 在小程序的所有页面中都可以随时调用和写入存放在GlobalData的数据
* 无论是调用还是写入，第一步都是要让页面与App.js产生关联
* 所以我们要获取app对象

```javascript
// 获取app对象
var app = getApp();

// 获取globalData数据
var getAppInfo = app.globalData.openid;

// 修改globalData中的数据
getApp().globalData.openid = "12345";
```



### app.json

* 用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等
* pages：用于指定小程序由哪些页面组成
* window：用于设置小程序的状态栏、导航条、标题、窗口背景色
* tabBar：tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面
* networkTimeout：各类网络请求的超时时间，单位均为毫秒
* debug：调试模式

| 属性              | 类型           | 必填   | 描述                 |
| --------------- | ------------ | ---- | ------------------ |
| pages           | String Array | 是    | 页面路径列表             |
| window          | Object       | 否    | 全局的默认窗口表现          |
| tabBar          | Object       | 否    | 底部 `tab` 栏的表现      |
| networkTimeout  | Object       | 否    | 网络超时时间             |
| debug           | Boolean      | 否    | 是否开启 debug 模式，默认关闭 |
| functionalPages | Boolean      | 否    | 是否启用插件功能页，默认关闭     |
| subPackages     | Object Array | 否    | 分包结构配置             |
| workers         | String       | 否    | `Worker` 代码放置的目录   |

### 页面json

* 每一个小程序页面也可以使用 json 文件来对本页面的窗口表现进行配置
* 页面的配置只能设置 app.json 中部分  window  配置项的内容
* **页面中配置项会覆盖  app.json  的  window 中相同的配置项**

| 属性                           | 类型       | 默认值     | 描述                                       |
| ---------------------------- | -------- | ------- | ---------------------------------------- |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如 `#000000`                      |
| navigationBarTextStyle       | String   | white   | 导航栏标题颜色，仅支持 `black` / `white`            |
| navigationBarTitleText       | String   |         | 导航栏标题文字内容                                |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                   |
| backgroundTextStyle          | String   | dark    | 下拉 loading 的样式，仅支持 `dark` / `light`      |
| enablePullDownRefresh        | Boolean  | false   | 是否全局开启下拉刷新。详见 Page.onPullDownRefresh     |
| onReachBottomDistance        | Number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为px。详见 Page.onReachButom |
| disableScroll                | Boolean  | false   | 设置为 `true` 则页面整体不能上下滚动；只在页面配置中有效，无法在 `app.json` 中设置该项 |

### app.wxss

* 整个小程序的公共样式表
* 类似我们的 css 样式
* 如果页面有自己的样式表， 则会覆盖公共样式表
* 用法跟标准css文件无异， 支持 .class #id

### project.config.json

* 项目配置文件
* 同开发者工具详情点击后显示的数据一样
* 各种配置
* 一般会配置appid和忽略域名校准

### 开发配置

#### 校检域名

* 开发过程中，我们一般设置**不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书**
* 但是要注意：
  * 点击真机调试，对应的微信账号需要拥有小程序测试权限，添加到开发测试人员列表中
  * 点击预览：
    * **这个时候，需要把我们的合法https域名添加到后台，否则请求不到数据的**
  * 发布预览版：
    * 配置合法外网https域名
    * 预览测试人员需要添加到后台列表中

#### 模拟器缺陷

* 模拟器获取到的设备信息和真机获取到的是不一样的，**有些情况下，需要也一定需要真机测试**
* 有些组件在模拟器iOS或者Android体现的情况，在真机上是不一样的，这个是个坑
* 模拟器中图片路径和名称以及扩展名大小写有些时候都可以显示，但是真机中是区分大小写的，所以很多小伙伴都遇到了，模拟器一切OK，但是真机不显示图片的问题

## 小程序基础

::: tip

小程序页面相当于html，样式相当于css，逻辑相当于JavaScript，并且小程序可以看做单项数据绑定的Vuejs，功能弱化版的Vuejs

:::

### 常用组件

小程序基本组件介绍，包括：

* 基础内容
* 视图容器
* 表单组件
* 导航
* 媒体组件
* 地图
* 画布
* web-view和ad

**下面列举的是部分常见的组件，并不是全部**

#### 基础内容

* text
  * 文本显示，最基础的，相当于span
* rich-text
  * 富文本
  * 低版本需要做兼容处理
* icon
  * 图标
* progress
  * 进度条

#### 视图组件

* view
  * 视图，滚动组件推荐用scroll-view
  * 相当于div
* scroll-view
  * 滚动视图
  * 部分组件在scroll-view中无法使用
  * **下拉刷新，请使用页面的滚动，而不是scroll-view**
* swiper
  * 滑块视图容器
  * 也就是我们常见的**轮播图**
  * 内嵌：swiper-item

#### 表单组件

* button
  * 按钮
* input
  * 输入框
* form
  * 表单
* checkbox-group
  * 多项选择器
  * 内部多个checkbox
* picker
  * 从底部弹起的滚动选择器
  * 普通选择器
  * 多列选择器
  * 时间选择器
  * 日期选择器
  * 地区选择器
* picker-view
  * 嵌入页面的滚动选择器
* radio
  * 多项选择器
  * 内部多个radio
* slide
  * 滑动选择器
* switch
  * 开关选择器
* textarea
  * 多行输入框

#### 导航

* navigate
  * 导航，相当于a标签，常用
* 页面链接

#### 媒体组件

* image：

  * 图片
  * **图片必须要设置宽度和高度，如果只设置宽度或高度其中一种，图片是不会自动适应**

:::tip

请求数据化渲染网络图片会报错，因为网络是耗时操作，他会提示加载本地url图片失败，这个时候你需要用wx:if价格判断，数据没用的时候，不展示image，等数据获取到了，自然就展示了

:::

* video：

  * 视频，需要权限
* camera：

  * 系统相机
* live-player
  * 实时音视频播放
  * 需要先通过类目审核
* live-pusher：
  * 实时音视频录制
  * 需要用户授权
  * 需要先通过类目审核

#### 地图

* map

#### 画布

* canvas

#### webview

* web-view 组件是一个可以用来承载网页的容器，会自动铺满整个小程序页面
* **个人类型与海外类型的小程序暂不支持使用**

#### ad

* 广告


* **目前暂时以邀请制开放申请，请留意后续模板消息的通知**


### WXSS

* WXSS(WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式
* 为了适应广大的前端开发者，WXSS 具有 CSS 大部分特性
* 扩充：
  * 尺寸单位
  * 尺寸单位

#### 尺寸单位rpx

* rpx可以根据屏幕宽度进行自适应
* 规定屏幕宽为750rpx

| 设备           | rpx换算px (屏幕宽度/750) | px换算rpx (750/屏幕宽度) |
| ------------ | ------------------ | ------------------ |
| iPhone5      | 1rpx = 0.42px      | 1px = 2.34rpx      |
| iPhone6      | 1rpx = 0.5px       | 1px = 2rpx         |
| iPhone6 Plus | 1rpx = 0.552px     | 1px = 1.81rpx      |

::: tip

* 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。
* 在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况

:::

#### 样式导入

* 使用`@import`语句可以导入外联样式表
* `@import`后跟需要导入的外联样式表的相对路径
* 用`;`表示语句结束。

```css
/** app.wxss **/
@import "common.wxss";
.middle-p {
  padding:15px;
}
```

#### 内联样式

* 框架组件上支持使用 style、class 属性来控制组件的样式
* style:
  * 静态的样式统一写到 class 中。
  * style 接收动态的样式，在运行时会进行解析
  * 请尽量避免将静态的样式写进 style 中，以免影响渲染速度。
* class：
  * 用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，
  * 样式类名不需要带上`.`，样式类名之间用空格分隔。

```html
<view style="color:{{color}};" />

<view class="normal_view" />
```

#### 选择器

| 选择器              | 样例               | 样例描述                            |
| ---------------- | ---------------- | ------------------------------- |
| .class           | `.intro`         | 选择所有拥有 class="intro" 的组件        |
| #id              | `#firstname`     | 选择拥有 id="firstname" 的组件         |
| element          | `view`           | 选择所有 view 组件                    |
| element, element | `view, checkbox` | 选择所有文档的 view 组件和所有的 checkbox 组件 |
| ::after          | `view::after`    | 在 view 组件后边插入内容                 |
| ::before         | `view::before`   | 在 view 组件前边插入内容                 |

#### 全局样式与局部样式

* 定义在 app.wxss 中的样式为全局样式，作用于每一个页面。
* 在 page 的 wxss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.wxss 中相同的选择器。

```javascript
<text class="{{ className }}"></text>

className = "class1" 样式1
className = "class2" 样式2
```



:::tip

我们可以使用动态样式，用变量代替样式名称，变量变了，样式自然就变化了

当className = “class1”，就对应class1的样式，等于别的就是别的样式，这样就可以根据数据，动态绑定样式效果

:::

### 数据绑定

微信小程序是通过 状态模式-单向数据流 的方法来进行数据绑定的

简单的讲，对象状态化，只要对象状态发送变化，就通知页面更新视图元素。 通过以下三个步骤实现：

- 识别哪个UI元素被绑定了相应的对象。
- 监视对象状态的变化。
- 将所有变化传播到绑定的视图上

::: tip
**注意数据流向是单向的，即视图变化不会影响对象状态**
:::

简单数据绑定示例：

```html
wxml文件写结构
<view> {{ title }} </view>
```
```javascript
index.js文件写逻辑
Page({
 data: {
   title: 'Hello World !'
 }
})
```

**说明**：

* wxml 中的动态数据均来自对应 Page 的 data
* 微信小程序是**单向数据流传递**的，我们需要通过事件来传递视图的变化，去变更数据

### setData

* 只有用户操作视图，通过对应的事件，来获取数据，去更新状态
* 所有的视图部分更新渲染，都必须调用 this.setData() 方法
* 大致流程：
  * 视图A由于用户操作，触发事件A 。
  * 事件A处理函数中，更新对象A的状态。
  * 由于对象A状态变化，通知视图A更新

```html
<view bindtap="changeText"> {{ title }} </view>
```

```javascript
Page({
 data: {
   title: 'Hello MINA!'
 },
 changeText: function(){
    
    // 获取this，防止有些方法中this不是我们需要的
    let that = this
    
    that.setData({
      title:'changed data'
    })
 }
})
```

:::tip

注意有些地方获取到的 **this** 并不是我们需要的this，所以需要在一开始获取 **this** 存起来

**let that = this**  

使用that去操作数据

:::

#### setData注意事项

* **不要频繁的去 setData**
* **不要每次 setData 都传递大量新数据**
* **不应该在后台态页面进行 setData**
* **严重时，会造成小程序回收**

#### setData回调函数

* **setData是一个异步操作**
* **类比Vue中的异步更新数据，使用 nextTick() 获取更新后的数据**
* 我们使用data里面的数据，不一定就是已经更新了的数据
* setData有一个回调函数，通过该回调函数可以方便的等待data更新以后再从data中获取数据

```javascript
this.setData({
   name:"zs"
},()=>{
  console.log(this.data.name);
})
```

### 条件渲染

#### wx:if

```html
<view wx:if="{{ isLoading }}">
  <text>数据加载中...</text>
</view>
<!-- <view wx:elif=""></view> -->
<view wx:else>
  <text>请求数据成功~</text>
</view>

<!-- block隐藏多个元素，不会改变wxml的层级结构 -->
<block wx:if="{{ isLoading }}">
  <text>1</text>
  <text>2</text>
</block>
```

#### block

```html
<block wx:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

:::tip

1. `<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

2. 因为 `wx:if` 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 `<block/>` 标签将多个组件包装起来，并在上边使用 `wx:if` 控制属性。

:::

#### hidden

```html
<view hidden="{{ isLoading }}">
  <text>请求数据成功~</text>
</view>
```

wx:if VS hidden

* wx:if
  * 如果在初始渲染条件为 `false`，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。
  * 因为 `wx:if` 之中的模板也可能包含数据绑定，所以当 `wx:if` 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。
* hidden
  * 组件始终会被渲染，只是简单的控制显示与隐藏

:::tip

如果用web中的DOM元素做对比，本质就是：

1. **wx:if为false，DOM中不存在元素，改变时，也需要重新渲染和创建**

2. **hidden则是DOM中存在，只是display为none或者block的问题**
3. **`wx:if` 有更高的切换消耗而 `hidden` 有更高的初始渲染消耗**
4. **如果需要频繁切换的情景下，用 `hidden` 更好，如果在运行时条件不大可能改变则 `wx:if` 较好。**

:::

### 列表渲染

#### wx:for

* 循环遍历数组，创建元素
* index：
  * 索引，默认就是这个
  * wx:for-index="自定义index"
* item：
  * 每一项item，默认就是这个
  * wx:for-item="自定义的item"
* wx:key：
  * 必须的，提高渲染性能

```html
<view 
	wx:for="{{ list }}" 
	wx:for-index="index1" 
	wx:for-item="item1" 
	wx:key="item1.id">
	
  {{index1}} ======== {{item1.title}}
</view>
```

### 触控事件

#### 什么是事件

* 事件是视图层到逻辑层的通讯方式
* 事件可以将用户的行为反馈到逻辑层进行处理
* 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数
* 事件对象可以携带额外信息，如 id， dataset， touches

#### 事件分类

事件分为冒泡事件和非冒泡事件：

- 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递
- 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递

#### 事件绑定

* bindtap：
  * bind事件绑定会向上冒泡
* catchtap：
  * catch事件绑定可以阻止向上冒泡
* 参数传递：
  * 通过标签的自定义属性 data-xxx ，实现给事件“传递”参数

```javascript
<button bindtap="btnClick" data-name="zs">冒泡事件</button>
<button catchtap="btnClick" data-name="ls">非冒泡事件</button>

Page({
  btnClick (e) {
    // 获取传递过来的参数
    console.log('单击事件触发了~', e.currentTarget.dataset.name)
  }
})
```

:::tip

**注意，我们传值的时候写data-ID，默认会被转成小写，获取的是e.currentTarget.dataset.id小写**

:::

在我们开发过程中，经常被使用到的事件如下：

- 单击——tap
- 长按——longtap
- 滑动——touchstart、touchmove、touchend、touchcancel

**单击、双击、长按属于点触事件，会触发touchstart、touchend、tap事件，touchcancel事件只能在真机模拟**

| 事件 | 触发顺序                                                  |
| ---- | --------------------------------------------------------- |
| 单击 | touchstart → touchend → tap                               |
| 双击 | touchstart → touchend → tap → touchstart → touchend → tap |
| 长按 | touchstart → longtap → touchend → tap                     |

::: tip

**没有双击事件！没有双击事件！没有双击事件！**

两次间隔时间小于300ms认为是双击；微信官方文档没有双击事件，需要开发者自己定义处理。 

长按事件手指触摸后，超过350ms再离开

:::

#### 双击事件模拟

```javascript
wxml文件
<button data-time="{{lastTapTime}}" data-title="标题" bindtap="doubleClick">双击</button>

//js文件
doubleClick: function(e) {
    var curTime = e.timeStamp
    var lastTime = e.currentTarget.dataset.time  // 通过e.currentTarget.dataset.time 访问到绑定到该组件的自定义数据
    console.log(lastTime)
    if (curTime - lastTime > 0) {
      if (curTime - lastTime < 300) {
        console.log("挺快的双击，用了：" + (curTime - lastTime))
      }
    }
    this.setData({
      lastTapTime: curTime
    })
  }
```

### touch事件

* touchstart 手指触摸

* touchmove 手指触摸后移动

* touchcancel 手指触摸动作被打断，如弹窗和来电提醒

* touchend 手指触摸动作结束

```html
<view>
 <button type="primary"
         bindtouchstart="mytouchstart"
         bindtouchmove="mytouchmove"
         bindtouchend="mytouchend">点我吧</button>
</view>

```

```javascript
	//开始触摸，获取触摸坐标
	mytouchstart: function (e) {
		var that = this;
		
		console.log(e)
		that.setData({ startpoint: [e.touches[0].pageX, e.touches[0].pageY] });
	},
	
	//触摸点移动
	mytouchmove: function (e) {
		//当前触摸点坐标
		var that = this;
		var curPoint = [e.touches[0].pageX, e.touches[0].pageY];
		
		// 获取原来的坐标点
		var startpoint = that.data.startpoint;

		// 一般就是用X大小来判断是左划还是右划
		// 一般就是用Y大小来判断是上划还是下划		
	},
	// 滑动结束调用	
	mytouchend: function (e) {
		//滑动结束一般都是一个点
        获取数据是changedTouches，而不是touches
	},
```

:::tip

**注意：**

**1. 在touchstart和touchmove中都是e.touches获取数据，但是touchend中不是**

**2. touchend中是：e.changedTouches**

**3. 开始和结束都是一个点，可以根据开始和技术的点的位置，判断是点击还是滑动**

**4.在touchmove中和touchstart中的数据作对比，判断是左划还是右划**

:::

## 应用的生命周期

[参考博客1](https://www.jianshu.com/p/0078507e14d3)

[参考博客2](https://blog.csdn.net/belvine/article/details/80447120)

* 小程序的生命周期用App()来注册，接受一个 object 参数，其指定小程序的生命周期函数等
* App() 必须在 app.js 中注册，且不能注册多个

### 生命周期函数

object参数说明：

| 属性             | 类型       | 描述               | 触发时机                                     |
| -------------- | -------- | ---------------- | ---------------------------------------- |
| onLaunch       | Function | 生命周期函数--监听小程序初始化 | 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）         |
| onShow         | Function | 生命周期函数--监听小程序显示  | 当小程序启动，或从后台进入前台显示，会触发 onShow             |
| onHide         | Function | 生命周期函数--监听小程序隐藏  | 当小程序从前台进入后台，会触发 onHide                   |
| onError        | Function | 错误监听函数           | 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息 |
| onPageNotFound | Function | 页面不存在监听函数        | 当小程序出现要打开的页面不存在的情况，会带上页面信息回调该函数，详见下文     |
| 其他             | Any      |                  | 开发者可以添加任意的函数或数据到 Object 参数中，用 `this` 可以访问 |

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/198b3cda40011bbc800bba3b7b6ca3d6.png" />

::: tip

* App() 必须在 app.js 中注册，且不能注册多个。
* 不要在定义于 `App()` 内的函数中调用 `getApp()` ，使用 `this` 就可以拿到 `app` 实例。 
* 不要在 `onLaunch` 的时候调用 `getCurrentPage()`，此时 page 还没有生成。 
* 通过 `getApp()` 获取实例之后，不要**私自调用生命周期函数**。

:::

### 前台和后台

前台和后台其实是相对的，但是这个词汇对于我们来说很常见

#### 小程序前台

* 小程序被打开，这个时候是处于前台的，也就是小程序在我们看到的界面上

#### 小程序后台

* 当用户点击左上角关闭，或者按了设备 Home 键离开微信，小程序并没有直接销毁，而是进入了后台
* 当再次进入微信或再次打开小程序，又会从后台进入前台



::: tip

只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁
:::



### 小程序运行机制

* 小程序启动会有两种情况，一种是「冷启动」，一种是「热启动」
* **冷启动**：
  * 冷启动指的是用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动
* **热启动**：
  *  假如用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时无需重新启动，只需将后台态的小程序切换到前台，这个过程就是热启动

### 小程序更新机制

* 小程序冷启动时如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动
* 即新版本的小程序需要等下一次冷启动才会应用上。 
* 如果需要马上应用最新版本，可以使用 wx.getUpdateManager  API 进行处理。

### 小程序运行

* 小程序没有重启的概念
* 当小程序进入后台，客户端会维持一段时间的运行状态，超过一定时间后（**目前是5分钟**）会被微信主动销毁
* 当短时间内（5s）连续收到两次以上收到系统内存告警，会进行小程序的**销毁**

## 页面的生命周期

* Page() 函数用来注册一个页面
* 接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等

### 页面生命周期函数

Object参数说明：

| 属性                | 类型       | 描述                                       |
| ----------------- | -------- | ---------------------------------------- |
| data              | Object   | 页面的初始数据                                  |
| onLoad            | Function | 生命周期回调—监听页面加载                            |
| onShow            | Function | 生命周期回调—监听页面显示                            |
| onReady           | Function | 生命周期回调—监听页面初次渲染完成                        |
| onHide            | Function | 生命周期回调—监听页面隐藏                            |
| onUnload          | Function | 生命周期回调—监听页面卸载                            |
| onPullDownRefresh | Function | 监听用户下拉动作                                 |
| onReachBottom     | Function | 页面上拉触底事件的处理函数                            |
| onShareAppMessage | Function | 用户点击右上角转发                                |
| onPageScroll      | Function | 页面滚动触发事件的处理函数                            |
| onTabItemTap      | Function | 当前是 tab 页时，点击 tab 时触发                    |
| 其他                | Any      | 开发者可以添加任意的函数或数据到 `Object` 参数中，在页面的函数中用 `this` 可以访问 |

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/c9fc4a6740a46f92808078b68ec3601a.png" />

### data

* data 是页面第一次渲染使用的初始数据
* 页面加载时，data  将会以 JSON 字符串的形式由逻辑层传至渲染层
* 因此 data 中的数据必须是可以转成 JSON 的类型：字符串，数字，布尔值，对象，数组。
* 渲染层可以通过 WXML 对数据进行绑定

### 生命周期函数

- onLoad : 页面加载
  - 一个页面只会调用一次。
  - 参数可以获取 wx.navigateTo 和 wx.redirectTo 及 <navigator/> 中的 query。
- onShow : 页面显示
  - 每次打开页面都会调用一次。
- onReady : 页面初次渲染完成
  - 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  - 对界面的设置如 wx.setNavigationBarTitle 请在 onReady 之后设置。详见**生命周期**
- onHide : 页面隐藏
  - 当 navigateTo 或底部 tab 切换时调用。
- onUnload : 页面卸载
  - 当 redirectTo 或 navigateBack 的时候调用。

### 页面相关事件处理函数

* onPullDownRefresh : 下拉刷新

- 监听用户下拉刷新事件。
- 需要在 config 的 window 选项中开启 enablePullDownRefresh 。
- 当处理完数据刷新后，wx.stopPullDownRefresh 可以停止当前页面的下拉刷新。

### 应用的生命周期对页面生命周期的影响

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/d74a049240d1d536804c4bf37c149159.png" />

:::tip

- **小程序初始化完成后，页面首次加载触发onLoad，只会触发一次。**
- **当小程序进入到后台，先执行页面onHide方法再执行应用onHide方法。**
- **当小程序从后台进入到前台，先执行应用onShow方法再执行页面onShow方法。**

:::

## 小程序实现原理

[参考博客1](https://blog.csdn.net/rolan1993/article/details/80362029)

[参考博客2](https://blog.csdn.net/xiangzhihong8/article/details/66521459)

[参考博客3](http://www.php.cn/xiaochengxu-350307.html)

### 小程序运行环境

* 微信小程序运行在三端：iOS、Android 和 用于调试的开发者工具
* 三端的脚本执行环境以及用于渲染非原生组件的环境是各不相同的
  * 在 iOS 上，小程序的 javascript 代码是运行在 JavaScriptCore 中，是由 WKWebView 来渲染的，环境有 iOS8、iOS9、iOS10 等
  * 在 Android 上，小程序的 javascript 代码是通过 X5 JSCore来解析，是由 X5 基于 Mobile Chrome 53/57 内核来渲染的 
  * 在 开发工具上， 小程序的 javascript 代码是运行在 nwjs 中，是由 Chrome Webview 来渲染的来自官方文档说明

### 小程序性能优化

* 安装包缓存
* 分包加载
* 独立渲染线程
* webview 预加载
* Native 组件

### 小程序打包机制

* 小程序编辑器是基于WEB技术体系实现的，采用技术是nwjs+react

#### nwjs

* nwjs是在英特尔开源技术中心创建的，它是基于谷歌浏览器核心引擎和nodejs运行
* 你可以通过nwjs技术使用html和js语言编写本地应用程序
* 它也可以让你直接从DOM调用nodejs模块，使用一种新的方式与所有的Web技术编写本地应用。
* 它主要有以下6个特点：
  * 以网络最流行的技术编写原生应用程序的新方法
  * 基于HTML5, CSS3, JS and WebGL而编写
  * 完全支持nodejs所有api及第三方模块
  * 可以使用DOM直接调用nodejs模块
  * 容易打包和分发
  * 支持运行环境包括32位和64位的Window、Linux和Mac OS

#### React

* 就是我们常见的react

* VirtualDOM：虚拟DOM
* Diff：diff算法
* Render UI实现

#### 小程序打包后目录

* WAService.js  框架JS库，提供逻辑层基础的API能力 

* WAWebview.js 框架JS库，提供视图层基础的API能力 
* WAConsole.js 框架JS库，控制台 
* app-config.js 小程序完整的配置，包含我们通过app.json里的所有配置，综合了默认配置型 
* app-service.js 我们自己的JS代码，全部打包到这个文件 
* page-frame.html 小程序视图的模板文件，所有的页面都使用此加载渲染，且所有的WXML都拆解为JS实现打包到这里 
* pages 所有的页面，这个不是我们之前的wxml文件了，主要是处理WXSS转换，使用js插入到header区域。

### 小程序两大线程

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/3e41f4594025dc218017127687980bec.webp" />

**小程序由两大线程组成（上图可以看到）**：

* 负责界面的视图线程（view thread），渲染页面结构
* 负责数据、服务处理的服务线程（appservice thread），用来逻辑处理、数据请求、接口调用
* **视图层使用WebView渲染，逻辑层使用JSCore运行**。
* 视图层和逻辑层通过系统层的**JSBridage**进行通信，逻辑层把数据变化通知到视图层，触发视图层页面更新，视图层把触发的事件通知到逻辑层进行业务处理。

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/8ddfede2409f2a7780cb923cf4b781c3.png" />

* 图片来源，腾讯课堂coding学院
* 最底层是微信的app，当我们发版时小程序开发工具会把我们的代码和框架一起进行打包，当我们在微信里打开小程序时其实微信会把打包好的代码下载到微信app里，这样我们就可以像在开发工具里一样在微信里运行我们的小程序了。
* native层就是小程序的框架，就像我们用的react框架一样，这个框架里封装了ui层组件和逻辑层组件，这些组件可以通过微信app提供的接口调用手机硬件信息。
* 最上层是我们真正需要进行操作的视图层和逻辑层，视图层和逻辑层的交互是通过数据经由native层进行交互的。视图层和逻辑层都可以调用native框架里封装好的组件和方法。
* **小程序启动时会从CDN下载小程序的完整包，一般是数字命名的,如：_-2082693788_4.wxapkg**

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/13cf24c14022239d8012a9671f2aecb0.jpg" />

### 小程序技术实现

* 小程序的UI视图和逻辑处理是用多个webview实现的
* 逻辑处理的JS代码全部加载到一个Webview里面，称之为AppService
* 整个小程序只有一个，并且整个生命周期常驻内存
* 而所有的视图（wxml和wxss）都是单独的Webview来承载，称之为AppView。
* 所以一个小程序打开至少就会有2个webview进程，正是因为每个视图都是一个独立的webview进程，考虑到性能消耗，小程序不允许打开超过5个层级的页面，当然同是也是为了体验更好。（目前是10层）

#### 视图线程（AppView）

* 可以理解为h5的页面，提供UI渲染，底层提供一个WAWebview.js来提供底层的功能
* 视图层由 WXML 与 WXSS 编写，由组件来进行展示。
* 将逻辑层的数据反应成视图，同时将视图层的事件发送给逻辑层。

#### 视图线程功能

* 消息通信封装为WeixinJSBridge
  * 开发环境为window.postMessage
  * IOS下为WKWebview的window.webkit.messageHandlers.invokeHandler.postMessage
  * android下用WeixinJSCore.invokeHandler 
* 日志组件Reporter封装 
* wx对象下的api
  * 这里的api跟WAService里的还不太一样
  * 有几个跟那边功能差不多
  * 但是大部分都是处理UI显示相关的方法 
* 小程序组件实现和注册 
* VirtualDOM，Diff和Render UI实现 
* 页面事件触发

#### 机制

* AppView有一个html模板文件，通过这个模板文件加载具体的页面
* 这个模板主要就一个方法，$gwx
* 主要是返回指定page的VirtualDOM
* 而在打包的时候，会事先把所有页面的WXML转换为ViirtualDOM放到模板文件里
* 而微信自己写了2个工具wcc（把WXML转换为VirtualDOM）和wcsc（把WXSS转换为一个JS字符串的形式通过style标签append到header里）。

#### View - WXML

* WXML（WeiXin Markup Language）
  * 支持数据绑定
  * 支持逻辑算术、运算
  * 支持模板、引用
  * 支持添加事件（bindtap）

* **wcc**
  * wxml编译器
  * wcc 把wxml文件 转为 js 执行方式：wcc index.wxml
  * 本质：用于转wxml中的自定义tag为virtual_dom

#### View - WXSS

* WXSS(WeiXin Style Sheets)
  * 支持大部分CSS特性
  * 添加尺寸单位rpx，可根据屏幕宽度自适应
  * 使用@import语句可以导入外联样式表
  * 不支持多层选择器-避免被组件内结构破坏
* **wcsc**
  * wxss编译器
  * 把wxss文件转化为 js 执行方式： wcsc index.wxss

:::tip

* wcc和wcsc，可以从vendor目录下获取到

* 在“微信web开发者工具”下敲入help，你就会得到下面的数据：

* 运行openVendor()，你就会得到上面的wcss、wxss、WAService.js、WAWebview.js四个文件了。

:::

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/39bbfd7c405bb73b8007139789f87f84.png" />

#### View – WXSS Selectors

* WXSS目前支持如下选择器

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/38ddb93b40c87dae80c4691c79d926c1.jpg" />

#### View - Component

* 小程序提供了一系列组件用于开发业务功能，按照功能与HTML5的标签进行对比如下

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/dc4f1c3f400cae3480b7aa0c9f71dc5d.jpg" />

* 小程序的组件基于Web Component标准
* 使用Polymer框架实现Web Component

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/37e1b272403e377180c1f224eb79fb75.png" />

#### View - Native Component

* 目前Native实现的组件有 
  * camera
  * canvas
  * input
  * live-player
  * live-pusher
  * map
  * textarea
  * video
* Native组件层在WebView层之上

* 原生组件的使用限制
  * 原生组件的层级是**最高**的，所以页面中的其他组件无论设置 `z-index` 为多少，都无法盖在原生组件上。
  * 后插入的原生组件可以覆盖之前的原生组件。
  * 原生组件还无法在 `scroll-view`、`swiper`、`picker-view`、`movable-view` 中使用。
  * 部分CSS样式无法应用于原生组件，例如：
    - 无法对原生组件设置 CSS 动画
    - 无法定义原生组件为 `position: fixed`
    - 不能在父级节点使用 `overflow: hidden` 来裁剪原生组件的显示区域
  * 原生组件的事件监听不能使用 `bind:eventname` 的写法，只支持 `bindeventname`。原生组件也不支持 catch 和 capture 的事件绑定方式。
  * 在iOS下，原生组件暂时不支持触摸相关事件。
  * 原生组件会遮挡 vConsole 弹出的调试面板。

:::tip

**在工具上，原生组件是用web组件模拟的，因此很多情况并不能很好的还原真机的表现，建议开发者在使用到原生组件时尽量在真机上进行调试。**

**为了解决原生组件层级最高的限制。小程序专门提供了 `cover-view `和 `cover-image`组件，可以覆盖在**部分**原生组件上面。这两个组件也是原生组件，但是使用限制与其他原生组件有所不同。**

:::

#### WebView预加载

* 每次小程序进入除了当前页面,Native预先额外加载一个WebView
* 当打开指定页面时，用默认数据直接渲染，请求数据回来时局部更新
* 返回显示历史View
* 退出小程序，View状态不销毁

#### 视图线程四大状态

* 初始化状态：初始化视图线程所需要的工作，初始化完成后向“服务线程”发送初始化完成信号，然后进入**等待状态，等待服务线程提供初始化数据**。
* 首次渲染状态：当收到服务线程提供的初始化数据后（json和js中的data数据），渲染小程序界面，渲染完毕后，发送“首次渲染完成信号”给服务线程，并将页面展示给用户。
* 持续渲染状态：此时界面线程继续一直等待“服务线程”通过this.setdata（）函数发送来的界面数据，只要收到就重新局部渲染，也因此只要更新数据并发送信号，界面就自动更新。
* 结束状态：页面被回收或者销毁、应用被系统回收、销毁时触发。

#### 服务线程（AppService）

*  AppService即一个简单的页面，主要功能是负责逻辑处理部分的执行，底层提供一个WAService.js的文件来提供各种api接口
* 逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈

#### 服务线程功能

* App( ) 小程序的入口；Page( ) 页面的入口
* 每个页面有独立的作用域，并提供模块化能力。
* 数据绑定、事件分发、生命周期管理、路由管理
* 运行环境：
  * IOS - JSCore
  * Android - X5 JS解析器
  * DevTool - nwjs Chrome 内核

* 消息通信封装为WeixinJSBridge
  * 开发环境为window.postMessage
  * iOS下为WKWebview的window.webkit.messageHandlers.invokeHandler.postMessage
  * android下用WeixinJSCore.invokeHandler
* 日志组件Reporter封装 
* wx对象下面的api方法 
* 全局的App,Page,getApp,getCurrentPages等全局方法 
* 还有就是对AMD模块规范的实现

#### 机制

* 整个页面就是加载一堆JS文件
* 包括小程序配置config，上面的WAService.js（调试模式下有asdebug.js）
* 剩下就是我们自己写的全部的js文件，一次性都加载

#### App Service - Binding

* 数据绑定使用 Mustache 语法（双大括号）将变量包起来
* 动态数据均来自对应 Page 的 data
* 可以通过setData方法修改数据
* 事件绑定的写法同组件的属性，以 key、value 的形式，key 以bind或catch开头，然后跟上事件的类型
* 如bindtap, catchtouchstart，value 是一个字符串，需要在对应的 Page 中定义同名的函数。

#### App Service - Life Cylce

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/00c60209400a4c02804f99e10ecc00c7.jpg" />

#### App Service - API

* API通过JSBridge和Native 进行通信

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/29/267b4f3440ab81ea80369b647aee935c.png" />

#### App Service - Router 

* 微信导航部分，参考本文导航nav

#### 服务线程五大状态

* 初始化状态：此阶段仅启动服务线程所需的基本功能，比如信号发送模块。系统的初始化工作完毕，就调用自定义的onload和onshow，然后等待视图线程的“视图线程初始化完成”号。onload是只会首次渲染的时候执行一次，onshow是每次界面切换都会执行，简单理解，这就是唯一差别。
* 等待激活状态：接收到“视图线程初始化完成”信号后，将初始化数据发送给“视图线程”，等待视图线程完成初次渲染。
* 激活状态：收到视图线程发送来的“首次渲染完成”信号后，就进入激活状态既程序的正常运行状态，并调用自定义的onReady()函数。此状态下就可以通过this.setData 函数发送界面数据给界面线程进行局部渲染，更新页面。
* 后台运行状态：如果界面进入后台，服务线程就进入后台运行状态，从目前的官方解读来说，这个状态挺奇怪的，和激活状态是相同的，也可以通过setdata函数更新界面的。毕竟小程序的框架刚推出，应该后续会有很大不同吧。
* 结束状态：页面被回收或者销毁、应用被系统回收、销毁时触发。

#### Service和View通信

* 使用消息publish和subscribe机制实现两个Webview之间的通信
* 实现方式就是统一封装一个WeixinJSBridge对象
* 而不同的环境封装的接口不一样
* 上面都说过了，可以看下

#### 微信组件

* 在WAWebview.js里有个对象叫exparser，它完整的实现小程序里的组件
* 看具体的实现方式，思路上跟w3c的web components规范神似
* 但是具体实现上是不一样的，我们使用的所有组件，都会被提前注册好，在Webview里渲染的时候进行替换组装
* exparser有个核心方法： 
  * regiisterBehavior: 注册组件的一些基础行为，供组件继承 
  * registerElement：注册组件，跟我们交互接口主要是属性和事件
* 组件触发事件（带上webviewID），调用WeixinJSBridge的接口，publish到native
* 然后native再分发到AppService层指定webviewID的Page注册事件处理方法。

#### 代码运行

* 运行时，外面包裹define，代码作为回调
* 当调用回调时，只传入前面三个值，由于后面的变量都是局部定义的变量，就屏蔽了(window,document等这些变量
* define('app.js',callback)，回调值传入了三个参数,屏蔽了其他属性

### 预先加载数据

* 小程序在启动时，会直接加载所有页面逻辑代码进内存，即便 page2 可能都不会被使用。在 page1 跳转至 page2 时，page1 的逻辑代码 Javascript 数据也不会从内存中消失。page2 甚至可以直接访问 page1 中的数据。
* 小程序的这种机制差异正好可以更好的实现预加载。通常情况下，我们习惯将数据拉取写在 onLoad 事件中。但是小程序的 page1 跳转到 page2，到 page2 的 onLoad 是存在一个 300ms ~ 400ms 的延时的。
* 因为小程序的特性，完全可以在 page1 中预先拿取数据，然后在 page2 中直接使用数据，这样就可以避开 redirecting 的 300ms ~ 400ms了。
* 渲染view线程和AppServcie是相互独立的,对于AppServcie中js运行不会阻塞view的渲染
* 官方的示例也是采用这种方式: 先App中请求数据,在index.js使用数据

#### 总结

* **MSSM**：对逻辑和UI进行了完全隔离，这个跟当前流行的react，agular，vue有本质的区别，小程序逻辑和UI完全运行在2个独立的Webview里面，而后面这几个框架还是运行在一个webview里面的，如果你想，还是可以直接操作dom对象，进行ui渲染的。
* **组件机制**：引入组件化机制，但是不完全基于组件开发，跟vue一样大部分UI还是模板化渲染，引入组件机制能更好的规范开发模式，也更方便升级和维护。
* **多种节制**：不能同时打开超过5个窗口，打包文件不能大于1M，dom对象不能大于16000个等，这些都是为了保证更好的体验

## 小程序登录

小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系

:::tip

**wx.login**

可以拿到**临时登录凭证（code）**

开发者服务器使用 **临时登录凭证code** 获取 session_key 和 openid以及unionid 等

**wx.getSetting**

获取用户的当前设置,也就是授权信息

**wx.getUserInfo**

1. 当用户未授权过，调用该接口将直接进入fail回调
2. 当用户授权过，可以使用该接口获取用户信息

并且，如果有之前调用过wx.login，并且状态未过期，那么会此时返回的数据会包含 encryptedData, iv 等敏感信息

:::

### 登录流程图

> 官方流程示意图

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/08/20/81cb7f4a40496d6f806edb8a632fcabe.jpg" />



### 注意事项

* 微信不允许小程序直接获取openid等加密信息，必须通过后台来获取，想通过小程序获取到openid是不可能的
* 小程序调用wx.login() 获取 **临时登录凭证code** ，并回传到开发者服务器
* 开发者服务器以code换取 **用户唯一标识openid** 和 **会话密钥session_key**
* 之后开发者服务器可以根据用户标识来生成自定义登录态，用于后续业务逻辑中前后端交互时识别用户身份
* code：时效是五分钟

```javascript
// app.js
wx.login({
      success: function(res) {
        if (res.code) {  //wx.login获取code。
          //发起网络请求，把code返回给服务器，让服务器去换取数据
          wx.request({
            url: '-填写后台服务器地址-',
            data: {
              code: res.code    //将code发送到后台服务器。
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
```



### 登录凭证校验（后台）

临时登录凭证校验接口是一个 HTTPS 接口，开发者服务器使用 **临时登录凭证code** 获取 session_key 和 openid 等。

* 调用登录凭证校检接口,将**appid(小程序唯一标识)**+**appsecret(小程序的app secret)**+code发送到微信接口服务.然后微信服务器会返回**session_key(会话秘钥)+openid(用户的唯一标识)**
* 在服务器的接口中,已经得到微信用户的唯一标识openid,已经数据传输的session_key,接下来就写业务逻辑了
* 返回给小程序自定义登录态,小程序将它存入storage中.接下来的wx.request()的业务请求,都会携带自定义登录态
* 在服务器的接口中通过自定义登录态查询openid和session_key,然后返回业务数据
* **临时登录凭证code只能使用一次**
* **单纯的获取openid使用的授权方式是静态授权，不需要经过用户许可的（用户看不到授权的过程），而想要获取用户的头像昵称等信息是另一种授权（用户端会弹出授权窗口）**

### 登录校检https请求说明

* 一个外网可访问的域名
* 一定需要80端口


* 在服务器的接口中,需要进行一个http请求,将从小程序获得的code和接口中存储的appid和secret发送给微信接口服务,然后就可以获得session_key和openid.

```javascript
https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code

```

* 请求参数

### 请求参数

| 参数         | 必填   | 说明                     |
| ---------- | ---- | ---------------------- |
| appid      | 是    | 小程序唯一标识                |
| secret     | 是    | 小程序的 app secret        |
| js_code    | 是    | 登录时获取的 code            |
| grant_type | 是    | 填写为 authorization_code |

### openid

- **一个微信号与一个公众号**对应一个固定不变的openid

- openid是微信用户在公众号appid下的唯一用户标识
- appid不同，则获取到的openid就不同
- 可用于永久标记一个用户
- 微信公众号支付的必传参数

### session_key

- 校验用户信息(wx.getUserInfo(OBJECT)返回的signature);
- 解密(wx.getUserInfo(OBJECT)返回的encryptedData);
- wx.checksession是用来检查 wx.login(OBJECT) 的时效性，判断登录是否过期
- 注意：
  - 如果使用了wx.getUserInfo(OBJECT)获得的用户信息，还是有必要使用wx.checksession()来检查wx.login(OBJECT) 是否过期的
  - 因为用户有可能修改了头像、昵称、城市，省份等信息，可以通过检查wx.login(OBJECT) 是否过期来更新着些信息；

## UnionID

### UnionID介绍

如果开发者拥有多个移动应用、网站应用、和公众帐号（包括小程序），可通过unionid来区分用户的唯一性，因为只要是同一个微信开放平台帐号下的移动应用、网站应用和公众帐号（包括小程序），用户的unionid是唯一的。

**同一用户，对同一个微信开放平台下的不同应用，unionid是相同的。**

[微信开放平台](open.weixin.qq.com)

### 获取UnionID

:::tip

**开发之前记住一点：unionid有时候获取不到，有时候获取的到**

:::

UnionID获取途径有三个，前提是：**绑定了开发者帐号的小程序**

* 调用接口 **wx.getUserInfo**，从解密数据中获取UnionID。**注意本接口需要用户授权，请开发者妥善处理用户拒绝授权后的情况**。
* 如果开发者帐号下存在**同主体的**公众号，并且该用户已经关注了该公众号。开发者可以直接通过 **wx.login** 获取到该用户UnionID，无须用户再次授权。
* 如果开发者帐号下存在**同主体的**公众号或移动应用，并且该用户已经授权登录过该公众号或移动应用。开发者也可以直接通过 **wx.login** 获取到该用户UnionID，无须用户再次授权

:::tip

**重点：记住！记住！记住！**

**在登录小程序之前，既没有关注过公众号，也没有登录过公众号，更没有使用微信登录的方式登录过app，通过 wx.login 的到的 code 换不回 unionid 及 openid 等信息**

**unionid其实就相当于全局id**

**同一用户，对同一个微信开放平台下的不同应用，unionid是相同的**

**建议新项目启动的时候，使用unionid，因为后期如果打通公众号和小程序的用户数据，已经网站和app都共享一个用户数据，unionid你值得拥有**

:::

### 无UnionID

在不满足UnionID下发条件的情况下，返回参数

| 参数          | 说明     |
| ----------- | ------ |
| openid      | 用户唯一标识 |
| session_key | 会话密钥   |

### 有UnionID

有UnionID下发条件的情况下，返回参数

| 参数          | 说明            |
| ----------- | ------------- |
| openid      | 用户唯一标识        |
| session_key | 会话密钥          |
| unionid     | 用户在开放平台的唯一标识符 |

### 返回说明

```json
//正常返回的JSON数据包
{
      "openid": "OPENID",
      "session_key": "SESSIONKEY",
}
 
//满足UnionID返回条件时，返回的JSON数据包
{
    "openid": "OPENID",
    "session_key": "SESSIONKEY",
    "unionid": "UNIONID"
}
//错误时返回JSON数据包(示例为Code无效)
{
    "errcode": 40029,
    "errmsg": "invalid code"
}

```

### 解决unionid问题

我们知道：一般情况下(即在登录小程序之前，既没有关注过公众号，也没有登录过公众号，更没有使用微信登录的方式登录过app)，通过 wx.login 的到的 code 换不回 unionid 及 openid 等信息。

**未授权的获取方式openid是需要用户关注你的公众号的，但是，授权的情况下，只要用户点击确定，用户是不需要去关注你的公众号的，你就可以获取到用户的openId以及用户的基本信息！！！**

#### 解决办法

* 通过带登录态的 wx.getUserInfo  获取到用户的加密数据 encryptedData 和加密算法的初始向量iv
* 然后将 encryptdata、iv 以及 code传给后端
* 后端再去通过接收到的encryptedData、iv以、code 以及之前的 session_key 解密出用户的 openid、unionid 等

#### 小程序代码

```javascript
// 需要用户主动授权
<button 
	type="default" 
	open-type="getUserInfo" 
	lang="zh_CN" 
	bindgetuserinfo="bindGetUserInfo"
>
    微信登录
</button>
//微信登录
bindGetUserInfo: function (e) {
    console.log(e)
    let that = this
    // 用户授权，e.detail.userInfo有值
    if (e.detail.userInfo) {
		// 请求code
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                console.log(res.code)
                let code = res.code
                let data = {
                    code: code,
                }
                // 发送code，获取openid
                // wx.xx.getOpenId 是封装的网络请求方法
                wx.xx.getOpenId(data, function (res) {
                    console.log('第一次请求获取到的数据',res)
                    if (res.data) {
                        let openid = res.data.openid
                        // open是肯定可以获取到的，因为这里是已经授权了
                        // 获取到的openid存到全局data
                        getApp().globalData.openid = openid
                        // 判断有没有unionid，没有再去请求，并且添加参数
                        // 这里这样做是因为反解析unionid需要md5解密之类的
                        // 消耗性能，不如要的时候在湖区
                        if (!res.data.unionid){
                            // 再次请求数据
                            wx.getUserInfo({
                                withCredentials: true,
                                success: function (res) {
                                    // 添加2个关键数据
                                    let data = {
                                        code: code,
                                        encryptedData: res.encryptedData,
                                        iv: res.iv
                                    }
                                    // console.log(data)
                                    wx.xx.getOpenId(data, function (res) {
                                        if (res.data) {
                                            // 存到全局数据
                                            that.globalData.unionid = res.data.unionid
                                        }
                                    })
                                },
                                fail: function (res) {
                                    console.log(res)
                                }
                            })
                        }
                        else {
                            // 如果第一次请求到unionid，直接存起来
                            that.globalData.unionid = res.data.unionid
                        }
                    }

                })
            },
            fail: function (err) {
            }
        })

        // 用户按了允许授权按钮
        // 发送请求三方登录提交数据
        // 记录登录状态
        wx.dk.setLoginStatus('OK')
        // 返回
        wx.navigateBack({
            delta: 1
        })

    }
    // 用户拒绝
    else {
        let msg = "如需正常使用小程序部分功能，请在授权管理中选中“用户信息”，然后点按确定。最后再重新进入小程序即可正常使用。"
        //用户按了拒绝按钮
        wx.showModal({
            title: '用户未授权',
            content: msg,
            showCancel: false,
        })
    }
},
```

* 旧版本基础库调取wx.getUserInfo()可以直接获取到微信返回的encryptdata等完整数据
* 基础库更新之后，需要增加withCredentials属性，并将属性值设置为true时才可以获取到除用户基本信息之外的encryptedData以及iv等数据
* 当withCredentials值为true时，要求此前有调用过wx.login且登录态尚未过期。

### 实际项目解决方案

#### 第一种：前端判断是否有 unionid

* 在向后端上传 code 并且后端返回数据以后
* 前端判断返回值中是否有 unionid 或者 unionid 是否为 null，null 的情况下去调用带有用户登录态的wx.getUserInfo()
* 然后再将微信返回的  encryptedData 和 iv 返回给后端，后端解密出相应的信息后再返回给前端；

#### 第二种：后端判断是否有 unionid 

* 前端在调用 wx.getUserInfo() 时候带着登录态
* 然后不管后台能不能拿到 unionid，都把 encryptedData 和 iv 返回给后端
* 后端在拿到前端 code 之后去请求微信的接口拿 unionid
* 如果返回的 unionid 为空，再拿前端传的 encryptedData、iv以及之前的 session_key 解密出 unionid。

## 用户授权

### 用户授权发展历史

* 阶段1
  * 流程
    * 用户授权是直接弹出授权框，用户选择YES OR NO。
    * 选择YES顺利进行，但是如果选择了NO，就无法重新授权
    * 需要先退出，然后在小程序列表删除小程序，然后重新打开再次进行授权。
  * 缺点
    * 这种体验对用户来说是非常不好的，非常容易丢失用户，如果对小程序不太熟悉或者不太清楚的用户就直接放弃使用了。



* 阶段2
  * 流程
    * 增加了用户点击按钮授权的方式
    * 当小程序弹出授权提示框用户选择拒绝的时候，可以进入一个页面，页面里放置重新授权按钮，用户点击按钮可进行重新授权
    * 这样用户就不需要删除小程序了。



* 阶段3
  * 流程
    * 弹出提示框授权的方式会逐渐退出，不推荐使用这种方式
    * 原因
      * 微信发现很多用户一打开小程序，用户还不知道小程序是干嘛的，就直接弹出授权框让用户授权，直接让用户懵逼，从而给用户造成困扰，从而丢失用户。
      * 因为第一个页面决定了用户对这个应用的认知，有了认知以后才会考虑是否继续使用，是否允许授权，所以最好第一个页面不要直接让用户授权，而且用户需要用到会员的功能，需要继续使用应用的高级功能时才弹出授权，这样用户选择授权的成功率会大大提高。
      * 并且，**原来的弹出框方式陆续不允许使用了，详情看下面**

### 之前的流程

**先用 wx.getSetting 检查一下用户当前对我们的小程序的授权状态，如果发现用户还没有授权小程序查看他的用户信息，就去调用 wx.authorize 弹出对话窗提醒用户是否要授权小程序得到他的用户信息。用户如果按了同意，接下来我们就可以使用 wx.getUserInfo 这个接口去得到用户相关的信息了，比如他的头像，名字等等。**

```javascript
wx.getSetting({
      success: (response) => {
        console.log(response)
        if (!response.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success: () => {
              console.log('yes')
            }
          })
        }
      }
    })
```

**scope.userInfo 类似一个权限的名字，用户如果同意授权小程序获取他的用户相关信息，下次再用 wx.getSetting 的时候，得到的响应里面，authSetting 里的 scope.userInfo 的值就会是 true 。**

### 授权接口更新历史

* 阶段1：
  * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
  * **根据scope判断到全局数据里没有用户信息时可以主动调用授权弹框，然而最近更改了这一说明，说是为了提高用户体验度。**

* 阶段2:
  * 必须让用户**自己主动点击open-type为getUserInfo的按钮**才能触发，把弹框的主动权还给了用户

:::tip

**请记住：**

**必须让用户自己主动点击open-type为getUserInfo的按钮才能触发，弹出授权框**

**否则，无法授权，用户信息都获取不了，小程序基本就没有意义了**

:::

### 授权检测（wx.getSetting）

* **wx.getSetting 在 未拒绝 和 未同意 状态下 ，success: (res) => { } 的res.authSetting{}值是空的!**



* **在getUserInfo()后，点击拒绝后 wx.getSetting的fail:(res)=>{}触发,res.authSetting['scope.userInfo'] 的值是false ，表示scope.userInfo这个权限没有授权**



* **在getUserInfo()后，点击同意后 wx.getSetting的success:(res)=>{}触发，res.authSetting['scope.userInfo'] 的值是true，表示scope.userInfo这个权限已经授权。**

### 用户授权返回的数据

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/25/0bee63a640e4844480141f2684d56bfb.png" />

**e.detail.userInfo：访问数据**

### 解决方案

#### 方案一

**需要用到用户相关信息的时候，判断有无用户信息，展示授权按钮，让用户点击授权**

* 比如：微信登录按钮，其实就是微信授权
* 比如用户拒绝，提示用户继续进入授权页面
* 或者进入设置页面**wx.openSetting**

* wx.openSetting
  * 调起客户端小程序设置界面，返回用户设置的操作结果
  * 设置界面只会出现小程序已经向用户请求过的权限
  * [授权scope](https://developers.weixin.qq.com/miniprogram/dev/api/authorize-index.html)

:::tip

**wx.openSetting已经废弃，要用button去主动触发授权（open-type="openSetting"）**

:::

#### 方案二

**进小程序就直接需要用户点击授权**

* 界面，提示用户进行授权

```javascript
// 这个button，我们可以模拟
<button open-type="getUserInfo" bindgetuserinfo="bindInfo">开始</button>

bindInfo: function(e) {
    if (e.detail.userInfo){
      console.log('授权通过')
      app.globalData.userInfo = e.detail.userInfo;
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }else{
      console.log('拒绝授权')
      wx.reLaunch({
        url: '/pages/checkAgain/checkAgain',
      })
    }
  }

```

* 函数事件e,如果用户点击同意授权，e.detail.userInfo返回用户基本信息（不包括敏感隐私信息如code,unionId）执行IF语句，拒绝授权的话就走else

#### 方案三

**不使用微信体系，直接手机号码，邮箱账户之类的登录，即可**

### 用户拒绝授权

#### 方案一

[参考博客](https://devework.com/weixin-weapp-auth-failed.html)

**会弹出一个提示予以详细说明授权的必要性**

<img width="300" src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/04/40fa83eb40ca0406807a7be688a23a40.png" />



用户只有点击“确定”的选择，点击后会跳转到用户信息设置页面，需要手动勾选（如下图）。**如果此时用户依然拒绝，后续只要切换到阅读记录页面，均会一直弹上图的对话框。(不建议一直弹出，用户一直不授权，其实这个用户你是争取不到的，主要思路就是用户拒绝，在让用户授权一次，在不授权，基本就怎么处理都无所谓了)**

<img width="300" src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/04/2799ad6f40c7208c800661f3c327c1bf.png"/>

:::tip

**最新记录**

**wx.openSetting 接口已经废弃了，要用组件button 设置类型open-type去跳转用户授权设置页面**

**1. 微信小程序在基础库1.2 版本中提供了wx.getSetting 这个接口可以获取到用户的当前设置。**

**2. 利用这个接口我们就可以进行二次判断用户的授权状态，如果回调失败，则可以弹对话框说明并通过wx.openSetting 这个接口进入到设置页面。**

:::

#### 实现代码（需要更新逻辑）

**大致就是检查用户授权状态，拒绝授权就弹出设置页面，让用户去授权（废弃）**

**最新实现逻辑：如果用户拒绝授权，那么弹出自定义的界面alert，用户点击我们设置的跳转按钮open-type，设置成openSetting**

**所以下面的代码，需要修改，大家请注意**

```javascript
// 检测授权状态
checkSettingStatu: function(cb) {
   var that = this;
   var msg = "如需正常使用阅读记录功能，请按确定并在授权管理中选中“用户信息”，然后点按确定。最后再重新进入小程序即可正常使用。" 
   // 判断是否是第一次授权，非第一次授权且授权失败则进行提醒
   wx.getSetting({
       success: function success(res) {
            console.log(res.authSetting);
            var authSetting = res.authSetting;
            
            if (util.isEmptyObject(authSetting)) {
                console.log('首次授权');
                
                // 
            } else {
                 console.log('不是第一次授权', authSetting);
                 // 没有授权的提醒
                 if (authSetting['scope.userInfo'] === false) {
                     wx.showModal({
                         title: '用户未授权',
                         content: msg,
                         showCancel: false,
                         success: function (res) {
                             if (res.confirm) {
                                 console.log('用户点击确定')
                                 
                                 wx.openSetting({
                                     success: function success(res) {
                                         console.log('openSetting success', res.authSetting);
                                         // 这里进入授权设置页面
                                     }
                                 });
                             }
                         }
                      })
                  }
             }
           
         }
    });
 }
// 这里的代码，部分需要修改，大家注意，思路仅供参考，现在权限不可用了
```

#### 方案二

```html
<button wx:if="{{ldata}}" bindtap='btnTap'>获取位置信息</button>
<button wx:else open-type="openSetting" bindopensetting='handler'>
点击授权并获取位置信息
</button>
```

```javascript
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    ldata:false
  },
  onLoad: function () {
  
    // 获取位置
    var that=this;
        wx.getLocation({
        
          type: 'gcj02',
          success: function (res) {
            var latitude = res.latitude
            var longitude = res.longitude
            that.setData({
              ldata:true,
              latitude: latitude,
              longitude: longitude
            })
          },
          fail:function(res){
            console.log('拒绝授权')
            that.setData({
              ldata:false
            })
          }
        }) 
      },
      // 
      btnTap(e){
        wx.openLocation({
          latitude: this.data.latitude,
          longitude: this.data.longitude,
          scale: 28
        })
      },
      // 设置用户设置授权之后的回调,可以判断用户是否授权
      handler:function(e){
        var that = this;
        // 还是没有授权  
        if (!e.detail.authSetting['scope.userLocation']){
          that.setData({
            ldata:false
          })
        }
        // 用户已经授权  
        else{
            that.setData({
                ldata: true,
            })
            // 获取信息即可
            wx.getLocation({
                type: 'gcj02',
                success: function (res) {
                    var latitude = res.latitude
                    var longitude = res.longitude

                    that.setData({
                        latitude: latitude,
                        longitude: longitude
                    })
                    wx.openLocation({
                        latitude: latitude,
                        longitude: longitude,
                        scale: 28
                    })
                }
            })
        }
    }
})
// 这里的代码，部分需要修改，大家注意，思路仅供参考，现在权限不可用了
```

* 如果用户第一次拒绝了授权那么ldata设置为false，显示的是“点击授权并获取位置信息”按钮
* 这个button按钮的设置方式open-type=”openSetting” bindopensetting=’handler’
* 用按钮的open-type发起打开授权设置页，bindopensetting是设置用户设置授权之后的回调，我们可在回调里判断用户勾没勾选同意授权
* 如果判断同意了那么ldata设置为true，之后显示的都是“获取位置信息”，不必授权直接显示地图。
* 如果没有勾选同意那么ldata当然设置是false，之后再经过这个页面还是显示“点击授权并获取位置信息”。

****

## 导航navigator

页面链接，相当于web中的a标签
### 示例代码
```html
<view class="btn-area">
  <navigator url="/page/navigate/navigate?title=navigate" 
             hover-class="navigator-hover">跳转到新页面</navigator>
    
  <navigator url="../../redirect/redirect/redirect?title=redirect" 
             open-type="redirect" 
             hover-class="other-navigator-hover">在当前页打开</navigator>
    
  <navigator url="/page/index/index" 
             open-type="switchTab" 
             hover-class="other-navigator-hover">切换 Tab</navigator>
    
  <navigator target="miniProgram" 
             open-type="navigate" 
             app-id="" 
             path="" 
             extra-data="" 
             version="release">打开绑定的小程序</navigator>
</view>
```
### navigator属性

| 属性名                     | 类型    | 默认值          | 说明                                                         | 最低版本 |
| -------------------------- | ------- | --------------- | ------------------------------------------------------------ | -------- |
| target                     | String  |                 | 在哪个目标上发生跳转，默认当前小程序                         | 2.0.7    |
| **url**                    | String  |                 | 当前小程序内的跳转链接                                       |          |
| **open-type**              | String  | navigate        | 跳转方式                                                     |          |
| **delta**                  | Number  |                 | 当 open-type 为 'navigateBack' 时有效，表示回退的层数        |          |
| **app-id**                 | String  |                 | 当target="miniProgram"时有效，要打开的小程序 appId           | 2.0.7    |
| **path**                   | String  |                 | 当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页 | 2.0.7    |
| **extra-data**             | Object  |                 | 当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch()`，`App.onShow()` 中获取到这份数据。[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html) | 2.0.7    |
| version                    | version | release         | 当target="miniProgram"时有效，要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版），仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。 | 2.0.7    |
| **hover-class**            | String  | navigator-hover | 指定点击时的样式类，当`hover-class="none"`时，没有点击态效果 |          |
| **hover-stop-propagation** | Boolean | false           | 指定是否阻止本节点的祖先节点出现点击态                       | 1.5.0    |
| **hover-start-time**       | Number  | 50              | 按住后多久出现点击态，单位毫秒                               |          |
| **hover-stay-time**        | Number  | 600             | 手指松开后点击态保留时间，单位毫秒                           |          |
| **bindsuccess**            | String  |                 | 当target="miniProgram"时有效，跳转小程序成功                 | 2.0.7    |
| **binderror**              | String  |                 | 当target="miniProgram"时有效，跳转小程序失败                 | 2.0.7    |
| **bindcomplete**           | String  |                 | 当target="miniProgram"时有效，跳转小程序完成                 | 2.0.7    |

### open-type类型

| 值           | 说明                                                      | 最低版本 |
| ------------ | --------------------------------------------------------- | -------- |
| navigate     | 对应 `wx.navigateTo` 或 `wx.navigateToMiniProgram` 的功能 |          |
| redirect     | 对应 `wx.redirectTo` 的功能                               |          |
| switchTab    | 对应 `wx.switchTab` 的功能                                |          |
| reLaunch     | 对应 `wx.reLaunch` 的功能                                 | 1.1.0    |
| navigateBack | 对应 `wx.navigateBack` 的功能                             | 1.1.0    |
| exit         | 退出小程序，target="miniProgram"时生效                    | 2.1.0    |

* **navigator-hover 默认为 {background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}, <navigator/> 的子节点背景色应为透明色**

### wx.navigateTo

保留当前页面，跳转到应用内的某个页面，使用`wx.navigateBack`可以返回到原页面。

#### 参数说明

| 参数     | 类型     | 必填 | 说明                                                         |
| -------- | -------- | ---- | ------------------------------------------------------------ |
| url      | String   | 是   | 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用`?`分隔，参数键与参数值用`=`相连，不同参数用`&`分隔；如 'path?key=value&key2=value2' |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

#### 示例代码

```javascript
// A页面跳转
wx.navigateTo({
  url: 'page路径?参数=XXX'
})

// 目标页面的js文件
Page({
  onLoad: function(option){
   // 拿到传递的参数
    console.log(option.query)
  }
})
```

* url中可以传值，在onload中option方法接受
* 可以把对象转化为json字符串的形式传递，拿到后解析即可

:::tip

**目前页面路径最多只能十层，最初是五层**

:::

### wx.redirectTo

关闭当前页面，跳转到应用内的某个页面。

#### 参数说明

| 参数     | 类型     | 必填 | 说明                                                         |
| -------- | -------- | ---- | ------------------------------------------------------------ |
| url      | String   | 是   | 需要跳转的**应用内非 tabBar 的页面**的路径，路径后可以带参数。参数与路径之间使用`?`分隔，参数键与参数值用`=`相连，不同参数用`&`分隔；如 'path?key=value&key2=value2' |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

#### 示例代码 

```javascript
wx.redirectTo({
  url: 'page路径?参数=XXX'
})
```

:::tip

**不允许跳转到tabbar页面**

:::

### wx.reLaunch

关闭所有页面，打开到应用内的某个页面。**基础库 1.1.0 开始支持**

#### 参数说明

| 参数     | 类型     | 必填 | 说明                                                         |
| -------- | -------- | ---- | ------------------------------------------------------------ |
| url      | String   | 是   | 需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用`?`分隔，参数键与参数值用`=`相连，不同参数用`&`分隔；如 'path?key=value&key2=value2'，**如果跳转的页面路径是 tabBar 页面则不能带参数** |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

#### 示例代码

```javascript
wx.reLaunch({
  url: 'page路径?参数=XXX'
})

//目标页面
Page({
  onLoad: function(option){
    console.log(option.XXX)
  }
})
```



### wx.switchTab

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

#### 参数说明

| 参数     | 类型     | 必填 | 说明                                                         |
| -------- | -------- | ---- | ------------------------------------------------------------ |
| url      | String   | 是   | 需要跳转的 tabBar 页面的路径（需在 app.json 的 [tabBar](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#tabbar) 字段定义的页面），路径后不能带参数 |
| success  | Function | 否   | 接口调用成功的回调函数                                       |
| fail     | Function | 否   | 接口调用失败的回调函数                                       |
| complete | Function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

#### 示例代码

```javascript
wx.switchTab({
  url: '/index'
})
```

### wx.navigateBack

关闭当前页面，返回上一页面或多级页面。可通过 **getCurrentPages()**  获取当前的页面栈，决定需要返回几层。

#### 参数说明

| 参数  | 类型   | 默认值 | 说明                                                    |
| ----- | ------ | ------ | ------------------------------------------------------- |
| delta | Number | 1      | 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 |

#### 示例代码

```javascript
// 此处是A页面
wx.navigateTo({
  url: 'B?id=1'
})

// 此处是B页面
wx.navigateTo({
  url: 'C?id=1'
})

// 在C页面内 navigateBack，将返回A页面
wx.navigateBack({
  delta: 2
})
```

:::tip

**wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面**

**调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。**

:::

## 缓存Storage

* 每个微信小程序都可以有自己的本地缓存
* 方法有同步或者异步


* **同一个微信用户，同一个小程序 storage 上限为 10MB**
* localStorage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据
* 如果用户储存空间不足，我们会清空最近最久未使用的小程序的本地缓存。我们不建议将关键信息全部存在 localStorage，以防储存空间不足或用户换设备的情况。

:::tip

**同一个微信用户，同一个小程序 storage 上限为 10MB，一定要注意**

:::

### 设置缓存

#### setStorage

* 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口

```javascript
wx.setStorage({
  key:"key",
  data:"value"
})
```

#### setStorageSync

* 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。

```javascript
try {
	wx.setStorageSync('key', 'value')
} catch (e) {	
}
```

### 获取缓存

#### getStorage

* 从本地缓存中异步获取指定 key 对应的内容。

```javascript
wx.getStorage({
  key: 'key',
  success: function(res) {
  	console.log(res.data)
  } 
})
```

#### getStorageSync

* 从本地缓存中同步获取指定 key 对应的内容。

```javascript
try {
  var value = wx.getStorageSync('key')
  if (value) {
  	// Do something with return value
  }
} catch (e) {
  // Do something when catch error
}
```

### 获取storage信息

#### getStorageInfo

* 异步获取当前storage的相关信息

```javascript
wx.getStorageInfo({
  success: function(res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
```

#### getStorageInfoSync

* 同步获取当前storage的相关信息

```javascript
try {
  var res = wx.getStorageInfoSync()
  console.log(res.keys)
  console.log(res.currentSize)
  console.log(res.limitSize)
} catch (e) {
  // Do something when catch error
}
```

### 删除指定缓存

#### removeStorage

* 从本地缓存中异步移除指定 key 。

```javascript
wx.removeStorage({
  key: 'key',
  success: function(res) {
    console.log(res.data)
  } 
})
```

#### removeStorageSync

* 从本地缓存中同步移除指定 key 。

```javascript
try {
  wx.removeStorageSync('key')
} catch (e) {
  // Do something when catch error
}
```

### 清除缓存

#### clearStorage

* 清理本地数据缓存。

```javascript
wx.clearStorage()
```

#### clearStorageSync

* 同步清理本地数据缓存

```javascript
try {
	wx.clearStorageSync()
} catch(e) {
  // Do something when catch error
}
```

### 缓存的坑

**调用同步方法写缓存时，经常会报错**

:::tip

**小程序官方给的答复，建议使用异步写入缓存的方法，少用同步方法**

[https://developers.weixin.qq.com/community/develop/doc/a352fb32bfc76cb6a6438925e4edf9b1](https://developers.weixin.qq.com/community/develop/doc/a352fb32bfc76cb6a6438925e4edf9b1)

有些场景，异步缓存不适合，必须同步去写入缓存。最好的办法：**try catch**

:::

```javascript
function setStorage(key, value) {
    try {
  		wx.setStorageSync(key, value)
	} 
	catch (e) {
        setStorage(key,value)
	}
}
```

**清除小程序缓存**

* 可以用wx.removeStorage，或者wx.removeStorageSync来清除小程序缓存
* 也可以从小程序列表中，把小程序删除，本地缓存就没有了

* **在开发小程序过程中，已经删除了体验版小程序，但是缓存依然存在（坑）**

:::tip

**因为，同一个小程序的开发版、体验版、线上版的缓存是共用的，你需要同时删除这三个版本的小程序，缓存才会被删除**。



**如果你使用了开发工具里面的远程调试，建议你清除缓存时，顺便把开发工具内的缓存也清除掉**

:::

## 网络请求

### 网络API列表

| API                  | 说明              |
| -------------------- | --------------- |
| wx.request           | 发起网络请求          |
| wx.uploadFile        | 上传文件            |
| wx.downloadFile      | 下载文件            |
| wx.connectSocket     | 创建 WebSocket 连接 |
| wx.onSocketOpen      | 监听 WebSocket 打开 |
| wx.onSocketError     | 监听 WebSocket 错误 |
| wx.sendSocketMessage | 发送 WebSocket 消息 |
| wx.onSocketMessage   | 接受 WebSocket 消息 |
| wx.closeSocket       | 关闭 WebSocket 连接 |
| wx.onSocketClose     | 监听 WebSocket 关闭 |

### 小程序网络API使用说明

#### 服务器域名配置

* 每个微信小程序需要事先设置一个通讯域名，小程序可以跟指定的域名与进行网络通信

#### 配置流程

* 服务器域名请在 `小程序后台-设置-开发设置-服务器域名` 中进行配置
* 注意事项：
  * 域名只支持 `https` (`request`、`uploadFile`、`downloadFile`) 和 `wss` (`connectSocket`) 协议；
  * **域名不能使用 IP 地址或 localhost**
  * **域名必须经过 ICP 备案**
  * **出于安全考虑，`api.weixin.qq.com` 不能被配置为服务器域名，相关API也不能在小程序内调用。**开发者应将 appsecret 保存到后台服务器中，通过服务器使用 appsecret 获取 accesstoken，并调用相关 API。
  * 对于每个接口，分别可以配置**最多 20 个域名**

#### HTTPS 证书

* https证书说明：
  * 小程序必须使用 HTTPS 请求
  * 小程序内会对服务器域名使用的 HTTPS 证书进行校验，如果校验失败，则请求不能成功发起。
  * 由于系统限制，不同平台对于证书要求的严格程度不同。
  * 为了保证小程序的兼容性，建议开发者按照最高标准进行证书配置，并使用相关工具检查现有证书是否符合要求。
* https证书要求:
  * HTTPS 证书必须有效。证书必须被系统信任，部署SSL证书的网站域名必须与证书颁发的域名一致，证书必须在有效期内;
  * `iOS` 不支持自签名证书;
  * `iOS` 下证书必须满足苹果 [App Transport Security (ATS)](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33) 的要求;
  * TLS 必须支持 1.2 及以上版本。部分旧 `Android` 机型还未支持 TLS 1.2，请确保 HTTPS 服务器的 TLS 版本支持1.2及以下版本;
  * 部分 CA 可能不被操作系统信任，请开发者在选择证书时注意小程序和各系统的相关通告。
    - [Chrome 56/57 内核对 WoSign、StartCom 证书限制周知](http://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=&docid=800026caeb042e45681583652b70910a)
* **开发期间可以设置不进行域名校检，以便于开发小程序**

#### 关于请求

* 默认超时时间和最大超时时间都是 **60s**
* `request`、`uploadFile`、`downloadFile` 的最大并发限制是 **10** 个
* 网络请求的 `referer` header 不可设置。其格式固定为 `https://servicewechat.com/{appid}/{version}/page-frame.html`，其中 `{appid}`为小程序的 appid，`{version}` 为小程序的版本号，版本号为 `0` 表示为开发版、体验版以及审核版本，版本号为 `devtools` 表示为开发者工具，其余为正式版本。
* 小程序进入后台运行后（非置顶聊天），如果 **5s** 内网络请求没有结束，会回调错误信息 `fail interrupted`；在回到前台之前，网络请求接口调用都会无法调用。

#### 关于服务器返回

* 返回值编码：
  * 建议服务器返回值使用 **UTF-8** 编码。对于非 UTF-8 编码，小程序会尝试进行转换，但是会有转换失败的可能。
  * 小程序会自动对 BOM 头进行过滤。
* 回调：
  * **只要成功接收到服务器返回，无论statusCode是多少，都会进入success回调。**
  * **请开发者根据业务逻辑对返回值进行判断。**

### wx.request

发起网络请求，基本上这个请求包含了我们大部分的请求操作了，所以介绍的比较详细

#### OBJECT参数说明

| 参数名          | 类型                        | 必填   | 默认值  | 说明                                       | 最低版本                                     |
| ------------ | ------------------------- | ---- | ---- | ---------------------------------------- | ---------------------------------------- |
| url          | String                    | 是    |      | 开发者服务器接口地址                               |                                          |
| data         | Object/String/ArrayBuffer | 否    |      | 请求的参数                                    |                                          |
| header       | Object                    | 否    |      | 设置请求的 header，header 中不能设置 Referer。       |                                          |
| method       | String                    | 否    | GET  | （**需大写**）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT |                                          |
| dataType     | String                    | 否    | json | 如果设为json，会尝试对返回的数据做一次 JSON.parse         |                                          |
| responseType | String                    | 否    | text | 设置响应的数据类型。合法值：text、arraybuffer           | [1.7.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| success      | Function                  | 否    |      | 收到开发者服务成功返回的回调函数                         |                                          |
| fail         | Function                  | 否    |      | 接口调用失败的回调函数                              |                                          |
| complete     | Function                  | 否    |      | 接口调用结束的回调函数（调用成功、失败都会执行）                 |                                          |

#### success返回参数说明

| 参数         | 类型                        | 说明                             | 最低版本                                     |
| ---------- | ------------------------- | ------------------------------ | ---------------------------------------- |
| data       | Object/String/ArrayBuffer | 开发者服务器返回的数据                    |                                          |
| statusCode | Number                    | 开发者服务器返回的 HTTP 状态码             |                                          |
| header     | Object                    | 开发者服务器返回的 HTTP Response Header | [1.2.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |

#### data 数据说明

* 最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。
* 转换规则如下：
  * 对于 `GET` 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
  * 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
  * 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）

```javascript
wx.request({
  url: '服务器https地址', 
  data: {
     x: '' ,
     y: ''
  },
  method:'POST',
  header: {
  	'content-type': 'application/json' // 默认值
  },
  success: function(res) {
    console.log(res.data)
  }
})
```

#### 返回值

* 返回一个 `requestTask` 对象，通过 `requestTask`，可中断请求任务。
* 基础库 1.4.0 开始支持，低版本需做兼容处理

```javascript
const requestTask = wx.request({})
requestTask.abort() // 取消请求任务
```

#### Request封装

[参考github](https://github.com/LiangLuDev/wxapp-request)

```javascript

// 缓存地址路径
const HOST_URI = ""
// 开发
const DEV_HOST_URL = ""
// 线上
const PROD_HOST_URL = ""

// 使用开发地址
const BASE_URL = DEV_HOST_URL

/**
 *  导入api
 */ 
var api = require('./api.js')

/**
 * 网络请求封装
 * @param url url路径名 例：/books
 * @param method 请求方式 POST/GET/DELETE等
 * @param data 请求参数 string类型
 * @param success  成功回调
 * @param fail 失败回调
 */
function request(url, method, data, success, fail) {
  
  if (!fail && !success && typeof data === 'function') {
    // fail = null;
    success = data;
    data = "";
  } else if (!fail) {
    if (typeof data === 'function') {
      fail = success
      success = data
      data = ""
    } else if (typeof data === 'object') {
      // fail = null
    } else {
      console.log("传递参数类型不正确");
    }
  }

  wx.showLoading({
    title: '加载中....',
  })

  var wxtask = wx.request({
    url: BASE_URL + url,
    header: {
      // 'content-type':'application/json',  //默认 application/json :数据序列化
      // 'access-token': 'access-token',
      // 'app-type': 'wx-app'
      'content-type':'application/x-www-form-urlencoded'
    },
    method: method,
    data: data,
    success: function (res) {
      wx.hideLoading()
      console.log(res)
      // 成功，执行回调函数success，传数据
      if (res.statusCode === 200) {
        success(res.data)
      }
      else {
        //错误请求  wx弹框提示错误信息
        wx.showToast({
          title: "请求失败",
          icon: 'none',
          duration: 1000
        })
        if (fail) {
          fail(res.data.msg)
        }  
      }
      

    },
    fail: function (res) {
      // wx.hideLoading()
      //错误请求  wx弹框提示错误信息
      wx.showToast({
        title: res,
        icon: 'none',
        duration: 1000
      })
      if (fail) {
        fail(res)
      }
    }
  })
  return wxtask;
}


/**
 * 请求封装-Get
 * @param url 请求地址
 * @param data 请求参数
 * @param success 成功回调
 * @param fail  失败回调
 * @constructor
 *
 * 返回值为微信请求实例   用于取消请求
 */
function Get(url, data, success, fail) {
  return request(url, "GET", data, success, fail)
}


/**
 * 请求封装-Post
 * @param url 请求地址
 * @param data 请求参数
 * @param success 成功回调
 * @param fail  失败回调
 * @constructor
 *
 * 返回值为微信请求实例   用于取消请求
 */
function Post(url, data, success, fail) {
  console.log(data)
  return request(url, 'POST', data, success, fail)
}


/**
 * 请求封装-Delete
 * @param url 请求地址
 * @param data 请求参数
 * @param success 成功回调
 * @param fail  失败回调
 * @constructor
 *
 * 返回值为微信请求实例   用于取消请求
 */
function Delete(url, data, success, fail) {
  return request(url, 'DELETE', data, success, fail)
}

exports.Get = Get;
exports.Post = Post;
exports.Delete = Delete;
```

#### 调用

```javascript
//POST/DELETE 请求方式调用方法一样
 //1、网络请求（没有请求参数，不需要对请求失败情况处理）
    dev_request.Get('/classify', function (res) {
        console.log(res);
    })
    //2、网络请求（没有请求参数，需要对请求失败情况处理）
    dev_request.Get('/classify', function (res) {
        console.log(res);
    }, function (err) {
        console.log(err);
    })
    //3、网络请求（有请求参数，不需要对请求失败情况处理）
    var data = {
        username: 'username',
        age: 19
    };
    dev_request.Get('/classify', data, function (res) {
        console.log(res);
    })
    //4、网络请求（有请求参数，需要对请求失败情况处理）
    dev_request.Get('/classify', data, function (res) {
        console.log(res);
    }, function (err) {
        console.log(err);
    })
    //5、取消网络请求(所有的请求方法均返回requestTask对象，可中断请求任务)
        var requestTask = dev_request.Get('/classify', function (res) {
            console.log(res);
        });
        //网络请求取消
        requestTask.abort()
```

## DOM操作

* 微信小程序中不允许使用window和document等对象，所以DOM操作是被限制的
* 并且微信小程序推荐的是数据驱动视图，所以，不推荐使用DOM操作

:::tip

**我们在微信小程序中称DOM操作为节点操作**

:::

### wx.createSelectorQuery()

* 基础库 1.4.0 开始支持，低版本需做兼容处理。
* 返回一个SelectorQuery对象实例。
* 可以在这个实例上使用`select`等方法选择节点，并使用`boundingClientRect`等方法选择需要查询的信息。

```javascript
/ 根据id查询节点，获取节点属性
wx.createSelectorQuery().select('#iii').boundingClientRect(function (rect) {
    that.setData({
        height: rect.height
    })
}).exec()
```

### selectorQuery 对象的方法列表

|      方法      |       参数       |
| :------------: | :--------------: |
|       in       | object Component |
|     select     |     selector     |
|   selectAll    |     selector     |
| selectViewport |                  |
|      exec      |    [callback]    |

### selectorQuery.in(component)

* 基础库 1.6.0 开始支持，低版本需做兼容处理。

* 将选择器的选取范围更改为自定义组件`component`内。
* 初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点。

```javascript
Component({
  queryMultipleNodes: function(){
    var query = wx.createSelectorQuery().in(this)
    query.select('#id').boundingClientRect(function(res){
      res.top // top是这个组件内 #id 节点的上边界坐标
    }).exec()
  }
})
```

### selectorQuery.select(selector)

* 在当前页面下选择**第一个匹配**选择器`selector`的节点，返回一个`NodesRef`对象实例，可以用于获取节点信息。
* `selector`类似于CSS的选择器，但仅支持下列语法。
  - ID选择器：`#the-id`
  - class选择器（可以连续指定多个）：`.a-class.another-class`
  - 子元素选择器：`.the-parent > .the-child`
  - 后代选择器：`.the-ancestor .the-descendant`
  - 跨自定义组件的后代选择器：`.the-ancestor >>> .the-descendant`
  - 多选择器的并集：`#a-node, .some-other-nodes`

### selectorQuery.selectAll(selector)

* 在当前页面下选择匹配选择器`selector`的节点，返回一个`NodesRef`对象实例。 
* 与`selectorQuery.select(selector)`不同的是，它选择所有匹配选择器的节点。

### selectorQuery.selectViewport()

* 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个`NodesRef`对象实例。

### nodesRef.boundingClientRect([callback])

* 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。
* 其功能类似于DOM的getBoundingClientRect。
* 返回值是nodesRef对应的selectorQuery。
* 返回的节点信息中，每个节点的位置用`left`、`right`、`top`、`bottom`、`width`、`height`字段描述。
* 如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回。

```javascript
Page({
  getRect: function(){
    // 选择一个
    wx.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
      rect.id      // 节点的ID
      rect.dataset // 节点的dataset
      rect.left    // 节点的左边界坐标
      rect.right   // 节点的右边界坐标
      rect.top     // 节点的上边界坐标
      rect.bottom  // 节点的下边界坐标
      rect.width   // 节点的宽度
      rect.height  // 节点的高度
    }).exec()
  },
    
  getAllRects: function(){
    // 选择多个，获取到的是一个数组
    wx.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
      rects.forEach(function(rect){
        rect.id      // 节点的ID
        rect.dataset // 节点的dataset
        rect.left    // 节点的左边界坐标
        rect.right   // 节点的右边界坐标
        rect.top     // 节点的上边界坐标
        rect.bottom  // 节点的下边界坐标
        rect.width   // 节点的宽度
        rect.height  // 节点的高度
      })
    }).exec()
  }
})
```

### nodesRef.scrollOffset([callback])

* 添加节点的滚动位置查询请求，以像素为单位。
* 节点必须是`scroll-view`或者viewport。
* 返回值是nodesRef对应的selectorQuery。
* 返回的节点信息中，每个节点的滚动位置用`scrollLeft`、`scrollTop`字段描述。
* 如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回。

```javascript
Page({
  getScrollOffset: function(){
    wx.createSelectorQuery().selectViewport().scrollOffset(function(res){
      res.id      // 节点的ID
      res.dataset // 节点的dataset
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
    }).exec()
  }
})
```

### nodesRef.fields(fields, [callback])

* 获取节点的相关信息，需要获取的字段在`fields`中指定。
* 返回值是nodesRef对应的selectorQuery。

| 字段名        | 默认值 | 说明                                                         |
| ------------- | ------ | ------------------------------------------------------------ |
| id            | 否     | 是否返回节点`id`                                             |
| dataset       | 否     | 是否返回节点`dataset`                                        |
| rect          | 否     | 是否返回节点布局位置（`left` `right` `top` `bottom`）        |
| size          | 否     | 是否返回节点尺寸（`width` `height`）                         |
| scrollOffset  | 否     | 是否返回节点的 `scrollLeft` `scrollTop` ，节点必须是`scroll-view`或者viewport |
| properties    | `[]`   | 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， `id` `class` `style` 和事件绑定的属性值不可获取） |
| computedStyle | `[]`   | 指定样式名列表，返回节点对应样式名的当前值                   |

:::tip

**computedStyle 的优先级高于 size，当同时在 computedStyle 里指定了 width/height 和传入了 size: true，则优先返回 computedStyle 获取到的 width/height。**

:::

```javascript
Page({
  getFields: function(){
    wx.createSelectorQuery().select('#the-id').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY'],
      computedStyle: ['margin', 'backgroundColor']
    }, function(res){
      res.dataset    // 节点的dataset
      res.width      // 节点的宽度
      res.height     // 节点的高度
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
      res.scrollX    // 节点 scroll-x 属性的当前值
      res.scrollY    // 节点 scroll-y 属性的当前值
      // 此处返回指定要返回的样式名
      res.margin
      res.backgroundColor
    }).exec()
  }
})
```

### selectorQuery.exec([callback])

* 执行所有的请求，请求结果按请求次序构成数组，在callback的第一个参数中返回。

## 微信支付

:::tip

**微信支付需要商户号，小程序开发人员也需要了解详细申请微信支付的流程**

**小程序微信支付，收到的钱也是进入商户号里面了**

**微信支付大部分都是后台去做的，我们只需要获取参数，然后调用微信里面的支付方法，即可**

:::

### 大致支付流程

### 1.获取code

* 在小程序中获取用户的登录信息，成功后可以获取到用户的code值
* wx.login

### 2.获取openid

* 在用户自己的服务端请求微信获取用户openid接口，成功后可以获取用户的openid值
* openid是根据code获取到的
* 必须服务器用code去获取openid

### 3.服务器统一下单

* 在用户自己的服务器上面请求微信的统一下单接口，下单成功后可以获取prepay_id值
* 服务器返回给小程序数据，小程序调用支付方法

### 4.小程序调用支付

* 在微信小程序中支付订单，最终实现微信的支付功能
* wx.requestpayment

### requestPayment

发起微信支付

### 参数说明

| 参数        | 类型       | 必填   | 说明                                       |
| --------- | -------- | ---- | ---------------------------------------- |
| timeStamp | String   | 是    | 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间        |
| nonceStr  | String   | 是    | 随机字符串，长度为32个字符以下。                        |
| package   | String   | 是    | 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*** |
| signType  | String   | 是    | 签名算法，暂支持 MD5                             |
| paySign   | String   | 是    | 签名,具体签名方案参见[小程序支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3); |
| success   | Function | 否    | 接口调用成功的回调函数                              |
| fail      | Function | 否    | 接口调用失败的回调函数                              |
| complete  | Function | 否    | 接口调用结束的回调函数（调用成功、失败都会执行）                 |

### 回调结果

| 回调类型    | errMsg                               | 说明                                    |
| ------- | ------------------------------------ | ------------------------------------- |
| success | requestPayment:ok                    | 调用支付成功                                |
| fail    | requestPayment:fail cancel           | 用户取消支付                                |
| fail    | requestPayment:fail (detail message) | 调用支付失败，其中 detail message 为后台返回的详细失败原因 |

```javascript
wx.requestPayment({
   'timeStamp': '',
   'nonceStr': '',
   'package': '',
   'signType': 'MD5',
   'paySign': '',
   'success':function(res){
   },
   'fail':function(res){
   },
   'complete':function(res){
   }
})
```

* 注意：
  * **6.5.2 及之前版本中，用户取消支付不会触发 fail 回调，只会触发 complete 回调，回调 errMsg 为 'requestPayment:cancel'**

## 设备相关

### 设备信息

微信允许我们的小程序获取设备的相关信息

#### getSystemInfo

获取系统信息

#### getSystemInfoSync

获取系统信息同步接口

#### success返回值说明

| 参数              | 说明                                   | 最低版本                                     |
| --------------- | ------------------------------------ | ---------------------------------------- |
| brand           | 手机品牌                                 | [1.5.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| model           | 手机型号                                 |                                          |
| pixelRatio      | 设备像素比                                |                                          |
| screenWidth     | 屏幕宽度                                 | [1.1.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| screenHeight    | 屏幕高度                                 | [1.1.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| windowWidth     | 可使用窗口宽度                              |                                          |
| windowHeight    | 可使用窗口高度                              |                                          |
| statusBarHeight | 状态栏的高度                               | [1.9.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| language        | 微信设置的语言                              |                                          |
| version         | 微信版本号                                |                                          |
| system          | 操作系统版本                               |                                          |
| platform        | 客户端平台                                |                                          |
| fontSizeSetting | 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位：px | [1.5.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| SDKVersion      | 客户端基础库版本                             | [1.1.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |

### 判断API是否可用

#### canIUse

* 判断小程序的API，回调，参数，组件等是否在当前版本可用。
* **此接口从基础库 1.1.1 版本开始支持。**
* **String参数说明**：
  * 调用方式：
    * 使用`${API}.${method}.${param}.${options}`
    * 或者`${component}.${attribute}.${option}`方式来调用
  * `${API}` 代表 API 名字
  * `${method}` 代表调用方式，有效值为`return`, `success`, `object`, `callback`
  * `${param}` 代表参数或者返回值
  * `${options}` 代表参数的可选值
  * `${component}` 代表组件名字
  * `${attribute}` 代表组件属性
  * `${option}` 代表组件属性的可选值

```javascript
wx.canIUse('openBluetoothAdapter')
wx.canIUse('getSystemInfoSync.return.screenWidth')
wx.canIUse('getSystemInfo.success.screenWidth')
wx.canIUse('showToast.object.image')
wx.canIUse('onCompassChange.callback.direction')
wx.canIUse('request.object.method.GET')

wx.canIUse('live-player')
wx.canIUse('text.selectable')
wx.canIUse('button.open-type.contact')
```

### 设备网络类型

微信允许我们通过API来获取设备当前的网络类型

#### getNetworkType

获取网络类型

* 返回值：networkType

```javascript
wx.getNetworkType({
  success: function(res) {
    // 返回网络类型, 有效值：
    // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
    var networkType = res.networkType
  }
})
```

#### onNetworkStatusChange

* 参数是一个回调函数，注意
* 监听网络状态变化
* 基础库 1.1.0 开始支持，低版本需做兼容处理

#### CALLBACK返回参数

| 参数          | 类型      | 说明        |
| ----------- | ------- | --------- |
| isConnected | Boolean | 当前是否有网络连接 |
| networkType | String  | 网络类型      |

#### networkType 有效值

| 值       | 说明               |
| ------- | ---------------- |
| wifi    | wifi 网络          |
| 2g      | 2g 网络            |
| 3g      | 3g 网络            |
| 4g      | 4g 网络            |
| none    | 无网络              |
| unknown | Android下不常见的网络类型 |

```javascript
wx.onNetworkStatusChange(function(res) {
  console.log(res.isConnected)
  console.log(res.networkType)
})
```

### 剪切板

微信允许我们的小程序设置和读取剪切板内容

* 基础库 1.1.0 开始支持，低版本需做兼容处理

#### setClipboardData

* 设置系统剪贴板的内容

```javascript
wx.setClipboardData({
  data: 'data',
  success: function(res) {
    wx.getClipboardData({
      success: function(res) {
        console.log(res.data) // data
      }
    })
  }
})
```

#### getClipboardData

获取系统剪贴板内容

```javascript
wx.getClipboardData({
  success: function(res){
    console.log(res.data)
  }
})
```

## 小程序打开App

:::tip

微信小程序现在已经支持打开App了，但是有一条硬性要求：**从移动应用分享至小程序的页面，用户访问时支持打开来源应用。**

:::

## 兼容版本处理

### 兼容问题

* 小程序的功能不断的增加，但是旧版本的微信客户端并不支持新功能，所以在使用这些新能力的时候需要做兼容
* 文档会在组件，API等页面描述中带上各个功能所支持的版本号。
* 可以通过 `wx.getSystemInfo` 或者 `wx.getSystemInfoSync` 获取到小程序的基础库版本号。
* 也可以通过 `wx.canIUse` 来判断是否可以在该基础库版本下直接使用对应的API或者组件

### 兼容方式 - 版本比较

* 微信客户端和小程序基础库的版本号风格为 Major.Minor.Patch（主版本号.次版本号.修订号）
* 开发者可以根据版本号去做兼容

```
function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  var len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i])
    var num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

compareVersion('1.11.0', '1.9.9')
// 1
```

### 兼容方式 - 接口

对于新增的 API，可以用以下代码来判断是否支持用户的手机。

```javascript
if (wx.openBluetoothAdapter) {
  wx.openBluetoothAdapter()
} else {
  // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
  wx.showModal({
    title: '提示',
    content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
  })
}
```

### 兼容方式 - 参数

对于 API 的参数或者返回值有新增的参数，可以判断用以下代码判断。

```javascript
wx.showModal({
  success: function(res) {
    if (wx.canIUse('showModal.cancel')) {
      console.log(res.cancel)
    }
  }
})
```

### 兼容方式 - 组件

对于组件，新增的组件或属性在旧版本上不会被处理，不过也不会报错。如果特殊场景需要对旧版本做一些降级处理，可以这样子做。

```javascript
Page({
  data: {
    canIUse: wx.canIUse('cover-view')
  }
})
```

```html
<video controls="{{!canIUse}}">
  <cover-view wx:if="{{canIUse}}">play</cover-view>
</video>
```