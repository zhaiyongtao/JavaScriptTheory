/**
 * JavaScript事件循环 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/25 0:18
 * @LastEditTime: 2021/6/25 0:18
 */

console.log(1)

// todo 加上时间试试
setTimeout(function () {
    console.log(2)
})


// todo 循环输出then，增加一个Promise函数输出试试输出结果
// new Promise((resolve) =>{
//     console.log(3)
//     resolve('123')
// }).then((res) => {
//     console.log(res)
// }).then((res) => {
//     console.log(res)
// })

new Promise((resolve) =>{
    console.log(3)
    resolve()
}).then(() => {
    console.log(4)
}).then(() => {
    console.log(5)
})

console.log(6)

// 输出 136452