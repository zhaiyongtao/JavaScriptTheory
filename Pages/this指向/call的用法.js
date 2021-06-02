/**
 * call的用法$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/2 6:33 下午
 * @LastEditTime: 2021/6/2 6:33 下午
 */

function parentFn () {
    this.a = 1;
    this.print= function (){
        console.log('parentFn', this.a)
    }
    // console.log(this)
}
parentFn()
 function childFn() {
    this.a = 2
     parentFn.call(this)
     // console.log(this) // 指向全局作用域
     this.print() // 输出parentFn
 }

childFn()






