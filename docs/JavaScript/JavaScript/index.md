# JavaScript笔记简介

:::tip

**最后更新时间：2018年10月3日**

**字数：15430**

:::

## 参考资料

[阮一峰ES6入门](http://es6.ruanyifeng.com/)
[JavaScript常用数组操作方法，包含ES6方法](https://segmentfault.com/a/1190000016503330)
## 数组

### 数组定义

* 就是将多个元素（通常是同一类型）按一定顺序排列放到一个集合中，那么这个集合我们就称之为数组。
  * 数组就是一组数据的集合
  * 其表现形式就是内存中的一段连续的内存地址、
  * 数组名称其实就是连续内存地址的首地址

### 数组特点

* 数组是一个有序的列表
* 数组定义时无需指定数据类型，可以在数组中存放任意的数据
* 数组定义时可以无需指定数组长度

## 数组创建

### 直面量创建数组

```javascript
var arr = [];//创建一个空数组

var arr2 = [1,2,3];//创建一个有三个元素的数组
```

### 构造函数创建数组

```javascript
var arr1 = new Array();//创建空数组

var arr2 = new Array(10)；//创建一个长度为10的数组

var arr3 =  new Array(5,4,3,2,1)；//创建数组并初始化，添加数组
```

:::tip

* 如果调用构造函数 Array() 时没有使用参数，那么返回的数组为空，length 字段为 0。
* 当调用构造函数时只传递给它一个数字参数，**该构造函数将返回具有指定个数、元素为 undefined 的数组。**

:::

## 数组操作

### length

* 可设置或返回数组中元素的数目
* **数组的 length 属性总是比数组中定义的最后一个元素的下标大 1**。
* 对于那些具有连续元素，而且以元素 0 开始的常规数组而言，属性 length 声明了数组中的元素的个数。
* 设置 length 属性可改变数组的大小。
  * 如果设置的值比其当前值小，数组将被截断，其尾部的元素将丢失。
  * 如果设置的值比它的当前值大，数组将增大，新的元素被添加到数组的尾部，它们的值为 undefined。

### 设置或访问数组元素

```javascript
// 格式：数组名[下标]
// 下标就是索引
// 功能：获取数组对应下标的那个值，如果下标不存在，则返回undefined。
var arr = ['tom', 'marry', 'bob'];
arr[0];	// tom
arr[2]; // marry
arr[3]; // undefined，因为数组的最大下标为2,访问3数组越界了，别的编程语言有些会报错


arr[0] = 'xiaofengge';//重新设置第一个元素
arr[0];//xiaofengge  这个时候数据就变了
```

### 遍历数组

* 在JavaScript中，数组的数据类型其实就是对象
* JavaScript中的`For.....in`语句可以实现对一个对象的所有属性的遍历
* 所以我们可以使用for...in语句实现对一个数组的所有元素的遍历
* **数组中有几个元素，for..in语句就循环执行多少次**

```javascript
var x  
var arr = new Array()  
mycars[0] = "hello"  
mycars[1] = "world"  
mycars[2] = "!"  
  
for (x in arr)  {  
    document.write(arr[x] + "<br />")  
} 

// 结果
// hello   
// world 
// !
```

* 可以使用for循环遍历数组

```javascript
var arr = [11,43,665,21,342,54,66]
for(var i = 0; i < arr.length; i++) {
	// 数组遍历的固定结构
}
```

:::tip

**不同类型的循环** 

JavaScript 支持不同类型的循环：

- *for* - 循环代码块一定的次数
- *for/in* - 循环遍历对象的属性
- *while* - 当指定的条件为 true 时循环指定的代码块
- *do/while* - 同样当指定的条件为 true 时循环指定的代码块

:::

## 常见数组方法

### push()

* 向数组的末尾添加一个或多个元素，并返回新的长度。
  * 末尾添加
  * 返回的是长度
  * 会改变原数组
  * 可以一次添加多个元素push

```javascript
var arr1 = [11,22,33,44];
var arr2 = arr1.push(55);
console.log(arr1);  //[11,22,33,44] 
console.log(arr2);  // push 返回的是数组长度，5
```

### pop() 

* 用于删除并返回数组的最后一个元素
  * 返回最后一个元素
  * 会改变原数组。

```javascript
var arr = [11,22,33];
console.log(arr.pop()); //33
console.log(arr);  //[11,22]
```

### shift()

* 把数组的第一个元素从其中删除，并返回第一个元素的值
  * 返回第一个元素
  * 改变原数组

```javascript
var arr = [11,22,33];
console.log(arr.shift()); //11
console.log(arr);  //[22,33]
```

### unshift()

* 向数组的开头添加一个或更多元素，并返回新的长度
  * 返回新长度
  * 改变原数组。

```javascript
var arr = [11,22,33,44];
console.log(arr.unshift(3,6)); //6  添加元素并返回新的长度
console.log(arr); //[3, 6, 11, 22, 33, 44]
```

:::tip

unshift()可以不传参数，不传参数就是不增加元素

:::

### concat() 

* 用于连接两个或多个数组。
  * 不会改变现有的数组
  * 仅会返回被连接数组的一个副本

```javascript
ar arr1 = [11,22,33];
var arr2 = [44,55];
var arr3 = arr1.concat(arr2);
console.log(arr1); //[11, 22, 33] 数组arr1 不变
console.log(arr3); //[11, 22, 33, 44, 55] 新返回的数组arr3
```

### join()

* 用于把数组中的所有元素放入一个字符串。
  * 元素是通过指定的分隔符进行分隔的
  * 默认使用','号分割
  * 不改变原数组
  * 常和字符串方法`split`一块使用，效果相反

```javascript
var arr = [11,22,33];
console.log(arr.join());  //11,22,33  默认使用逗号
console.log(arr);  //[11, 22, 33]不改变原来的数组
```

### reverse()

* 用于颠倒数组中元素的顺序。
  * 返回的是颠倒后的数组
  * 会改变原数组

```javascript
var arr = [11,22,33];
console.log(arr.reverse()); //[33, 22, 11] 翻转数组
console.log(arr);  //[33, 22, 11] 会改变原数组
```

### sort 排序

* 按照 Unicode code 位置排序，默认升序
* 如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，是按照字符编码的顺序进行排序
* 要实现这一点，**首先应把数组的元素都转换成字符串（如有必要）**，以便进行比较。

* array.sort()方法默认是升序排序，
  * 如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值
  * 然后返回一个用于说明这两个值的相对顺序的数字。
  * 比较函数应该具有两个参数 a 和 b，其返回值如下：
    * 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
    * 若 a 等于 b，则返回 0。
    * 若 a 大于 b，则返回一个大于 0 的值。

**本质：比较函数两个参数a和b，返回a-b升序，返回b-a降序**

```javascript
var arr = [4,3,6,5,7,2,1];
arr.sort();
console.log(arr);
//输出结果[1,2,3,4,5,6,7]

var arr = [4,3,6,5,7,2,1];
arr.sort();
arr.sort(function(a,b){
    return b-a;
});
console.log(arr);
//输出结果[7,6,5,4,3,2,1]
```

* **按照数组对象中某个属性值进行排序**

```javascript
var arr= [ 
    { 'sortNum': 2},
    { 'sortNum': 1},
    { 'sortNum': 5},
    { 'sortNum': 6},
    { 'sortNum': 7},
    { 'sortNum': 3},
    { 'sortNum': 9},
    { 'sortNum': 4},
    { 'sortNum': 0}
];

arr.sort(function(a, b){
    return a.sortNum - b.sortNum;// 升序排序
});
console.log(arr);
// 0: {sortNum: 0}
// 1: {sortNum: 1}
// 2: {sortNum: 2}
// 3: {sortNum: 3}
// 4: {sortNum: 4}
// 5: {sortNum: 5}
// 6: {sortNum: 6}
// 7: {sortNum: 7}
// 8: {sortNum: 9}
```

### slice()

* 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
  * 返回选定的元素
  * 该方法不会修改原数组

```javascript
var arr = [11,22,33,44,55];
console.log(arr.slice(1,3));  //[22,33]  返回选择的元素
console.log(arr);  //[11,22,33,44,55] 不会改变原数组
```

### splice()

* splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
* 如果从数组中删除了元素，则返回的是含有被删除的元素的数组。
* splice() 方法会**直接对数组进行修改**
  * start：整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
  * deleteCount：要删除的项目数量。如果设置为 0，则不会删除项目。
  * options：向数组添加的新项目（可选）
* 返回值：
  * 包含被删除项目的新数组，如果有的话。

```javascript
var a = [11,22,33,44];
console.log(a.splice(1,0,88)); //[]  么有删除元素，所以返回空数组
console.log(a);  // [11, 88, 22, 33, 44]  第三个参数，添加了88元素，在索引1位置


var b = [11,22,33,44];
console.log(b.splice(1,2,3));  //[22, 33]  返回删除的元素组成的数组
console.log(b); //[11, 3, 44] 尕布了原有的数组
```

### indexOf()

* 返回数组中某个指定的元素位置
* 该方法将从头到尾地检索数组，看它是否含有对应的元素。
* 开始检索的位置在数组 start 处或数组的开头（没有指定 start 参数时）。
  * 如果找到一个 item，则返回 item 的第一次出现的位置。
  * 开始位置的索引为 0。
* 如果在数组中没找到指定元素则返回 -1。

```javascript
var arr = [11, 22, 33, 33];
console.log(arr.indexOf(33)); // 2 第一次出现的位置
console.log(arr.indexOf(44)); // -1  不存在，-1

if (arr.indexOf(44) === -1) {
    // 元素不存在数组中
    console.log('44不在数组arr中')
}
```

### lastIndexOf()

* 返回一个指定的元素在数组中最后出现的位置，在一个数组中的指定位置从后向前搜索。
* 如果要检索的元素没有出现，则该方法返回 -1。
* 该方法将**从尾到头**地检索数组中指定元素 item。
  * 开始检索的位置在数组的 start 处或数组的结尾（没有指定 start 参数时）。
  * 如果找到一个 item，则返回 item 从尾向前检索**第一个次出现在数组的位置**。
  * 数组的索引开始位置是从 0 开始的。
* 如果在数组中没找到指定元素则返回 -1。

```javascript
var arr = [11, 22, 33, 22];
console.log(arr.lastIndexOf(22));     // 3
console.log(arr.lastIndexOf(7));     // -1  找不到返回-1
console.log(arr.lastIndexOf(22, 3));  // 3  索引3开始
console.log(arr.lastIndexOf(22, 2));  // 1  索引1开始
console.log(arr.lastIndexOf(22, -2)); // 1  
console.log(arr.lastIndexOf(22, -1)); // 3
```



:::tip

**start可以是负数，索引0是数组第一个元素，那么-1是数组倒数第一个元素，以此类推**

:::

### toString()

* 把数组转换为字符串，并返回结果。
* 返回值与没有参数的 join() 方法返回的字符串相同。

```javascript
var arr = new Array(3)
arr[0] = "11"
arr[1] = "22"
arr[2] = "33"
console.log(arr.toString()) // 11,22,33
```

### forEach()

* 用于调用数组的每个元素，并将元素传递给回调函数。
  * **没有返回值**
  * forEach() 对于空数组是不会执行回调函数的
  * callback的参数： 
    * value --当前索引的值 必选
    * index --索引 可选
    * array --原数组 可选

```javascript
var arr = [11，22，33，44]
arr.forEach((item, index) => {
    // item 当前元素，必选
    // index 当前元素的索引
    // 匿名函数，是里面每一个item都会执行一次
})
```

### map()

* **返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。**
* 按照原始数组元素顺序依次处理元素
* map() 不会对空数组进行检测
* map() 不会改变原始数组

```javascript
let arr = [11,22,33,44,55]
let ret = arr.map( (value,index,array)=>{
    console.log('value',value)
    console.log('index',index)
    console.log('array',array)
})   
console.log(arr)
console.log(ret)
```

:::tip

**arr.forEach()和arr.map()**

* arr.forEach()是和for循环一样，是for循环的替代品
* arr.map()是修改数组其中的数据，并返回新的数据
  * arr.forEach() 没有return
  * arr.map() 有return

:::

### filter()

* 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
* **返回true的项组成的数组**
  * filter() 不会对空数组进行检测。
  * filter() 不会改变原始数组。

```javascript
let arr = [11,22,33,44,55]
let arr1 = arr.filter( (i, v) => {
    if(i < 33) {
        return true
    }
})
console.log(arr1)    // [11, 22]
```

### some()

* 数组中的每一项给定特定的函数，如果任一项返回true,则返回true
* **数组中任意一个元素满足条件，返回值就是true**

```javascript
function compare(element, index, array) {
  return element > 44;
}    
[11, 22, 33, 44, 55].some(compare);  //true   有一个满足条件的，返回true
[11, 22, 33, 44].some(compare); // false  没有满足条件的，返回false
```

### every()

* 对数组的每一项都运行给定的函数，每一项都返回 ture，则返回 true
* 如果有一项返回false，那么就返回false，并且结束循环

```javascript
var arr = [11, 22, 33, 44];
var boolValue = arr.every(function (t) {
    return t + 1 > 10;
});
console.log(boolValue); //true 每一项加1，都大于10
```

### reduce()

* 返回数累加的值  累加器
* **迭代数组的所有项，累加器，数组中的每个值（从左到右）合并，最终计算为一个值**
* **arr.reduce(callback, initialValue)** 
* callback: 
  * previousValue 必选 --上一次调用回调返回的值，或者是提供的初始值（initialValue）
  * currentValue 必选 --数组中当前被处理的数组项
  * index 可选 --当前数组项在数组中的索引值
  * array 可选 --原数组
* initialValue: 可选 --初始值

```javascript
let arr = [11,22,33,44]
let arr1 = arr.reduce((preValue, curValue) => 
    preValue + curValue
)
console.log(arr1)    // 110
```

### reduceRight()

* 和arr.reduce()功能一样
* reduceRight()从数组的**末尾向前**将数组中的数组项做累加

```javascript
let arr = [11,22,33,44]
let arr1 = arr.reduceRight((preValue, curValue) => 
    preValue + curValue
)
console.log(arr1)    // 110
```

## ES6新增数组方法

### from()

* 将两类对象转为真正的数组
  * 类似数组的对象（array-like object）
  * 可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

```javascript
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']


// 转化NodeList对象
let ps = document.querySelectorAll('p');
Array.from(ps).filter(p => {
  return p.textContent.length > 100;
});

// 转化arguments对象
function foo() {
  var args = Array.from(arguments);
  // ...
}

// 转化字符串，因为字符串有length属性，也可以通过下标访问数据
Array.from('hello')
// ['h', 'e', 'l', 'l', 'o']

// 转化set
let namesSet = new Set(['a', 'b'])
Array.from(namesSet) // ['a', 'b']
```

:::tip

* 如果参数是一个真正的数组，`Array.from`会返回一个一模一样的新数组
* 对于还没有部署该方法的浏览器，可以用`Array.prototype.slice`方法替代
* `Array.from`还可以接受第二个参数，作用类似于数组的`map`方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

:::

### of()

* 将一组值，转换为数组

```javascript
Array.of() // []  没有参数，返回空数组
Array.of(undefined) // [undefined]
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
```

:::tip

可以用来替代`Array()`或`new Array()`，解决由于参数不同而导致一些问题

:::

### find()

* 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索。

```javascript
let arr = [11,22,33,44,55,22,33]
let arr1 = arr.find((value, index, array) =>value > 22)
console.log(arr1)   // 33  找到33，就直接返回，停止
```

### findIndex()

* 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，**返回它的下标**，终止搜索。

```javascript
let arr = [11,22,33,44,55]
let arr1 = arr.findIndex((value, index, array) => value > 22)
console.log(arr1)  // 2
```

### fill()

* **使用给定的值，填充一个数组**
* **填充完后会改变原数组**
* **arr.fill(target, start, end)** 
  * target -- 待填充的元素
  * start -- 开始填充的位置-索引
  * end -- 终止填充的位置-索引（不包括该位置)

```javascript
let arr = [11, 22, 33, 44, 55]
let arr1 = arr.fill(88)
console.log(arr1)  // [88, 88, 88, 88, 88]
console.log(arr)   // [88, 88, 88, 88, 88]

let arr2 = arr.fill(5, 2)
console.log(arr2) // [88, 88, 5, 5, 5]

let arr3 = arr.fill(5, 1, 3)
console.log(arr3) // [88, 5, 5, 5, 5]
```

### copyWithin()

* 在当前数组内部，将制定位置的数组复制到其他位置
* **会覆盖原数组项**
* **返回当前数组**
* **arr.copyWithin()**
  * target --必选 索引从该位置开始替换数组项
  * start --可选 索引从该位置开始读取数组项，默认为0.如果为负值，则从右往左读。
  * end --可选 索引到该位置停止读取的数组项，默认是Array.length,如果是负值，表示倒数 

```javascript
let arr = [11, 22, 33, 44, 55, 66, 77]
let arr1 = arr.copyWithin(1)
console.log(arr1)   // [11, 11, 22, 33, 44, 55, 66]
let arr2 = arr.copyWithin(1, 2)
console.log(arr2)   //  [11, 22, 33, 44, 55, 66, 66]
let arr3 = arr.copyWithin(1, 2, 4)
console.log(arr3)   // [11, 33, 44, 44, 55, 66, 66]
```

### includes

* **判断数中是否包含给定的值**

```javascript
let arr = [11, 22, 33, 44, 55]
let arr1 = arr.includes(33)
console.log(arr1)   // ture

let arr2 = arr.includes(88)
console.log(arr2)    // false

let arr3 = [11, 22, 33, NaN].includes(NaN)
console.log(arr3)  // true
```

:::tip


**includes与indexOf()**

* indexOf()返回的是数值，而includes()返回的是布尔值

* indexOf() 不能判断NaN，返回为-1 ，includes()则可以判断

:::

###  entries()

* 遍历数组的键名和键值

```javascript
let arr = [11, 22, 33, 44]
let arr1 = arr.entries()
for (let e of arr1) {
    console.log(e);  
    // [0, 11]
    // [1, 22]
    // [2, 33]
    // [3, 44]
}
```

### keys()

* 遍历数组的键名

```javascript
let arr = [11, 22, 33, 44]
let arr2 = arr.keys()
for (let key of arr2) {
    console.log(key);   // 0,1,2,3
}
```

### values()

* 遍历数组键值

```javascript
let arr = [11,22, 33, 44]
let arr1 = arr.values()
for (let val of arr1) {
    console.log(val);   // 11,22,33,44
}
```

