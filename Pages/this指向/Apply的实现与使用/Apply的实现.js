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

function getSum(a, b, c) {
    console.log(a, b, c)
    return this.a + this.b
}

Function.prototype.myApply = function (context, args) {
    let _context = context || window;
    let _this = this;
    let result
    _context.fn = _this
    if (typeof this !== 'function') {
        throw new TypeError('函数才能调用myapply')
    }
    if (args && !(args instanceof Array)) {
        throw new TypeError('如果存在,则参数必须为数组')
    }

    if (!args) {
        result = _context.fn()
    } else {
        result = _context.fn(...args)
    }
    delete _context.fn
    return result

}

console.log(getSum.myApply(obj, [1]))