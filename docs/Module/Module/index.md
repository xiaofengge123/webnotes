## 前端模块化

:::tip

**最后更新时间：2018年09月15日**

**字数：13149**

:::

**主要内容**

* 前端模块化
* CommandJS
* AMD
* CMD
* UMD
* ES modules
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

* **CommonJS**
* **AMD**
* **CMD**
* **UMD**
* **ES modules**
* 模块化打包工具

## CommonJS规范

### 特点

* Nodejs规范
* 同步，require（同步）
* 仅适用于后端，因为同步的原因，在前端使用会阻塞
* 总共四个步骤：**定义 -> 输出 -> 加载 -> 使用**

### 定义模块

* 一个单独的文件就是一个模块，并且该文件中的作用域独立
* 当中的变量是无法被其他文件引用的，如果要使用需要将其定义为`global`

### 输出模块

* 模块只有一个出口
* 使用`module.exports`对象，将需要输出的内容放入到该对象中

### 加载模块

* 通过`require`加载

### 示例代码

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

### 示例代码

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

### 定义模块：define()

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

### 加载模块：require()

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

### require.config

* 用来配置模块的
* 可以设置局部配置，也可以添加一个全局配置

```javascript
// 将百度的jquery库地址标记为jquery，这样在require时只需要写["jquery"]就可以加载该js
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```

**通过paths的配置会使我们的模块名字更精炼，paths还有一个重要的功能，就是可以配置多个路径，如果远程cdn库没有加载成功，可以加载本地的库**

```javascript
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```

* 这样配置后，当百度的jquery没有加载成功后，会加载本地js目录下的jquery

### 注意事项

* 在使用requirejs时，加载模块时不用写`.js`后缀的，当然也是不能写后缀
* 上面例子中的callback函数中发现有`$`参数，这个就是依赖的`jquery`模块的输出变量，如果你依赖多个模块，可以依次写入多个参数来使用

```javascript
require(["jquery","underscore"],function($, _){
    $(function(){
        _.each([1,2,3],alert);
    })
})
// 这里的$代表jquery的输出
// 这里的下划线代表underscore的输出
```

:::tip

**如果某个模块不输出变量值，则没有，所以尽量将输出的模块写在前面，防止位置错乱引发误解**

:::

### 全局配置

* requirejs提供了一种叫"主数据"的功能，可以添加全局配置
* 避免了重复出现的require.config中的配置

```javascript
// main.js 全局配置
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"   
    }
})

// 页面中使用下面的方式来使用requirejs
<script data-main="js/main" src="js/require.js"></script>
```

#### data-main

* 作用1：
  * 这个属性指定的js将在加载完reuqire.js后处理
  * 我们把 require.config 的配置加入到 data-main 后，就可以使每一个页面都使用这个配置，然后页面中就可以直接使用 require 来加载所有的短模块名



* 作用2：
  * 当script标签指定data-main属性时，require会默认的将data-main指定的js为根路径，当做基准开始查找，如果没有指定，就以文件所在的路径为基准开始查找
  * 上面的`data-main="js/main"`设定后，我们在使用`require(['jquery'])`后(不配置jquery的paths)，require会自动加载js/jquery.js这个文件，而不是jquery.js，相当于配置了baseUrl为js目录

```javascript
// 配置基础路径为js目录
require.config({
    baseUrl : "js"
})
```

### 第三方模块

* 有时候我们需要加载一些非标准或者不符合AMD规范的模块
* 关键字**shim**(垫)
  * 将非标准的AMD模块"垫"成可用的模块
  * 加载插件形式的非AMD模块

```javascript
// 加载没有实现AMD规范的underscore类库
require.config({
    shim: {
        "underscore" : {
            exports : "_";
        }
    }
})

// 这样配置后，我们就可以在其他模块中引用underscore模块
require(["underscore"], function(_){
    _.each([1,2,3], alert);
})
```

```javascript
// 加载jquery.form插件，依赖jquery
// 将form插件"垫"到jquery中
require.config({
    shim: {
        "underscore" : {
            exports : "_";
        },
        "jquery.form" : {
            deps : ["jquery"]
        }
    }
})

// 这样配置之后我们就可以使用加载插件后的jquery了
require.config(["jquery", "jquery.form"], function($){
    $(function(){
        $("#form").ajaxSubmit({...});
    })
})
```

:::tip

**shim** ：显式地配置模块之间的依赖项

**exports**：非模块的库转化为模块化的库，导出内容，必须是全局的

**deps**：通过 deps 来配置当前模块的依赖项

:::

## CMD

* **Common Module Definition，通用定义模块**

* CMD规范是国内发展出来的，阿里的玉伯
* AMD有个requireJS，CMD有个浏览器的实现SeaJS
* SeaJS要解决的问题和requireJS一样，只不过在模块定义方式和模块加载（可以说运行、解析）时机上有所不同

:::tip

**AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。**

:::

### 示例代码

```javascript
// define(id?, deps?, factory)
define(function (require, exports, module) {
    // 依赖可以就近书写
    var a = require('./a');
    a.test();  
    // ...
    if (status) {
        // 依赖可以就近书写
        var b = requie('./b');
        b.test();
    }
});
```

