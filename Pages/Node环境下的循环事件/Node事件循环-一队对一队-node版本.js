/**
 * Node事件循环-一队对一队 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/27 19:09
 * @LastEditTime: 2021/6/27 19:09
 */

setTimeout(() => {
    console.log(1)
},0)

new Promise((resolve) => {
    console.log(2)
    resolve(true)
}).then (() => {
    console.log(3)
})

setTimeout(() => {
    console.log(4)
    new Promise(resolve => {
        console.log(5);
        resolve(true)
    }).then( () => {
        console.log(6)
    })

},0)
setTimeout(() => {
    console.log(7)
}, 0)

console.log(8)


 // 2 8 3  1 4 5 7 6 node 9.3.0

// 2 8 3  1 4 5 6 7 node 12.16.1
 // Node11开始，timers 阶段的setTimeout、setInterval等函数派发的任务、包括 setImmediate 派发的任务，都被修改为：一旦执行完当前阶段的一个任务，就立刻执行微任务队列。