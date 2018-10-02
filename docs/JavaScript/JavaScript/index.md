# JavaScript笔记简介

:::tip

**最后更新时间：2018年10月2日**

**字数：8675**

:::

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

### map()

### filter()

### some()

### every()

### reduce()

### reduceRight()

### 