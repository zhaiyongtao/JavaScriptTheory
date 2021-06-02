/**
 * 类中的prototypeAnd__protp__$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/2 7:27 下午
 * @LastEditTime: 2021/6/2 7:27 下午
 */

class A {
    a = 1;
    print= function () {
        console.log(this)
        console.log(this.a)
    }
    printB = () => {
        console.log(this)
    }

}

const a = new A()

console.log(a.__proto__ === A.prototype)
console.log(A.prototype.constructor)
a.__proto__.b = 2
A.prototype.c = 3

console.log(a.b)
console.log(a.c)