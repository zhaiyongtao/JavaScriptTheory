/**
 * ES5模拟块级作用域 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/24 1:02 下午
 * @LastEditTime: 2021/7/24 1:02 下午
 */
/**
 * 没有块级作用域的时候
 * var 生命的变量没有办法感知到块级作用域
 */

function foo () {
    for(var i=0; i< 3 ;i++) {

    }

    console.log(i) // 3
 }

 foo()


function goo () {
    (function (){
        for (var i =0; i<3; i++) {

        }
        console.log(i) //3
    })()

    console.log(i) // 报错，i 是undefined
}

goo()