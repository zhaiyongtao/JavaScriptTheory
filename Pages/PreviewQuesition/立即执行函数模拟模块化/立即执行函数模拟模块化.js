/**
 * 立即执行函数模拟模块化 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/22 12:54 下午
 * @LastEditTime: 2021/7/22 12:54 下午
 */
(function () {
    let name = "zyt"
    function foo () {
        console.log(`name: ${name}`)
    }
    window.myModule= {foo}
})()

