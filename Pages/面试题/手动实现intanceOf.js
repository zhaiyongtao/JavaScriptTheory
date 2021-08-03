/**
 * 手动实现intanceOf - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/2 12:30 下午
 * @LastEditTime: 2021/8/2 12:30 下午
 */
function newInstanceOf(instance, clazz) {
    if (typeof clazz !== 'function') throw new Error('Right-hand error')
    if (instance === null || (typeof instance !== 'object' && typeof instance !== 'function')) return false

    const proto = clazz.prototype
    while (instance.__proto__) {
        if (instance.__proto__ === proto) return true
        instance = instance.__proto__
    }
    return false
}
