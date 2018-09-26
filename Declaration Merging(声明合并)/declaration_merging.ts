// 声明合并
// 指编译器将针对同一个名字的两个独立声明合并为单一声明
// 合并后的声明同时拥有原先两个声明的特性
// 任何数量的声明都可被合并；不局限于两个声明

// 合并接口

// 接口的非函数的成员应该是唯一的。如果它们不是唯一的，那么它们必须是相同的类型。
// 如果两个接口中同时声明了同名的非函数成员且它们的类型不同，则编译器会报错。
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number,
    width: number,
}

let box: Box = { height: 5, width: 6, scale: 10};

// 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。
// 同时需要注意，当接口 A与后来的接口 A合并时，后面的接口具有更高的优先级。

// interface Cloner {
//     clone(animal: Animal): Animal;
// }

// interface Cloner {
//     clone(animal: Sheep): Sheep;
// }

// interface Cloner {
//     clone(animal: Dog): Dog;
//     clone(animal: Cat): Cat;
// }

// 这三个接口合并成一个声明：
// 注意每组接口里的声明顺序保持不变，但各组接口之间的顺序是后来的接口重载出现在靠前位置。
// interface Cloner {
//     clone(animal: Dog): Dog;
//     clone(animal: Cat): Cat;
//     clone(animal: Sheep): Sheep;
//     clone(animal: Animal): Animal;
// }

// 这个规则有一个例外是当出现特殊的函数签名时。 
// 如果签名里有一个参数的类型是 单一的字符串字面量（比如，不是字符串字面量的联合类型），
// 那么它将会被提升到重载列表的最顶端。

interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}

// 合并后的 Document将会像下面这样：

interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}

// 合并命名空间

namespace Animals {
    export class Zebra{ }
}

namespace Animals {
    export interface Legged { numberOfLegs: number;}
    export class Dog { }
}

// 等同于：
namespace Animals2 {
    export interface Legged { numberOfLegs: number; }

    export class Zebra { }
    export class Dog { }
}

// 非导出成员仅在其原有的（合并前的）命名空间内可见。
// 这就是说合并之后，从其它命名空间合并进来的成员无法访问非导出成员。
namespace Animal {
    let haveMuscles = true;

    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}

namespace Animal {
    export function doAnimalsHaveMuscles() {
        return haveMuscles;  // <-- error, haveMuscles is not visible here
    }
}

// 命名空间与类和函数和枚举类型合并

class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { }
}

// 非法的合并
