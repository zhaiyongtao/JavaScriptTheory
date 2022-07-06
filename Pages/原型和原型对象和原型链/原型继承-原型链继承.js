/**
 * 原型继承-原型链继承$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/18 3:53 下午
 * @LastEditTime: 2021/6/18 3:53 下午
 */

function Student (props) {
    this.name = props.name || 'UnKnown Name'
    this.getName = function (){
        return this.name
    }
}

Student.prototype.sayHello = function () {
    return `hello ${this.name}`
}

function StudentA (props) {
    Student.call(this,props) // 通过call获取name属性
    this.sex = props.sex || 'Unknown sex'
    console.log('this', this)
}


function Nop () {}

Nop.prototype = Student.prototype

StudentA.prototype = new Nop()
StudentA.prototype.__proto__ === Nop.prototype;

// 这里没有StudentA.prototype === Student.prototype 是为了避免原型链上的对象共享。
// 原型对象定义着实例对象共享的方法属性和方法.StudentA和Student的原型对象上都有着属于自己实例对象的共享的属性和方法，不能混在一起。
// 所以我们可以使用原型链的继承,让Student成为StudentA原型链上的父级
// StudentA.prototype.__proto__ == new Nop().__proto__ == Nop.prototype == Student.prototype
// 这样StudentA的实例就可以访问到Student原型对象的方法了

StudentA.prototype.constructor = StudentA


StudentA.prototype.getSex = function () {
    return this.sex
}

const stuA = new StudentA({name: 'zyt', sex: 'male'})

console.log('StudentA实例对象',stuA)
console.log('StudentA原型对象',stuA.__proto__)

console.log('Student实例对象',new Student({name: 'lxy'}))
console.log('Student原型对象',Student.prototype)

// =======>  原型对象的作用就是定义所有实例对象共享的属性和方法


console.log('原型链继承的结果',stuA.__proto__.__proto__ === new Student({name: '123'}).__proto__)

console.log(stuA.name)

// stuA =__proto__=> StudentA.prototype =__proto__=>Student.prototype =__proto__=>Object.prototype =__proto__=>null

console.log(stuA.sayHello()) // 这里因为原型链继承的原因，我们可以拿到Student上的方法

