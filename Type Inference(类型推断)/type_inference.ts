// 基础
// TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型
// 变量x的类型被推断为数字。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。
let x = 3;

let x2 = [0, 1, null];

window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};