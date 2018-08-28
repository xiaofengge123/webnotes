## webpack

**主要内容**

* 前端模块化
* AMD
* CMD
* UMD
* webpack
* webpack开发配置
* webpack打包配置
* **vue-cli中webpack逐行解析**

## 学习资源

* [webpack中文文档](https://www.webpackjs.com/)
* [阮一峰老师博客](http://www.ruanyifeng.com/home.html)
* [前端模块化--技术选型](https://segmentfault.com/a/1190000006966358)
* [前端模块化基础知识](https://blog.csdn.net/gccll/article/details/52785685)

## 前端模块化

### 什么是前端模块化

#### 什么是模块化

* **一个模块就是一个实现特定功能的文件，有了模块我们就可以更方便的使用别人的代码，要用什么功能就加载什么模块**

#### 模块化的优点 

* 避免变量污染，命名冲突
  * JavaScript的缺陷，首当其冲就是全局变量。
  * 这使得每想命名一个变量的时候都要三思又三思，生怕上方无穷远的地方有一个同事些的代码和自己冲突。
* 依赖关系的管理
* 提高代码复用率
* 提高维护性

### 主流模块化方案

* **commonJS**
* **AMD**
* **CMD**
* **UMD**
* **ES6**

### CommonJS规范

#### 特点

* Nodejs规范
* 同步，require（同步）
* 仅适用于后端，因为同步的原因，在前端使用会阻塞
* 总共四个步骤： 定义 -> 输出 -> 加载 -> 使用

#### 定义模块

* 一个单独的文件就是一个模块，并且该文件中的作用域独立
* 当中的变量是无法被其他文件引用的，如果要使用需要将其定义为`global`

#### 输出模块

* 模块只有一个出口
* 使用`module.exports`对象，将需要输出的内容放入到该对象中

#### 加载模块

* 通过`require`加载

#### 示例代码

```javascript
// 总共四个步骤： 定义 -> 输出 -> 加载 -> 使用
// 定义模块 module.js
var data = "commonJS";

function test1() {
    alert("test1");
}

function test2() {
    alert("test2");
}

// 输出模块
module.exports = {
    test1: test1,
    test2: test2
}    

// 加载模块
var module = require('./module.js');

// 使用模块功能
module.test1(); // "test1"
module.test2(); // "test2"
```

::: tip

**CommonJS由于require是同步加载的，所以仅仅适用于后端，浏览器端同步加载页面会造成阻塞**

:::

## AMD

* **Asynchronous Module Definition，异步模块定义**
* AMD是一套基于浏览器端模块化开发的规范，在进行页面开发时需要用到该规范的库函数，即：`requireJS`

### require.js

* 由于AMD不是js原生支持，使用AMD规范进行页面开发需要用到对应的函数库，也就是大名鼎鼎的RequireJS
* 实际上AMD是RequireJS在推广过程中对模块定义的规范化的产出
* requireJS主要解决两个问题
  * 多个js文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器
  * js加载的时候浏览器会停止页面渲染，加载文件愈多，页面失去响应的时间愈长

#### 示例代码

```javascript
// 模块定义 module.js
define(
    ['dependModule', '...', ...], // 这个数组表示该模块所依赖的模块名称 
    function () {
        var data = "hello AMD !";
        function test1() {
            alert("hello test1 !);
        }

        function test2() {
            alert("hello test2 !);
        }


        return {
            test1: test1,
            test2: test2
        };
});


// 加载模块
require(['module'], function (myModule) {
    // 加载之后的module模块将会以参数形式：myModule传入到回调函数中，供使用
    // 这里是模块加载完成之后的回调函数
    myModule.test1(); // "hello test1 !"
    myModule.test2(); // "hello test2 !"
});

```

#### 语法详解

#### 定义模块：define()

* 全局函数，用来定义模块
* 格式：define(id?, dependencies?, factory)
* id：
  * 可选参数
  * 用来定义模块的标识，如果没有提供该参数，脚本文件名(去掉拓展名)
* dependencies：
  * 可选参数
  * 是当前模块依赖的模块名称组成的数组
* factory：
  * 必选参数
  * ⼯厂方法，模块初始化要执行的函数或对象。
  * 如果为函数，它应该只被执行⼀次。
  * 如果是对象，此对象应该为模块的输出值

#### 加载模块：require()

* 使用异步的require()来加载模块
* 格式：require([dependencies], function(){})
* 参数1：
  * 一个数组，表示所依赖的模块
* 参数2：
  * 一个回调函数
  * 当前面指定的模块都加载成功后，它将被调⽤。
  * 加载的模块将以参数形式传入该函数，从⽽在回调函数内部就可以使⽤这些模块

::: tip

**函数在加载依赖函数的时候是异步加载的**

**这样浏览器不会失去响应，它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题**

::: 
