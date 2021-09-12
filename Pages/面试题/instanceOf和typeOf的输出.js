/**
 * instanceOf和typeOf的输出 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/9 9:19 下午
 * @LastEditTime: 2021/8/9 9:19 下午
 */



console.log( [1,2,3] instanceof (Object) ) //true
console.log( NaN instanceof (Object) ) // false

console.log(typeof function (){}) // function

console.log(typeof NaN) // number

console.log(NaN == Object) // false

console.log(typeof [1,2,4]) // number

console.log([1,2,3] instanceof Array)
