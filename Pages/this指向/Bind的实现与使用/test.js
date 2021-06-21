function foo () {
    console.log('foo',this)
}

let goo = {
    a: 1
}

const resultFn1  = foo.bind(goo)

const rf1 = new resultFn1()

console.log('rf1',rf1)


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
        // newFn.prototype.constructor = newFn;
    }
    return newFn
}

const resultFn2  = foo.myBind(goo)

const rf2 = new resultFn2()

console.log('rf2',rf2)