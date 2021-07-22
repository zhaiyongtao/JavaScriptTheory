/**
 * 数据堆栈面试题 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/22 10:59 上午
 * @LastEditTime: 2021/7/22 10:59 上午
 */



let a = {
    n:1
}
let b = a;
a.x = a = {
    n:2
}
// a.x 县创建x内存 之后赋值{n:2}
// 之后再改变a的栈地址并指向{n:2}
console.log(a.x) // undefined
console.log(b) // {n:1,x:{n:2}}