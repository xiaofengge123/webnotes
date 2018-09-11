## Vue

:::tip

**最后更新时间：2018年09月10日**

**字数：29984**

:::


Vuejs基础知识学习笔记整理

**主要内容**

* 学习资源

* JavaScript部分基础
  * let和const
  * ES6箭头函数
  * this指向问题
  * 数组方法
  * 字符串方法
* Vuejs基础
  * 基本指令
  * 修饰符
  * 过滤器
  * 计算属性
  * 属性侦听
  * 生命周期
  * 指令
  * 组件
  * 网络请求
* Vue-Router
  * SPA介绍
  * 路由配置
  * 监听路由
  * **路由钩子函数**
* Vuex
  * 核心概念
  * 使用demo
* **模块化和webpack请参考webpack笔记部分**

## 学习资源

* [Vue终极教程](http://www.xuefeng666.com/Web/Vue/)
* [Vue官方文档](https://cn.vuejs.org/)
* [webpack中文文档](https://www.webpackjs.com/)
* [黑马程序员](http://www.itheima.com/)

## JavaScript

### let、const和var

- JS没有块级作用域：
  - 在JS函数中的var声明，其作用域是函数体的全部
  - var分为两种：局部作用域和函数作用域
  - var定义的变量可以修改，如果不初始化会输出undefined，不会报错
- let是更完美的var：
  - let声明的变量拥有块级作用域
  - let声明的全局变量不是全局对象的属性
  - let不能重复声明，会报错
- 形如for (let x...)的循环在每次迭代时都为x创建新的绑定：
  - **因为形成了闭包**
  - 面试题经常遇到
- const定义的变量：
  - 不可以修改，而且必须初始化
  - 如果const定义的对象，对象属性是可以修改的

### ES6中的箭头函数

- 不绑定this:
  - 箭头函数的this其实就是在定义的时候就确定好的，以后不管怎么调用这个箭头函数，箭头函数的this始终为定义时的this
- 不绑定arguments：
  - 如果你在箭头函数中使用arguments参数不能得到想要的内容
- 什么时候不建议用箭头函数：
  - 为对象的方法
  - 不能作为构造函数
  - 定义原型方法
  - 动态的修改this，最好还是不要使用箭头函数了

### 普通函数this指向问题

- this总是代表它的直接调用者(js的this是执行上下文), 例如 obj.func ,那么func中的this就是obj
- 在默认情况(非严格模式下,未使用 'use strict'),没找到直接调用者,则this指的是 window (约定俗成)
- 在严格模式下,没有直接调用者的函数中的this是 undefined
- 使用call,apply,bind(ES5新增)绑定的,this指的是 绑定的对象
- 具体规则：
  - 函数调用模式：window
  - 方法调用模式（对象的方法）：指向对象
  - 对象的方法：指向新创建出来的对象
  - call，apply，bind

### 数组⽅法

- forEach：为每个元素执行对应的⽅法
- map：返回一个由原数组中的每个元素调⽤一个指定方法后的返回值组成的新数组
- some：用于测试数组中是否⾄少有一项元素通过了指定函数的测试
- every：用于测试数组中所有元素是否都通过了指定函数的测试
- filter：使⽤指定的函数测试所有元素,并创建一个包含所有通过测试的元素的新数组
- reduce：接收一个函数作为累加器(accumulator),数组中的每个值(从左到右)开始合并,最终为一个值
- indexof：返回在该数组中第一个找到的元素位置,如果它不存在则返回-1

### 展开运算符

- 函数调用
- 数组字面量展开
- 解构赋值
- 类数组对象变成数组

### 字符串方法

- str.charAt(index)：
  - 返回子字符串，index为字符串下标，index取值范围[0,str.length-1]
- str.indexOf(searchString,startIndex)：
  - 返回⼦字符串第一次出现的位置，从startIndex开始查找，找不不到时返回-1
- str.lastIndexOf(searchString,startIndex)：
  - 从右往左找子字符串，找不到时返回-1
- str.substring(start,end)：
  - 两个参数都为正数，返回值:[start,end) 也就是说返回从start到end-1的字符
- str.slice(start,end)：
  - 两个参数可正可负，负值代表从右截取，返回值:[start,end) 也就是说返回从start到end-1的字符
- str.split(separator,limit)：
  - 字符串拆分，参数1指定字符串或正则，参照2指定数组的最⼤长度
- str.join()：
  - 字符串拼接
- str.replace(rgExp/substr,replaceText)：
  - 返回替换后的字符串串
- str.match(rgExp)：
  - 正则匹配

## Vuejs

### 认识Vue

#### MVC和MVVM

- MVC：模型(model) — 视图(view) — 控制器器(controller)
  - 用户操作->View（负责接收用户的输入操作）->Controller（业务逻辑处理）->Model（数据持久化）->View（将结果反馈给View）
- MVVM：模型(model) — 视图(view) — 视图模型(ViewModel)
  - 数据双向绑定

#### 插值表达式

- Mustache语法
- 双括号包裹需要渲染的值：{{}}

#### el

- el：element
- 指定了Vue管理理的范围

#### data

- 指定了Vue中的数据
- Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化
- 注意：
  - vue中的响应式数据是指定的时候就确定好的
  - 后期动态添加的数据是不能做到双向绑定的
- 新添加和修改响应式数据：
  - Vue.set( target, key, value )或者this.$set()
  - target：要更改的数据源(可以是对象或者数组)
  - key：要更改的具体数据
  - value ：重新赋的值

#### methods

- Vue中所有的方法都是写在methods中的
- 方法中的this自动绑定为 Vue 实例
- 不应该使用箭头函数来定义 method 函数

#### Object.defineProperty

- Vue双向绑定原理理，IE8不不⽀支持，详解看MDN社区

#### Vue异步更新DOM

- 如果多次连续改变数据，其实Vue只会更新最后一次数据，因为它有一个队列，记录改变的数据，短时间内可能会被覆盖掉变化


- 节省资源开销

### Vue基本指令

#### v-text

- 设置⽂文本内容
- 和{{}}有相同作用
- 相当于原⽣生DOM操作的innerText/textContent

#### v-model

- 在表单控件或者组件上创建双向绑定

#### v-html

- 相当于innerHTML
- 内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译

#### v-bind

- 动态地绑定一个或多个特性，或一个组件 prop 到表达式
- 在绑定class 或 style 特性时，支持其它类型的值，如数组或对象
- 在绑定 prop 时，prop 必须在子组件中声明
- 简写：冒号

#### v-if(v-slse,v-else-if)

- 根据表达式的值的真假条件渲染元素


- 如果是隐藏，DOM中是没有这个元素的

#### v-show

- 根据表达式之真假值，切换元素的display属性
- 如果不显示元素，其实是display:none
- 和v-if的区别就是这个时候DOM中是存在这个元素的

#### v-pre

- 跳过这个元素和它的子元素的编译过程。
- 可以用来显示原始 Mustache 标签。
- 跳过大量没有指令的节点会加快编译。

#### v-once

- 只渲染元素和组件一次
- 随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。
- 这可以用于优化更新性能

#### v-cloak

- 这个指令保持在元素上直到关联实例结束编译
- 和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。


- 结合CSS规则，解决插值表达式‘闪烁’问题

```vue
// 带有v-cloak的标签隐藏
[v-cloak] {
  display: none;
}

// 标签
<div v-cloak>
  {{ message }}
</div>
```

#### v-for

- 基于源数据多次渲染元素或模板块，也就是循环渲染

```vue
<ul>
	<li v-for="(item,index) in items" :key="item.id">
      <span>{{ item.text }}</span>
	</li>
</ul>
```

- items：我们要遍历的数据，可以是对象，也可以是数组
- in：固定格式，你也可以用 of 替代 in 作为分隔符
- item：在items每次遍历出来的结果item
- index:为当前项的索引
- key：和元素复用性能有关，有相同父元素的子元素必须有独特的 key，一般可以用id

#### v-on

- 监听 DOM 事件，并在触发时运行一些 JavaScript 代码
- 可以接收一个需要调用的方法名称
- 也可以在内联 JavaScript 语句中调用方法，其实就是时间调用，可以传参数
- 处理DOM事件的时候，可以传递事件对象$event
- 可以添加事件修饰符

### 修饰符

#### 事件修饰符

- 修饰符是由点开头的指令后缀来表示的
- .stop：阻止冒泡修饰符
- .prevent：阻止元素发生默认行为
- .capture：捕获
- .self：只点自己身上才运行
- .once：只执行一次
- .passive

```vue
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

#### 按键修饰符

- 监听键盘事件时添加按键修饰符
- .enter
- .tab
- .delete (捕获 “删除” 和 “退格” 键)
- .esc
- .space
- .up
- .down
- .left
- .right
- ⾃定义按键修饰符:
  - Vue.config.keyCodes.f1 = 112

#### 系统修饰符

- .exact 修饰符
- 鼠标按钮修饰符

### @click

- @click = 'fn' 相当于 v-on:click='fn'


- 绑定点击事件
- 可以传递参数和事件对象$event

### 过滤器filter

- 进行一些常见的文本格式化
- 可以用在差值表达式和v-bind中


#### 全局过滤器

- Vue.filter

```javascript
// capitalize 过滤器名称
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```

#### 局部过滤器

- filters

```javascript
// capitalize 过滤器名称
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

#### 使用

```javascript
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

- 竖线 ‘ | ’：管道，操作系统中也有管道这个概念

### 计算属性computed

- 对于一些复杂逻辑的数据处理，你都应当使用计算属性
- 关键字：computed
- 计算属性是有缓存的，只有当他的依赖项发生变化时，才会被重新计算
  - 对比与methods中的方法，没得调用都会被计算，所以性能消耗比computed大

```javascript
computed: {
  sum: function () {
    return data.a + data.b
  }
}
```

- 注意:计算属性不能与data中提供的数据重名, 否则会报错

### 属性侦听watch

- 用于观察Vue实例上的数据变动，watch是一个对象，一定要当成对象来用
- 对象的键
  - 就是你要监控的那个家伙，比如说$route，这个就是要监控路由的变化，或者是data中的某个变量
- 值可以是函数：
  - 就是当你监控的家伙变化时，需要执行的函数，这个函数有两个形参，第一个是当前值，第二个是变化后的值。 
- 值也可以是函数名：
  - 不过这个函数名要用单引号来包裹。 
- 值是包括选项的对象：
  - 包含三个选项
  - handler：
    - 其值是一个回调函数。即监听到变化时应该执行的函数。
  - deep：
    - 其值是true或false；确认是否深入监听。（一般监听时是不能监听到对象属性值的变化的，数组的值变化可以听到。）
  - immediate：
    - 其值是true或false；确认是否以当前的初始值执行handler的函数。

```javascript
var vm = new Vue({
  data: {
    a: 1,
    b: 2
  },
  watch: {
    // 函数
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 选项的对象
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true，
      immediate: true
    }
  }
})
```

### debounce

- 一个通过 Lodash 限制操作频率的函数


- debounce用于延迟调⽤用，延迟触发
- 让一个方法在一定时间内只能执行一次
- 使用场景：
  - 监听用户的输入，单位时间内用户不在进行输入，自动发送请求
  - 如果用户连续输入，间隔小于我们设置的时间，是不会出发请求的
  - 比如某个按钮，用户连续点击，可以只相应一次

### Vue生命周期

#### 生命周期图示

<img src='http://bmob-cdn-4908.b0.upaiyun.com/2018/04/11/6d5e5d6d40ebb21d8081aa9b7c0605ff.png' />

#### Vue生命周期三个阶段

- 初始化阶段：
  - 进入页面
- 更新阶段：
  - 当数据发生变化
- 卸载阶段：
  - 实例卸载

#### 生命周期函数

- beforeCreate:
  - 可以在这加个loading效果
- created:
  - 这时DOM还未生成，$el 属性还不存在
  - 发送ajax请求，获取数据，在这结束loading效果
- beforeMount：
  - 模块编译/挂在之前
- mounted:
  - 模块编译/挂在之后
  - 可以获取到DOM，然后，就可以进行DOM操作了
- beforeUpdate:更更新前的DOM内容
- updated:
- beforeDestroy:
  - 你确认删除XX吗？
- destroyed:
  - 当前组件已被删除，清空相关内容

#### Vue.nextTick

- nextTick由来：
  - 由于Vue的数据驱动视图更新，是**异步**的，即修改数据的当下，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新
- 异步执行的运行机制：
  - 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）
  - 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
  - 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
  - 主线程不断重复上面的第三步
  - 简单来说，**Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新**
- nextTick的触发时机：
  - 在同一事件循环中的数据变化后，DOM完成更新，立即执行nextTick(callback)内的回调
- 应用场景：
  - **需要在视图更新之后，基于新的视图进行操作**
- 举例：

```javascript
// 场景
<div id="app">
    <p ref="myWidth" v-if="showMe">{{ message }}</p>
    <button @click="getMyWidth">获取p元素宽度</button>
</div>

getMyWidth() {
    this.showMe = true;
    //this.message = this.$refs.myWidth.offsetWidth;
    //报错 TypeError: this.$refs.myWidth is undefined
    this.$nextTick(()=>{
        //dom元素更新后执行，此时能拿到p元素的属性
        this.message = this.$refs.myWidth.offsetWidth;
  })
}
```

### 指令directive

#### 由来

- 在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。


- 使用场景：
  - 操作DOM元素，可以结合jQuery

#### 全局指令和局部指令

```javascript
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

// 使用
<input v-focus>

// 注册一个局部自定义指令 `v-focus`
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
// 使用
<input v-focus>
```

#### 自定义指令钩子函数

- 目前我们知道有钩子函数的知识点：
  - ajax
  - Vuejs生命周期
  - VueRouter路由
  - Vuejs自定义指令


- bind：
- inserted：
- update：
  - 所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
- componentUpdated：
  - 指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- unbind：
  - 只调用一次，指令与元素解绑时调用

```javascript
Vue.directive('hello',{
	// 指令第一次绑定到元素的时候执行,且只执行一次,一般用于执行初始化操作
    bind(el,binding,vnode,oldVnode){
      	// 这里的el就是我们想要的DOM对象，可以直接操作
      	// binding能传递我们需要的值
    	console.log('bind')
    },
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
    inserted(el,binding,vnode,oldVnode){ 
    	console.log('inserted')
    },
    // 当被绑定的元素所在模版更新时执行
    update(el,binding,vnode,oldVnode){ 
    	console.log('update')
    },
    // 表示被绑定元素所在模板完成一次更新周期时调用
    componentUpdated(el,binding,vnode,oldVnode){ 
    	console.log('componentUpdated')
    },
    // 指令与被绑定的元素解绑时使用,只调用一次
    unbind(el,binding,vnode,oldVnode){ 
    	console.log('unbind')
    }
})
```

- 指令钩子函数会被传入el,binding,vnode,oldVnode这四个参数
- el：
  - 指令所绑定的元素，可以用来直接操作 DOM 
- binding：一个对象，包含以下属性：
  - name：指令名，不包括 `v-` 前缀。
  - value：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - oldValue：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - expression：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - arg：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - modifiers：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- vnode：Vue 编译生成的虚拟节点。
- oldVnode：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

### refs

- 类似于 `jQuery` 操作 DOM 结构
- `ref` 被用来给元素或子组件注册引用信息
- 引用信息将会注册在父组件的 `$refs` 对象上。
- 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
- 面试时如果被问到操作DOM：
  - 自定义指令
  - refs
- 使用：
  - $refs是⼀一个对象，⻚页⾯面中所有的ref都会作为$refs对象中的键
  - DOM元素：$refs.xxx

### 网络请求

#### axios

- Vue官方推荐
- 不能use，因为不是Vue插件
- 从 node.js 创建 http 请求
- 支持 Promise
- 客户端支持防止CSRF：
  - 就是让你的每个请求都带一个从cookie中拿到的key, 根据浏览器同源策略，假冒的网站是拿不到你cookie中得key的
  - 后台可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。
- 一些配置项目（后面有专门axios介绍）

#### ajax

- 对原生XHR的封装，支持JSONP
- 优点不用多说，缺点：
  - 不符合MVVM，因为是MVC
  - 给予XHR，XHR有问题
  - 太大，必须引入jQuery

#### fetch

- 号称是AJAX的替代品
- 优点：
  - API丰富
  - ES语法
  - 基于Promise，更友好，更简单
- 缺点：
  - fetch默认不会带cookie，需要添加配置项
  - fetch没有办法原生监测请求的进度，而XHR可以
  - fetch只对网络请求报错，对400，500都当做成功的请求，需要封装去处理

### 组件component

- 组件（Component）是 Vue.js 最强大的功能之一。
- 组件可以扩展 HTML 元素，封装可重用的代码。
- 组件系统让我们可以用独立可复用的小组件来构建大型应用，几乎任意类型的应用的界面都可以抽象为一个组件树
#### 全局组件
  - Vue.component(tagName, options)
  - tagName：组件名
  - options：组件配置对象
  - 使用组件：```<tagName></tagName>```

 #### 局部组件
* 注册：components

- 组件配置对象：
  - template：html样式
  - data：组件的数据
  - methods：组件对应的方法

- 组件嵌套：
  - 组件是可以嵌套的

#### 函数式组件

  - functional：无状态，也就是没有响应式数据
  - React中也有这个概念

#### 单文件组件
  - 文件扩展名vue
  - template：
    - 编写html结构
    - 只能一个根组件
  - script：
    - 编写Vue和js逻辑代码
    - 主要代码区域
  - style：
    - 编写样式
    - lang：支持less，sass，scss
    - scoped：限制作⽤用范围

- Vue中所有的钩子函数在组件中都是可以用的

### 模块化和组件化

- 组件：
  - 最初的目的是代码重用，功能相对单一或者独立。
  - 在整个系统的代码层次上位于最底层，被其他代码所依赖，所以说组件化是纵向分层。
- 模块：
  - 最初的目的是将同一类型的代码整合在一起，所以模块的功能相对复杂，但都同属于一个业务。
  - 不同模块之间也会存在依赖关系，但大部分都是业务性的互相跳转，从地位上来说它们都是平级的。
  - 模块化开发是横向分块


- 组件化:重⽤用、解耦，⾼高重⽤用、松耦合，基础组件
- 模块化:隔离/封装，⾼高内聚、松耦合，业务模块
- 举例：发表评论功能是一个模块，但是其中添加图片就可以是一个组件

### 组件通讯

- 因为组件是独⽴立的个体，需要组件通讯
- 父组件到子组件：
  - props：props写在子组件中
- 子组件到父组件：
  - ⽗组件提供一个⽅法，用来接受子组件中传递过来的数据
  - 将这个方法传递给子组件 @fn='方法名'
  - 由⼦组件触发这个方法，将要传递的数据作为⽅法的参数：this.$emit('fn', 参数)
- 兄弟组件通讯：
  - Bus事件总线是解决兄弟间通信，祖⽗父祖孙间通信的最佳⽅方法、
  - 设置Bus，其实就是一个Vue实例
  - 注册时间：bus.$on('fn',function(data){})
  - 调⽤用⽅法传值：bus.$emit('fn', this.data);

### 组件模板

- 类似arttemplate模板引擎
- ```<script type="text/x-template" id="tpl"></script>```
- template：'#tpl'
  - 通过模板id来指定模板内容
- components：
  - 定义局部组件
  - 后⾯跟⼀个配置对象，其中对象的键表示组件名称，对象的值表示组件的配置对象

### 内容分发

- ⽤来获取组件标签中的⼦节点
- slot：
  - 具名插槽
  - 获取到组件标签中的子节点
- 作⽤域插槽：
  - slot-scope

### JSX

- JSX：JavaScript XML
  - React中常⻅见的写法
  - Vue也⽀支持
- 节点：
  - 每个元素都是一个节点
  - 文档节点，属性节点，⽂本节点
- 树：
  - 将HTML⽂文档视作树结构
  - 这种结构被称为节点树
- 虚拟DOM：
  - 用代码对DOM对象进行描述追踪变化

## Vue-Router

### SPA

- 单页Web应用（single page web application）
- 只有一张Web页面的应用
- 单页应用程序 (SPA) 是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序


- 优点：
  - 减少了请求体积，加快页⾯响应速度，降低了对服务器的压⼒
  - 更好的用户体验，让用户在web app感受native app的速度和流畅
  - 经典MVVM开发模式，前后端各负其责
  - 在URL中采用#号来作为当前视图的地址,改变#号后的参数，页面并不会重载

### 相关概念

- hash：
  - 通过hash(锚点)变化切换显示的数据
- 路由：
  - 浏览器URL中的哈希值(# hash)与展示视图内容(template)之间的对应规则
  - Vue路由中hash 和 component的对应关系是一个哈希值对应一个组件
- vue-router：
  - Vue核⼼插件，官方推荐

### 配置

- 创建：
  - new VueRoute({配置对象})
- routes:
  - 路由规则
  - 数组
  - 内部一个对象是一个规则
- path：
  - 路由的hash
- component：
  - 路由对应的组件
- redirect：
  - 重定向
- linkActiveClass：
  - :默认高亮类名
  - 可以我们自己指定修改
- router-link to：
  - 路由⼊⼝
- router-view：
  - 路由出口

### 示例代码

```javascript
// 导入
import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装插件
Vue.use(VueRouter)

// 导入组件,打包写法
const App = () => import(/* webpackChunkName: "Home" */ '../App.vue')

const router = new VueRouter({
  routes: [
    { 
      path: '/', 
      redirect: '/App' 
    },
    { 
      path: '/App', 
      component: App, 
    },
  ],
  // 修改默认高亮类名
  linkActiveClass: 'active'
})

// 将 router 导出
export default router
```

- 路由与实例关联
  - router

### 动态路径参数

- 其实就是路由参数
- 一个“路径参数”使用冒号 `:` 标记， /stu/:id?
- 模板中获取路由参数:
  - $route.params.id
- JS中获取路由参数：
  - this.$route.params.id
- 嵌套路由：
  - children

### 监听路由

- 复用组件时，对路由参数的变化作出响应
- watch (监测变化) `$route` 对象

```javascript
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

### 路由导航钩子函数

- 路由导航钩子函数：
  - 拦截导航，让它完成跳转或取消
- 分类：
  - **全局导航钩子**
  - **路由独享的钩子**
  - **组件内的导航钩子**
- 示例代码：

```javascript
// 导入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 安装插件
Vue.use(VueRouter)

// 导入组件
// 这个代码的作用：用来告诉webpack这个js文件你要从 app 中切出来，作为一个代码块（chunk）
// 第二个参数（vip）的作用：用于指定webpack在代码分割后生成js文件的名称
// const Home = r => require.ensure([], () => r(require('../components/Home.vue')), 'Home')

// 注意：注释是有意义的，用来指定代码分割后生成文件的名称
const App = () => import(/* webpackChunkName: "Home" */ '../App.vue')

const router = new VueRouter({
  routes: [
    { 
      path: '/', 
      redirect: '/App' 
    },
    { 
      path: '/App', 
      component: App, 
      // 路由独享的钩子函数
      beforeEnter: (to, from, next) => {
        console.log('home组件路由钩子函数：beforeEnter')
      },
      // 路由独享的钩子函数
      beforeLeave: (to, from, next) => {
        // ...
        console.log('home组件路由钩子函数：beforeLeave')
      }
    },
  ],
  // 修改默认高亮类名
  linkActiveClass: 'active'
})


//全局钩子函数
router.beforeEach((to, from, next) => {
    
    // 权限控制
    // 部分组件的一些兼容设置
    console.log('全局beforeEach',to)
    console.log('全局beforeEach',from)
    next()

})
router.afterEach((to, from) => {

    console.log('全局afterEach',to)
    console.log('全局afterEach',from)

})

// 因为 main.js 中需要使用当前模块中创建的路由实例，所以，此处需要将 router 导出
export default router


// 组件内的钩子函数，写在.vue组件内
// 组件路由钩子函数
    beforeRouteLeave(to, from, next) {
        // ....
      	// 在渲染该组件的对应路由被 confirm 前调用
        console.log('组件内路由钩子函数：beforeRouteLeave',to)
        console.log('组件内路由钩子函数：beforeRouteLeave',from)
        next()
    },
    beforeRouteEnter(to, from, next) {
        // ....
      	// 在当前路由改变，但是依然渲染该组件是调用
        console.log('组件内路由钩子函数：beforeRouteEnter',to)
        console.log('组件内路由钩子函数：beforeRouteEnter',from)
        next()
    },
    beforeRouteUpdate(to, from, next) {
        // ....
      	// 导航离开该组件的对应路由时被调用
        console.log('组件内路由钩子函数：beforeRouteUpdate',to)
        console.log('组件内路由钩子函数：beforeRouteUpdate',from)
        next()
    },

```

#### 全局导航钩子

- 分类：
  - 前置守卫
  - 后置钩子
- 前置守卫：
  - router.beforeEach((to, from, next) => { // ... })
  - to：
    - 类型：Route
    - 即将要进⼊入的⽬目标 路路由对象
  - from：
    - 类型：Route
    - 当前导航正要离开的路路由
  - next：
    - 类型：Function
    - 这是一个必须需要调用的方法，而具体的执行效果则依赖 next 方法调用的参数
      - next()：进入管道中的下一个钩子，如果全部的钩子执行完了，则导航的状态就是 confirmed（确认的）
      - next(false)：这代表中断掉当前的导航，即 to 代表的路由对象不会进入，被中断，此时该表 URL 地址会被重置到 from 路由对应的地址
      - next(‘/’) 和 next({path: ‘/’})：在中断掉当前导航的同时，跳转到一个不同的地址
      - next(error)：如果传入参数是一个 Error 实例，那么导航被终止的同时会将错误传递给 router.onError() 注册过的回调
  - 注意：next 方法必须要调用，否则钩子函数无法 resolved

#### 单个路由独享的钩⼦函数

- 顾名思义，即单个路由独享的导航钩子
- 上面示例代码中有的，可以仔细查看
- 分类：
  - beforeEnter：进入
  - beforeLeave：离开

#### 组件内的导航钩子

- 直接在路由组件内部直接进行定义
- 上面示例代码中有的，可以仔细查看
- 分类：
  - beforeRouteEnter
    - 在渲染该组件的对应路由被 confirm 前调用
  - beforeRouteUpdate
    - 在当前路由改变，但是依然渲染该组件是调用
  - beforeRouteLeave
    - 导航离开该组件的对应路由时被调用
- 注意：
  - beforeRouteEnter 不能获取组件实例 this
  - 因为当守卫执行前，组件实例被没有被创建出来
  - 剩下两个钩子则可以正常获取组件实例 this
- this解决方案：
  - 我们可以通过给 next 传入一个回调来访问组件实例
  - 在导航被确认是，会执行这个回调，这时就可以访问组件实例了

```javascript
beforeRouteEnter(to, from, next) {
    next (vm => {
        // 这里通过 vm 来访问组件实例解决了没有 this 的问题
    })
}
```

* 注意：
  * beforeRouteEnter 不能获取组件实例 this
  * 因为当守卫执行前，组件实例没有被创建出来，剩下两个钩⼦则可以正常获取组件实例 this
* 解决方案：
  * 我们可以通过给 next 传入一个回调来访问组件实例例。
  * 在导航被确认时，会执行这个回调，这时就可以访问组件实例了

```javascript
next (vm => { 
	// 这⾥里里通过 vm 来访问组件实例例解决了了没有 this 的问题
})
```

#### 完整的导航解析流程

* 导航被触发
* 在失活的组件⾥里里调⽤用离开守卫
* 调⽤用全局的 beforeEach 守卫
* 在重⽤用的组件⾥里里调⽤用 beforeRouteUpdate 守卫
* 在路路由配置⾥里里调⽤用 beforEnter 
* 解析异步路路由组件
* 在被激活的组件⾥里里调⽤用 beforeRouteEnter
* 调⽤用全局的 beforeResolve 守卫
* 导航被确认 
* 调⽤用全局的 afterEach 钩⼦子
* 触发 DOM 更更新
* 在创建好的实例例调⽤用 beforeRouteEnter 守卫中传给 next 的回调函数

#### 路路由缓存

* keep-alive
* meta设置参数

```html
<keep-alive> 
  <router-view :key="key">
  </router-view> 
</keep-alive>
```

* 如果想要单个子路由不刷新，只需要控制key，key值不变，缓存一直存在
* 想要路由刷新，将key值改为前面没有的即可
* 也可以利⽤在route中配置

```javascript
meta:{
	title: 'xx⻚页',
	keep_alive: true # true 表示需要使⽤用缓存
}
```

* 然后router-view中添加`v-if:router-view(v-if="$route.meta.keep_alive")`，但是有一定的局限性

## Vuex

- [官方文档](https://vuex.vuejs.org/zh/guide/)
- 安装：`npm install vuex —save`
- 介绍：
  - Vuex是专门为Vuejs设计的状态管理工具
  - 它不像Redux那样，是可以跨语言跨平台的
  - Vuex是专门来解决Vuejs中数据管理过程中出现的各种问题
  - 他采取数据集中管理的模式，来解决Vuejs中数据各种情况下出现的痛点。
- 可以理解为一句话：**`数据就是状态，状态管理其实就是数据管理`**

### 核心仓库store

* Vuex使用的是单一状态树
* 核心就是一个对象管理所有的状态（数据）
* 一个项目建议也应该只有一个数据仓库

```javascript
// 引入
import vuex from 'vuex'
// 使用
Vue.use(vuex);
// 创建仓库对象store
var store = new vuex.Store({//store对象
    state:{
        show:false
    }
})
```

### 核心概念State

* state是提供状态管理中数据的

::: tip

* js代码是基于内存运行的，一些数据刷新之后就么有了
* 我们需要做数据存储，一般都是websql，localstorage和sessionstorage来保存数据

:::

### 核心概念mutations

* mutations提供操作数据的方法
* 要求所有操作数据的方法都必须写在这个属性里面
* 注意mutations必须是同步的，异步的有对应的action属性

```javascript
{
    state:{
        data:{
          name:'zs',
          age:'18',
          hobby:['玩游戏','看电影']
        }
    },
    mutations:{
    	// 这里的state对应着上面这个state
    	// 每个方法，都会自动传递state
    	// 这个name使我们调用方法，传递进来的数据，专业数据叫做：载荷（payload）
        reName(state,name){
            state.data.name = name;
            //你还可以在这里执行其他的操作改变state
        }
    }
}

// 调用方法
$store.commit('reName', 'ls')
```

### 核心概念getters

* Vuex要求操作数据必须的实在mutations中进行
* 如果我们需要读取数据的一些派生属性和状态，我们可以使用getters
* 这一点其实类似于Vuejs中的计算属性`computed`

```javascript
{
    state:{
        data:{
          name:'zs',
          age:'18',
          hobby:['玩游戏','看电影']
        }
    },
    getters:{
    	// 返回值就是我们要获取的数据
        hobbyCounts(state){
            return !state.data.hobby.length;
        }
    },
}

// 获取派生属性
// 注意派生仅仅是获取数据状态，无法修改数据，修改数据必须在mutations中
$store.getters.hobbyCounts
```

### 异步操作数据actions

* 在mutations中我们操作数据必须是同步的，但是有些情况下我们需要异步操作数据
* 这个时候就可以用actions了，在actions中我们是可以异步操作数据的，就比如在定时器中调用actions的方法

```javascript
{
    state:{
        data:{
          name:'zs',
          age:'18',
          hobby:['玩游戏','看电影']
        }
    },
    mutations:{
    	// 这里的state对应着上面这个state
    	// 每个方法，都会自动传递state
    	// 这个name使我们调用方法，传递进来的数据，专业数据叫做：载荷（payload）
        reName(state,name){
            state.data.name = name;
            //你还可以在这里执行其他的操作改变state
        }
    },
    actions: {
    	reName (context,name) {
      		context.commit('reName',name)
    	}
  }
}

// 调用
$store.dispatch('reName','ls')

```

### 模块化module

* 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象
* 当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
* 为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**
* 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

```javascript
// 官方实例
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

### map方法

- mapState
- mapGetters
- mapActions

**map其实就是一个在store文件中的映射而已，就是不用让你要调用一个值需要敲这么多代码：this.$state.count而只需要用count而已**

示例：

mapState 辅助函数:

- 当⼀个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。
- 为了解决这个问题，我们可以使用mapState辅助函数帮助我们⽣成计算属性
- mapState 函数返回的是⼀个对象
- 通常我们需要使⽤一个⼯具函数将多个对象合并为⼀个，以使我们可以将最终对象传给computed属性。

### Vuex注意点：

Vue.js中axios请求代码应该写在组件的methods中还是vuex的actions中:

- 如果请求来的数据不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放⼊vuex 的state里。


- 如果被其他地⽅复用，这个很大⼏率上是需要的，如果需要，请将请求放⼊action⾥，方便复⽤，并包装成promise返回，
- 在调用处⽤async await处理返回的数据。如果不要复用这个请求，那么直接写在vue⽂件⾥很⽅便
