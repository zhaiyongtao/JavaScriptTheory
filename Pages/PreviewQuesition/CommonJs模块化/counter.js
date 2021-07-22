/**
 * counter - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/22 3:00 下午
 * @LastEditTime: 2021/7/22 3:00 下午
 */

let counter = 3

let obj = {
    a: 1,
    b:2
}

function foo () {
    return ++counter;
}

module.exports = {
    counter: counter,
    foo: foo,
    obj,
}