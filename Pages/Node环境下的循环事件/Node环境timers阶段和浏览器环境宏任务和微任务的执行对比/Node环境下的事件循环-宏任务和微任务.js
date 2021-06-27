/**
 * Node环境下的循环事件 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/27 17:05
 * @LastEditTime: 2021/6/27 17:05
 */
/**
 * 事件循环对应六个阶段，每个阶段处理不同的任务
 * timers -> pending callbacks -> prepare ->poll ->check -> close call backs
 */
 /**
 * 阶段解释
 * timers -> 处理setTimeout和setInterval的回调
 * pending callbacks -> 被挂起的回调，处理错误的回调
 * prepare -> 系统内部使用
 * poll -> 处理 I/O回调
 * check -> 处理setImmediate的回调
 * close -> 处理关闭操作的回到 例如： onClose(() => {})
 */


 setTimeout(() => {
     console.log('Timeout 1')
 })

setTimeout(() => {
    console.log('Timeout2')
})

setTimeout(() => {
    console.log('Timeout3')
    Promise.resolve().then(() => {
        console.log('Promise 1')
    }).then(() => {
        console.log('Promise 2')
    })
})

setTimeout(() => {
    console.log('Timeout 4')
})

// Timeout 1
// Timeout2
// Timeout3
// Promise 1
// Promise 2
// Timeout 4
//


// Node11开始，timers 阶段的setTimeout、setInterval等函数派发的任务、包括 setImmediate 派发的任务，都被修改为：一旦执行完当前阶段的一个任务，就立刻执行微任务队列。