```javascript
/** AMD写法 **/
define(["a", "b", "c", "d", "e", "f"], function(a, b, c, d, e, f) { 
     // 等于在最前面声明并初始化了要用到的所有模块
    a.doSomething();
    if (false) {
        // 即便没用到某个模块 b，但 b 还是提前执行了
        b.doSomething()
    } 
});

/** CMD写法 **/
define(function(require, exports, module) {
    var a = require('./a'); //在需要时申明
    a.doSomething();
    if (false) {
        var b = require('./b');
        b.doSomething();
    }
});

/** sea.js **/
// 定义模块 math.js
define(function(require, exports, module) {
    var $ = require('jquery.js');
    var add = function(a,b){
        return a+b;
    }
    exports.add = add;
});
```

* 因为CMD推崇一个文件一个模块，所以经常就用文件名作为模块id



* CMD推崇依赖就近，所以一般不在define的参数中写依赖，而是在factory中写

### factory

* factory有三个参数:
  * require
    * 是 factory 函数的第一个参数
    * require 是一个方法，接受 模块标识 作为唯一参数，用来获取其他模块提供的接口
  * exports
    * 是一个对象，用来向外提供模块接口
  * module
    * 是一个对象，上面存储了与当前模块相关联的一些属性和方法

## AMD VS CMD

**最明显的区别就是在模块定义时对依赖的处理不同**

* **AMD推崇依赖前置**，在定义模块的时候就要声明其依赖的模块
* **CMD推崇就近依赖**，只有在用到某个模块的时候再去require

* 他们的加载都是**异步**的，⽽非我们理解的同步，只不过依赖处理不同

### AMD

* 同样都是异步加载模块，AMD在加载模块完成后就会执行该模块，所有模块都加载执行完后会进入require的回调函数，执⾏主逻辑



* 这样的效果就是依赖模块的执行顺序和书写顺序不⼀定一致，看网络速度，哪个先下载下来，哪个先执行，但是主逻辑一定在所有依赖加载完成后才执⾏

### CMD

* CMD加载完某个依赖模块后并不执⾏，只是下载⽽已



* 在所有依赖模块加载完成后进⼊主逻辑，遇到require语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的

:::tip

**这也是很多人说AMD用户体验好，因为没有延迟，依赖模块提前执行了CMD性能好，因为只有用户需要的时候才执行的原因**

:::

## UMD

* UMD规范，通用模块规范
* AMD和CommonJS的糅合

### AMD/CMD原则

* AMD/CMD以浏览器为第一（browser-first）的原则发展，选择异步加载模块。
* 它的模块支持对象（objects）、函数（functions）、构造器（constructors）、字符串（strings）、JSON等各种类型的模块。因此在浏览器中它非常灵活。



* CommonJS module以服务器端为第一（server-first）的原则发展，选择同步加载模块。
* 它的模块是无需包装的（unwrapped modules）且贴近于ES.next/Harmony的模块格式。但它仅支持对象类型（objects）模块。

### UMD实现

* UMD的实现很简单，先判断是否支持Node.js模块格式（exports是否存在），存在则使用Node.js模块格式
* 再判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。
* 前两个都不存在，则将模块公开到全局（window或global）。

```javascript
//xxx.js
;(function(name, definition){
    //检测上下文环境是否为 AMD 或 CMD
    var hasDefine = typeof define === 'function',
        hasExports = typeof module !== 'undefined' && module.exports;
    if (hasDefine) {
        //AMD 环境或 CMD 环境
        define(definition);
    } else if (hasExports) {
        // 定义为普通的node模块
        module.exports = definition();
    } else {
        //将模块的执行结果挂在 window 变量中，在浏览器中 this 指向 window 对象
        this[name] = definition();
    }
})('xxx', function() {
    //代码主体
    var xxx = function () {};
    return xxx;
})
```

## ES6 Modules

### 现状

* 在之前的 javascript 中一直是没有模块系统的，前辈们为了解决这些问题，提出了各种规范, 最主要的有CommonJS和AMD两种。
* 前者用于服务器，后者用于浏览器。
* 而 ES6 中提供了简单的模块系统，完全可以取代现有的CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案。

:::tip

**ES6模块化，虽然前景很好，但目前未广泛使用，需要继续发展**

:::

### ES6模块化优点

* 类似commonJS，语法更简洁
* 类似AMD，直接支持异步加载和配置模块加载
* 结构可以做静态分析，静态检测，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能
* 比commonJS更好的支持循环依赖

### ES6模块化特点

* ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
* CommonJS 和 AMD 模块，都只能在运行时确定这些东西。
* ES6 模块不是对象，而是通过`export`命令显式指定输出的代码，再通过`import`命令输入。
* ES6 加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。
* ES6 的模块自动采用严格模式，不管你有没有在模块头部加上`"use strict";`

:::tip

**ES6的模块化分为导出（export）与导入（import）两个模块。**

**import和export都必须总是出现在它们分别被使用之处的顶层作用域。**

**例如，你不能把import或export放在一个if条件内部；它们必须出现在所有块儿和函数的外部。**

:::

## 严格模式

ES6 Module要求严格模式

严格模式介绍连接：

[严格模式]()

## 命名导出(named exports)

* 可以直接在任何变量或者函数前面加上一个 `export` 关键字，就可以将它导出
* 这种写法非常简洁，和平时几乎没有区别，唯一的区别就是在需要导出的地方加上一个 export 关键字。

```javascript
// a.jx
export const name = 'zhangsan';
export function getName(x) {
    return name;
}
export function count(x, y) {
    return x + y;
}
```

```javascript
// b.js
import { name, getName, count } from './a.js';
console.log(getName()); // zhangsan
console.log(count(4, 3)); // 7
```

