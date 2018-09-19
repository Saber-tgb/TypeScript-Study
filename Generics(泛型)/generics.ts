// 泛型

// 类型变量
// 我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量
// 它是一种特殊的变量，只用于表示类型而不是值
function identity<T>(arg: T): T {
    return arg;
}

// 定义了泛型函数后，可以用两种方法使用
// 第一种是，传入所有的参数，包含类型参数：
let output1 = identity<string>('myString');

// 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
let output2 = identity(1111);

// 使用泛型变量

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

// 泛型类型
function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity2: <T>(arg: T) => T = identity;

let myIdentity: <T>(arg: T) => T = function<T>(arg: T): T {return arg};

// 泛型约束
// 有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性
// 我们想要限制函数去处理任意带有.length属性的所有类型。
// 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。
// 我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束
interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
function loggingIdentity3<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// loggingIdentity2(222);
loggingIdentity2({length: 10})
loggingIdentity3([1, 3, 4]);