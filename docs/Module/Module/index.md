## 前端模块化

:::tip

**最后更新时间：2018年10月15日**

**字数：23215**

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
* parcel
* rollup

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

### 前端模块化发展

* 一个js文件一个模块，用script引入
* 后期就是各种方案了

### 主流模块化方案

* **CommonJS**
* **AMD**
* **CMD**
* **UMD**
* **ES modules**
* **模块化打包工具**
  * **webpack**
  * **parcel**
  * **rollup**

:::tip

**前端模块化要解决的核心问题：**

**模块的定义，依赖和导出**

:::

## CommonJS规范

### 特点

* **Nodejs规范，所以是module.exports和require**
* **require是Node中少数几个同步I/O操作之一**
* 同步，require（同步）
* 仅适用于后端，因为同步的原因，在前端使用会阻塞，**下面AMD VS CommonJS有解答**
* 总共四个步骤：**定义 -> 输出 -> 加载 -> 使用**
* 所有代码都运行在模块作用域，不会污染全局作用域。
* **模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存**。
* 模块加载的顺序，按照其在代码中出现的顺序

### module对象

* Node内部提供一个`Module`构建函数。所有模块都是`Module`的实例。
* 每个模块内部，都有一个`module`对象，代表当前模块。

```javascript
// Module 实例
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  // ...
  
}

// module属性
module.id 模块的识别符，通常是带有绝对路径的模块文件名。
module.filename 模块的文件名，带有绝对路径。
module.loaded 返回一个布尔值，表示模块是否已经完成加载。
module.parent 返回一个对象，表示调用该模块的模块。
module.children 返回一个数组，表示该模块要用到的其他模块。
module.exports 表示模块对外输出的值。
```

#### module.parent

* 返回一个对象，表示调用该模块的模块。
* 如果在命令行下调用某个模块，比如`node xxx.js`，那么`module.parent`就是`null`。
* 如果是在脚本之中调用，比如`require('./xxx.js')`，那么`module.parent`就是调用它的模块。
* 利用这一点，可以判断当前模块是否为入口脚本

```javascript
if (!module.parent) {
    // ran with `node xxx.js`
    app.listen(8088, function() {
        console.log('app listening on port 8080');
    })
} else {
    // used with `require('/.xxx.js')`
    module.exports = app;
}
```

#### module.exports

* 属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取`module.exports`变量
* 如果一个模块的对外接口，就是一个单一的值，不能使用`exports`输出，只能使用`module.exports`输出

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

### module.exports和exports

- module.exports
  - CommonJS规范规定，每个模块内部，module变量代表当前模块。
  - 这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。
  - 加载某个模块，其实是加载该模块的module.exports属性。
- exports
  - 为了方便，Node为每个模块提供一个exports变量，指向module.exports。
  - 这等同在每个模块头部，有一行这样的命令
  - 于是我们可以直接在 exports 对象上添加方法，表示对外输出的接口，如同在module.exports上添加一样。
  - **注意，不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系。**

:::tip

**如果你觉得，`exports`与`module.exports`之间的区别很难分清，一个简单的处理方法，就是放弃使用`exports`，只使用`module.exports`**

**结论：不论任何时候都推荐用module.exports**

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

### AMD VS CommonJS

* CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。
* AMD规范则是非同步加载模块，允许指定回调函数。
* **由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以CommonJS规范比较适用**。
* 但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用AMD规范。

:::tip

**这也是CommonJS仅适用于服务器的一个原因之一**

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
* define(factory)是一个全局函数，用来定义模块，存在就是AMD或者CMD环境
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
        // 定义为普通的node模块或者CommonJS规范
        // CommonJS也就是nodejs规范
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

### 严格模式

ES6 Module要求严格模式

严格模式介绍连接：

