/**
 * 闭包面试题$ - 闭包面试题
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/5/7 3:27 下午
 * @LastEditTime: 2021/5/7 3:27 下午
 */
// for (var i = 0; i<5 ; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }
// 输出 5 个 5

// 正常输出方式一
// 利用setTimeout的第三个参数
for(var i =0 ;i<5;i++) {
    setTimeout(function (j){
        console.log(j)
    },1000,i)
}
// 0 1 2 3 4

// 正常输出方式二
// 利用立即执行函数
for (var i =0;i<5;i++) {
    (function (j){
        setTimeout(function (){
            console.log(j)
        }, 1000)
    })(i)
}
// 输出 0 1 2 3 4

// for (var i=0; i<5; i++) {
//     (function() {
//         setTimeout( function timer() {
//             console.log( i );
//         }, 1000 );
//     })();
// }
// 5 5 5 5 5
// 通过闭包，将i的变量驻留在内存中，当输出j时，引用的是外部函数的变量值i，i的值是根据循环来的，执行setTimeout时已经确定了里面的的输出了。

// 正常输出方式三
// 利用外部函数来缓存每一个循环的I值
var outPut = function (i) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}

for (var i =0;i<5;i++) {
    outPut(i)
}
// //输出 0 1 2 3 4
//
// // 正常输出方式四
for(let i = 0 ;i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}
// 正常输出 0 1 2 3 4


