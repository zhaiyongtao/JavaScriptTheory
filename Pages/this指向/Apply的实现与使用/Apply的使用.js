/**
 * Apply的使用 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/21 23:08
 * @LastEditTime: 2021/6/21 23:08
 */

let obj = {
    a: 1,
    b: 2
}

function getSum (a, b ,c) {
    console.log(a, b, c)
    return this.a + this.b
}


console.log(getSum.apply(obj,12,3))
