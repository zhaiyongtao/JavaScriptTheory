/**
 * loadExports - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/22 3:03 下午
 * @LastEditTime: 2021/7/22 3:03 下午
 */

const m = require('./counter')
console.log(m.obj) // { a: 1, b: 2 }

m.obj.a++;

console.log(m) // { counter: 3, foo: [Function: foo], obj: { a: 2, b: 2 } }

console.log(m.counter) //3

console.log(m.foo()) //4

// commonJS对原始类型数据第二次引用是来自缓存,不会随时去模块里面取
console.log(m.counter) // 3

//引用类型的数据，因为地址没有变，你改变了模块里面的变量的值，自然而然
console.log(m.obj) //{ a: 2, b: 2 }
