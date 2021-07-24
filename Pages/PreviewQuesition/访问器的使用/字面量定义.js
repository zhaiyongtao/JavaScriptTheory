/**
 * 字面量定义 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/24 10:29 上午
 * @LastEditTime: 2021/7/24 10:29 上午
 */
const obj = {
    _name: 'zyt',
    get name () {
        return this._name
    },
    set name(value) {
        this._name = value
    }
}
console.log(obj.name)
obj.name = 'lxy'
console.log(obj.name)