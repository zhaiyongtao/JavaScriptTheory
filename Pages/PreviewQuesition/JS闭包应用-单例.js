/**
 * JS闭包应用-单例 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/20 4:42 下午
 * @LastEditTime: 2021/7/20 4:42 下午
 */

const Foo = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = this // this 指向被实例化对象
        }
        this.name = 'zyt'
        return instance// 要把单例对象返回出去
    }
})()

const foo1 = new Foo()
const foo2 = new Foo()

console.log(foo1 === foo2)

