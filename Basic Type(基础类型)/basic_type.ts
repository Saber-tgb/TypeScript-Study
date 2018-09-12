// 布尔值
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

// 字符串
let name1: string = 'bob';
name1 = 'smith';

let name2: string = `Gene`;
let age: number = 37;
let sentencd: string = `Hello, my name is ${ name }. I'll be ${age + 1} years old next month.`;

// 数组：TypeScript 有两种方式定义数组
// 第一种,在元素类型后面接上[],表示由此类型元素组成的一个数组：
let numArr: number[] = [1, 2, 3];
let list: string[] = ['1', '2', '3']; 

// 第二种方式使用数组泛类型,Array<元素类型>
let numArr2: Array<number> = [1, 2, 3];
let list2: Array<string> = ['a', 'b', 'c'];
let arr: Array<boolean> = [true, false, true];

// 元祖Tuple: 元祖类型允许表示一个已知元素数量和类型的数组， 各元素的类型不必相同，和定义类型一至的数组区分
let x: [string, number];
x = ['hello', 10];

// 当访问一个越界的元素，会使用联合类型替代；
x[3] = 'world';
// console.log(x[4].toString());

// 枚举enum: enum类型是对JavaScript标准数据类型的一个补充 使用枚举类型可以为一组数值赋予友好的名字
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
// 枚举是在运行时真正存在的一个对象,它包含双向映射（name -> value）和（value -> name）,
// Enum[Enum["A"] = 0] = "A" : Enum = {0: "A", A: 0}
console.log(c);

// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值
enum Color2 {Red = 1, Green = 5, Blue = 88};
let c2: Color2 = Color2.Green;
console.log(c2)

enum Color3 {Red = 1, Green = '44', Blue = 111};
let c3: Color3 = Color3.Blue;
console.log(c3)

// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字,
// 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
enum Color4 {Red = 1, Green, Blue};
let colorName: string = Color4[2];
alert(colorName);  // 显示'Green'因为上面代码里它的值是2