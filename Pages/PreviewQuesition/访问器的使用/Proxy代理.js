/**
 * Proxy代理 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/24 11:46 上午
 * @LastEditTime: 2021/7/24 11:46 上午
 */
const obj = {name: 'zyt'}
const representtive = new Proxy(obj, {
    get: (target, key) => {
        return key in target ? target[key] : "不存在该值"
    },
    set: (target, key, value) => {
        target[key] = value;
    }
})
