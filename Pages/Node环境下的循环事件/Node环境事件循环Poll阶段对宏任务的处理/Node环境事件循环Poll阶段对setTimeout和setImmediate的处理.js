/**
 * Node环境事件循环Poll阶段对setTimeout和setImmediate的处理 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/27 17:45
 * @LastEditTime: 2021/6/27 17:45
 */

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname,'test.js')

console.log(filePath)

// -- 异步读取文件
// 输出：
// 老铁，我是被 setImmediate 派发的
// 老铁，我是被 setTimeout 派发的
//在 poll 阶段处理的回调中，如果既派发了 setImmediate、又派发了 setTimeout，那么这个顺序是板上钉钉的——一定是先执行 setImmediate，再执行 setTimeout。setImmediate对应的check阶段距离poll阶段更近

fs.readFile(filePath,'utf8',function(err,data){
    setTimeout(function() {
        console.log('老铁，我是被 setTimeout 派发的')
    }, 0)

    setImmediate(function() {
        console.log('老铁，我是被 setImmediate 派发的')
    })
});


new Promise((resolve) => {
    console.log('promise1')
    resolve(true)
}).then (() => {
    console.log('then1')
})

