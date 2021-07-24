/**
 * Promise解决回调地狱 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/24 3:37 下午
 * @LastEditTime: 2021/7/24 3:37 下午
 */

const https = require('https')

function httpPromise(url) {
    return new Promise(function (resolve, reject) {
        https.get(url, (res) => {
            resolve(res)
        }).on("error", (err) => {
            reject(err)
        })
    })
}

httpPromise('https://www.baidu.com').then((res) => {
    console.log(res);
    return httpPromise('https://wwww.taobao.com')
}).then((res) => {
    console.log(res)
})

