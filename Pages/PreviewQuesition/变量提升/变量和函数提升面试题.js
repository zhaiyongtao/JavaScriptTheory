/**
 * 变量和函数提升面试题 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/23 10:30 下午
 * @LastEditTime: 2021/7/23 10:30 下午
 */

// function foo () {
//     console.log(a) // undefined
//     a = 'aaa';
//     var a = 'bbb';
//     console.log(a) // bbb
// }
//
// foo()


function xoo () {
    var a;
    function a() {}
    a = 1;
    console.log(a) // 1
}

xoo()


function yoo () {
    var a;
    function a() {}
    console.log(a) // function a(){}
}

yoo()


// zoo 和 xoo 相同
function zoo () {
    var a = 1;
    function a() {}
    console.log(a) // 1
}

zoo()

function goo () {
    var a;
    function a (){console.log('a')}
    a() // a函数执行的优先级比 a=1赋值操作高。
    a = 1;
    console.log(a)
}

goo()
// 输出
// a
// 1
