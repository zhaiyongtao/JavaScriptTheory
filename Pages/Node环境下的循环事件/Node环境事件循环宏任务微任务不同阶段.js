/**
 * Node环境事件循环宏任务微任务不同阶段 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/27 18:07
 * @LastEditTime: 2021/6/27 18:07
 */



const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'test.js')

console.log(filePath)


setTimeout(() => {
    console.log('Timer 阶段处理 setTimeout1')
    fs.readFile(filePath, 'utf8', function (err, data) {
        console.log('readFile')
        setTimeout(function () {
            console.log('老铁，我是被 setTimeout 派发的')
        }, 0)

        setImmediate(function () {
            console.log('老铁，我是被 setImmediate 派发的')
        })
    });

    // setImmediate(() => {
    //     console.log('check 阶段处理 setImmediate2')
    // })
    setTimeout(() => {console.log('setTimeout3')},3000)

    new Promise((resolve) => {
        console.log('promise2')
        resolve(true)
    }).then(() => {
        console.log('then2')
    })

},2000)





setTimeout(() => {
    console.log('Timer 阶段处理 setTimeout2')
})


setImmediate(() => {
    console.log('check 阶段处理 setImmediate1')
})


// new Promise((resolve) => {
//     console.log('promise1')
//     resolve(true)
// }).then(() => {
//     console.log('then1')
// })
//
