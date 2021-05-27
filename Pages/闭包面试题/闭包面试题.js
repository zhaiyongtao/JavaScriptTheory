/**
 * 闭包面试题$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/5/20 4:57 下午
 * @LastEditTime: 2021/5/20 4:57 下午
 */
//
// function test (){
//     var num = []
//     var i
//
//     for (i = 0; i < 10; i++) {
//         num[i] = function () {
//             console.log(i)
//         }
//     }
//
//     return num[5]
// }
//
// test()()  // 10
//
//
// var test = (function () {
//     var num = 0
//     return () => {
//         return num
//     }
// }())
//
// for (var i = 0; i < 10; i++) {
//     test()
// }
//
// console.log('test()', test())

// var a = 1
// function test () {
//     a = 2
// return function () {
//     console.log(a)
// }
// var a = 3;
// }
// test()() // 输出2

function foo (a,b) {
    console.log(b);
    return {
        foo: function (c) {
            return foo(c ,a)
        }
    }
}

// var func1 = foo(0) // undefined
// func1.foo(1) // 0
// func1.foo(2) // 0
// func1.foo(3) // 08
// var func2 = foo(0).foo(1).foo(2).foo(3) // undefined 0 1 2
var fun3 = foo(0).foo(1) // undefined 0
fun3.foo(2) // 1
fun3.foo(3) // 1