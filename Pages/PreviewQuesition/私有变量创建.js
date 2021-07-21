/**
 *闭包创建私有属性
 */

const Foo = (function () {
    let _password = 123;
    return function (props) {
        _password = props.password;
        this.userName = props.userName

        this.login = function () {
            console.log(this.userName, _password)
        }
    }
})()

const foo = new Foo({password: 123, userName: 'zyt'})

foo.login()

const Moo = (function () {
    let _password;

    class Moo {
        constructor(props) {
            this.name = props.name
            _password = props.password
        }
    }

    return Moo;
})()

const moo = new Moo({name: 'lxy', password: 123})

console.log(moo.name) // lxy
console.log(moo._password) //undefined


/**
 * ES 6 最新私有属性
 */

class Goo {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x
        this.#y = y
    }

    getXy() {
        return this.#x + this.#y
    }
}

const goo = new Goo(1,2)
// console.log(goo.#x)  // 报错
console.log(goo.getXy()) // 3

/**
 * 使用 Object.defineProperty
 * enumerable 对象属性不可以在循环中虹被枚举
 */

const obj={
    name:'zyt',
    getName:function(){
        return this.name
    }
}
Object.defineProperty(obj,"name",{
    enumerable: false // 循环中不可被枚举
});

console.log(Object.keys(obj)) //[ 'getName' ]
