var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
// 继承
// 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype["break"] = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog["break"]();
dog.move(10);
dog["break"]();
// 类从基类中继承了属性和方法
// Dog是一个 派生类，它派生自 Animal 基类，通过 extends关键字
// 派生类通常被称作 子类，基类通常被称作 超类
// 公共，私有与受保护的修饰符
// 默认为 public
// 在TypeScript里，类的成员都默认为 public
// 也可以明确的将一个成员标记成 public
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    Animal3.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal3;
}());
// 理解 private
// 当成员被标记成 private时，它就不能在声明它的类的外部访问 
// 只能在类的内部使用
// 子类中也不能使用
// class Animal4 {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// new Animal4('Cat').name;// 错误: 'name' 是私有的.
// 类型兼容
// 当我们比较两种不同的类型时，并不在乎它们从何处而来，
// 如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的
// 当我们比较带有 private或 protected成员的类型的时候 情况就不同了
// 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 
// 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。
// class Animal5 {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// class Rhino extends Animal5 {
//     constructor() { super("Rhino"); }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// let animal = new Animal5("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.
//理解 protected
// protected成员在派生类中仍然可以访问
// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name; }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name)
//         this.department = department;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
// 我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，
// 因为 Employee是由 Person派生而来的。
// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
// class Person2 {
//     protected name: string;
//     protected constructor(theName: string) { this.name = theName; }
// }
// // Employee 能够继承 Person
// class Employee2 extends Person {
//     private department: string;
//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }
// let howard2 = new Employee2("Howard", "Sales");
// let john = new Person2("John"); // 错误: 'Person' 的构造函数是被保护的.
// readonly修饰符
// 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
