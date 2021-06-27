/**
 * test.js - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/27 18:45
 * @LastEditTime: 2021/6/27 18:45
 */

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'test.js')

setTimeout(() => {
    console.log(1)


        const time1 = new Date().getTime()
    let time;
    console.log()
    fs.readFile(filePath,'utf8',function(err,data){
     console.log('poll')
        // console.log(new Date().getTime())
        time = new Date().getTime() - time1
    });
    setTimeout(() => {
        console.log(time)
    },time)


})