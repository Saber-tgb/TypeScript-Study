// 迭代器和生成器

// for..of vs. for..in 语句
// for..in迭代的是对象的 键 的列表
// for..of则迭代对象的键对应的值
let list = [3, 4, 5];

for(let i in list) {
    console.log(i);
}

for(let i of list) {
    console.log(i);
}