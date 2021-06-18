/**
 * 原型继承-原型链继承$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/18 3:53 下午
 * @LastEditTime: 2021/6/18 3:53 下午
 */

function Student (props) {
    this.name = props.name || 'UnKnown Name'
}


function StudentA (props) {
    this.sex = props.sex || 'Unknown sex'
}

function Nop () {}

Nop.prototype = Student.prototype

StudentA.prototype = new Nop()

StudentA.prototype.constructor = StudentA

StudentA.prototype.getSex = function () {
    return this.sex
}

const stuA = new StudentA({name: 'zyt', sex: 'male'})

console.log(stuA.name)