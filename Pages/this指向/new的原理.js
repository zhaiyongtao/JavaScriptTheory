/**
 * new的原理 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/28 6:00 下午
 * @LastEditTime: 2021/7/28 6:00 下午
 */

var new2 = function(func){
    var o = Object.create(func.prototype)
    var k = func.call(o)
    if(typeof k === 'object'){
        return k
    }
    else {
        return o
    }
}
