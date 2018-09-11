## Vue源码学习

:::tip

**最后更新时间：2018年09月10日**

**字数：3163**

:::


Vue源码学习笔记

## 正版课程链接

* [课程链接](http://coding.imooc.com/class/228.html)


::: tip

请大家尊重正版，购买正版课程（慕课网）
http://coding.imooc.com/class/228.html

:::

## 基础要求

* 熟练使用Vuejs，做过项目
* 一定的原生JavaScript功底
* 常用数据结构和正则表达式
* 热爱前端，有深入探究研究源码的决心


## 知识点介绍

* 核心：
  * 准备工作：
    * Flow
    * 目录结构
    * 源码构建
  * 数据驱动：
    * 数据 —> DOM创建完整流程
  * 组件化：
    * 组件创建
    * 组件相关核心概念
  * 响应式原理：
    * 完整讲述响应式实现原理

* 编译：
  * parse
    * 模板 —> AST树
  * optimize:
    * 优化AST树
  * codegen：
    * AST树 —> 代码

* 扩展：
  * event和v-model：
    * 事件和v-model的实现原理
  * slot和keep-alive：
    * 内置组件的实现原理
  * transition和transition-group：
    * 过度的实现原理

* 生态：
  * Vue-Router：
    * 官方路由的实现原理
  * Vuex：
    * 官方状态管理的实现原理

## 认识Flow

* [Flow官网](https://flow.org/en/docs/getting-started/)

* Facebook出品
*  JavaScript 静态类型检查工具 

## 为什么用Flow

* JavaScript 是动态类型语言，灵活性虽好，但是也会造成问题
* 类型检查是当前动态类型语言的发展趋势 
  * 就是在编译期尽早发现（由类型错误引起的）bug 
  * 又不影响代码运行（不需要运行时动态检查类型） 
* 项目越复杂就越需要通过工具的手段来保证项目的维护性和增强代码的可读性 
*  Babel 和 ESLint 都有对应的 Flow 插件以支持语法，可以完全沿用现有的构建配置，非常小成本的改动就可以拥有静态类型检查的能力 

## 类型推断

* 类型推断
  * 事先注释好我们期待的类型，Flow就会基于这些注释来评估 
* 类型注释
  * 通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型 

### 类型推断

* 它不需要任何代码修改即可进行类型检查，最小化开发者的工作量。它不会强制你改变开发习惯，因为它会自动推断出变量的类型。这就是所谓的类型推断，Flow 最重要的特性之一 

```javascript
/*@flow*/

function foo(x) {
  return x.split(' ');
}

foo(88);
```

当你在终端运行 npm run flow 命令的时候，上述代码会报错，因为函数 foo() 的期待参数是字符串，而我们输入了数字 ,报错如下

```javascript
index.js:4
  4:   return x.split(' ');
                ^^^^^ property `split`. Property not found in
  4:   return x.split(' ');
              ^ Number
```

### 类型注释

* 在某些特定的场景下，添加类型注释可以提供更好更明确的检查依据。 
* 要求我们需要额外编写只在开发阶段起作用的代码，最后在代码编译打包的阶段被剔除。显然，这种额外添加类型注释的方式增加了工作量 

```javascript
/*@flow*/

function add(x: number, y: number): number {
  return x + y
}

add('Hello', 11)
```

* 明确指出 `add()` 的参数必须为数字 。
* 类型注释是以冒号 `:` 开头，可以在函数参数，返回值，变量声明中使用。

## JavaScript常见数据类型

* 原始数据类型（基本数据类型）：
  * 按值访问，可以操作保存在变量中实际的值。原始类型汇总中null和undefined比较特殊 
  * number
  * string
  * boolean
  * nullundefined

* 引用数据类型（Object）：
  * 引用类型的值是保存在内存中的对象。 
  * Function
  * Array
  * Date
  * ......等
  
  
* 说明:
  * 与其他语言不同的是，JavaScript不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。在操作对象时，实际上是在操作对象的引用而不是实际的对象。所以引用类型的值是按引用访问的。 