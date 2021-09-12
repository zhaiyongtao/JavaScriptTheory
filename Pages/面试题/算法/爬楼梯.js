/**
 * 爬楼梯 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/4 10:43 上午
 * @LastEditTime: 2021/8/4 10:43 上午
 */

// f(n) = f(n-1) + f(n-2)
// 爬三层楼梯的方法数 = 爬两层的方法数 + 爬一层的方法数

var climbStaris = function (n) {
    if(n < 2) { return 1 }
    let dpN_2 = 1;
    let dpN_1 = 2
    for (let i =3 ; i<= n ; i++) {
        let temp = dpN_2;
        dpN_2 = dpN_1;
        dpN_1 = temp +dpN_1;
    }
    return dpN_1
}


var climbStaris1 = function (n) {
    if(n < 2) { return 1 }
    let dpN_2 = 1;
    let dpN_1 = 2;
    let temp = 0
    if(n === 1) temp = 1;
    if (n===2) temp = 2;
    for (let i =3 ; i<= n ; i++) {
         temp = dpN_2 + dpN_1;
        dpN_2 = dpN_1;
        dpN_1 = temp
    }
    return temp
}



console.log(climbStaris1(4))

