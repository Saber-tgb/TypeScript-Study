
// 函数类型

// 为函数定义类型
// 给每个参数添加类型之后再为函数本身添加返回值类型
// TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number {
    return x + y;
}

//书写完整函数类型
// 函数类型包含两部分：参数类型和返回值类型。
let myAdd2: (x: number, y: number) => number = 
    function(x: number, y:number): number {return x + y};

// 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 
// 这个名字只是为了增加可读性。 我们也可以这么写：
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
// => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型，和 ES6 的箭头函数不一样
let myAdd3: (baseValue: number, increment: number) => number = 
    function(x: number, y: number): number {return x + y};

// 推断类型
// 如果你在赋值语句的一边指定了类型但是另一边没有类型的话，
// TypeScript编译器会自动识别出类型：
// 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
let myAddFun = function(x: number, y: number): number {
    return x + y;
}

let myAddFun2: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y};

// 可选参数和默认参数
// TypeScript里的每个函数参数都是必须的
// 传递给一个函数的参数个数必须与函数期望的参数个数一致
// function buildName(firstName: string, lastName: string) {
//     return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // ah, just right

// ypeScript里我们可以在参数名旁使用 ?实现可选参数的功能
// 可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，
// 那么就必须调整它们的位置，把first name放在后面。
// function buildName2(firstName: string, lastName?: string) {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }

// let result1 = buildName2("Bob");  // works correctly now
// let result2 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName2("Bob", "Adams");  // ah, just right


// 在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时
// 它们叫做有默认初始化值的参数
function buildName3(firstName: string, lastName = 'smith') {
    return firstName + ' ' + lastName;
}

let result1 = buildName3("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName3("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName3("Bob", "Adams");         // ah, just right

// 在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样
// 与可选参数一样，在调用函数的时候可以省略
// 也就是说可选参数与末尾的默认参数共享参数类型。
// 可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，
// 那么就必须调整它们的位置，把first name放在后面。
function buildName4(firstName: string, lastName?: string) {
    // ...
}
// 和
function buildName5(firstName: string, lastName = "Smith") {
    // ...
}
// 一样 共享同样的类型(firstName: string, lastName?: string) => string

// 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。
// 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。
// function buildName(firstName = "Will", lastName: string) {
//     return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
// let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"

// 剩余参数
// 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来
// 在TypeScript里，你可以把所有参数收集到一个变量里：
// 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。
// 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");


// this
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);