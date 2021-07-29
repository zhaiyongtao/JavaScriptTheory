/**
 * 手写call - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/29 4:03 下午
 * @LastEditTime: 2021/7/29 4:03 下午
 */

Function.prototype.newCall = function (context,...args) {
    let _context = context;
    _context.fnc = this;
    _context.fnc(args);
    console.log(this)
    delete _context.fnc;
}



function add (c,d) {
    console.log(this.a,this.b)
    return this.a + this.b+c + d
}

console.log(add.newCall({a:1,b:2},3,4))

// console.log(add.call({a:1,b:2},3,4))


