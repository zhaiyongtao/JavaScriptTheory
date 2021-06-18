function Student (props) {
    this.name = props.name || 'UnNamed'
}

Student.prototype.sayHello = function () {
    console.log(`hello ${this.name}`) // hello Student
}

const stu = new Student({name: 'Student'})
stu.sayHello()

function StudentA (props) {
    this.sex = props.sex || 'StudentA sex is unknown';
}


StudentA.prototype.getSex = function () {
    console.log(`StudentA sex is ${this.sex}`) // StudentA sex is male
}

const stuA = new StudentA({name: 'stuA', sex: 'male'})

stuA.getSex()


function StudentAcallStudent (props) {
    // 通过call的特性使Student内部的this指向当前函数的this
    Student.call(this,props)// 因为new的操作导致StudentAcallStudent构造函数的内部this指向的是new操作之后返回的实例对象
    this.sex = props.sex || 'StudentAcallStudent sex is unknown';
}

StudentAcallStudent.prototype.getSex = function () {
    console.log(`StudentAcallStudent sex is ${this.sex}`) // StudentA sex is male
}
const newStuA = new StudentAcallStudent({name: 'newStuA', sex: 'female'})

console.log(newStuA.name) // newStuA
console.log(newStuA.getSex()) // StudentAcallStudent sex is female
//console.log(newStuA.sayHello()) // 报错，因为sayHello是Student原型对象上的方法，无法通过call让newStuA也具有这个方法，所以这不是继承
console.log( StudentAcallStudent.prototype.__proto__ === Object.prototype)

// 原型链
// newStuA ==__proto__  =》  StudentAcallStudent.prototype ==__proto__ =》Object.prototype ==__proto__=》null

// newStuA具有name属性的原理
// function test (a) {
//     this.a = a
// }
//
// let obj = {
//     b:2,
//     c:3
// }
//
// test.call(obj,1)
//
// console.log(obj.a) // 1