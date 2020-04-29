/* function fun(){
    console.log('你好');
}
fun(); */

// ************************************
/* const fun = () => {
  console.log('你好啊');
};
fun(); */

// ************************************
// 如果你的函数体当中只有一条语句，那么可以省略return和大括号
/* const sum = (a, b) => a + b;
console.log(sum(1, 2)); */

// ************************************
// 如果你不省略return，那么就不能省略大括号和换行
/* const sum = (a, b) => {
  return a + b;
};
console.log(sum(6, 7)); */

// ************************************
// 一个参数能够省略圆括号
/* const area = r => 3.14 * r * r;
console.log(area(10)); */

// ************************************
// 如果返回值是对象，那么一定要加一个圆括号
/* const obj = r => ({
  area: 3.14 * r * r,
  girth: 2 * 3.14 * r
});
console.log(obj(10)); */

// ************************************
/* var obj1 = {
  a: 3,
  fun: () => {
    console.log(this.a);
  },
};

// 对象打点没有用的，因为箭头函数是定义时候决定了上下文
obj1.fun();             // undefined
obj1.fun.call(obj1);    // 箭头函数的上下文不可能被更改 */

// ************************************
function fun() {
  return () => {
    console.log(this.a);
  };
}
var xiaogao = {
  a: 20,
};
var xiaoshan = {
  a: 30,
};
// 箭头函数诞生的时候上下文是xiaogao，所以箭头函数的this一辈子都是xiaogao
var jths = fun.call(xiaogao);

jths();                 // 20
jths.call(xiaoshan);    // 20
