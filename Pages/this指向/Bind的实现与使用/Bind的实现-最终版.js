/**
 * Bind的实现-最终版 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/21 10:59 上午
 * @LastEditTime: 2021/6/21 10:59 上午
 */

Function.prototype.myBind = function (object) {
    if (typeof this != 'function') {
        throw 'caller must be a function'
    }
    let _this = this;
    let _object = object || window
    let args = Array.prototype.slice.call(arguments, 1)
    let newFn = function () {
        let newArgs = Array.prototype.slice.call(arguments, 1)
        if (this instanceof _this) {
            return _this.apply(this, args.concat(newArgs))
        } else {
            return _this.apply(_object, args.concat(newArgs))
        }
    }

    let Nop = function () {
    }

    if (this.prototype) {
        Nop.prototype = this.prototype
        newFn.prototype = new Nop()
    }
    return newFn
}

let obj = {
    a: 1,
    b: 2,
}
 function getCount (a,b) {
    console.log('a+b',a+ b)
     console.log('this.a + this.b', this.a + this.b)
    return this.a + this.b
 }

getCount.prototype.getResult = function () {
    console.log('getCount原型上的方法')
    return this.a + this.b
}

const resultFn =getCount.myBind(obj, 3,4)

// console.log('输出resultFn执行结果', resultFn())

const rf = new resultFn()

rf.getResult() // rf实例对象可以获取到getCount原型上的方法
