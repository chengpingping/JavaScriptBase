# JavaScript学习

## 语言

1.JavaScript是一种编程语言

	编程语言：有很强的逻辑和行为能力，是主动的；(JS)
	标记语言：用于格式化和链接，是被动的。(HTML/CSS)

2.翻译器：将高级语言翻译为机器语言

## 计算机基础

### 1.计算机由硬件和软件组成

**硬件**

	输入设备
	输出设备
	CPU
	硬盘
	内存

**软件**

	系统软件
	应用软件

### 2.数据的存储

计算机中的数据以二进制的形式存储在电脑上

程序的运行：硬盘->内存条->cpu

## JavaScript

1.运行在客户端的脚本语言

2.脚本语言：不需要编译，由js引擎逐行翻译并执行

3.也可以基于node.js技术进行服务端的编程

4.作用：

	表单验证
	网页特效
	服务端开发（Node.js）
	桌面应用（Electron）
	APP（Cordova）
	控制硬件-物联网（Ruff）
	游戏开发（cocos2d-js

5.运行：

**浏览器**

	渲染引擎：用来解析HTML和CSS，俗称内核（比如：Chrome的blink和webkit）；
	JS引擎：JS解释器，用于读取网页的JavaScript代码，解释运行js代码（比如：chrome的V8）。

浏览器本身不会执行js代码，是通过JavaScript引擎（解释器）来执行JS代码。JS引擎是逐行解释源码。

6.组成：

**基础**

	ESMAScript：JS的语法

**Web APIs**

	DOM：页面文档对象模型，可以对页面中的元素进行操作；
	BOM：浏览器对象模型，可以对浏览器窗口进行操作。

7.js的书写

**位置**

	行内式:直接写在元素内部
	内嵌式：在页面中<script></script>
	外部js：在外部新建一个.js的文件，然后在页面中引用<script src="js文件的路径"></scirpt>

**注释**

	单行：// ctrl+/
	多行：/**/ ctrl+shift+/

# 输出语句

	alert(msg)警示框
	console.log(msg)控制台打印
	prompt(info)输入框，用于用户输入

# 变量

变量是数据在内存中申请的一块用来存放数据的空间。

通过变量名查找变量的内存空间。

	声明变量：var name;(var:variable可变的)
	赋值：name="cpp";

**变量的扩展语法**

	更新变量：给变量重新赋值
	多个变量声明：用,隔开；只声明不赋值结果是undefined；未声明也不赋值的变量访问会报错；未声但是赋值的变量可以使用。

**变量的命名规范**

	字母数字下划线$
	严格区分大小写
	尽量不要使用name作为变量名

# 数据类型

计算机中不同的数据存储在不同的存储空间，为了充分利用存储同空间，定义了不同的数据类型。

JS是弱类型语言，赋值的时候才知道数据的类型

JS是动态语言，变量的类型可以改变

## 简单数据类型

### 1.Number:数字型

其他进制：

	八进制 var num=010;
	十六进制 var num=0x9;

MAX_VALUE:最大数值

MIN_VALUE：最小数值

Infinity：无穷大

-Infinity：无穷小

NAN：（not a number）非数，'2'-2;

	isNAN()用于判断是否为数字，如果是数字返回false;反之true。

### 2.String：字符串型

用''或则""引用起来

嵌套使用：外双内单或则内双内单

转移字符：

	\n:换行
	\':'
	\":"
	\b:空格

属性：

	String.length:获取字符串的长度

拼接：

	var str="a"+1

### 3.Boolean：布尔型

	true:真,1
	false:假,0

### 4.Undefined：未定义

### 5.Null：空

## 复杂数据类型

### 6.Objective

## 检测数据类型

typeof 变量

## 字面量

字面量就是这个数据是什么样的值

## 数据类型转换

### 1.转换为字符串

	var num=10;

**使用+**(隐式转换)

	num=num+'';

**变量.toString**

	num.toString();

**String(变量)**

	String(num);

### 2.转换为数值

**parseInt(变量)**

整数

**parseFloat(变量)**

小数

**Number(变量)**

**-、/、* **（隐式转换）

### 3.转换为其他类型

**转换为布尔类型**

	Boolean(变量)：除了''、0、NaN、null、undefined会被转换为false；其他值都会被转换为true。

