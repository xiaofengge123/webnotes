## 小程序
记录小程序学习的点滴

## 学习资源
* 官方资源：
    * [微信官方小程序文档](https://developers.weixin.qq.com/miniprogram/dev/index.html)
    * [微信官方小游戏文档](https://developers.weixin.qq.com/minigame/dev/index.html?t=18081511)
    * [微信开发者工具](https://developers.weixin.qq.com/minigame/dev/devtools/download.html)
    * [官方小程序开发指南](https://developers.weixin.qq.com/ebook?action=get_post_info&token=935589521&volumn=1&lang=zh_CN&book=miniprogram&docid=0008aeea9a8978ab0086a685851c0a)
* 开发资源：
    * [wepy官方文档](https://tencent.github.io/wepy/document.html#/) **腾讯官方出品**
    * [mpvue官方文档](http://mpvue.com/) **美团点评团队出品**
    * [使用mpvue开发小程序教程](https://www.jianshu.com/p/8f779950bfd9)

* UI组件库：
    * [WeUI](https://weui.io/)


## 什么是小程序

小程序是一种不需要下载安装即可使用的应用，它实现了应用触手可及的梦想，用户扫一扫或者搜一下即可打开应用。也体现了用完即走的理念，用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无序安装卸载 -- 张小龙

## 生活中的小程序

- 跳一跳
- 圣诞头像：换一个带着圣诞帽的微信头像
- 拼多多
- 京东
- 摩拜单车
- 等等...

## 前世今生

* 2016年1月11日，2016微信公开课PRO版在广州举行，“微信之父”张小龙首次公开演讲，宣布微信公众号将推出“**应用号**”，通过公众号完成一些App的部分功能
* 2016年9月21日，微信小程序正式开启内测，首批内存名额200个，有人报价300万交易
* 2016年9月23日，微信应用号改名小程序，马化腾爆料改名内幕内幕：苹果不让叫应用号
* 2016年11月3日晚间，微信团队宣布：微信小程序正式开放公测
* 2017年1月9日0点，万众瞩目的微信第一批小程序正式上线
* 2017年12月28日，小程序开放游戏类目以及在首页增加下拉访问小程序入口，并且将“跳一跳”作为微信升级版的开屏内容进行推广，从而让日活人数在年末迅速增长
* 2018年1月 “跳一跳”等小游戏在大量微信用户中开始传播，而下拉入口的便捷性也让小程序的访问量大增，日活用户大幅增长到 2.8 亿。
* 2018年3月，微信正式宣布小程序广告组件启动内测
* 2018年7月13日，小程序任务栏功能升级，新增“我的小程序”板块；而小程序原有的“星标”功能升级，可以将喜欢的小程序直接添加到“我的小程序”。

## 与传统应用对比
* 传统应用：下载 —> 安装 —> 注册
* 小程序：打开微信 —>搜索小程序
* 最大特点：
  * 无需安装
  * 无需注册
  * 用完即走

##小程序优缺点

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
* 小程序和公众号不是一个账号，需要单独注册
* 小程序名称在帐号信息设置时完成，请谨慎设置，一旦设置暂不支持修改
* 小程序名称不得与公众平台已有的订阅号、服务号重复
* 如果你不是特殊组织，你还是要花300元进行认证，**微信支付需要微信认证后才能使用**
* 小程序头像、介绍每月只能修改5次，服务范围每月只能修改1次。
* **小程序二维码在第一个版本上线后才能获得**
* 一个小程序账号只有一个管理员（可修改），可以绑定10位开发者
* 一个应用同时只能打开5个页面，当已经打开了5个页面之后，wx.navigateTo不能正常打开新页面，**请避免多层级的交互方式**

### 开发的局限性

* 代码包限制：1M -- 2M
* 上架审核：官方：1-3天，实际：3天起步的可能性很大
* 审核机制：
  * 审核机制不透明，没有公开规范
  * 被拒后许多都不会给拒绝理由
* 域名、备案、https

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
小程序不是web，类似于web（对前端开发人员友好）
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
* 页面中配置项会覆盖  app.json  的  window 中相同的配置项

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

* text：
  * 文本显示，最基础的，相当于span
* rich-text:
  * 富文本
  * 低版本需要做兼容处理
* icon：
  * 图标
* progress：
  * 进度条

#### 视图组件

* view
  * 视图，滚动组件推荐用scroll-view
  * 相当于div
* scroll-view
  * 滚动视图
  * 部分组件在scroll-view中无法使用
  * 下拉刷新，请使用页面的滚动，而不是scroll-view
* swiper：
  * 滑块视图容器

#### 表单组件

* button：
  * 按钮
* input：
  * 输入框
* form：
  * 表单
* checkbox-group：
  * 多项选择器
  * 内部多个checkbox
* picker：
  * 从底部弹起的滚动选择器
  * 普通选择器
  * 多列选择器
  * 时间选择器
  * 日期选择器
  * 地区选择器
* picker-view：
  * 嵌入页面的滚动选择器
* radio：
  * 多项选择器
  * 内部多个radio
* slide：
  * 滑动选择器
* switch：
  * 开关选择器
* textarea：
  * 多行输入框

#### 导航

* navigate
* 页面链接

#### 媒体组件

* image：

  * 图片
  * **图片必须要设置宽度和高度，如果只设置宽度或高度其中一种，图片是不会自动适应**
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
* 微信小程序是单向数据流传递的，我们需要通过事件来传递视图的变化，去变更数据

#### setData

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
    this.setData({
      title:'changed data'
    })
 }
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



#### hidden

```html
<view hidden="{{ isLoading }}">
  <text>请求数据成功~</text>
</view>
```

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

在我们开发过程中，经常被使用到的事件如下：

- 单击——tap
- 长按——longtap
- 滑动——touchstart、touchmove、touchend、touchcancel

::: tip

**没有双击事件！没有双击事件！没有双击事件！**

两次间隔时间小于300ms认为是双击；微信官方文档没有双击事件，需要开发者自己定义处理。 

:::

## 应用的生命周期

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

::: tip

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

#### data

* data 是页面第一次渲染使用的初始数据
* 页面加载时，data  将会以 JSON 字符串的形式由逻辑层传至渲染层
* 因此 data 中的数据必须是可以转成 JSON 的类型：字符串，数字，布尔值，对象，数组。
* 渲染层可以通过 WXML 对数据进行绑定



#### 生命周期函数

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

#### 页面相关事件处理函数

* onPullDownRefresh : 下拉刷新

- 监听用户下拉刷新事件。
- 需要在 config 的 window 选项中开启 enablePullDownRefresh 。
- 当处理完数据刷新后，wx.stopPullDownRefresh 可以停止当前页面的下拉刷新。

## 小程序登录

小程序可以通过微信官方提供的登录能力方便地获取微信提供的用户身份标识，快速建立小程序内的用户体系

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

#### 请求参数

| 参数         | 必填   | 说明                     |
| ---------- | ---- | ---------------------- |
| appid      | 是    | 小程序唯一标识                |
| secret     | 是    | 小程序的 app secret        |
| js_code    | 是    | 登录时获取的 code            |
| grant_type | 是    | 填写为 authorization_code |

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

### openid

* **一个微信号与一个公众号**对应一个固定不变的openid


* openid是微信用户在公众号appid下的唯一用户标识
* appid不同，则获取到的openid就不同
* 可用于永久标记一个用户
* 微信公众号支付的必传参数

### session_key

* 校验用户信息(wx.getUserInfo(OBJECT)返回的signature);
* 解密(wx.getUserInfo(OBJECT)返回的encryptedData);
* wx.checksession是用来检查 wx.login(OBJECT) 的时效性，判断登录是否过期
* 注意：
  * 如果使用了wx.getUserInfo(OBJECT)获得的用户信息，还是有必要使用wx.checksession()来检查wx.login(OBJECT) 是否过期的
  * 因为用户有可能修改了头像、昵称、城市，省份等信息，可以通过检查wx.login(OBJECT) 是否过期来更新着些信息；

## 缓存Storage

* 每个微信小程序都可以有自己的本地缓存
* 方法有同步或者异步


* **同一个微信用户，同一个小程序 storage 上限为 10MB**
* localStorage 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据
* 如果用户储存空间不足，我们会清空最近最久未使用的小程序的本地缓存。我们不建议将关键信息全部存在 localStorage，以防储存空间不足或用户换设备的情况。

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

## 微信支付

#### requestPayment

发起微信支付

#### 参数说明

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

#### 回调结果

| 回调类型    | errMsg                               | 说明                                    |
| ------- | ------------------------------------ | ------------------------------------- |
| success | requestPayment:ok                    | 调用支付成功                                |
| fail    | requestPayment:fail cancel           | 用户取消支付                                |
| fail    | requestPayment:fail (detail message) | 调用支付失败，其中 detail message 为后台返回的详细失败原因 |

```
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