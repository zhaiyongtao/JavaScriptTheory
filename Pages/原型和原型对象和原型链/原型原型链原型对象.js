/**
 * 原型原型链原型对象$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/2 7:19 下午
 * @LastEditTime: 2021/6/2 7:19 下午
 */

function parentFn () {
    this.a = 1;
    this.print= function (){
        console.log('parentFn')
    }
}

function childFn() {
    parentFn.call(this)
    this.print()
}
childFn()

console.info('parentFn.__proto__',parentFn.__proto__)  //[Function]
console.info('parentFn.prototype',parentFn.prototype) // parentFn {}
console.info('parentFn.prototype.__proto__',parentFn.prototype.__proto__) //{}
console.info('parentFn.prototype.constructor',parentFn.prototype.constructor) //{}
console.info('parentFn.prototype === parentFn.__proto__',parentFn.prototype === parentFn.__proto__)