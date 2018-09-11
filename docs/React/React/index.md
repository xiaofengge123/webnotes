## React

:::tip

**最后更新时间：2018年09月10日**

**字数：16652**

:::


**主要内容**

* 学习资源
* 认识React
* 核心概念
* 组件
* 状态state
* 事件
* 生命周期
* 受控组件
* 单项数据流
* 组件通讯
* 路由
* Redux

## 学习资源

- [React中文网](https://www.reactjscn.com/) 
- [React入门教程-阮一峰](http://www.ruanyifeng.com/blog/2015/03/react.html)
- [React官网-英文版](https://reactjs.org/)
- [黑马程序员](http://www.itheima.com/)

## 认识React

用来构建UI的 JavaScript库

### React特点

- JSX( JavaScript XML )语法：函数式的 UI 编程方式
- 高性能：
  - 虚拟DOM
  - DIff算法
- HTML仅仅是个开始：html  to  EveryThing
  - JSX —> HTML
  - JSX —> native ios或android中的组件（XML）
  - JSX —> VR
  - JSX —> 物联网

### React优点

- 组件化开发
- Facebook专门团队维护维护
- 技术成熟，社区完善，生态系统健全
- 简单，高性能，支持服务端渲染

## 核心概念

### 虚拟DOM

- 用JavaScript对象来秒速DOM对象，通过对比前后两个对象的差异，只更新变化的部分，提高渲染效率
- JavaScript对象 —> DOM对象
- 处理虚拟DOM步骤
  - JavaScript对象—> DOM树结构
  - 状态变化，重新构建DOM树，对比新旧树，记录差异
  - 把差异2更新到原来创建的DOM输，实现视图更新

### Diff算法（理解different）

- 两个不同类型的元素会产生不同的树
- 开发者可以通过key属性指定不同树中没有发生改变的子元素
- 如果两棵树的根元素类型不同，React会销毁旧树，创建新树
- 对于类型相同的React DOM 元素，React会对比两者的属性是否相同，只更新不同的属性
- 当处理完这个DOM节点，React就会递归处理子节点
- 当在子节点的后面添加一个节点，这时候两棵树的转化工作执行的很好
- React提供了一个 key 属性。当子节点带有key属性，React会通过key来匹配原始树和后来的树
- key只需要保持与他的兄弟节点唯一即可，不需要全局唯一
- 尽可能的减少数组index作为key，数组中插入元素的等操作时，会使得效率底下

## 安装

### npm使用说明

- **npm init在项目中引导创建一个package.json文件**
- **缩写 npm init -y 但是目录不能包含中文**


- **-S, --save 安装包信息将加入到dependencies（生产阶段的依赖）**
- **-D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖），所以开发阶段一般使用它**
- **-O, --save-optional 安装包信息将加入到optionalDependencies（可选阶段的依赖）**
- **-E, --save-exact 精确安装指定模块版本**
- **本地安装（local）**
- **全局安装（global）,使用-g 或 —global**
- **npm ls查看安装的模块**
- **npm uninstall卸载模块**
- **npm update更新模块**
- **npm outdated检查模块是否已经过时**
- **npm cache 管理模块的缓存**
- **npm start 启动模块**
- **npm restart 重新启动模块**

### React安装

- npm i -S react react-dom
  - react 是React库的入口点
  - react-dom提供了针对DOM的方法，比如：把创建的虚拟DOM，渲染到页面上

## createElement()

- 后期不用这个，学习知道即可


- 作用：根据参数，创建React对象
  - 参数一：定创建虚拟DOM的类型
  - 参数二：指定元素自身的属性
  - 参数三：指定当前元素的子元素

## render()

- 渲染react元素
  - 参数一：指定要渲染的react对象
  - 参数二：指定渲染到页面中的容器（DOM对象）
  - 参数三：回调函数

```javascript
const dv = React.createElement('div', {
  title: '这是标题'
}, 'Hello React')

// 3 渲染 react 元素
ReactDOM.render(dv, document.getElementById('app'))
```

## JavaScript XML语法

- JSX语法，最终会被编译为 createElement() 方法
- JSX -> createElemenet的语法形式 -> 虚拟DOM对象
- 推荐使用 JSX 的方式创建组件
- 安装：npm i -D babel-preset-react
- 注意：
  - 依赖babel-core/babel-loader
  - JSX的语法需要通过 babel-preset-react 编译后，才能被解析执行
- JSX语法注意点：
  - className 代替 class
  - label 的 for属性，使用`htmlFor`代替
  - 可以直接写JS代码，用{}包含
  - 注释：{/* 中间是注释的内容 */}

## React脚手架

- [博客教程](https://blog.csdn.net/qtfying/article/details/78665664)


- 官方发布的脚手架


- [create-react-app](https://github.com/facebook/create-react-app)
- 安装：npm install -g create-react-app
- 创建项目：create-react-app my-app
- 开启项目：npm start

## React组件

- 组件是由一个个的HTML元素组成的
- 组件就类似JavaScript中的函数
- 如果一个组件仅仅是为了展示数据，就是用函数组件
- 如果组件中有一定的业务逻辑，需要操作数据，就试用class创建组件，需要用到state

### 函数组件(无状态组件)

- 函数名必须首字母大写，React就是根据首字母区分是不是组件的
- 必须有返回值 return 可以是jsx或者null（null表示什么都不渲染）
- 返回的jsx必须只有一个根元素
- 返回的元素试用()包裹，避免各种换行问题

```javascript
function Welcome(props) {
  return (
    <div className="list">
      {/* 注释的写法 */}
      <h1>list {props.name}</h1>
      <ul>
        <li>item1</li>
        <li>item2</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <Welcome name="demo" />,
  document.getElementById('app')
)
```

### class组件(有状态组件：state)

- 状态即数据：state


- 因为class是基于es6，所以需要babel转换
- 安装：npm i -D babel-preset-env
- 如果要使用this，必须现有super，this不能再super之前调用
- 所以需要constructor(props) {super(props)}

```javascript
class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="list">
        <h1>List {this.props.name}</h1>
        <ul>
          <li>item1</li>
          <li>item2</li>
        </ul>
      </div>
    )
  }
}
```

## 组件传值(props)

- React是单向数据流


- 组件中直接name=xxx传值即可
- 接受用props来接受数据
- props是个对象，只读的，不能添加修改和删除数据，注意：只读，只读，只读
- 我们可以传递任意数据给组件

## class组件使用

- 组件名首字母大写
- 必须继承于React.Component
- 必须有一个render方法，并且render方法必须有返回值
- props 只读
- this.props也是只读

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

//组将Hello组件
class Hello extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>这是 Hello class组件, 这是传递给组件的数据: { this.props.name }</h1>
      </div>
    )
  }
}

// 渲染class组件
ReactDOM.render(
  <Hello name="小明" age={18} color={ ['a', 'b'] } />,
  document.getElementById('app')
)
```

## 状态state

- 在 react 中，在类的构造函数中来初始化状态（state）
- state是内部数据，只能在当前组件使用
- 通this.sate = {} 在构造函数中私有化state
- **只能通过this.setState() 方法来修改状态**
- 只有class组件才有状态state
- 状态是私有的，完全由组件来控制
- 可以将组件内部使用但是不渲染在视图中的内容，直接添加给 this
- 不要在 `render()` 方法中调用 setState() 方法来修改`state`的值：会引起死循环，无限渲染

## 封装独立js文件的组件

```javascript
// 引入React模块
// 由于 JSX 编译后会调用 React.createElement 方法，所以在你的 JSX 代码中必须首先声明 React 变量。
import React from 'react'

// 使用function构造函数创建组件
function Hello(props){
  return (
    <div>
      <div>这是Hello组件</div>
      <h1>这是H1</h1>
      <h6>这是H6</h6>
    </div>
  )
}

// 导出组件
export default Hello

// app.js
// 使用组件：
import Hello from './components/Hello2'
```

## 绑定事件

- 通过 on+事件名称，事件名称首字母大写

```javascript
<button 
   onClick={() => console.log('单击事件出发了')}
   onMouseEnter={() => console.log('鼠标以上来了') }
>绑定事件</button>
```

- render方法中的this表示当前组件的实例对象
- 这个this是可以调用 setState() 方法
- 绑定方法不要加小括号调用，因为：
  - 绑定方法是将方法的引用赋值给事件
  - 而不是将方法的调用结果给事件
- 这里就产生了绑定的方法中this指向的问题，因为需要用this去掉用state
  - 箭头函数
    - 箭头函数是没有 this
    - 箭头函数中的this，是由外部环境决定的
  - bind绑定this指向：
    - this.handleClick = this.handleClick.bind(this)
    - constructor 中 super之后

## 子节点

- 只要给组件添加子节点，组件中的 props 就会有一个 children 属性

## 使用样式

- 直接在 react元素上使用 style 来添加样式

```javascript
<h1 style={ { color: 'red', border: '1px solid green' } }>这是 Hello 组件</h1>
```

- 通过class来添加

```javascript
const styles = {
  h1: { 
    color: 'red', 
    border: '1px solid green',
    backgroundColor: 'skyblue'
  }
}
<h1 style={ styles.h1 }>这是 Hello 组件</h1>
```

## 组件的生命周期

- 组件产生到消亡
  - 创建阶段（Mounting）
  - 运行和交互阶段（Updating）：数据发送变化就会执行
  - 卸载阶段（Unmounting）

<img src="http://bmob-cdn-4908.b0.upaiyun.com/2018/05/10/9d2dcfa5407d53548073f70456bdca9f.png">

- defaultProps 给组件设置默认值
- 防止用户使用组件不传递该属性时候的报错问题的

### componentWillMount

- 组件将要挂载到页面中，但是，还没有挂载到页面中
- 可以用来发送ajax请求，获取数据，但是官方推荐在下一个钩子函数中发数据
- 不能在这个钩子函数中获取到组件对应的DOM对象
- 如果是同步调用 setState() 来修改状态，是不会引起重新渲染的！！！
- 如果是异步调用 setState() 来修改状态，会引起重新渲染！！！

### componentDidMount

- 组件已经挂载到页面中
- react中如果有DOM操作，应该是在这个钩子函数中执行的
- 官方推荐：在这个钩子函数中发送请求，获取数据
- 如果在这个钩子函数中调用 setState() 一定会引起重新渲染

### render

- 不能在 render() 方法中修改state！！！
- 不能在 render 中调用 setState() 方法！！！

### shouldComponentUpdate

- 通过这个钩子函数可以达到控制组件是否更新
- 用来提升组件的性能，只在满足特定条件的时候，渲染组件。减少了不必要的渲染，提供了性能
- 注意：
  - 这个钩子函数必须有返回值，返回值类型为：布尔值
  - 如果返回true，表示要更新组件
  - 如果返回false，表示不更新组件
- 第一个参数：表示最新的props
- 第二个参数：表示最新的state

### componentWillUpdate

- 组件将要被更新
- 注意不能在这调用 this.setState()

### componentDidUpdate

- 组件已经完成更新
- 注意不能在这调用 this.setState()

### componentWillReceiveProps

- 当组件接受到新的 props 值，这个钩子函数就会执行

### componentWillUnmount

- 组件卸载的时候要执行的钩子函数
- 该组件一开始是显示在页面中的，但是，后来不再继续展示在页面中，这个钩子函数就会触发
- 用来执行清理工作，比如：清理定时器、移除mounted钩子函数中创建的DOM对象 等

## setState()

- setState() 是延迟执行的,多次调用，会执行一次
- 如果要获取到setState()后的数据，可以通过setState()方法的回调函数获取到
- 回调函数是在数据更新后，立即执行的

```javascript
this.setState((prevState, props) => {
    // 第一个参数：表示更新前的state
    // 第二个参数: 表示 props
    // 需要返回一个对象, 对象中的属性表示要更新的数据
    return {
      count: prevState.count + 1
    }
 })
```

## ref

- 通过 ref 来获取到DOM对象
- ref的值是一个函数
- 函数的参数(): 表示当前DOM对象
- ref可以绑定事件，但是不推荐这样做，推荐用onClick

```javascript
// 渲染组件：
  render () {
    return (
      <div>
        {/* 将DOM对象的赋值为 this._input, 那么, this._input就表示文本框这个DOM对象了 */}
        <input type="text" ref={ (input) => this._input = input } />
        <button onClick={ this._setFocus }>文本框获得焦点</button>
      </div>
    )
  }
```

## 受控组件

- 在 react 中，state 只能通过 setState() 方法来修改
- 事件处理程序的参数：事件对象（e）
- 不要直接修改state属性的值，这样不会重新渲染组件！！！
- 单一数据源
- 只能通过setState来设置受控组件的值
- defaultValue
- readOnly

## props校验

- npm i -S prop-types
- 通过类型检查，提高程序的稳定性
- 给类提供一个静态属性 `propTypes`（对象），来约束`props`

```javascript
Hello.propTypes = {
  // number 要求 count 是number类型的
  // isRequired 要求 count 必须传递
  count: PropTypes.number.isRequired
}
```



## React 单向数据流

- 在React中，状态分享是通过将state数据提升至离需要这些数据的组件最近的父组件来完成的，这就是所谓的状态提升
- 父组件提供数据，子组件使用数据（从父组件获取数据）
- **React 中采用单项数据流**，不是~~双向数据绑定~~
- 数据流动方向：自上而下，也就是只能由父组件传递到子组件
- 创建react的组件，数据（状态）都交给父组件，子组件可以获取父组件中的数据并进行展示处理

## 组件通讯

- 父 -> 子：`props`
- 子 -> 父：父组件通过props传递回调函数给子组件，子组件调用函数将数据作为参数传递给父组件
- 兄弟组件：因为React是单向数据流，因此需要借助父组件进行传递，通过父组件回调函数改变兄弟组件的props
- React中的状态管理：  flux（提出状态管理的思想）/ Redux / Mobx
- 统一管理了项目中所有的数据，让数据变的可控
- react技术栈：react + react路由 + reduex + axios/fetch

## react-router

- 安装：npm i -S react-router-dom
- 导入路由：import { HashRouter as Router,  Link,  Route} from 'react-router-dom'
- Router组件：
  - 路由的容器，所有需要被导航的内容，都应该包裹在 Router组件中
  - 一个项目中，Router组件只要出现一次即可
  - 作用：包裹整个应用
- Link组件：
  - 用来创建路由的入口，最终会被转化为一个 a标签
  - to：用来指定路由的哈希值
- Route组件：
  - 用来指定路由规则 - path
  - 用来指定该路由匹配时显示哪个组件的内容 - component
  - Route 组件放在页面中的哪个位置，就表示将路由出口的内容，展示在哪个位置
  - 一个路由规则就是一个 Route组件

```javascript
export default class App extends React.Component {
  render () {
    return (
        <Router>
            <Link to="/">首页</Link>
            <Link to="/movielist/news">新闻</Link>
            <Link to="/about">关于</Link>
            <div>
                {/* path 表示路由规则 */}
                {/* exact 表示完全匹配，也就是：当 哈希值 与 path 完全相同，才会被匹配 */}
                <Route exact path="/" component={Home}></Route>
                <Route path="/new" component={New}></Route>
                <Route path="/about" component={About}></Route>
            </div>
            </div>
        </Router>
    )
  }
}
```

- 通过`Route`中的path属性来配置路由参数
- 匹配规则：
  - path 表示路由规则


- 所有Route都会进行匹配
- 匹配规则为：模糊匹配
- exact 表示完全匹配，也就是：当 哈希值 与 path 完全相同，才会被匹配
- Switch组件--推荐
- 配置路由的规则：匹配范围小的路由规则往前放，匹配范围大的路由规则往后放

```javascript
<Switch>
   {/* 电影详情组件 */}
   <Route path="/movielist/detail/:id" component={MovieDetail}></Route>
   {/* 电影列表组件 */}
   <Route path="/movielist/:movieType/:page?" component={MovieList}></Route>
</Switch>
```

## fetch

- fetch() 方法返回一个Promise对象


- 通过 props 的match对象，来获取到与路由相关的内容
- this.props.match.params.XXX 获取路由参数
- componentWillReceiveProps：切换菜单，在这个钩子函数中发送即可
- fetch API特点：
  - 基于Promise，通过 .then() 方法来获取数据
  - fetch 可以请求任意类型的资源，但是拿到数据后，需要自己根据请求数据的类型，来转化为对应的格式，然后，才能够使用

```javascript
fetch('localhost:3000/api/xxx')
    .then(res => {
      // 调用 json() 方法，将获取到的数据，转化为JSON格式
      return res.json()
    })
    .then(data => {
      // 这个 then 中，才可以获取到JSON格式的数据
      console.log('通过 fetch 获取到的数据：', data)
    })
```

## state数据说明

- state中应该只存放跟渲染页面相关的内容
- state中的数据应该尽量少，与更新页面无关的数据，不要添加到 state 中
- 将各个方法中共用的一些数据，添加给this，而不是添加给 this.state

## Redux

- React技术栈：
  - react
  - react-router
  - 状态：mobx （简单）/ redux（复杂）
  - dva：集成了 react/react-router/redux 让 react 开发大型项目变的更加简单


- Flux 架构
- Redux 出现，将 Flux 与函数式编程结合一起
- 注意：**如果你不知道是否需要 Redux，那就是不需要它。只有遇到 React 实在解决不了的问题，你才需要 Redux**

### Redux特点

- 提供可预测的状态管理
- 通过开发者工具，提供：代码热替换（hot reload）和时间旅行（time travel）功能
- 提供中间件机制
- 安装：npm i -S redux

### 原则

- 单一数据源
- State 是只读的
- 使用纯函数来执行修改
- 不直接修改整个应用的状态树，而是将状态树的每一部分进行拷贝并修改拷贝后的部分，然后将这些部分重新组合成一颗新的状态树

### 核心概念

- state 状态（项目中的数据）
- store 管理项目的状态，以及提供修改状态的方法等（所有与状态相关的操作，都应该是由store开始的）
- action 在redux中将他立即为：一个动作（你要做什么事情）,比如：添加任务、删除任务、展示不同状态的任务
- reducer 表示一个动作的具体响应，这个动作具体怎么实现是由 reducer 来实现的,比如：添加任务的具体实现，要往 任务列表 中添加一个任务进去（this.list.push({})）
- 三者关系：
  - action 用来描述具体的动作（任务）
  - 将 action 传递给 store，store就把这个任务交给 reducer，然后，reducer就会根据不同的任务
  - 做出不同的响应（ 修改state ），最终，store会接受到这个修改后的状态，会更新store维护的原有状态

```javascript
// 说明 store 的使用
// 注意：
//  1 在一个redux应用中，只能有一个 store
//  2 不要直接修改 store 中的state

// store 的两个作用：
//  1 提供全局的state
//  2 将 action 和 reducer 联系在一起

// 使用 store
// createStore() 方法：用来创建 store
import { createStore } from 'redux'

// 导入 reducer
import todosReducer from './reducers'

// 创建store
// 参数：表示 根reducer
const store = createStore(todosReducer)

//store.getState() 方法：用来获取全局state

//dispatch执行任务
//每一次 dispatch 分发任务，都是基于上一次diapatch后的结果
//store.dispatch( addTodo('吃饭') )


// 整个流程：
// 1 调用 store.dispatch() 准备分发任务
// 2 dispatch 接受 action 作为参数
// 3 store 将action交给 reducer
// 4 reducer 根据action.type类型来执行不同的响应操作
// 5 reducer 将最新的状态返回给 store
// 6 store 接受到这个最新的状态，并且更新原始的状态（ 旧的状态 = 本次的最新状态 ）

// store 中有个方法叫：subscribe()，用来注册一个监听器（回调函数），
// 当 state 更新的时候，注册的监听器（回调函数）就会调用
store.subscribe(() => {
  console.log( store.getState() )
})

// 移除上面创建好的监听器函数
unsubscribe()
```
