/**
 * 闭包面试题$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/5/20 4:57 下午
 * @LastEditTime: 2021/5/20 4:57 下午
 */

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
// test()()  // 10 ni'ming


var test = (function () {
    var num = 0
    return () => {
        return num
    }
}())

for (var i = 0; i < 10; i++) {
    test()
}

console.log('test()', test())

