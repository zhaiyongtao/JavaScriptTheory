/**
 * 简单的深拷贝 - 深拷贝的简单实现
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/10 9:49 上午
 * @LastEditTime: 2021/8/10 9:49 上午
 */

function deepClone (obj) {
    let newObj= typeof obj === 'object'? {} : []
    for (let i in obj) {
        newObj[i]= typeof obj[i]==="object" ? deepClone(obj[i]) : obj[i]
    }
    return newObj
}

console.log(deepClone({name:'zyt', age: [1,2,3]}))
