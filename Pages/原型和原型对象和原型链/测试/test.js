/**
 * test - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2022/2/28 11:03 PM
 * @LastEditTime: 2022/2/28 11:03 PM
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


// function Nop () {}

// Nop.prototype = Student.prototype

StudentA.prototype = new Student({name: 'zyt2'})

// StudentA.prototype.constructor = StudentA

const stu = new StudentA({name: 'zyt'})
console.log(stu.getName())  // 输出ZYT
