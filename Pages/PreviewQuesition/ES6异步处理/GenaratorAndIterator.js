/**
 * GenaratorAndIterator - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/24 3:45 下午
 * @LastEditTime: 2021/7/24 3:45 下午
 */

const https = require('https')

function httpsPromise(url) {
    return new Promise((
        resolve, reject
    ) => {
        https.get(url,(res) => {
            // console.log(res)
            resolve(res)
        }).on('error', (err) => {
            // console.log(err)
            reject(err)
        })
    })
}

function* httpsGenerator(){
    const res1 = yield httpsPromise("https://www.baidu.com")
    console.log('res1',res1)
    const res2 = yield httpsPromise("https://www.taobao.com")
    console.log('res2',res2)
}

function runGeneratorIterator (generator) {
    let gen = generator()
    let res;
    // function iterator (value) {
    //     res = gen.next(value)
    //     if (!res.done) {
    //         if ("then" in res.value) {
    //             res.value.then(iterator)
    //         }
    //     }
    // }
    // iterator()
    (function iterator (value) {
        console.log('value',value)
        res = gen.next(value)
        if (!res.done) {
            if ("then" in res.value) {
                res.value.then(iterator) // 相当于 promise.then(function (res) {})
            }
        }

    })()
}
runGeneratorIterator(httpsGenerator)