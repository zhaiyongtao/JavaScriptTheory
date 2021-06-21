/**
 * Apply的实现与使用 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/21 3:27 下午
 * @LastEditTime: 2021/6/21 3:27 下午
 */

let obj = {
    a: 1,
    b: 2
}

function getSum (a, b ,c) {
    console.log(a, b, c)
    return this.a + this.b
}

Function.prototype.myApply = function (context, args) {
    let _context = context || window;
    console.log(typeof args)
    console.log(args)
    let _this = this;
    if (typeof this !== 'function') {
        throw  new TypeError('函数才能调用myapply')
    }
    if(args instanceof Array) {
        console.log('111')
    }
}

getSum.myApply(obj,[1,2,3])