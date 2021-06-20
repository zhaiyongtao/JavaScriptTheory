/**
 * Bind的实现$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/8 4:31 下午
 * @LastEditTime: 2021/6/8 4:31 下午
 */

            Function.prototype.mybind = function (oThis) {

                if (typeof this != 'function') {

                    throw 'caller must be a function'

                }

                let fThis = this
                console.log('fThis', fThis)

                //Array.prototype.slice.call 将类数组转为数组

                let arg = Array.prototype.slice.call(arguments, 1)

                let NOP = function () {
                }

                let fBound = function () {

                    let arg_ = Array.prototype.slice.call(arguments)

                    // new 绑定等级高于显式绑定

                    // 作为构造函数调用时，保留指向不做修改

                    // 使用 instanceof 判断是否为构造函数调用
                    console.log('this', this)

                    return fThis.apply(this instanceof fBound ? this : oThis, arg.concat(arg_))

                }

                // 维护原型

                if (this.prototype) {

                    NOP.prototype = this.prototype

                }

                fBound.prototype = new NOP()

                return fBound

            }

Function.prototype.myBind = function() {
    var _this = this;
    var context = [].shift.call(arguments);// 保存需要绑定的this上下文
    var args = [].slice.call(arguments); //剩下参数转为数组
    console.log(_this, context, args);
    return function() {
        return _this.apply(context, [].concat.call(args, [].slice.call(arguments)));
    }
};

Function.prototype.myCall = function (context, ...args) {
    // this 指向调用myCall的方法（方法也是对象，this的指向指向调用它的对象）
    context.func = this
    console.log(this)
    context.func(args)
    delete context.func
}

let obj = {
    a: 1,
    b: 5
}

function addWithThis() {
    console.log('addWithThis',this)
    return this.a + this.b
}

Function.prototype.myNewBind = function (context,...args) {
    // console.log('context',context)
    // console.log('args',args)
    let _this = this // 这里是为了保存需要绑定的this上下文，为了防止返回的函数中的this指向出现问题。如果使用箭头函数就不需要再进行一次保存了
    console.log(this) // 这个this指向调用myNewBind的方法，遵循的是谁调用我，我内部的this的指向就指向谁
    return function () {
         return _this.apply(context,args)
    }
}

// const result2 = addWithThis.myNewBind(obj, 1,2,3)()

const resultFn2 = addWithThis.myNewBind(obj, 1,2,3)
let fn2 = new resultFn2()
// resultFn2()
// const resultFn3 = addWithThis.mybind(obj)
// resultFn3()
// const rf = new resultFn2()
// const rf1 = new resultFn3()

// console.log('result2', result2)
// const result1 = addWithThis.myBind(obj,1,3)()

// console.log(result1)