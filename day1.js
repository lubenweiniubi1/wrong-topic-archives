var foo = function (x, y) {
  console.log(1)
  return x - y
}

function foo(x, y) {
  console.log(2)
  return x + y
}

var num = foo(1, 2)
console.log(num) //-1

/**
 * 函数的提升和变量的提升类似，都是提升到作用域的最开始的位置，只不过变量的提升是分两步的，
 * 第一步是变量声明的提升，第二步是变量的赋值。
 * 而函数的提升是直接将整个函数整体提升到作用域的最开始位置，相当于剪切过去的样子
 */

// if (1) {
//   function foo1() {} //这里是块作用域 类似，const let，所以会报错
//   var foo1 = 10 //Identifier 'foo1' has already been declared

//   console.log(foo1)
// }

function foo1() {} //这里是块作用域 类似，const let，所以会报错
var foo1 = 10 //Identifier 'foo1' has already been declared

console.log(foo1)
