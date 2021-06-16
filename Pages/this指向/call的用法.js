/**
 * call的用法$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/2 6:33 下午
 * @LastEditTime: 2021/6/2 6:33 下午
 */

function parentFn() {
    this.a = 1;
    this.printFn = function () {
        console.log('parentFn', this.a)
    }
    // console.log(this)
}

parentFn()

function childFn() {
    this.a = 2
    parentFn.call(this) // 这个相当于在全局作用域下执行 parentFn()
    console.log(this) // 指向全局作用域,全局作用下的a变量值为1，因为parentFn.call(this)这行代码对a重新赋值了
    this.printFn() // 输出parentFn 1
    console.log(this.a) // 1
}
// console.log(global.a)
childFn()






