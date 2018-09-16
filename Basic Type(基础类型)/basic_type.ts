'strictNullChecks'

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

// Any(任意类型) 
// 当我们为还不清楚类型的变量指定一个类型时，
// 不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查 
// 那么我们可以使用 any类型来标记这些变量
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

// 当你只知道一部分数据的类型时，any类型也是有用的。 
// 比如，你有一个数组，它包含了不同的类型的数据：
let lists: any[] = [1, true, 'free'];
lists[1] = '100'

// Void 表示没有任何类型 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser():void {
    alert('This is my warning message');
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable1: void = null;
let unusable2: void = undefined;

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

// 默认情况下null和undefined是所有类型的子类型。 
// 就是说你可以把 null和undefined赋值给number类型的变量。
let u2: undefined = null;
let n2: null = undefined;
let num2: number = undefined;
let str2: string = null;

// Never类型表示的是那些永不存在的值的类型
// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式
// 或箭头函数表达式的返回值类型
// 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
        console.log('无限打印')
    }
}

// 类型断言
// 当我们清楚地知道一个实体具有比它现有类型更确切的类型
// 通过类型断言这种方式可以告诉编译器 我们需要转换的的类型
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构
// TypeScript会假设你，程序员，已经进行了必须的检查

// “尖括号”语法
let someValue: any = 'this is a string';
let stringLength: number = (<string>someValue).length;

// as语法
// 当你在TypeScript里使用JSX时，只有 as语法断言是被允许的
let someValue2: any = 'this is a string';
let stringLength2: number = (someValue as string).length;

// 将一个联合类型的变量指定为一个更加具体的类型
function getLength(something: string | number) {
    return (<string>something).length;
}

// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
// function getLength2(something: string | number) {
//     return <boolean>something;//   Type 'number' is not comparable to type 'boolean'.
// }
