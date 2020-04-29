/* {
  let a = 10;
  console.log(a);  // 10
}
console.log(a); // 报错 */

// **********************************************
/* if (true) {
  let a = 10;
}
console.log(a); // 报错 */

// **********************************************
/* console.log(a);  //undefined
var a = 10; */

/* console.log(a);  //报错 let不存在变量提升
let a = 10; */

// **********************************************
/* var a = 10;
{
  console.log(a);  // 报错  “暂时性死区”（简称 TDZ）
  let a = 21;
} */

// **********************************************
/* var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(function () {
    console.log(i);
  });
}
arr[1](); // 10
arr[4](); // 10 */

// **********************************************
/* var arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(function () {
    console.log(i);
  });
}
arr[1](); // 1
arr[4](); // 4 */

// **********************************************
/* for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i); //4 4 4 4
  }, 1000);
}

for (let i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i); // 0 1 2 3
  }, 1000);
} */

// **********************************************
// 不允许重复声明
/* function fun1() {
  var a = 1;
  let a = 10;  // 报错
}

function fun2() {
  let a = 1;
  let a = 10;  // 报错
} */

// **********************************************
/* const a = 10;
a++;
console.log(a); // 报错 常量不能更改 */


