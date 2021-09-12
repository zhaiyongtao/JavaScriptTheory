/**
 * test - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/11 7:47 下午
 * @LastEditTime: 2021/8/11 7:47 下午
 */
function fun(){}
var f = new fun()

console.log(f.__proto__)// fun(){}
console.log(f.__proto__.__proto__) // object
console.log(f.__proto__.__proto__.__proto__) // null
// console.log(f.__proto__.__proto__.__proto__.__proto__) // 报错

console.log(fun.__proto__) //[Function]
console.log(fun.__proto__.__proto__) // object

console.log(f.prototype) // undefined
console.log(fun.prototype) // fun{}
