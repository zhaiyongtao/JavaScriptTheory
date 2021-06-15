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
    let newFn = function () {
        // 获取，传给Bind之后返回的函数的入参
        let arg_ = Array.prototype.slice.call(arguments)
        // new 绑定等级高于显式绑定
        // 作为构造函数调用时，保留指向不做修改
        // 使用 instanceof 判断是否为构造函数调用
        console.log('newFn this', this) // newFn方法中的的this指向是addWithThis，这里是经过处理的，下面代码中会维护原型
        // console.log(this instanceof newFn)
        // 判断对bind之后做什么操作，如果是直接调用，（fn()），将函数的this指向bind传入的对象。如果是new fn(),就将函数的this指向被bind的函数函数自己本身的this指向
        return _this.apply(this instanceof newFn ? this : context, args.concat(arg_))
    }
    let NOP = function () {
    }

    // 维护原型
    if (this.prototype) {
        NOP.prototype = this.prototype
    }


    newFn.prototype = new NOP()
    console.log('newFn.prototype.__proto__=>new NOP().__proto__',newFn.prototype.__proto__ ==  new NOP().__proto__)
    console.log('newFn.prototype.__proto__=>NOP.prototype',newFn.prototype.__proto__ ==  NOP.prototype)

    console.log('newFn.prototype.__proto__=> this.prototype',newFn.prototype.__proto__ == this.prototype)
    console.log('NOP.prototype.__proto__=> this.prototype',NOP.prototype.__proto__ == this.prototype)
    // 函数被bind之后返回的是一个函数
    return newFn

}

let obj = {
    a: 6,
    b: 5
}

function addWithThis(...args) {
    console.log('addWithThis', this)
    return this.a + this.b
}

const resultFn = addWithThis.mybind(obj, 1, 2)

// console.log(resultFn())

let fn = new resultFn()
