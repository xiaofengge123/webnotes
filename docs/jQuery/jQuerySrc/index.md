## jQuery源码学习

:::tip

**最后更新时间：2018年09月18日**

**字数：62586**

:::

## 正版课程链接

* [课程链接](https://study.163.com/course/introduction.htm?courseId=465001#/courseDetail?tab=1)


::: tip

请大家尊重正版，购买正版课程（网易云课堂，妙味课堂出品）
https://study.163.com/course/introduction.htm?courseId=465001#/courseDetail?tab=1

:::

## 基础要求

* JavaScript基础扎实
* 对原型和原型链非常熟悉
* 熟练使用jQuery
* 常用数据结构和正则表达式
* 热爱前端，有深入探究研究源码的决心

## jQuery源码版本

* jquery2.0.3
  * jQuery2.0.3并不完全兼容IE 6、7、8
* 解决方案：

```javascript
// 不是IE就用2.03，IE8以上也用2.0.3，IE8及以下用1.11版本 
<!--[if !IE]> -->
     <script src="/Scripts/jquery-2.0.3.min.js"></script>
 <!-- <![endif]-->

 <!--[if lte IE 8]>
     <script src="/Scripts/jquery-1.11.1.min.js"></script>
 <![endif]-->

 <!--[if gt IE 8]>
      <script src="/Scripts/jquery-2.0.3.min.js"></script>
 <![endif]-->
```

* [jQuery所有源码下载](http://www.jq22.com/jquery-info122)
* [jQuery所有版本CDN](https://www.bootcdn.cn/jquery/)

## 学习资源

* [jQuery源码逐行分析](https://study.163.com/course/introduction.htm?courseId=465001#/courseDetail?tab=1)
* [小峰哥jQuery学习笔记](http://www.xuefeng666.com/jQuery/jQuerySrc/index.html)
* [jquery源码解析-适合入门者](https://www.cnblogs.com/chaojidan/category/634197.html)
* [菜鸟教程jQuery](http://www.runoob.com/jquery/jquery-tutorial.html)

## jQuery源码模块

```javascript
(function () {  

    (21,94) 定义了一些变量和函数 jQuery = function(){};就是我们平时用到的jquery或者$
    
    (96,283) 给JQ对象添加一些方法和属性
    
    (285,347) extend ：JQ的继承方法
     
    (349,817) jQuery.extend() ：扩展一些工具方法
    
    (877,2856) Sizzle ：复杂选择器的实现
     
    (2880,3042) Callbacks ：回调对象 ：函数的统一管理
     
    (3043,3183) Deferred ：延迟对象 ：对异步的统一管理
     
    (3184,3295) support ：功能检测 ：根据功能，检测浏览器版本
     
    (3308,3652) data() ：数据缓存 ：
     
    (3653,3797) queue() ：队列管理 ：入队，出队等，比如动画效果用得到
     
    (3803,4299) attr(),removeAttr(),prop(),removeProp(),addClass(),removeClass(),toggleClass()
        hasClass(),val()等，都是对元素属性的操作
     
    (4300,5128) 事件操作的相关方法 ：add(),remove(),trigger(),on()等事件方法
    
    (5140,6057) DOM操作 ：添加 删除 获取 包装 DOM筛选
    
    (6058,6620) css()：样式操作 兼容性处理，浏览器支持处理

    (6621,7854) 提交的数据和ajax() ：

    (7855,8584) animate() ：运动的方法

    (8585,8792) 位置与尺寸的方法 ：offset()等

    (8804,8821) JQ支持模块化的模式

    (8826) window.jQuery = window.$ = jQuery;
    
})()
```
## 匿名函数自调用

```javascript
(function( window, undefined ) {
    //代码
})(window);  
```

- ECMAScript 执行JS代码是从里到外，因此把全局变量window或jQuery对象传进来，就避免了到外层去寻找，提高效率
- 不传参window，代码压缩window就不会被压缩了，传参的话，可以代码压缩
- undefined在老一辈的浏览器是不被支持的，直接使用会报错，js框架要考虑到兼容性，因此增加一个形参undefined
- 注意：不要用window.undefined传递给形参，有可能window.undefined被其他人修改了，最好就是甚么都不传，形参的undefined就是真正的undefined了

## jQuery定义和导出

### 入口（61行） 

```js
// 定义一个局部的jquery
jQuery = function( selector, context ) {
    // jQuery对象实际上只是init构造函数的“增强”。
	return new jQuery.fn.init( selector, context, rootjQuery );
}
```

* 这个函数在第61行开始，算是一个最重要的函数
* 我们平时用到的都是这个函数$或者jquery
* 返回一个对象
* 后面代码会有jQuery.fn = jQuery.prototype，所以fn就是原型
* 以上就是在原型下面找init方法
* 关键的一句话：

```javascript
// jQuery.fn其实就是原型，然后原型给了原型的init方法的原型，形成对象引用，那么在fn原型下面的方法，通过init创建出来的实例也是可以调用的
jQuery.fn = jQuery.prototype
jQuery.fn.init.prototype = jQuery.fn;
// 其实就相当于
jQuery.prototype.init.prototype = jQuery.prototype;
```

###  init构造函数（101行）

* jQuery对象中有一个原型方法init才是是真正的构造函数，通过init的原型对象跟jQuery的原型对象保持引用关系使得init的实例可以正常调用jQuery的原型方法，就好像是jQuery的实例一样。

* 这个方法接受3个参数，其前两个参数是jQuery方法传递过来的

* Selector：
  * 原则上可以输入任意值，但并不是所有值都是有意义的
  * 只有undefined、DOM 元素、字符串、函数、jQuery 对象、普通 JavaScript 对象这几种类型是有效的
  * 这个参数是通常是填写的但是不填写也不会报错

* Context：

  * 作为执行上下文或者叫执行范围可以不传入，或者传入 DOM 元素、jQuery 对象、普通 JavaScript 对象之一

* rootjQuery：
  * 包含了 document 对象的 jQuery 对象
  * 用于 document.getElementById() 查找失败、selector 是选择器表达式且未指定 context、selector 是函数的情况，其实就是$(document)

```javascript
jQuery.fn = jQuery.prototype = {
	// ...
    init: function( selector, context, rootjQuery ) { }
    // ...
}
```

### 对外公开（8825行）

```javascript
// If there is a window object, that at least has a document property,
// define jQuery and $ identifiers
if ( typeof window === "object" && typeof window.document === "object" ) {
	window.jQuery = window.$ = jQuery;
}
```

- 对外暴露出jquery

## 定义一些变量和函数（21行-94行）

:::tip

**其中最重要的一个函数就是61行的函数 jQuery = function(){}**

**就是我们平时用到的jquery或者$**

:::

### rootjQuery
* 对根jQuery（文档）的中心引用,其实就是$(document)

###  readyList

* DOM操作的变量

###  core_strundefined

```javascript
core_strundefined = typeof undefined
```

* 处理浏览器兼容，老版本的IE

* 最好使用typeof形式判断

### location 

```javascript
location = window.location
```

* 进行变量存储，方便快速调用
* 也可以防止变量后期被外部修改后调用错误

### document

```
document = window.document
```

- 进行变量存储，方便快速调用
- 也可以防止变量后期被外部修改后调用错误

### docElem

```
docElem = document.documentElement
```

- 进行变量存储，方便快速调用
- 返回html dom中的root 节点 即html标签
- 也可以防止变量后期被外部修改后调用错误

### _jQuery

```
_jQuery = window.jQuery
```

* 防冲突

### _$

```
_$ = window.
```

* 很多库都可能会用 $
* 防冲突

:::tip

**jQuery初始化时，把可能存在的window.jQuery和window.刀乐备份到局部变量_jQuery和_$。**

:::

### class2type

```
class2type = {}
```

* 类型判断会用到

* `[Object String]:'string'`

### core_deletedIds

* 这里指定为一个空数组
* 数组和缓存变量有关

### core_version

* 当前版本号

### core_concat

```javascript
core_concat = core_deletedIds.concat
```

* 一些常用的方法，用局部变量的形式去存储，方便调用，下面几个都一样
* 将一个或多个字符串与原字符串连接合并，返回新的字符串

### core_push

```javascript
core_push = core_deletedIds.push,
```

* 尾部添加

### core_slice

```
core_slice = core_deletedIds.slice
```

- 从已有的数组中返回选定的元素:开始和结束

### core_indexOf 

```
core_indexOf = core_deletedIds.indexOf
```

- 下标

### core_toString

```
core_toString = class2type.toString
```

- 转为字符串

### core_hasOwn 

```
core_hasOwn = class2type.hasOwnProperty
```

- 用来判断某个对象是否含有指定的属性的

### core_trim

```
core_trim = core_version.trim,
```

- 首尾去空格

### core_pnum

* 数字匹配，包含正负数，科学计数，小数点等等

### core_rnotwhite

* 空格分割元素

### rquickExpr

* 前半部分匹配标签，后半部分匹配内容（#id形式）
* 防止XSS注入，通过location.hash

### rsingleTag

* 匹配一个独立的标签

### rmsPrefix

* 匹配ie的前缀ms

```
// 正常情况下，css样式，浏览器私有前缀规则转换
-webkit-margin-left : webkitMarginLeft
// 但是ie非常特殊
-ms-margin-left : MsMarginLeft
```

### rdashAlpha

* 找到横杠-然后字符，转为大写，必须-ms再转为Ms，带数字也转化，比如-2d，-3d等

### fcamelCase

* 注意函数中的参数 letter 对应的是 '([a-z]|[0-9])' 匹配的字母或数字，转换连字符为驼峰式

```javascript
fcamelCase = function( all, letter ) {
    // toUpperCase:把字符串转换为大写，返回一个新的字符串
	return letter.toUpperCase();
},
```

### completed

* DOM加载成功触发的方法
* 关键字：jQuery.ready()

```javascript
completed = function() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
};
```

### DOMContentLoaded

* 就是dom内容加载完毕
* 当文档中没有脚本时，浏览器解析完文档便能触发 DOMContentLoaded 事件
* 如果文档中包含脚本，则脚本会阻塞文档的解析，而脚本需要等位于脚本前面的css加载完才能执行。
* 在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。



* DOMContentLoaded兼容问题：

  * 支持DOMContentLoaded事件的，就使用DOMContentLoaded事件
  * **IE6、IE7不支持DOMContentLoaded**，但它支持onreadystatechange事件，该事件的目的是提供与文档或元素的加载状态有关的信息。
  * 更低的ie还有个特有的方法doScroll， 通过间隔调用：document.documentElement.doScroll("left");



  * 可以检测DOM是否加载完成。 当页面未加载完成时，该方法会报错，直到doScroll不再报错时，就代表DOM加载完成了。该方法更接近DOMContentLoaded的实现

### 渲染过程和渲染引擎

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/09/16/9186c979402ab65e800fea6596d6a197.png" />

* 渲染引擎工作原理

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/04/11/e10e11dc40cf8ccf80fbcf80ae31c121.png" />

* javascript会阻塞dom的解析
  * 当解析过程中遇到script标签的时候，便会停止解析过程，转而去处理脚本
  * 如果脚本是内联的，浏览器会先去执行这段内联的脚本
  * 如果是外链的，那么先会去加载脚本，然后执行。在处理完脚本之后，浏览器便继续解析HTML文档。
* 现代的浏览器都使用了猜测预加载
  * 为了减缓渲染被阻塞的情况，当解析被阻塞的时候，浏览器会有一个轻量级的HTML（或CSS）扫描器（scanner）继续在文档中扫描，查找那些将来可能能够用到的资源文件的url，在渲染器使用它们之前将其下载下来。

:::tip

****我们为什么一再强调将css放在头部，将js文件放在尾部****

1. 是因为浏览器生成Dom树的时候是一行一行读HTML代码的，script标签放在最后面就不会影响前面的页面的渲染
2. 现代浏览器为了更好的用户体验,渲染引擎将尝试尽快在屏幕上显示的内容。它不会等到所有HTML解析之前开始构建和布局渲染树。部分的内容将被解析并显示。
3. 也就是说浏览器能够渲染不完整的dom树和cssom，尽快的减少白屏的时间。假如我们将js放在header，js将阻塞解析dom，dom的内容会影响到First Paint，导致First Paint延后。所以说我们会将js放在后面，以减少First Paint的时间，但是不会减少DOMContentLoaded被触发的时间。
4. 老版本的浏览器：
   1. Dom树完全生成好后页面才能渲染出来
   2. 浏览器又必须读完全部HTML才能生成完整的Dom树
   3. script标签不放在body底部也一样，因为dom树的生成需要整个文档解析完毕
   4. 但是这样会阻塞线程，现代浏览器基本不是这个流程了

:::

### load

* 页面上所有的资源（图片，音频，视频等）被加载以后才会触发load事件
* 简单来说，页面的load事件会在DOMContentLoaded被触发之后才触发
* onload事件所有的浏览器都支持：window.load=function(){}
* 我们在 jQuery 中经常使用的 (document).ready(function() { // ...代码... }); 其实监听的就是 DOMContentLoaded 事件
* 而(document).load(function() { // ...代码... }); 监听的是 load 事件。
* 在用jquery的时候，我们一般都会将函数调用写在ready方法内，就是页面被解析后，我们就可以访问整个页面的所有dom元素，可以缩短页面的可交互时间，提高整个页面的体验

### addEventListener

* 用于向指定元素添加事件句柄
* **使用  removeEventListener()  方法来移除 addEventListener() 方法添加的事件句柄**

```javascript
// 为 <button> 元素添加点击事件。 当用户点击按钮时，在 id="demo" 的 <p> 元素上输出 "Hello World" :
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});
```

:::tip

**Internet Explorer 8 及更早IE版本不支持 addEventListener() 方法**

Opera 7.0 及 Opera 更早版本也不支持。 

**对于这些不支持该函数的浏览器，你可以使用 **attachEvent()** 方法来添加事件句柄**

:::

```javascript
var x = document.getElementById("myBtn");
if (x.addEventListener) {                    //所有主流浏览器，除了 IE 8 及更早 IE版本
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) {                  // IE 8 及更早 IE 版本
    x.attachEvent("onclick", myFunction);
}
```

| 参数         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| *event*      | 必须。字符串，指定事件名。  <br />**注意:** 不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。  <br /> **提示：** 所有 HTML DOM 事件，可以查看菜鸟教程完整的 [HTML DOM Event 对象参考手册](http://www.runoob.com/jsref/dom-obj-event.html)。 |
| *function*   | 必须。指定要事件触发时执行的函数。  <br />当事件对象会作为第一个参数传入函数。 事件对象的类型取决于特定的事件。例如， "click" 事件属于 MouseEvent(鼠标事件) 对象。 |
| *useCapture* | 可选。布尔值，指定事件是否在捕获或冒泡阶段执行。  <br />可能值:<br />true 事件句柄在捕获阶段执行<br />false- 默认。事件句柄在冒泡阶段执行 |

* 您可以通过函数名来引用外部函数。
* 您可以在文档中添加许多事件，添加的事件不会覆盖已存在的事件
* 您可以在同一个元素中添加不同类型的事件
* 当传递参数值时，使用"匿名函数"调用带参数的函数

```javascript
// 添加两个点击事件，不会覆盖
document.getElementById("myBtn").addEventListener("click", myFunction);
document.getElementById("myBtn").addEventListener("click", someOtherFunction);

// 添加多个不同事件
document.getElementById("myBtn").addEventListener("mouseover", myFunction);
document.getElementById("myBtn").addEventListener("click", someOtherFunction);
document.getElementById("myBtn").addEventListener("mouseout", someOtherFunction);

// 使用"匿名函数"调用带参数的函数
document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(p1, p2);
});

// this访问元素
document.getElementById("myBtn").addEventListener("click", function(){
    this.style.backgroundColor = "red";
});

// 添加 <div> 事件句柄 
document.getElementById("myDIV").addEventListener("mousemove", myFunction);

// 移除 <div> 事件句柄 
document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
```

### removeEventListener

```javascript
// 语法
element.removeEventListener(event, function, useCapture)

// 移除 <div> 元素的事件句柄
document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
```

* 如果要移除事件句柄，addEventListener() 的执行函数必须使用外部函数
* **匿名函数，类似 "document.removeEventListener("*event*", function(){ *myScript* });" 该事件是无法移除的**。

:::tip

**Internet Explorer 8 及更早IE版本不支持 removeEventListener() 方法**，Opera 7.0 及 Opera 更早版本也不支持。

 对于这些不支持该函数的浏览器，你可以使用 **detachEvent()** 方法来移除由 attachEvent() 方法添加的事件句柄 

**这个也可能是jquery2.0.3不支持IE678的原因**

**文章最顶部有IE678关于jQuery兼容写法**

:::

| 参数         | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| *event*      | 必须。要移除的事件名称。<br />**注意:**不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。   <br />**提示:** 所有 HTML DOM 事件，可以查看菜鸟教程完整的 [HTML DOM Event 对象参考手册](http://www.runoob.com/jsref/dom_obj_event.asp)。 |
| *function*   | 必须。指定要移除的函数。                                     |
| *useCapture* | 可选。布尔值，指定移除事件句柄的阶段。 <br /> 可能值：<br />true - 在捕获阶段移除事件句柄<br />false- 默认。在冒泡阶段移除事件句柄<br />**注意:** 如果添加两次事件句柄，一次在捕获阶段，一次在冒泡阶段，你必须单独移除该事件。 |

```javascript
var x = document.getElementById("myDIV");
if (x.removeEventListener) {                   // // 所有浏览器，除了 IE 8 及更早IE版本
    x.removeEventListener("mousemove", myFunction);
} else if (x.detachEvent) {                   // IE 8 及更早IE版本
    x.detachEvent("onmousemove", myFunction);
}
```

## 给jQuery添加方法和属性（96行-283行）

- 其中最重要的一个init方法

### 原型问题

```javascript
jQuery.fn = jQuery.prototype = {
    // 原型对象
    constructor: jQuery,//指回来
}
```

- 对象引用，jQuery原型给了jQuery.fn
- 给原型对象新添加实例属性和方法

### jquery

- 添加jQuery版本

```javascript
jquery: core_version,
```

### constructor 

- 修正this指向问题
- 因为新的对象覆盖了原来的原型对象，需要修正

```javascript
constructor: jQuery,
```

### exec

* exec() 方法用于检索字符串中的正则表达式的匹配
* 返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
* 此数组的第 0 个元素是与正则表达式相匹配的文本
* 第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话）
* 

### init (重要)

- 初始化和参数管理
- init其实是真正的构造函数
- selector类型很多，判断处理：
  - 不合法处理，空，null，undefined，false等，直接返回this
  - 判断字符串：
    - 代码作用：
      - 字符串可以选择元素
      - 还可以创建元素
    - 判断是不是标签，创建元素：
      - 判断左边第一个字符是不是<
      - 判断最后一个字符是不是>
      - 在判断长度是不是大于等于3
    - 判断是不是选择元素
  - 判断DOM元素：nodeType
  - $()传递的函数形式：isFunction
  - 传递数组或者json形式
- 判断是否是字符串，字符串的处理：

```javascript
if(){
	单标签：match = [null,'<li>',null]
	多个：match = [null,'<li>11</li><li>22</li>',null]
}
else {
    正则匹配，匹配情况1.id元素，或者是标签开头的<li>xxx，但是别的.box div.box等复杂情况匹配不到，就会返回null(空)
    
    match = null // $('.box')$('div')$('#div div.box')$('')
    match != null // $('#div1')$('<li>xxx')
    // 示例：
    match = ['#div1',null,'div1'] // $('#div1')
    match = ['<li>xxx','<li>',null] // $('<li>xxx')  //这句是后面写不写文章都不会被创建的原因，因为正则匹配的问题
}

// 能进入if的标签和id
if(match && (match[1] || !context)) {
    if(match[1]) {
        // 标签的情况
        //1. 首先context上下文需要是元生的document对象
        //2. jQuery.parseHTML方法:用于将HTML字符串解析为对应的DOM节点数组，返回一个数组
        // 方法详细解析说明，后面部分有
        $.parseHTML( htmlString [, context ] [, keepScripts ] )
        htmlString(String类型):需要解析并转为DOM节点数组的HTML字符串
        context(Element类型):指定在哪个Document中创建元素，默认为当前文档的document
        keepScripts(Boolean类型):指定传入的HTML字符串中是否包含脚本，默认为false

        // merge：合并两个数组内容到第一个数组，在jQuery内部是可以合并特殊的json的

        // 处理创建标签，并且添加属性的形式,其中属性是json形式：$('<div>',{title:'hello',html:'1234'})
        // rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        // 1. 匹配单标签：<li>或者<li></li>其余都不可以,必须是单个标签，2个li就不行了
        // 2. 必须是一个对象字面量，也就是后面必须是json的形式才可以创建
        if(){
           // 对json进行for in 循环
           // 如果jQuery有这个方法，就调用这个方法
           // 如果么有这个方法，就添加这个属性attr
        }
         else {
           // id的情况
           // 根据id获取元素
           // 判断元素是否存在，存在就拼接json
           this.length =1
           this[0] = 元素
           this.context = document
           this.selector = selector
           return this
        }
     }
 }
 
 // 更复杂的情况，就是调用find方法进行
 // $(document).find('ul li.box') 其实find内部调用的就是sizzle这个选择器引擎
```

- 判断DOM元素
  - 判断是否有nodeType即可
  - 这个其实就是DOM对象转jQuery对象
- 判断是不是函数
  - jQuery.isFunction，一般都是为了入口函数 ready
  - $(function(){}):简写的形式，其实本质调用的还是ready方法
- 处理特殊情况：$(里面还是一个jquery对象)
- 处理一个json或者数组之类的情况
- makeArray
  - 将一个类似数组的对象转换为真正的数组对象
  - 类数组对象具有许多数组的属性(例如length属性，[]数组访问运算符等)，不过它毕竟不是数组，缺少从数组的原型对象上继承下来的内置方法(例如：pop()、reverse()等)
  - 在jQuery内部其实是可以传第二个参数的，那么这个时候，就是转为我们想要的json对象的形式

```javascript
$(function () { 
	var elems = document.getElementsByTagName("div"); // 返回一个节点列表
	var arr = jQuery.makeArray(elems);
	arr.reverse(); //对列表的元素使用一个数组方法
	$(arr).appendTo(document.body);
})
```

### selector 

- 存储选择字符串

### length

- this对象的长度

### toAttay()

- 转原生数组

### get()

- 不穿参数：转原生DOM元素的集合，数组
- 传递参数：获取某个DOM元素

### pushStack()

- JQ对象的入栈
- 栈：
  - 先进后出
  - 后进先出
- prevObject：保存之前的对象，在链式编程end()方法（回溯到上一个对象）中会用得到

### each()

- 遍历集合
- 最终调用的其实是jQuery工具下面的each方法

### ready()

- DOM加载的接口
- 最终调用的其实是jQuery工具下面的ready方法

### slice()

- 集合的截取
- 最终调用的是入栈方法pushStack()

### first()

- 集合的第一项
- 其实调用的就是eq方法eq(0)

### last()

- 集合的最后一项
- 其实调用的就是eq方法eq(-1)

### eq() 

- 找到集合当中指定的某一项
- 参数可以是负数

## jQuery的继承方法（285行-347行）

- jQuery.extend = jQuery.fn.extend = function() { }
- 更容易进行后期的扩展

## jQuery的扩展工具方法（349行-817行）

### jQuery.extend({ })

### 方法列表

* 版本控制、DOM加载完成事件、js类型判断、脚步解析、数组操作、权限控制、时间和其他工具方法

```javascript
jQuery.extend({
    expando: '字符串', 
    noConflict: '方法',
    isReady: false,
    readyWait: 1,
    holdReady: '方法',
    ready: '方法',
    isFunction: '方法',
    isArray: '方法',
    isWindow: '方法',
    isNumeric: '方法',
    type: '方法',
    isPlainObject: '方法',
    isEmptyObject: '方法',
    error: '方法',
    parseHTML: '方法',
    parseJSON: '方法',
    parseXML: '方法',
    noop: '方法',
    globalEval: '方法',
    camelCase: '方法',
    nodeName: '方法',
    each: '方法',
    trim: '方法',
    makeArray: '方法',
    inArray: '方法',
    merge: '方法',
    grep: '方法',
    map: '方法',
    guid: 1,
    proxy: '方法',
    access: '方法',
    now: '方法',
    swap: '方法'
});
```

### 静态（扩展）方法

* jQuery.extend()

- 属于类的方法，即类可以直接调用的方法。
- 为类所有实例化对象所共用（但不能用实例对象之间调用），所以静态成员只在内存中占一块区域

### 实例方法

* jQuery.fn.extend()

- 属于实例化类后对象的方法，即实例对象调用的方法。
- 每创建一个类的实例，都会在内存中为非静态成员分配一块存储；

### 区别

- jQuery.extend()：
  - 是扩展的jQuery这个类，静态方法，跟类（jquery有关），和实例无关
- jQuery.fn.extend()：
  - jQuery.fn=jQuery.prototype
  - jQuery.fn.extend拓展的是jQuery对象（原型的）的方法
  - jQuery.fn.extend拓展的方法，你得用在jQuery对象上面才行

```js
// 只能jquery对象才能调用，需要用对象去调用
$().css()
$().html()

// 前面$其实是一个函数
// 既可以给jquery对象来用，也可以给原生的js来用
$.trim()
$.proxy()
```

### expando

* 唯一性
* core_version 为jQuery的版本号。
* \D的意思是：不是数字的，就选中。
* 因此expando就是jQuery+一段整数。
* 数据缓存，ajax，事件机制都用到了这个。

### noConflict()

* 处理冲突，因为有些库可能会用到$甚至jQuery
* 其他一些 JavaScript 框架包括：MooTools、Backbone、Sammy、Cappuccino、Knockout、JavaScript MVC、Google Web Toolkit、Google Closure、Ember、Batman 以及 Ext JS。
* noConflict() 方法会释放会 $ 标识符的控制，这样其他脚本就可以使用它了
* 我们可以调用jq = $.onConflict(true);这时jq就可以当做jQuery了,并且其他库可以使用jQuery的到乐标识符了

```javascript
noConflict: function( deep ) {
    // 如果window.$ === jQuery，则设置window.$为初始化时备份的_$。也就是说，只有在当前jQuery库持有全局变量$的情况下，才会释放$的控制权给前一个JavaScript库
    if ( window.$ === jQuery ) {
        window.$ = _$;
    }
	// 如果参数deep为true，并且window.jQuery === jQuery，则设置window.jQuery为初始化时备份的_jQuery。
    // 如果参数deep为true，只有在当前jQuery库持有全局变量jQuery的情况下，才会释放jQuery的控制权给前一个JavaScript库。
    if ( deep && window.jQuery === jQuery ) {
        window.jQuery = _jQuery;
    }

    return jQuery;
},
```

### isReady

* DOM准备好了吗？一旦发生，就设置为真

### readyWait

* 一个计数器，用于跟踪准备好的事件发生之前等待多少项目
* 要加载多个文件时（a.js,b.js），就要每次都++

### holdReady()

* 用于暂停或恢复.ready() 事件的执行
  * 恢复执行一次，减少一次jQuery.readyWait，直到它为0
* 该方法必须在文档靠前部分被调用，例如，在头部加载完 jQuery 脚本之后，立刻调用该方法。如果在 ready 事件已经被调用后再调用该方法，将不会起作用。 
* 首先调用`$.holdReady(true)`[调用后 ready 事件将被锁定]。当准备好执行 ready 事件时，调用$.holdReady(false)。
* 可以对 ready 事件添加多个锁定，每个锁定对应一次$.holdReady(false)[解锁]调用。
* ready 事件将在所有的锁定都被解除，并且页面也已经准备好的情况下被触发。

### ready()

* 当 DOM（文档对象模型） 已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件
* ready() 函数仅能用于当前文档，因此无需选择器
* 三种写法

```
$(document).ready(function)

$().ready(function)

$(function)
```

:::tip

**ready() 函数不应与 body的onload=""一起使用**

:::

### isFunction()

* 判断是否是function
* **在低版本IE浏览器下typeof alert   返回object,而不是function**
* **这个方法的实现依赖于方法jQuery.type( obj )，通过判断 jQuery.type( obj )返回值是否是 function 来实现**

### isArray

* isArray = Array.isArray

* 不兼容IE8以及以下版本

### isWindow()

```javascript
isWindow: function( obj ) {
	return obj != null && obj === obj.window;
},
```

* 判断是不是window

* false == null 结果是  false
* true == null 结果 false
* 只有null和undefined才等于null，而只有这两个变量没有属性。其他的像字符串有包装对象，可以有属性。
* window有两种意思：
  * 全局对象
  * 浏览器窗口。
  * 而只有window才有window属性，因此只有window才会返回true
  * window.window表示全局对象中的浏览器窗口。

### isNumeric()

* 先判断参数是否能转成数字，不可以就是NaN，那么isNaN就会返回true
* 如果是数字，但是必须是有限数，不然也不是number类型

```javascript
isNumeric: function( obj ) {
	return !isNaN( parseFloat(obj) ) && isFinite( obj );
},
```

* 先执行parseFloat( obj )尝试把参数obj解析为数字
* 然后用isNaN()判断解析结果是否是合法数字，并用isFinite()判断参数obj是否是有限的。
* 如果parseFloat( obj )的解析结果是合法数字，并且参数obj是有限数字，则返回true；否则返回false。
* 方法parseFloat( string )用于对字符串参数进行解析，并返回字符串中的第一个数字。
  * 在解析过程中，如果遇到了不是有效数字的字符，解析就会停止并返回解析结果；
  * 如果字符串没有以一个有效的数字开头，则返回NaN；
  * 如果传入的参数是对象，则自动调用该对象的方法toString()，得到该对象的字符串表示，然后再执行解析过程
* 方法isNaN( x )用于判断参数是否为非数字值，常用于检测方法parseFloat()和parseInt()的解析结果。
* 方法isFinite( number )用于判断一个数字是否是有限的。

### type()

* 确定JavaScript内置对象的类型
* 返回小写形式的类型名称
* 如果对象是undefined或null，则返回相应的"undefined"或"null"

```javascript
type: function( obj ) {
    if ( obj == null ) {
    	return String( obj );
    }
    // Support: Safari <= 5.1 (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function" ?
    	class2type[ core_toString.call(obj) ] || "object" :
    	typeof obj;
},
```

* 如果参数obj是undefined或null，通过String( obj )转换为对应的原始字符串“undefined”或“null”
* 如果参数是JavaScript内部对象，则返回对应的字符串名称；其他情况一律返回“object”。
  * 先借用Object的原型方法toString()获取obj的字符串表示，返回值的形式为[object class]，其中的class是内部对象类，
  * 例如，Object.prototype.toString.call( true )会返回[object Boolean]；
  * 然后从对象class2type中取出[object class]对应的小写字符串并返回；如果未取到则一律返回“object”。
* 对象class2type初始化后的结构为：

```javascript
{
   "[object Array]": "array"
   "[object Boolean]": "boolean"
   "[object Date]": "date"
   "[object Function]": "function"
   "[object Number]": "number"
   "[object Object]": "object"
   "[object RegExp]": "regexp"
   "[object String]": "string"
}
```

```javascript
$.type( undefined ) === "undefined"

$.type() === "undefined"

$.type( window.notDefined ) === "undefined"

$.type( null ) === "null"
```

* 如果对象有一个内部属性[[Class]]和一个浏览器的内置对象的 [[Class]] 相同，我们返回相应的 [[Class]] 名字

```javascript
$.type( true ) === "boolean"

$.type( 3 ) === "number"

$.type( "test" ) === "string"

$.type( function(){} ) === "function"

$.type( [] ) === "array"

$.type( new Date() ) === "date"

$.type( new Error() ) === "error" // jQuery 1.9 新增支持

$.type( /test/ ) === "regexp"
```

### isPlainObject()

* 判断指定参数是否是一个纯粹的对象
* 即是否是用对象直接量{}或new Object()创建的对象

```javascript
isPlainObject: function( obj ) {
    	
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}
    
		try {
			if ( obj.constructor &&
					!core_hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {
			return false;
		}

		return true;
	},
```

* 如果参数obj满足以下条件之一，则返回false
  * Object.prototype.toString.call( obj )返回的不是[object Object]
  * 参数obj是DOM元素
  * 参数obj是window对象
  * 如果参数obj不满足以上所有条件，则至少可以确定参数obj是对象

* 检查对象obj是否由构造函数Object()创建。如果对象obj满足以下所有条件，则认为不是由构造函数Object()创建，而是由自定义构造函数创建，返回false
  * 对象obj含有属性constructor。
    * 由构造函数创建的对象都有一个constructor属性，默认引用了该对象的构造函数。如果对象obj没有属性constructor，则说明该对象必然是通过对象字面量{}创建的。
  * 对象obj的属性constructor是非继承属性。
    * 默认情况下，属性constructor继承自构造函数的原型对象。如果属性constructor是非继承属性，说明该属性已经在自定义构造函数中被覆盖。
  * 对象obj的原型对象中没有属性isPrototypeOf。
    * 属性isPrototypeOf是Object原型对象的特有属性，如果对象obj的原型对象中没有，说明不是由构造函数Object()创建，而是由自定义构造函数创建。
  * 函数hasOwn()指向Object.prototype.hasOwnProperty( property )，用于检查对象是否含有执行名称的非继承属性

:::tip

**在IE 8/9中，在某些浏览器对象上执行以上检测时会抛出异常，也应该返回false。**

:::

### isEmptyObject

* isEmptyObject() 函数用于检查对象是否为空（不包含任何属性）

```javascript
isEmptyObject: function( obj ) {
	var name;
	for ( name in obj ) {
		return false;
	}
	return true;
},
```

* for-in 循环遍历，如果有属性，就返回false，没有就是true

### err()

* 接受一个字符串，抛出一个包含了该字符串的异常。
* 开发插件时可以覆盖这个方法，用来显示更有用或更多的错误提示消息

### parseHTML()

* 将HTML字符串解析为对应的DOM节点数组

```javascript
parseHTML: function( data, context, keepScripts ) {
    
    // 对于非法参数一律返回null。如果参数data不是字符串，或者可以转换为false，则返回null。
    if ( !data || typeof data !== "string" ) {
        return null;
    }
    
    // 只有两个参数的时候，第二个就是是否保存script标签，这时候context就没有传进来!
    if ( typeof context === "boolean" ) {
        keepScripts = context;
        context = false;
    }
    // 如果只有两个参数那么context就是document对象!
    context = context || document;

    // 如果不是单个标签那么parsed就是null,所谓的单个标签就是<div/>或者<div></div>但是<div>hello</div>不满足!
    var parsed = rsingleTag.exec( data ),
        // 如果keepScripts是false，那么scripts就是
        scripts = !keepScripts && [];

    // Single tag
    if ( parsed ) {
        // 如果是单个标签就调用相应的createElement方法，默认上下文是document!
        return [ context.createElement( parsed[1] ) ];
    }
	// 如果不是单个标签就调用buildFragment方法，把html字符串传入，同时上下文也传入，第三个参数就是scripts!
    // 如果paseHTML的第三个参数是false，那么这里的scripts就是一个数组，传递到buildFragment中会把所有的script标签放在里面
	//所以就要收到移除!
    parsed = jQuery.buildFragment( [ data ], context, scripts );

    if ( scripts ) {
        jQuery( scripts ).remove();
    }
	// buildFragment返回的是文档碎片，所以要变成数组，调用merge方法
    return jQuery.merge( [], parsed.childNodes );
},

```

* 如果没有指定context参数，或该参数为null或undefined，则默认为当前document。如果创建的DOM元素用于另一个文档，例如iframe，则应该指定该iframe的document对象

| 参数        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| data        | String类型 需要解析并转为DOM节点数组的HTML字符串             |
| context     | Element类型 指定在哪个Document中创建元素，默认为当前文档的document |
| keepScripts | Boolean类型 指定传入的HTML字符串中是否包含脚本，默认为false  |

:::tip

大多数jQuery API都允许HTML字符串在HTML中包含运行脚本。 

jQuery.parseHTML()不会运行解析的HTML中的脚本，除非你明确将参数keepScripts指定为true。 

不过，大多数环境仍然可以间接地执行脚本

例如：通过属性。调用者应该避免 这样做，并清理或转义诸如URL、cookie等来源的任何不受信任的输入，从而预防出现这种情况。

 出于未来的兼容性考虑，当参数keepScripts被省略或为false时，调用者应该不依赖任何运行脚 本内容的能力。

:::

### parseJSON()

* 转为json，目前用的是JSON.parse

### parseXML()

* 将字符串解析为对应的XML文档
* 该函数将使用浏览器内置的解析函数来创建一个有效的XML文档，该文档可以传入jQuery()函数来创建一个典型的jQuery对象，从而对其进行遍历或其他操作

```javascript
parseXML: function( data ) {
    var xml, tmp;
    // 对于非法参数一律返回null。如果参数data不是字符串，或者可以转换为false，则返回null
    if ( !data || typeof data !== "string" ) {
        return null;
    }

    // Support: IE9
    // 尝试用标准解析器DOMParser解析
    // 在IE 9+中，如果解析失败，则会抛出异常。如果抛出异常，在catch块中设置xml为undefined，然后抛出一个更易读的异常
    try {
        tmp = new DOMParser();
        xml = tmp.parseFromString( data , "text/xml" );
    } catch ( e ) {
        xml = undefined;
    }
	// 判断解析是否失败
    if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
        jQuery.error( "Invalid XML: " + data );
    }
    return xml;
},
```

* DOMParser在HTML5中标准化，可以将XML或HTML字符串解析为一个DOM文档。
  * 解析时，首先要创建一个DOMParser对象
  * 然后使用它的方法parseFromString()来解析XML或HTML字符串。
  * DOMParser.parseFromString( DOMString str, SupportedType type )
    * 参数str：待解析的 XML 或 HTML 字符串
    * 参数type：支持的类型
      * "text/html"
      * "text/xml"
      * "application/xml"
      * "application/xhtml+xml"
      * "image/svg+xml"
    * 返回一个解析后的新创建的文档对象

* 如果解析失败，则抛出一个更易读的异常。如果满足以下条件之一，则认为解析失败：
  * 在IE 9+中，通过标准XML解析器DOMParser解析失败，此时!xml为true
  * 在其他浏览器中，通过标准XML解析器DOMParser解析失败，此时xml.getElementsByTagName("parsererror").length可以转换为true。
* 如果解析成功，则返回解析结果

### noop()

* 一个空函数
* **此方法不接受任何参数**
* 当某些时候你需要传入函数参数，而且希望它什么也不做的时候，你可以使用该函数，也无需再新建一个空的函数
* 比如当插件提供了一个可选的回调函数接口，那么如果调用的时候没有传递这个回调函数，就用$.noop来代替执行。

### globalEval()

* **将变量转为全局变量**
* 实际就是全局的eval()函数，并且做了兼容处理
* eval()函数
  * eval()函数执行一段JavaScript代码字符串，只有**直接**使用eval()本身，会在当前作用域中执行代码，否则相当于在全局作用域中执行代码。
    * 直接使用eval()本身，相当于在当前作用域执行代码
    * 通过**window.eval**()，代码将在**全局作用域**执行
    * 将eval赋值给其他变量，**间接使用**，代码将在**全局作用域**执行
    * eval()函数在严格模式下：
      * eval中的代码不能创建eval所在作用域下的变量、函数。
      * 而是为eval单独创建一个作用域，即严格模式创设了第三种作用域：**eval作用域**，并在eval返回时丢弃
      * 严格模式下，间接使用：没有eval作用域，仍是**全局作用域**执行
      * 在严格模式下，通过window调用，没有eval作用域

:::tip

**严格模式只对直接使用eval()有效，对间接使用的eval()无效**

**jQuery中的工具方法globalEval()，无论在什么条件下，都在全局作用域中执行代码**

**其实就是：将变量转为全局变量**

:::

```javascript
// Evaluates a script in a global context
globalEval: function( code ) {
    var script,
        indirect = eval;
    // eval既是关键字，又是window下的属性。直接写eval(code)，浏览器会当做js关键字使用，出错。所以赋值一下，就会把eval当做window的属性

    //code必须为字符串形式
    code = jQuery.trim( code );

    if ( code ) {
        // 严格模式下，不能使用eval
        if ( code.indexOf("use strict") === 1 ) {
            script = document.createElement("script");
            script.text = code;
            document.head.appendChild( script ).parentNode.removeChild( script );
        } else {
            // Otherwise, avoid the DOM node creation, insertion
            // and removal by using an indirect global eval
            indirect( code );
        }
    }
},
```

### camelCase()

* 转换连字符式的字符串为驼峰式
* 用于CSS模块和数据缓存模块
* Camel-Case：骆驼命名法

```javascript
rmsPrefix = /^-ms-/,
rdashAlpha = /-([\da-z])/gi,
// fcamelCase:把字符串转换为大写，返回一个新的字符串
camelCase: function( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
},
```

* 正则rdashAlpha用于匹配字符串中连字符“-”和其后的第一个字母或数字。
* 如果连字符“-”后是字母，则匹配部分会被替换为对应的大写字母；如果连字符“-”后是数字，则会删掉连字符“-”，保留数字。

* 正则rmsPrefix用于匹配字符串中前缀“-ms-”，匹配部分会被替换为“ms-”。
* 这么做是因为在IE中，连字符式的样式名前缀“-ms-”对应小写的“ms”，而不是驼峰式的“Ms”。
* 例如，“-ms-transform”对应“msTransform”而不是“MsTransform”。在IE以外的浏览器中，连字符式的样式名则可以正确地转换为驼峰式，例如，“-moz-transform”对应“MozTransform”。

### nodeName()

* 用于检查DOM元素的节点名称（即属性nodeName）与指定的值是否相等
* 检查时忽略大小写

```javascript
nodeName: function( elem, name ) {
	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
},
```

* 前先检查elem.nodeName是否存在，可以防止传递进来的不是DOM元素，或者元素没有nodeName引起的报错问题
* 把属性elem.nodeName和参数name都转换为大写再做比较，也就是忽略大小写比较
  * DOM元素的属性nodeName返回该元素的节点名称
  * 对于HTML文档，始终返回其大写形式
  * 对于XML文档，因为**XML文档区分大小写**，所以返回值与源代码中的形式一致。

### each()

* jQuery的工具方法，其实就是静态方法，本方法是$.each()
  * 注意jquery的`$().each`,`$.each`的区别
  * `$().each`
    * 该方法用于遍历jQuery对象
    * 本质调用的是`$.each`
    * each() 方法规定为每个匹配元素规定运行的函数。
    * 回调函数中的this不是jQuery对象 而是Dom对象
  * `$.each`
    * 该方法用于遍历任何集合，包括数组和对象
    * 对于jQuery对象，只是把each方法简单的进行了委托
      * 把jQuery对象作为第一个参数传递给jQuery的each方法
      * 也就是jQuery提供的each方法是对参数一提供的对象的中所有的子元素逐一进行方法调用
    * jQuery里的each方法是通过js里的call方法来实现的
      * call：改变上下文this指针

```javascript
each: function( obj, callback, args ) {
    var value,
        i = 0,
        length = obj.length,
        // 是否是类数组或数组，json（不包括jQuery这种对象形式）返回false
        isArray = isArraylike( obj );

    if ( args ) { //jQuery内部使用
        if ( isArray ) { // 如果是类数组
            for ( ; i < length; i++ ) {
                value = callback.apply( obj[ i ], args );

                if ( value === false ) {
                    break;
                }
            }
        } else {
            for ( i in obj ) {
                value = callback.apply( obj[ i ], args );

                if ( value === false ) {
                    break;
                }
            }
        }

        // A special, fast, case for the most common use of each
    } else { // 我们在外面调用时，执行的代码
        if ( isArray ) { // 如果是类数组
            for ( ; i < length; i++ ) {
                value = callback.call( obj[ i ], i, obj[ i ] );
				// 回调方法返回false就停止循环
                if ( value === false ) {
                    break;
                }
            }
        } else {
            for ( i in obj ) {	// //如果是json对象
                value = callback.call( obj[ i ], i, obj[ i ] );

                if ( value === false ) {
                    break;
                }
            }
        }
    }

    return obj;
},
```

* 第三个参数args用于内部调用
* 此方法就是来遍历数组的，然后取数组中的值进行显示。
* 不能改变原数组arr，跟map一样，但是map返回新数组，而each返回原数组。
* 这里跟原生的forEach和map的回调方法参数不一样，原生的回调方法中，第三个参数是原数组，可以在回调方法中改变原数组的值。但jQuery的回调方法，不会传第三个参数。

### trim()

* 用于去除字符串两端的空白字符
* $.trim()函数会移除字符串开始和末尾处的所有换行符，空格(包括连续的空格)和制表符。如果这些空白字符在字符串中间时，它们将被保留，不会被移除。

```javascript
core_version = "2.0.3",
core_trim = core_version.trim,
trim: function( text ) {
	return text == null ? "" : core_trim.call( text );
},
```

* core_version是字符串
* core_trim：是字符串的trim方法

### makeArray()

* 将一个类似数组的对象转换为真正的数组对象
* 类数组对象具有许多数组的属性(例如length属性，[]数组访问运算符等)，不过它毕竟不是数组，缺少从数组的原型对象上继承下来的内置方法(例如：pop()、reverse()等)。

```javascript
// results is for internal usage only
// 第二个参数是给内部用的
makeArray: function( arr, results ) {
    // 如果传入了results，就给ret，如果么有就付给一个新建的数组
    var ret = results || [];
	// 过滤参数array是null、undefined的情况
    if ( arr != null ) {
        // isArrayLike 判断是否为数组，类数组
        // 后面有isArrayLike分析
        if ( isArraylike( Object(arr) ) ) {
            // 调用方法jQuery.merge()把该参数合并到返回值ret中。
            // 如果arr为数字6789，这里会返回false，因为number不是类数组。
            // 但是如果是字符串"hello"，Object会把它转成具有length的json对象，所以就返回true。
            // 因为字符串是有length属性的。
            jQuery.merge( ret,
                         typeof arr === "string" ?
                         [ arr ] : arr
                        );
        } else {
            // 插入元素时执行的是push.call( ret,array )，而不是ret.push( array )
            // 这是因为返回值ret不一定是真正的数组。
            // 如果只传入参数array，则返回值ret是真正的数组；
            // 如果还传入了第二个参数result，则返回值ret的类型取决于该参数的类型
            core_push.call( ret, arr );
        }
    }
	// 返回ret
    return ret;
},
```

### inArray()

* 元素是否在arr数组中，从i位置开始找
* 找到就返回其下标，未找到则返回-1。

```javascript
inArray: function( elem, arr, i ) {
	return arr == null ? -1 : core_indexOf.call( arr, elem, i );
},
```

### merge()

* 合并两个数组内容到第一个数组

```javascript
merge: function( first, second ) {
    var l = second.length,
        i = first.length,
        j = 0;

    // 如果参数second的属性length是数值类型，则把该参数当作数组处理，把其中的所有元素都添加到参数first中
    if ( typeof l === "number" ) {
        for ( ; j < l; j++ ) {
            first[ i++ ] = second[ j ];
        }
    } else {
        // 把该参数当作含有连续整型（或可以转换为整型）属性的对象，
        // 例如，{ 0:'a', 1:'b'}，把其中的非undefined元素逐个插入参数first中。
        while ( second[j] !== undefined ) {
            first[ i++ ] = second[ j++ ];
        }
    }
	// 修正first.length。因为参数first可能不是真正的数组，所以需要手动维护属性length的值。
    first.length = i;

    return first;
}
```

* 参数first：
  * 数组或类数组对象，必须含有整型（或可以转换为整型）属性length，
  * 第二个数组second中的元素会被合并到该参数中。
* 参数second：
  * 数组、类数组对象或任何含有连续整型属性的对象
  * 其中的元素会被合并到第一个参数first中。

### grep()

* 用指定的函数过滤数组中的元素，并返回过滤后的数组
* **源数组不会受到影响，过滤结果只反映在返回的结果数组中**

| 参数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| array    | Array类型 将被过滤的数组。                                   |
| function | Function类型 指定的过滤函数。<br />grep()方法为function提供了两个参数：<br />其一为当前迭代的数组元素，<br />其二是当前迭代元素在数组中的索引。 |
| invert   | 可选。 <br />Boolean类型 默认值为false，指定是否反转过滤结果。<br />如果参数invert为true，则结果数组将包含function返回false的所有元素。 |

```javascript
grep: function( elems, callback, inv ) {
    var retVal,
        ret = [],
        i = 0,
        length = elems.length;
    // 转换成true or false，不传的时候是undefined，就会变成fase
    inv = !!inv;

    // 遍历数组elems，为每个元素执行过滤函数。
    // 如果参数inv为true，把执行结果为false的元素放入结果数组ret；
    // 如果inv为false，则把执行结果为true的元素放入结果数组ret。
    for ( ; i < length; i++ ) {
        retVal = !!callback( elems[ i ], i );// 转换成true or false
        if ( inv !== retVal ) {
            ret.push( elems[ i ] );
        }
    }
	// 返回结果数组ret
    return ret;
},
```

* 如果参数invert未传入或是false，元素只有在过滤函数返回true，
* 或者返回值可以转换为true时，才会被保存在最终的结果数组中，即返回一个满足回调函数的元素数组；
* 如果参数invert是true，则情况正好相反，返回的是一个不满足回调函数的元素数组

### map()

* 用于使用指定函数处理数组中的每个元素(或对象的每个属性)，并将处理结果封装为新的数组返回

:::tip

* 在jQuery 1.6 之前，该函数只支持遍历数组；从 1.6 开始，该函数也支持遍历对象。 

* map()还会为函数传入两个参数：其一是当前迭代的元素或属性值，其二是当前迭代项的数组索引或对象属性名。 

* 该函数返回值将作为结果数组中的一个元素，如果返回值为null或undefined，则不会被添加到结果数组中。

:::

```javascript
// 支持普通json,数组，类数组，特殊json（jQuery对象形式）
// 第三个参数内部调用
map: function( elems, callback, arg ) {
    var value,
        i = 0,
        length = elems.length,
        isArray = isArraylike( elems ),// //数组和类数组都可以，jQuery对象形式也可以
        ret = [];

    if ( isArray ) {
        for ( ; i < length; i++ ) {
            value = callback( elems[ i ], i, arg );
			// //回调返回的值不是null或者undefined，就存入新数组中
            if ( value != null ) {
                ret[ ret.length ] = value;
            }
        }
    } 
    // 普通json就执行这里，比如：{name:"zhangsan",age:18}
    else {
        for ( i in elems ) {
            value = callback( elems[ i ], i, arg );

            if ( value != null ) {
                ret[ ret.length ] = value;
            }
        }
    }
	// core_deletedIds = [],
	// core_concat = core_deletedIds.concat,
    // 以防回调方法返回的是数组形式，那么就会出现复合数组，比如:ret = [[1],[2],[3]],通过concat([1],[2],[3])，合并，返回[1,2,3]
    return core_concat.apply( [], ret );
},
```

### guid

* 属性jQuery.guid是一个全局计数器，用于jQuery事件模块和缓存模块
* 在jQuery事件模块中，每个事件监听函数会被设置一个guid属性，用来唯一标识这个函数；
* 在缓存模块中，通过在DOM元素上附加一个唯一标识，来关联该元素和该元素对应的缓存。
* 属性jQuery.guid初始值为1，使用时自增1

```javascript
function show(){
	alert(this);
}， 
$("#input1").click(show)，
$("#input2").click(function(){$("#input1").off()})
```

* 这里的show方法是事件方法，所以通过off取消掉事件绑定，可以很容易找到事件方法show。
* 但是如果把 `$("#input1").click(show)`改成 `$("#input1").click($.proxy(show,window))`，这时show不是事件方法，而是普通方法，那么通过off取消的时候，它是怎么找到这个普通方法show的，其实就是通过guid，因为guid会累加，所以是唯一的，因此可以找到。

### proxy()

* 改变方法（函数）执行的this指向
* 方法proxy接受一个函数，返回一个新函数，新函数总是持有特定的上下文。

* proxy两种调用形式：
  * jQuery.proxy(  function, context )
    * 参数function是将被改变上下文的函数，参数context是上下文。
    * 指定参数function的上下文始终为参数content。
  * jQuery.proxy( context, name )
    * 参数name是参数context的属性。
    * 指定参数name对应的函数的上下文始终为参数context。

```javascript
proxy: function( fn, context ) {
    var tmp, args, proxy;
	// 修正参数fn和context。
    // 如果第二个参数是字符串，说明参数格式是jQuery.proxy( context, name )，修正为jQuery.proxy( fn, context )。
    if ( typeof context === "string" ) {
        tmp = fn[ context ];
        context = fn;
        fn = tmp;
    }
	// 如果参数fn不是函数，则返回undefined
    if ( !jQuery.isFunction( fn ) ) {
        return undefined;
    }
	// 收集多余参数
    // 说明：如果调用jQuery.proxy()时，除了传入参数fn、context之外，还传入了其他参数，那么在调用函数fn时，这些多余的参数将会优先传入。
    // 这里借用数组方法slice()来获取参数对象arguments中fn、context后的其他参数。
    // core_deletedIds = [],
    // core_slice = core_deletedIds.slice,
    args = core_slice.call( arguments, 2 );
    
    // 创建一个代理函数，在代理函数中调用原始函数fn，调用时通过方法apply()指定上下文。
    // 代理函数通过闭包机制引用context、args、slice
    proxy = function() {
        return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
    };
    
	// 为代理函数设置与原始函数相同的唯一标识guid。如果原始函数没有，则重新分配一个。
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

    return proxy;
},
```

:::tip

* 相同的唯一标识将代理函数和原始函数关联了起来。

* 例如，在jQuery事件系统中，如果为DOM元素绑定了事件监听函数的代理函数，当移除事件时，即使传入的是原始函数，jQuery也能通过唯一标识guid移除正确的函数。

:::

### access()

* 可以为集合中的元素设置一个或多个属性值，或者读取第一个元素的属性值。
* 如果设置的属性值是函数，并且参数exec是true时，还会执行函数并取其返回值作为属性值。

* 为.attr()、.prop()、.css()提供支持
* 这三个方法在调用jQuery.access()时，参数exec为true
* 参数fn是同时支持读取和设置属性的函数（例jQuery.attr()、jQuery.prop()）

:::tip

* 根据参数的个数和参数的类型不同，去区分

* `$().css(), ` 和`$().attr()`和`$().prop()`，通过参数的不同，实现get/set。
* `$("div").css("width")`，获得第一个div元素的width，`$("div").css("width",100)`设置所有的div元素的width。
* `$("div").css({width:100,height:200})`，也是设置所有的div元素，尽管只有一个参数，但是类型不一样。JQuery中有很多这种方法，所以统一用access实现。

:::

```javascript
access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
    // elems：元素集合，通常是jQuery对象，操作的元素，可能是一个集合
    // fn是一个回调函数（有区别的在回调函数中处理，比如，css设置样式，attr设置属性）
    // key和value就是属性名和属性值
    // chainable为true，设置，为false就获取, 是否可以链式调用，如果是get动作，为false，如果是set动作，为true
    // emptyGet：该参数一般是不给的，当没有元素时返回undefined, 如果jQuery没有选中到元素的返回值
    // raw : 字符串为真，函数为假
    var i = 0,
        length = elems.length,
        bulk = key == null;

   	// 如果参数key是对象，表示要设置多个属性，则遍历参数key，为每个属性递归调用方法jQuery.access()，遍历完后返回元素集合elems。
    // 处理这种类型$("div").css({width:100,height:200})
    if ( jQuery.type( key ) === "object" ) {
        chainable = true;
        for ( i in key ) {
            jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
        }
    } 
    // 如果参数value不是undefined，表示要设置单个属性，则遍历元素集合elems，为每个元素调用回调函数fn，遍历完后返回元素集合elems。如果参数exec为true，并且参数value是函数，则执行参数value，并取其返回值作为属性值。
    // 处理这种$("div").css("width",100)
    else if ( value !== undefined ) {
        chainable = true;// 表示可以链式调用
		// 如果value不是function，设置raw为true
        if ( !jQuery.isFunction( value ) ) {
            raw = true;
        }
		// 判断key值是否为null或者undefined，key若为空值
        if ( bulk ) {
            if ( raw ) { // 如果value是字符串（数字）
                fn.call( elems, value );// 调用回调方法
                fn = null;// 把回调方法赋为空
            }
            // 如果是函数，这里面的不用深入理解
            else { 
                bulk = fn;
                fn = function( elem, key, value ) {
                    return bulk.call( jQuery( elem ), value );
                };
            }
        }

        // 如果没有key值，并且value是字符串（数字），这里就为null,不会执行
        // 如果fn存在，掉调用每一个元素，无论key是否有值，都会走到这个判断，执行set动作
        if ( fn ) {
            for ( ; i < length; i++ ) {
                fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
            }
        }
    }

    return chainable ? // 如果chainable为true，说明是个set方法，就返回elems,否则说明是get方法
        elems : // //设置时，chainable为true，直接返回元素，进行后续的链式操作

    // 1.如果bulk是个true，说明没有key值，调用fn，将elems传进去
	// 2.如果bulk为false，说明key有值哦，然后判断元素的长度是否大于0
    // 2.1 如果大于0，调用fn，传入elems[0]和key，完成get
    // 2.2 如果为0，说明传参有问题，返回指定的空值emptyGet
    bulk ?
        fn.call( elems ) : 
    length ? fn( elems[0], key ) : emptyGet; // 有key值时，判断元素有没有元素，有的话就获取第一个元素的key值（属性名的值），没有元素的话，就返回emptyGet。
},
```

* 首先判断key值是不是一个object，如果是，遍历key，递归调用jQuery.access，并将是否可以链式调用的标志位设置为true
* 判断value值是否已经定义，如果已经定义，说明是个set操作
  * set操作的是可链式调用的
  * 如果value不是function，设置raw为true
  * 判断key值是否为null或者undefined，key若为空值
    * 如果value不是个函数，或者强制赋值raw为true，那么调用fn，可能是以下调用：$('#box').attr(null,{abc:'def',a:'1'})
    * 如果value是个函数，将fn包装之，改变原来fn的作用域和参数
  * 如果fn存在，遍历jQuery内部元素，分别执行set操作
* 首先判断是否为set方法，如果是，返回 elems，如果不是执行get操作（如果jQuery内部length为0，返回指定的默认空值）

### now()

* 当前时间距离1970年的毫秒数
* 相当于(new Date()).getTime()

 ### swap

* css交换（内部）
* 原生js无法获取display为none的属性值，而jQuery却可以获取，原因就是在内部使用了swap方法。

```javascript
<div id="div1" style="width:100px;height:100px;display:none;">ddd</div>　

$("#div1").get(0).offsetWidth取到的是0，因为它是display:none，不存在DOM树中。

$("#div1").width()取到的是100，为啥jQuery可以。因为jQuery会对display:none的元素进行处理，变成<div id="div1"style="width:100px;height:100px;display:block;visibility:hidden;position:absolute">ddd</div>

这里就可以通过$("#div1").get(0).offsetWidth取到100了，然后再把新添加的样式去掉。
```

```javascript
swap: function( elem, options, callback, args ) {
    var ret, name,
        old = {};

	//保存老样式，插入新样式。
    for ( name in options ) {
        old[ name ] = elem.style[ name ];
        elem.style[ name ] = options[ name ];
    }

    ret = callback.apply( elem, args || [] );
	// 通过插入的新样式来获取元素的css值
    for ( name in options ) { // 恢复老样式
        elem.style[ name ] = old[ name ];
    }

    return ret;
}
```

## jQuery.ready.promise

* 页面初始化中，用的较多的就是$(document).ready(function(){//代码});
* ready是在DOM的结构加载完后就触发,ready的内部是如何判断DOM的结构加载完的,就是当前的方法

```javascript
jQuery.ready.promise = function( obj ) {
    // readyList为预先申明的变量，未赋值
	if ( !readyList ) {
		// 函数执行后申明为jQuery.Deferred()
        // 最后把延迟对象返回出去，满足条件后触发fn函数
		readyList = jQuery.Deferred();
		// if()else（），监听dom加载，最终调用的都是jQuery.ready方法（静态方法）
		if ( document.readyState === "complete" ) {
			setTimeout( jQuery.ready );

		} else {
			// 当浏览器是基于标准浏览器时，会在加载完DOM结构后触发“DOMContentLoaded”事件，jquery内部就用此事件作为ready的触发源
            // 当浏览器是IE浏览器时，因为IE浏览器（蛋疼并强大着）不支持“DOMContentLoaded”事件，所以只能另谋它法，这里没有判断，估计是ie678不支持的原因之一
			document.addEventListener( "DOMContentLoaded", completed, false );

			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};
```

## jQuery.each

* 填充class2type映射表
* 生成一个class2type对象
* type方法中用到的

```javascript
class2type = {
    "Boolean": "boolean",
    "Number": "number",
    "String": "string",
    "Function": "function",
    "Array": "array",
    "Date": "date",
    "RegExp": "regexp",
    "Object": "object",
    "Error": "error",
}
```

## isArraylike

* 判断是否是数组，类数组，带length的json，是的话就返回真

```javascript
function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

    // 担心window对象有length属性
	if ( jQuery.isWindow( obj ) ) {
		return false;
	}
	// 如果有nodeType的话并且还有长度，那么就是类数组的形式，返回true。
	if ( obj.nodeType === 1 && length ) {
		return true;
	}
	// 如果还不满足则判断是否为数组
    // 不能是函数，因为函数也可能有length属性
    // typeof length === "number" && length > 0 && ( length - 1 ) in obj )处理{0:"a",1:"b",length:2}这种情况。
    // length === 0处理arguments为空的时候，就是不传入函数任何数据，这时函数中的arguments的length为0，但是是类数组。
    // document.getElementsByTagName("div")和body.childNodes也是类数组。
	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}
```

## Sizzle选择器（877行-2856行）

sizzle是一个纯粹的javascript css选择器引擎，可以轻松的插入主机库

### 为什么有Sizzle

- 其实对现代浏览器来说，document.querySelectorAll就可以解决一切。
- 比如zeptoJs就是用querySelectorAll进行选择器解析的，因为移动端所有浏览器都支撑querySelectorAll。
- 但是对于低版本的IE(<=8)浏览器，不仅不支持querySelectorAll，连getElementById都有bug，因此自己用浏览器原生API解析选择器简直难上加难。好在sizzle引擎帮我们处理了一切。
- 参考资料：http://foio.github.io/sizzle-research/

### Sizzle特点

- 完全独立
- 最常用选择器的竞争性能
- 大小只有4KB
- 高拓展性和简单易用的api
- 有最佳性能的事件委托

### Sizzle选择符的实现

- 在把选择符表达式传递给$()函数的时候，jquery的sizzle引擎会解析这个表达式，并确定如何收集该表达式。
- 在最本质的层次上，sizzle会应用浏览器支持的最高效的原生的DOM方法取得nodeList，这个节点列表是一个包含DOM元素的类似数组的对象，jquery会把这个对象转换成真正的数组。
- 如果没有现成的DOM方法可以拿来处理这个选择符表达式，sizzle就会使用document.getElementsByTagName("*");来去文档中的全部元素，然后在遍历并测试每一个元素。

### Sizzle选择符的速度

- 如果选择器可以使用原生的js选择函数那一定比jquery的速度要快。
- 浏览器是有检测代码消耗时间的功能的，chrome的是在timeline里面

## 严格模式

```javascript
//"use strict" 指令只允许出现在脚本或函数的开头。
use strict
```

- JavaScript 严格模式（strict mode）即在严格的条件下运行
- "use strict" 指令在 JavaScript 1.8.5 (ECMAScript5) 中新增
- 它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略
- "use strict" 的目的是指定代码在严格条件下执行
- 支持严格模式的浏览器: Internet Explorer 10 +、 Firefox 4+ Chrome 13+、 Safari 5.1+、 Opera 12+。

### 为什么要使用严格模式

- 消除代码运行的一些不安全之处，保证代码运行的安全
- 提高编译器效率，增加运行速度
- 为未来新版本的Javascript做好铺垫
- "严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。
- 同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。

### 严格模式的限制

- 不允许使用未声明的变量：报错 (变量 未定义)，对象也是一个变量，未声明的对象也不行
- 不允许删除变量或对象：delete 变量 会报错
- 不允许删除函数：delete 函数 会报错
- 不允许变量重名
- 不允许使用八进制
- 不允许使用转义字符
- 不允许对只读属性赋值
- 不允许对一个使用getter方法读取的属性进行赋值
- 不允许删除一个不允许删除的属性
- 变量名不能使用 "eval" 和"arguments" 字符串
- 由于一些安全原因，在作用域 eval() 创建的变量不能被调用
- 禁止this关键字指向全局对象：因此，使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。

### 严格模式保留关键字

  - implements
  - interface
  - let
  - package
  - private
  - protected
  - public
  - static
  - yield

## window对象

window：代表浏览器中一个打开的窗口

### 对象属性

- window.self 引用本窗口window==window.self
- window.name 为窗口名字
- window.defaultStatus 窗户状态栏信息
- window.location URL地址，设置该属性可打开新的页面

### 对象方法

- window.alert("text") 提示信息会话框
- window.confirm("text") 确认会话框
- window.prompt("text") 键盘输入会话框
- window.setIntervel(func, time) 每隔指定时间(毫秒)执行一次操作
- window.clearInterval() 清除时间间隔
- window.setTimeout(action,time) 等待指定时间(毫秒)后再执行操作
- window.open() 打开新的窗口
- window.close() 关闭窗口

### 成员对象

- window.event
- window.document
- Window.history
  - window.history.length 浏览过的页面数
  - window.history.back() 后退
  - window.history.forward() 前进
  - window.history.[go](http://lib.csdn.net/base/go)(i) 前进或后退i个页面（i>0前进，i<0后退）
- Window.screen
  - window.screen.width 屏幕宽度
  - window.screen.height 屏幕高度
  - window.screen.colorDepth 屏幕色深
  - window.screen.availWidth 屏幕可用宽度
  - window.screen.availHeight 屏幕可用高度（除去任务栏的高度）
- Window.navigator
  - window.navigator.appCodeName 浏览器代码名
  - window.navigator.appName 浏览器名
  - window.navigator.platform 运行浏览器的操作系统平台
  - window.navigator.appVersion 浏览器的平台和版本
  - window.navigator.userAgent 由客户机发送服务器的user-agent 头部的值
  - window.navigator.cookieEnabled 浏览器是否启用cookie
  - window.navigator.appMinorVersion 浏览器补丁版本
  - window.navigator.cpuClass cpu类型
  - Window.navigator.plugins 插件标识
  - window.navigator.userProfile 用户的个人信息
  - window.navigator.systemLanguage 客户体系语言
  - window.navigator.userLanguage 用户语言
  - window.navigator.onLine 用户是否在线
  - window.navigator.mimeTypes MIME类型（数组）

## document对象

代表整个HTML 文档，可用来访问页面中的所有元素

### 对象属性

- document.title                 文档标题，等价于HTML的title标签
- document.bgColor            页面背景色
- document.fgColor              前景色(文本颜色)
- document.linkColor           未点击过的链接颜色
- document.alinkColor            激活链接(焦点在此链接上)的颜色
- document.vlinkColor            已点击过的链接颜色
- document.URL                   在同一窗口打开另一网页
- document.fileCreatedDate       文件建立日期，只读属性
- document.fileModifiedDate      文件修改日期，只读属性
- document.fileSize              大小，只读属性
- document.cookie                设置和读出cookie
- document.charset               字符集

### 对象方法

- document.write()                      动态向页面写入内容
- document.createElement(tag) 创建指定标签的元素
- document.getElementById(id)  获得指定id值的元素
- document.getElementsByName(name)      获得指定Name值的元素

### body对象

- document.body                 文档主体开始和结束，等价于body标签
- document.body.bgColor          背景颜色
- document.body.link             未点击过的链接颜色
- document.body.alink          激活链接(焦点在此链接上)的颜色
- document.body.vlink      已点击过的链接颜色
- document.body.text        文本色
- document.body.innerText      body和/body之间的文本
- document.body.innerHTML  body和/body之间的HTML代码
- document.body.topMargin 页面上边距
- document.body.leftMargin      页面左边距
- document.body.rightMargin   页面右边距
- document.body.bottomMargin  页面下边距
- document.body.background    背景
- document.body.appendChild(oTag) 添加DOM对象
- document.body.onclick="func()"              鼠标指针单击对象是触发
- document.body.onmouseover="func()"    鼠标指针移到对象时
- document.body.onmouseout="func()"        鼠标指针移出对象时触发

### location位置对象

- document.location.hash  #号后的部分
- document.location.host        域名+端口号
- document.location.hostname     域名
- document.location.href          完整URL
- document.location.pathname 目录部分
- document.location.port     端口号
- document.location.protocol    网络协议
- document.location.search      ?号后的部分

- 通过集合引用（以images集合为例，forms集合等类似）
  - document.images                img标签
  - document.images.length          img标签的个数
  - document.images[0]             第1个img标签           
  - document.images[i]          第i-1个img标签