[严格模式](http://www.xuefeng666.com/jQuery/jQuerySrc/#%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F)

### 命名导出(named exports)

* 一个模块通过`export`声明来导出多个，需要导出的变量或函数只需要在声明最前面加上export关键词即可
* 在需要用的地方使用`import`导入。
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

### 默认导出(default exports)

* 使用 **export default** 导出模块默认的内容
* 每个模块只能有一个 export default
* 导入默认导出的模块时，需要指定模块名称

```javascript
/*------ str.js ------*/
let version = "1.0.1"
function trim () {
    console.log('trim方法')
}
// 不需要指定变量名
// 导出一个对象
export default  {
    trim: trim,
    version: version
}


/*------ index.js ------*/
// 导入默认导出的模块时，需要指定模块名称str
import str from './str.js'

str.trim()  // 打印trim方法
console.log(str.version) // 打印1.0.1
```

:::tip

**默认导出的时候不需要指定一个变量名，它默认就是文件名。**

:::

* 其实这个默认导出只是一个特殊的名字叫default , 你也可以直接用他的名字，把它当做命名导出来用

```javascript
// 这两个是等价的
import { default as foo } from 'lib';
import foo from 'lib';


// 也可以通过显示指定 default 名字来做默认导出
export default 'zhangsan';

const name = 'zhangsan';
export { name as default };
```

### 导入命名导出

* 导入模块时可使用**大括号包含指定命名成员**
* 也可以用  *** as moduleName** 的形式把此模块的所有命名导出作为某个对象的成员。

```javascript
// math.js 导出
export function add(a, b) {
    return a + b;
}
 
// app.js：指定使用math模块的add命名导出
import { add } from './math.js';
console.log(add(1, 2)); // => 3
 
// 导入所有的命名导出作为math对象的成员
import * as math from './math.js';
console.log(math.add(1, 2)); // => 3
```

### 导入默认导出

* 导入默认导出的模块时，需要指定模块名称

```javascript
// math.js
export default function add(x,y) {
    return x + y;
}
 
// app.js：导入默认导出的模块时，需要指定模块名称
import add from './math.js';
console.log(add(4,6)); // => 10
```

### 仅导入模块

* 仅导入模块时，只会执行模块的全局函数，不会导入任何成员。

```javascript
// math.js
export function add(a, b) {
    return a + b;
}
(function() {
    console.log('hello math.js');
})();
 
// app.js
import { add } from './math.js'; // => import的时候就会默认运行 hello math.js
// 可以调用add()
add(1,2) // => 3
```

:::tip

**import性能超过require**

- require：要把这个模块中的所有内容引入
- import：可以只把需要使用的引入到文件

:::

## webpack

### 学习资料

* [webpack官网](https://webpack.github.io/)
* [webpack中文官网（中文文档）](https://www.webpackjs.com/)

* [Webpack 中文指南](https://zhaoda.net/webpack-handbook/)

### 什么是webpack

* 官方描述：A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows to load parts for the application on demand. Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff. 
* 大致意思：一个模块化打包工具，可以打包模块。并且通过代码拆分，可以拆分出按需加载的部分。通过loaders加载器，可以解析的模块包括CommonJs，AMD，ES modules，CSS，Images，JSON，Coffeescript, LESS等等以及你自己定制的部分

:::tip

* **简单来说就是一个模块化打包工具，它做的事情是，分析你的项目结构，然后将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。**

* **还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。**
* **通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等**

:::

### 安装webpack

#### 全局安装

```bash
# sudo npm i -g webpack

# sudo npm i -g webpack-cli
```

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/10/14/4f2289c6406a255180ddd31321f0f505.png" />

:::tip

**安装webpack4版本后，必须安装webpack-cli**

**不推荐全局安装 webpack。**

**这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。**

:::

#### 本地安装

* webpack最新版本[v4.20.2](https://github.com/webpack/webpack/releases)

```bash
// 要安装最新版本或特定版本
# npm install --save-dev webpack
# npm install --save-dev webpack@<version>
```

:::tip

**对于大多数项目，我们建议本地安装。**

**如果全局安装，目前如果安装4+，必须安装webpack-cli，不安装，运行webpack会提示的**

:::

#### 安装体验版

* 体验版是直接从 webpack 的仓库中安装

```bash
# npm install webpack@beta
# npm install webpack/webpack#<tagname/branchname>
```

:::tip

**最新体验版本可能仍然包含 bug，因此不应该用于生产环境**

:::

### 核心概念

* 入口(entry)
* 输出(output)
* loader
* 插件(plugins)

#### 入口（entry）

#### 输出（output）

#### loader

#### 插件（plugins）

### 运行方式

* 命令行运行
* 配置文件

#### 命令行运行

* Webpack 会分析入口文件，解析包含依赖关系的各个文件。这些文件（模块）都打包到 bundle.js 
* Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。
* 在页面启动时，会先执行 entry.js 中的代码，其它模块会在运行 `require` 的时候再执行。

```bash
webpack <entry> [<entry>] -o <output>  --mode=development

webpack 入口文件 -o 出口   --mode=开发模式
```

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/10/14/6320b17340bb13d0809994f5439e7e23.png" />

* 命令行使用loader

```
先安装loader
npm install css-loader style-loader

使用的时候可以这样写
require("!style-loader!css-loader!./style.css") // 载入 style.css

另一种写法，有时候单引号，有时候双引号
webpack main.js bundle.js --module-bind "css=style-loader!css-loader"
```

#### entry

* 构建项目的入口起点，可以是一个文件，也可以是一组文件
* 如果传递一个形式为 `<name> = <request>` 的键值对，则可以创建一个额外的入口起点。它将被映射到配置选项(configuration option)的 `entry` 属性。

#### output

* 要保存的 bundled 文件的路径和文件名。
* 它将映射到配置选项 `output.path` 和 `output.filename`。

#### --config

* webpack配置文件默认为 `webpack.config.js`，如果你想使用其它配置文件，可以加入这个参数。

```bash
webpack --config xxx.config.js
```

#### --env

* 设置环境变量
* 当配置文件是一个函数时，会将环境变量传给这个函数

#### 输出相关参数

* **--output-path：输出文件路径**

* **--output-filename：输出文件名按照自己的格式输出**
* **--output-source-map-filename：映射文件名，文件打包后与源文件有一个映射关系，可以通过map找到源文件**

#### Debug配置

* **--debug:**  打开debug模式，默认false
* **--progress:** 打印编译的进度，默认false
* **--devtool:** 定义[source map类型](https://webpack.js.org/configuration/devtool/)
* **--display-error-details：** 显示错误详情，默认false

#### Module 参数
* **--module-bind**： 绑定一个拓展程序 如：--module-bind js=babel-loader

#### watch参数
* **--watch**：监听文件变化

#### Optimize 参数
* --optimize-max-chunks：设置代码块最大数量

* --optimize-min-chunk-size：设置代码块最小值
* --optimize-minimize：压缩js文件

#### Stats 参数
* **--display**： 显示打包信息，将具体信息可参考这里

* **--color**和**--colors**：console里面显示颜色

#### 高级参数
* **--bail**:  如果编译过程一有error，立马停止编译

* **--hot**： 热替换，在config文件中也可配置

* **--provide**：提供一些模块，做全局使用 如：--provide jQuery=jquery

* **--profile**: 提供每一步编译的具体时间

#### 配置文件运行