/**
 * Bind的基本使用$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/8 2:33 下午
 * @LastEditTime: 2021/6/8 2:33 下午
 */


function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}



const result1 = add.bind(null, 1, 2)()

const result2 = add.bind(sub, 1,2)()


console.log(result1) // 3
console.log(result2) // 3

// fn.bind(obj),obj通过bind获取fn方法，和obj本身的方法无关

 function addWithThis() {
    return this.a + this.b
 }

let obj = {
    a: 1,
    b: 5
}

const result3 =  addWithThis.bind(obj)()

console.log(result3) // 6
// 使obj具有了addWithThis的能力

// 等价于

let obj1 = {
    a: 1,
    b:5,
    addInObj: function () {
        return this.a + this.b
    }
}

const result4 = obj1.addInObj()

console.log(result4) // 6