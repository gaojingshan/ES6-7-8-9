// 映射出一个新数组，每项都是原数组的两倍
/* var arr1 = [1, 2, 3, 4];
var arr2 = arr1.map((item) => item * 3);
console.log(arr2); */

// ****************************************
// 把10改变为30
/* var arr1 = [4, 3, 10, 6];
var arr2 = arr1.map(item => item == 10 ? 30 : item);
console.log(arr2); */

// ****************************************
// 把id为2的同学，的age改变为100
/* var arr1 = [
  {id: 1, name: 'xiaogao', age: 18},
  {id: 2, name: 'xiaoshan', age: 20},
  {id: 3, name: 'shanjie', age: 23},
];
var arr2 = arr1.map(item => item.id == 2 ? {...item, age: 100} : item);
console.log(arr2);
console.log(arr1); */

// ****************************************
// 把下标为2的项，改变为100
var arr1 = [1, 10, 2, 7, 8];
var arr2 = arr1.map((item, index) => index == 2 ? 100 : item);
console.log(arr2);
