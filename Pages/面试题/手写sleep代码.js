/**
 * 手写sleep代码 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/29 11:24 上午
 * @LastEditTime: 2021/7/29 11:24 上午
 */

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

sleep(1000).then(() => {
    // 这里写你的操作
})
