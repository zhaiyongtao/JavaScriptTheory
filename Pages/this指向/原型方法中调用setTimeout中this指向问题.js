/**
 * 原型方法中调用setTimeout中this指向问题$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/4 11:11 上午
 * @LastEditTime: 2021/6/4 11:11 上午
 */

function Person () {
    this.name = 'zyt';
}
Person.prototype.sex = 'male';
Person.prototype.init = function () {
    console.log('********************************************')
    console.log('In Init => this：', this)
}

Person.prototype.getName = function () {
    console.log('In getName => this：', this)
    console.log('In getName => Name：', this.name)
    this.init()
    console.log('********************************************')
}

let p = new  Person()
p.init()  // In Init => this： Person { name: 'zyt' }
p.getName() // In getName => this： Person { name: 'zyt' } / In getName => Name： zyt / In Init => this： Person { name: 'zyt' }

Person.prototype.getName1 = function () {
    console.log('In getName1 => this：', this) // In getName1 => this： Person { name: 'zyt' }
    console.log('In getName1 => Name：', this.name) // In getName1 => Name： zyt
    setTimeout(this.init, 1000) // In Init => this: window
    console.log('********************************************')
}

let p1 = new Person()
p1.init() // In Init => this： Person { name: 'zyt' }
p1.getName1()

Person.prototype.getName2 = function () {
    console.log('In getName2 => this：', this) // In getName1 => this： Person { name: 'zyt' }
    console.log('In getName2 => Name：', this.name) // In getName1 => Name： zyt
    setTimeout(function () {
        this.init() // In Init => this: window
    }, 1000)
    console.log('********************************************')
}

let p2 = new Person()
p2.init()
p2.getName2()