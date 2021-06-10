/**
 * Bind的高级实现与new相关$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/10 2:11 下午
 * @LastEditTime: 2021/6/10 2:11 下午
 */
// fn.bind(obj,..args),
Function.prototype.mybind = function (context, ...args) {

    if (typeof this != 'function') {

        throw 'caller must be a function'

    }

    let _this = this // 指向被bind的函数 fn.bind(obj),指向的就是fn

    console.log('_this', _this)



    // // 维护原型
    //
    if (this.prototype) {

        NOP.prototype = this.prototype

    }

    fBound.prototype = new NOP()
    let NOP = function () {
    }

    let fBound = function () {

        // 获取，传给Bind之后返回的函数的入参

        let arg_ = Array.prototype.slice.call(arguments)
        console.log('arg_',arg_)

        // new 绑定等级高于显式绑定

        // 作为构造函数调用时，保留指向不做修改

        // 使用 instanceof 判断是否为构造函数调用
        console.log('this', this)
        // 判断对bind之后做什么操作，如果是直接调用，（fn()），将函数的this指向bind传入的对象。如果是new fn(),就将函数的this指向被bind的函数函数自己本身的this指向

        return _this.apply(this instanceof fBound ? this : context, args.concat(arg_))

    }

    // 函数被bind之后返回的是一个函数
    return fBound

}

let obj = {
    a: 1,
    b: 5
}

function addWithThis(...args) {
    console.log('addWithThis',this)
    console.log('args', args)
    return this.a + this.b
}

const resultFn = addWithThis.mybind(obj,1,2)

let fn = new resultFn()