# 标志符、关键字、保留字

# 运算符

1.算数运算符

	+ - * / %

2.递增递减运算符

	++:递增
	--：递减

**前置和后置的区别**

前置是返回运算后的值；后置是返回原值后再进行运算。

3.比较运算符

	< > <= >= != ==(会转型) ===(数据和类型完全一致) !==

4.逻辑运算符

	&& || !

**逻辑中断**

	&&：遇到false直接返回
	||：遇到true直接返回

5.赋值运算符

	= += -= *= /= %=

6.运算符的优先级

从高到低：

	()
	一元运算符
	算数运算符：先加减后乘除
	关系运算符
	相等运算符
	逻辑运算符
	赋值运算符
	逗号运算符

# 流程控制

控制代码的执行顺序

## 顺序流程控制

按代码编写的顺序执行

## 分支流程控制

根据不同的条件执行不同的代码，得到不同的结果。

**if**

	if(表达式){
		表达式结果为真：执行语句
	}else{
		表达式结果为假：执行语句
	}

**switch**

	witch(表达式){
	case value1:表达式结果等于value1：执语句1;break;
	case value2:表达式结果等于value2：执语句2;break;
	case value3:表达式结果等于value3：执语句3;break;
	...
	default:
		所有的结果都不匹配：执行最后的语句;
	}

## 循环流程控制

**for**

	for(初始化变量;条件表达式;操作表达式){
		循环体
	}

初始化变量：初始化变量，用于计数，整个循环只执行一次

条件表达式：终止条件，每次执行循环体之前要进行判断

操作表达式：每次循环最后执行的变量

**while**

	while(条件表达式){
		循环体
	}

当条件表达式为false时结束循环

** do while**

	do{
		循环体
	}while(条件表达式);

先执行循环体，再判断条件表达式是否为false，条件表达式为false时结束循环

**continue、break**

continue：立即跳出本次循环迅速进入下一次循环

break：结束整个循环

## 三元表达式

	逻辑表达式?表达式3：表达式4
	逻辑表达式的结果为真返回表达式3的值，反之返回表达式4。

# 数组

数据的集合，可以将一组数据存在一个变量名之下；

一个数组中可以放任意类型的数据，用','将数据分开。

## 创建数组

1.数组字面量(常用)

	var arr=[];

2.利用new创建数组

	var arr=new Array();

## 获取数组中的元素

1.索引（下标）：

	访问第3个数据：arr[2];

## 遍历数组

	for(var i=0;i<arr.length;i++){
		console.log(arr[i]);
	}

## 数组中新增元素

1.修改length增加数组

	arr.length+=1;

3.修改索引号

	arr[5]=" ";

**注意**

不要直接给数组赋值，会覆盖之前的数据；

**冒泡排序**

	var nums=[32,45,1,56,3,4,6,87,2,1,32,6,43,23,34,56]
	for(var i=0;i<nums.length;i++){
		for(var j=0;j<nums.length-i;j++){
			if(nums[j]>nums[j+1]){
				var temp;
				temp=nums[j];
				nums[j]=nums[j+1];
				nums[j+1]=temp;
			}
		}
	}
	console.log(nums);

# 函数

封装一段可以被重复执行调用的代码块。

函数可以相互调用也可以调用自己。

## 使用

1.声明函数

	function 函数名(){
		函数体
	}

function：关键字；

函数不调用，函数不执行；

2.调用函数

	函数名();

## 参数

1.形参

声明函数中定义的参数是形参

	function 函数名(形参)

2.实参

函数调用中传递的参数是实参

	函数名(实参);

**形参与实参不匹配**

如果实参多于形参，取形参的个数；

如果实参少于形参，多余的形参定义为undefined。

## 返回值

return

	function 函数名(){
		return 结果；
	}

将结果返回给调用者；

函数遇到return就会终止函数；

return只能返回一个值，用逗号隔开的值只会返回最后一个值；

想要返回多个值，可以用[]将结果包裹起来，将多个结果变成一个数组；

如果函数没有return返回的是undefined；

	break：结束当前循环；
	continue：跳出本次循环；
	return：不经可以退出循环，还可以返回return语句中的值，同时还可以结束当前的代码；

## arguments的使用

arguments是函数的一个内置对象,只有函数才有；

