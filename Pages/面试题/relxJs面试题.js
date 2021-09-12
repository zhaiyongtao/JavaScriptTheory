/**
 * relxJs面试题 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/11 7:53 下午
 * @LastEditTime: 2021/8/11 7:53 下午
 */

let a=0;
let lazy = {
    add(){
        a++
     return a===2 ? a :this
    }
}

console.log(lazy.add().add())
