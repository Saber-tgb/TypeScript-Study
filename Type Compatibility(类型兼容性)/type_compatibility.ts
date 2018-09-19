interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;

p = new Person();
// TypeScript的结构性子类型是根据JavaScript代码的典型写法来设计的
// 因为JavaScript里广泛地使用匿名对象，例如函数表达式和对象字面量，
// 所以使用结构类型系统来描述这些类型比使用名义类型系统更好

interface Named {
    name: string;
}
let x1: Named;
let y1 = {name: 'Alice', location: 'Seattle'};