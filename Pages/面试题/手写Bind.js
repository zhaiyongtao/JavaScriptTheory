/**
 * 手写Bind - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/29 3:49 下午
 * @LastEditTime: 2021/7/29 3:49 下午
 */


Function.prototype.newBind = function (context) {
    let _this = this;
    let args = Array.prototype.slice.call(arguments)
    let _context = context || window
    let newFn = function () {
        let newArgs = Array.prototype.slice.call(arguments)

        if (this instanceof _this) {
            _this.apply(this, newArgs.concat(args))
        } else {
            _this.apply(_context, newArgs.concat(args))
        }
    }

    let Nop =function (){}
    Nop.prototype = _this.prototype;
    newFn.prototype = new Nop();
    return newFn
}
