/**
 * 使用object.defineProperty - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/24 11:24 上午
 * @LastEditTime: 2021/7/24 11:24 上午
 */

// Object.definedProperty
function User(){
    let count = 0;
    Object.defineProperty(this,'skillLevel',{
        get:() => {
            return count;
        },
        set:value => {
            count = value;
        }
    })
}
// 隐士的调用 get 方法
const user = new User()
console.log(user.skillLevel) //0
console.log(user.count)// undefined