arguments中存储了传递的所有实参。

	function fn(){
		console.log(arguments);
	}
	fn(1,2,3);

arguments是一个伪数组

	伪数组并不是一个真正的数组；
	具有数组的length属性，按照索引的方式进行数组的存储；
	他没有真正数组的方法：pop() push()...

## 函数的声明方式

1.利用函数关键字自定义函数（命名函数）

	function 函数名(){
		函数体
	}
	调用：函数名();

2.函数表达式(匿名函数)

	var 变量名=function(){};
	调用：变量名();

# 作用域

某个代码名字（变量）在某个范围内起作用和效果；

目的是提高程序的可靠性，同时减少命名冲突；

## 全局作用域

作用于整个<script></script>中的，或者是一个单独的js文件中的；

在函数中未定义，直接赋值的变量就是全局变量。

只有浏览器关闭才能销毁，比较占内存。

## 局部作用域

作用于函数内部的，只在这个函数内起效果。

函数的形参也属于局部变量。

程序执行完毕就会销毁，比较节约资源。

**se6之前没有块级作用域**

块级作用域是变量只在{}包含的区间起作用

## 作用域链

只要是代码就有作用域

写在函数内部的局部作用域

如果函数内部还有一个函数，那么作用域中又会诞生一个作用域

内部函数访问外部函数的变量，采取的链式查找，使用的是就近原则

# 预解析

JS的运行机制：先预解析再运行代码

**预解析**

JS引擎会把JS里面的所有的var还有function提升到当前的作用域的最前面

1.变量提升

只提升声明，不提升赋值。

所以赋值必须写在访问变量的前面。

2.函数提升

所有的函数声明提升到当前作用域的最前面，不调用。

所以函数表达式必须写在调用的前面。

**代码执行**

按照代码的顺序从上到下执行

**var a=b=c=9;相当于var a=9;b=9;c=9

# JS对象

对象是一个具体的事物，javascri中对象是一组无序的相关属性和方法的集合；

对象由属性和方法组成：

**属性**：事物的特征（名词）

**方法**：事物的行为（动词）

## 创建对象

保存一个值可以用变量，保存多个值可以用数组，保存一个事物的完整信息可以用对象保存；

### 1.利用字面量创建对象

**对象字面量：{}**

	var obj={};

**注意**

属性和方法采取键值对的方式进项存储   键（属性名）：值（属性值）

多个属性和方法之间用,隔开

方法冒号后面跟的是一个匿名函数

**使用对象**

调用对象的属性：

	对象名.属性名
	对象名['属性名']

调用对象的方法：

	对象名.方法名()

### 2.利用new Object创建对象

**new Object**

	var obj=new Object();//创建了一个空对象

**注意**

利用=赋值的方法，添加对象的属性和方法；

每个属性和方法用;隔开；

**使用对象**

同上；

### 3.利用构造函数创建对象

上面两种创建对象的方法每次只能创建一个，所以我们将对象封装成一个函数，这个函数就是构造函数，构造函数将对象的属性和方法抽象出来封装到函数中；

构造函数相当于java中的类；

**语法**

	function 构造函数名(){
		this.属性=值;
		this.方法=function(){}
	}

**注意**

构造函数首字母大写

构造函数不需要return就可以返回结果

调用构造函数必须用new

只要调用了```new 构造函数名()```就创建了一个**对象**

构造函数中属性和方法必须用this

构造函数泛指某一个类，对象值具体的摸个事物

**使用对象**

	var 对象名=new 构造函数名(参数,...);

## 关键字new（四部曲）

1.new 构造函数()可以在内存中创建一个空对象；

2.this会指向刚才创建的空对象；

3.执行构造函数的里面的代码，给对象添加属性和方法；

4.返回这个对象（不需要return）。

## 遍历对象属性

**使用for...in...**

for(变量 in 对象){
	对象[变量];
}

**注意**

变量：为属性名

对象[变量]：为属性值

# 变量、属性、函数和方法

变量和属性都是用俩保存数据的；但是变量单独声明并赋值，访问时直接访问```变量名``，属性必须在对象内不需要声明，访问时需要访问：```对象.属性``。

函数和方法都是实现某种功能；函数是单独声明并调用：```函数名();```，方法在对象里面调用时使用：```对象.方法()```;

# JS中的内置对象

