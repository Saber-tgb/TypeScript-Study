// function printLabel(labelledObj: { label: string }) {
//     console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: 'size 10 Object' };
// let myObj2 = { size: 10 };
// printLabel(myObj);

// 接口
// 代表了有一个 label属性且类型为string的对象
interface LabelledValue {
    labe: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj);
}
// 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
let myObj = {size: 10, labe: "Size 10 Object"};
printLabel(myObj);

// 可选属性
// 接口里的属性不全都是必需的
// 在可选属性名字定义的后面加一个?符号
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = { color: 'white', area: 100};
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

// 可选属性的好处之一是可以对可能存在的属性进行预定义，
// 好处之二是可以捕获引用了不存在的属性时的错误。

// interface SquareConfig {
//     color?: string;
//     width?: number;
//   }
  
//   function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = {color: "white", area: 100};
//     if (config.clor) {
//       // Error: Property 'clor' does not exist on type 'SquareConfig'
//       newSquare.color = config.clor;
//     }
//     if (config.width) {
//       newSquare.area = config.width * config.width;
//     }
//     return newSquare;
//   }
  
//   let mySquare = createSquare({color: "black"});

// 只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值
// 你可以在属性名前用 readonly来指定只读属性:
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

//ReadonlyArray
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// 把整个ReadonlyArray赋值到一个普通数组也是不可以的。 
// 但是你可以用类型断言重写
a = ro as number[];

// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 
// 做为变量使用的话用 const，若做为属性则使用readonly。

//额外检查
// 对象字面量会被特殊对待而且会经过 额外属性检查，
// 当将它们赋值给变量或作为参数传递的时候
// 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     // ...
// }

// // error: 'colour' not expected in type 'SquareConfig'
// let mySquare = createSquare({ colour: "red", width: 100 });

// 绕开这些检查非常简单。 最简便的方法是使用类型断言：
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// 最佳的方式是能够添加一个字符串索引签名
// 前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性

interface SquareConfig2 {
    color?: string;
    width: number;
    [propName: string]: any;
}

function createSquare2(config: SquareConfig2): {color: string; area: number} {
    let newSquare = { color: 'white', area: 100};
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
createSquare2({coloru: 'aaa',width: 1111})

// 函数类型
// 使用接口表示函数类型，我们需要给接口定义一个调用签名
// 它就像是一个只有参数列表和返回值类型的函数定义。
// 参数列表里的每个参数都需要名字和类型。
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// let mySearch = function(source: string, subString: string): SearchFunc {
//     let result = source.search(subString);
//     return result > -1;
// }

let mySearch: SearchFunc = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

//  对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
let mySearch2: SearchFunc;
mySearch2 = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

// 如果让这个函数返回数字或字符串，
// 类型检查器会警告我们函数的返回值类型与 SearchFunc接口中的定义不匹配。
// let mySearch3: SearchFunc;
// mySearch3 = function(src, sub) {
//     let result = src.search(sub);
//     return result;
// }

// 可索引的类型
// 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。 
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

// 类类型
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {}
}