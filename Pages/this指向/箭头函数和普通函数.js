/**
 * 箭头函数和普通函数$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/5/28 4:31 下午
 * @LastEditTime: 2021/5/28 4:31 下午
 */

var a= 1;

function fn () {
    console.log('this.a',this.a)
}
fn ()  // 1
var obj = {
    a:2,
    showA:() => {
        console.log(this.a)
    }
}

var obj2 = {
    a: 3,
    showA: function () {
        console.log(this.a)
    }
}
obj.showA() // 浏览器中输出 1 ，箭头函数的this会在书写阶段绑定到到他的父级作用域this上,箭头函数的this指向是静态，无论怎么调用它，它都无法再为他指定目标对象，词法作用域

obj2.showA() // 输出3


// 构造函数
function Person (name) {
    this.name = name;
    this.a = 2
    this.sayhello= () => {
        console.log( 'hello', this.a) // this => { name: 'zyt', a: 2, sayhello: [Function] }
    }
}

var person = new Person('zyt')
person.sayhello()


