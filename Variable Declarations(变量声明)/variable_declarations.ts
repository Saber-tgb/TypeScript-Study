// let 声明

// const 声明
// 它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 
// 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值
// 实际上const变量的内部状态是可修改的。
const kitty = {
    name: "Aurora",
    // numLives: numLivesForCat,
};

// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
// kitty.numLives--;

// let vs. const 
// 使用最小特权原则，所有变量除了你计划去修改的都应该使用const。 
// 基本原则就是如果一个变量不需要对它写入，那么其它使用这些代码的人也不能够写入它们，
// 并且要思考为什么会需要对这些变量重新赋值。 
// 使用 const也可以让我们更容易的推测数据的流动。

// 解构
// 解构数组
let input = [1,2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2