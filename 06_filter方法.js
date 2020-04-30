// 只要单数
/* var arr1 = [34, 45, 345, 234, 12, 341, 123, 12, 5, 656, 57, 234, 34];
var arr2 = arr1.filter(item => item % 2 != 0);
console.log(arr2); */

// *******************************************
// 删除id为2的人
var arr1 = [
  {id: 1, name: 'AA', age: 20},
  {id: 2, name: 'BB', age: 23},
  {id: 3, name: 'CC', age: 14},
];
var arr2 = arr1.filter(item => item.id != 2);
console.log(arr2);


