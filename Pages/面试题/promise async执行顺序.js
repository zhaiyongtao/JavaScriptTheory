/**
 * promise async执行顺序 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/5 7:51 下午
 * @LastEditTime: 2021/8/5 7:51 下午
 */
async function async1(){
    console.log( 'async1 start')
    await async2() // await 后面的参数直接执行
    // await 下面的内容相当于then 放到微任务队列
    console.log( 'async1 end')
}
async function async2() {
    console.log('async2')
}
console.log( 'script start')

setTimeout(() =>{
    console.log("setTimeout")
});

async1()

new Promise( (resolve=>{
    console.log("promise1")
    resolve()
})).then (function () {
    console.log('promise2')
})
console.log( 'script end')
