// 枚举
// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 
// TypeScript支持数字的和基于字符串的枚举。

// 数字枚举
// 我们定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
// 完全不使用初始化器：
// Up的值为 0， Down的值为 1等等。 
// 当我们不在乎成员的值的时候，这种自增长的行为是很有用处的，
// 但是要注意每个枚举成员的值都是不同的
enum Direction2 {
    Up,
    Down,
    Left,
    Right,
}

// 使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
enum Response1 {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response1): void {
    console.log(recipient, message);
}
respond("Princess Caroline", Response1.No)

function getSomeValue() {
    return 'aaaa';
}

// 字符串枚举
// 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
// 字符串枚举没有自增长的行为 字符串枚举可以很好的序列化
enum Direction3 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 计算的和常量成员
// 每个枚举成员都带有一个值，它可以是 常量或 计算出来的
// 当满足如下条件时，枚举成员被当作是常量

// 它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
// E.X is constant:
enum E { X }

// 它不带有初始化器且它之前的枚举成员是一个 数字常量。 
// 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
// All enum members in 'E1' and 'E2' are constant.
enum E1 { X, Y, Z }

enum E2 {
    A = 1, B, C
}

// 枚举成员使用 常量枚举表达式初始化。 
// 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 
// 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：

// 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
// 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
// 带括号的常量枚举表达式
// 一元运算符 +, -, ~其中之一应用在了常量枚举表达式
// 常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。

// 联合枚举与枚举成员的类型