JavaScript中对象分为3中：自定义对象、内置对象、浏览器对象；

前两种属于ECMAScript，第三种浏览器对象是JS独有的。

JavaScript中提供的内置对象：Math、Data、Array、String...

## 查文档

[MDN](https://developer.mozilla.org/zh-CN/)

## Math对象

不是一个构造函数，不需要new来调用，直接使用它的方法即可。

**常用**

	Math.PI;
	Math.max();
	Math.min();
	Math.abs();//绝对值
	Math.floor();//向下取整
	Math.ceil();//向上取整
	Math.round();//四舍五入；.5向大的取
	Math.random();//随机数，返回一个浮点数[0,1)之间

## 日期对象

是一个构造函数，必须使用new来调用Date对象；

	var date=new Date();
	date.getFullyear();//获得当前年份
	date.getMonth();//获得当前月份
	date.getDate();//获取当前的日期
	date.getDay();//获得当前的星期数
	date.getHoure();//获得当前的小时
	date.getMinute();//获得当前的分钟
	date.getSecond();//获得当前的秒数
	//获取当前总的毫秒数（时间戳）
	date.valueOf();
	date.getTime();
	var milliseconds=+new Date();//最常用
	Date.now();//H5中新增获得毫秒数

**参数**：

	数字：用,隔开
	字符串：用-或者/隔开

**注意**

月份是0-1；

周日返回的是0；

获取的总的毫秒数(时间戳)是从1970.1.1开始到现在的毫秒数；```date.valueOf()```或者```date.getTime()```或者```+new Date()```

## 数组对象

1.字面量创建数组

	var arr=[];

2.利用new Array()

	var arr=new Array();
	var arr=new Array(2);//表示数组的长度为2
	var arr=new Array(2,3);//表示数组中有两个元素2

3.检测是否为数组

	arr instanceof（运算符） Array
	Array.isArray(arr);//返回true/false

4.添加数组元素

	arr.push(arr);//可以在数组末尾添加一个或则多个数组元素,参数为数组元素，返回结果是新数组长度，原数组会改变。
	arr.unshift();//可以在数组的前面添加元素，参数为数组元素，返回结果是新数组长度，原数组会改变。
	arr.pop();//可以并且只能删除数组的最后一个元素，没有参数，返回值是删除的元素，原数组会改变。
	arr.shift();//可以并且只能删除数组的第一个元素，没有参数，返回值是删除的元素，原数组会改变。

5.其他数组方法

	arr.reserve();//翻转数组
	arr.sort();//数组排序（冒泡排序）
	arr.sort(function(a,b){
		return a-b;//升序
		return b-a;//降序
	});
	arr.indexOf('元素值'[,index]);//返回数组元素的索引(从前面查找),只返回第一个元素的索引，如果找不到则返回-1；
	arr.lastindexOf('元素值');//返回数组元素的索引(从后面查找),只返回第一个元素的索引，如果找不到则返回-1；
	arr.toString();//将数组装换为字符串；
	arr.join('分隔符');//将数组转换为以分隔符分开的字符串；
	arr.concat();//链接两个字符串，返回一个新数组,不会改变原数组；
	arr.slice(begin,end);//数组截取begin和end之间的数据，不包含end,返回一个被截取的新字符串,不会影响原数组；
	arr.splice(begin,end);//数组删除begin和end之间的数据，包括begin和end，返回被删除的元素新数组，会影响原数组。

## 字符串对象

**基本包装类型**：把简单数据类型包装成复杂数据类型。

JS提供了3中特殊的引用类型：String、Number、Boolean

	var str='andy';

JS把基本数据类型包装成复杂数据类型，执行的过程：

	var temp=new String('andy');//生成临时变量，将简单类型扮装成复杂数据类型；
	str=temp;//赋值给声明的变量
	temp=null;//销毁临时变量

将简单数据类型变成复杂数据类型后，就可以使用其中的属性和方法了。

**字符串的不可变性**

字符串改变的是地址，内存中的数值没有改变。

**根据字符返回位置**

	str.indexOf('字符'[,index]);//返回字符的索引，index是查找的启示位置

**根据位置返回字符**

	str.charAt(index);//返回索引为index的字符
	str.charCodeAt(index);//返回索引为index的字符ASCII值，可以用来判断用户按下了哪个键
	str[index];//H5新增的

**其他**

	str.concat(str1,str2,...);//链接两个或则多个字符串，相当于+
	str.substr(start,length);//截取字符串，从start开始，截取length个字符
	str.replace('被替换的字符','替换为的字符');//替换字符，只会替换第一个字符,返回替换后的字符串，不会改变原字符串
	str.splite('分隔符');//将字符串转换为数组，与join相反,返回一个数组，不会改变原数组
	str.toUpperCase();//转换大写
	str.toLowerCase();//转换小写

# 简单数据类型与复杂数据类型

## 简单数据类型

简单数据类型又叫做**基本数据类型**或者**值类型**

1.String

2.Number

3.Boolean

4.Undefined

5.null返回是一个空的object；

**放在栈里面，直接存放值**

**简单数据类型传参，是为形参在栈里重新开辟一个空间，将实参的值复制个形参，在方法内部做任何的修改，都不会影响外部的变量。**

## 复杂数据类型

复杂数据类型又叫做**引用类型**

1.Array

2.Object

3.Function

**放在堆里面，现在栈里存放地址，然后指向堆里存放的数据**

**复杂数据类型传参，是将变量在栈里的地址复制给了形参，实参和形参保留的是一个地址，所以操作的是同一个对象**

***

***

# Web APIs

## Web APIs和JS的关联性

JS的组成:ECMAScript、DOM、BOM

Web APIs已经不属于ECMAScript标准，属于W3C标准；

Web APIs主要学习DOM和BOM；

Web APIs是JS独有的，主要学习页面交互功能；

## API和Web API

API:（Application Programming Interface）应用程序编程接口；

Web API:浏览器提供的一系列操作浏览器功能和页面元素的API(DOM和BOM)；

# DOM:(document object model)文档对象模型

是W3C推荐的处理可扩展标记语言（HTML或XML）的标准**编程接口**，通过这些接口可以改变网页的内容、接口和样式。

能够使JS操作HTML；

使HTML形成一颗DOM树，包含文档、元素、节点；

通过DOM获取过来的元素是一个对象；

**DOM树**

	文档_根元素<html>
		|_元素<head>
		|	|_元素<title>
		|		|_文本“文档标题”
		|_元素<body>
			|_元素<h1>
			|	|_文本“我的标题”
			|_元素<a>
				|_文本“我的链接”
				|_属性href

文档：document，即页面；

元素：element，即页面中的所有标签；

节点：node，网页中**所有**的内容都是节点（标签、属性、文本、注释）。

## 获取元素

### 1.根据ID获取

	document.getElementById();//返回匹配id的元素，参数是id；如果没有找到，就返回null；

**注意**

文档页面从上向下加载，所以先得到标签，所以script要写到标签下面；

这个方法采用的是驼峰命名法；

返回一个元素对象；

```console.dir();```可以打印返回的对象，查看里面的属性和方法；

### 2.根据标签名获取

	document.getElementsByTagName();//返回带有指定标签名的对象集合

**注意**

返回获取的元素对象集合，以伪数组的形式存储；

可以采取遍历的方式一次访问每个元素对象;

如果页面中只有一个元素，返回的也是一个伪数组；

没有这个元素，返回的是一个空的伪数组；

获取某个标签下的某个元素集合，可以综合getElementById和getElementByTagName;

### 3.通过HTML5新增的方法获取

**使用类选择器**

	document.getElementByClass();//返回带有指定类名的对象集合

**querySelector()**

	document.querySelector('选择器');//返回指定选择器的第一个元素对象

**querySelectorAll()**

	document.querySelectoAll('选择器');//返回指定选择器的元素对象集合

	这里的选择器可以使 标签、#id、.类名；

### 4.特殊元素获取

**获取body元素**

	document.body;

**获取html元素**

	document.documentElement;

## 事件基础

JS使我们有能力创建动态页面，事件是可以被JS侦测到的行为，是一个触发-响应机制。

1.事件有三部分组成：事件源、事件类型、事件处理程序

	事件源：事件被触发的对象，如：按钮...
	
	事件类型：如何触发，如：鼠标点击、键盘按下...
	
	事间处理程序：通过函数赋值方式完成。

2.事件的执行步骤

	获取事件
	
	注册事件（绑定事件）
	
	添加事件处理程序（采取函数赋值的形式）

## 操作元素

**1.改变元素的内容**

	element.innerText
	element.innerHTML

区别：

1.innerText（非标准）不识别HTML标签，innerHTML（w3c标准）识别HTML标签；

2.连个元素都可以读写，innerText不会保留HTML标签，innerHTML会保留HTML标签；

**2.属性修改**

	element.属性='修改值';

**3.修改表单属性**

	input.value='修改表单值';//修改你表单值
	btn.disabled=true;//禁用表单按钮

**修改样式属性**

	element.style.样式名称;//行内样式操作，样式名称采用驼峰命名法，由于修改后产生的是行内样式，所以css的权重比较高。
	element.className;//类名样式操作，将改变的样式写在css中，通过改变类名来改变样式。

**获取元素的属性值**

	element.属性;//获取元素内置属性值（自带属性）
	element.getAttribute('属性');//主要用于获取自定义属性值，也可以获取内置的属性值

**修改属性值的第二种方法**

	element.setAttribute('属性','属性值');//可以修改自定义属性值，也可以修改内置的属性值

**移除属性**

	element.removeAttribute('属性');//自定义和内置属性都可以移除

**自定义属性的规范**

	H5中自定义属性data-开头作为属性名并赋值

**获取自定义属性**

	element.getAttribute('data-index');//兼容性好
	element.dataset.index;//必须是以date开头的自定义属性，dateset是一个集合，里面存放的是以data开头的自定义属性，如果自定义属性里面有多个-连接的单词，获取时index应该用驼峰命名法；
	element.dataset[index];

[H5中自定义属性](https://github.com/chengpingping/H5andCSS3#h5%E4%B8%AD%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7)

## 节点操作

利用父子兄节点获取元素

逻辑性更强，但是兼容性查=差

节点一般拥有nodeType（节点类型）、nodeName（节点名称）、nodeValue（节点值）

	元素节点的nodeType为1
	属性节点的nodeType为2
	文本节点的nodeType为3

主要操作元素节点!

**父节点**

	子元素.parentNode;//得到是离元素最近的父级节点，如果找不到父节点返回空。

**子节点**

	父元素.childNodes;//获得所有的子节点，包含：元素节点、文本节点...

获取元素节点：

	var children=box.childNodes;
	for(var i=0;i<children.length;i++){
		if(children[i].nodeType===1){
			console.log(children[i]);
		}
	}
	//或者
	parentNode.children;//获取所有子元素的节点（常用）

第一个或者最后一个子节点：

	parentNode.firstChild;//获得第一个子节点，不管是文本节点还是元素节点
	parentNode.lastChild;//获得最后一个节点，不管是文本节点还是元素节点

第一个或者最后一个元素子节点：(ie9+才支持)

	parentNode.firstElementChild;//返回第一个子元素
	parentNode.lastElementChild;//返回第一个子元素

**兄弟节点**

	node.nextSibling;//获得下一个兄弟节点，不管是文本节点还是元素节点
	node.previousSibling;//获得上一个兄弟节点，不管是文本节点还是元素节点

获取元素兄弟节点：(ie9+才支持)

	node.nextElementSibling;//获得第一个兄弟节点
	node.previousElementSibling;//获得第一个兄弟节点

**兼容性函数**

	function getNextElementSibling(element){
		var el=element;
		while(el=el.nextSibling){
			if(el.nodeType===1){
				return el;
			}
		}
		return null;
	}

**创建节点**

	document.createElement('元素');//创建节点，创建多个节点效率可能较低，但是结构清晰
	document.write('元素');//创建元素,直接将内容写到页面的内容流，但是文档流执行完毕，会导致页面重绘
	element.innerHTML='元素';//写入摸个DOM节点，不会导致页面重绘，使用字符串拼接的方式效率低，采用数组的拼接方式效率高

**添加节点**

	node.appendChild(child);//追加子节点，在后面进行追加
	node.insertBefore(child,'指定子节点');//将元素插入指定元素的前面

**删除节点**

	node.removeChild(child);//删除子节点

**复制节点**

	node.cloneNode();//克隆一个节点，如果括号中的参数为空或者为false，则是浅拷贝，不会复制里面的子节点;参数为true，就是深拷贝。

# 事件高级




