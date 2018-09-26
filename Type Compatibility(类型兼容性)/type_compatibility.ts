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

// 检查函数参数时使用相同的规则
function greet(n: Named) {
    alert('Hello, ' + n.name);
}

greet(y1);

// 这个比较过程是递归进行的，检查每个成员及子成员。

// 比较两个函数
// 查看x是否能赋值给y，首先看它们的参数列表。
// x的每个参数必须能在y里找到对应类型的参数。
// 注意的是参数的名字相同与否无所谓，只看它们的类型
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x;
// 赋值错误，因为y有个必需的第二个参数，但是x并没有，所以不允许赋值。
// x = y;

// 下面来看看如何处理返回值类型，创建两个仅是返回值类型不同的函数：
let xx = () => ({ name: 'Alice' });
let yy = () => ({ name: 'Alice', location: 'Seattle' });

xx = yy;

// yy = xx;

// 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。