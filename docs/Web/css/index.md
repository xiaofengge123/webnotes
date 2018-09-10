## CSS（3）

:::tip

**最后更新时间：2018年09月10日**

**字数：3976**

:::

**主要内容**
* 学习资源
* felx布局

## 学习资源

* 综合资源
  * [菜鸟教程 CSS](http://www.runoob.com/css/css-tutorial.html)
  * [菜鸟教程 CSS3](http://www.runoob.com/css3/css3-tutorial.html)
  * [w3school CSS](http://www.w3school.com.cn/css/index.asp)
  * [w3school CSS3](http://www.w3school.com.cn/css3/index.asp)
* 独立文章
  * [Flex 布局教程：语法篇 -- 阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) （本章flex部分）
  * [Flex 布局教程：实例篇 -- 阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

## flex布局

* 2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。
* 它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能

::: tip

**flex布局基本不存在兼容问题，可以放心使用**

:::

### flex简介

* Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
* 任何一个容器都可以指定为 Flex 布局。
* 行内元素也可以使用 Flex 布局。
* Webkit 内核的浏览器，必须加上`-webkit`前缀。

```css
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
  display: inline-flex;/* 行内 */
}
```

::: tip

**设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效**

:::

### 基本概念

#### 容器和项目

* 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。
* 它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

#### 主轴和交叉轴

* 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）
* 主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；
* 交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。
* **项目默认沿主轴排列**。
* 单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png" />

### 容器的属性

容器的6个属性

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

#### flex-direction

`flex-direction`属性决定主轴的方向（即项目的排列方向）

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

* 参数说明
  * `row`（默认值）：主轴为水平方向，起点在左端。
  * `row-reverse`：主轴为水平方向，起点在右端。
  * `column`：主轴为垂直方向，起点在上沿。
  * `column-reverse`：主轴为垂直方向，起点在下沿。



* 效果图：

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png" />

#### flex-wrap属性

* 默认情况下，项目都排在一条线（又称"轴线"）上。
* `flex-wrap`属性定义，如果一条轴线排不下，如何换行。

```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

* 参数说明：
  * `nowrap`（默认）：不换行。
  * `wrap`：换行，第一行在上方。
  * `wrap-reverse`：换行，第一行在下方。

#### flex-flow

* `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式
* 默认值为`row nowrap`。

#### justify-content

`justify-content`属性定义了项目在主轴上的对齐方式。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

* 参数说明：
  * `flex-start`（默认值）：左对齐
  * `flex-end`：右对齐
  * `center`： 居中
  * `space-between`：两端对齐，项目之间的间隔都相等。
  * `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png" />

#### align-items

`align-items`属性定义项目在交叉轴上如何对齐

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

* 参数说明：（假设交叉轴从上到下）
  * `flex-start`：交叉轴的起点对齐。
  * `flex-end`：交叉轴的终点对齐。
  * `center`：交叉轴的中点对齐。
  * `baseline`: 项目的第一行文字的基线对齐。
  * `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

#### align-content

* `align-content`属性定义了多根轴线的对齐方式。
* 如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```


