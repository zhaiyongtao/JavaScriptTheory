/**
 * 不可以嵌套的promise - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/26 12:12 上午
 * @LastEditTime: 2021/7/26 12:12 上午
 */

function MyPromise (fn) {
    this.successValue = null;
    this.errorMessage = '';
    this.status = 'pending'

    let _this = this;

    function resolve (value) {
        _this.successValue = value;
        _this.status = 'Resolved'
    }

    function reject (error){
        _this.errorMessage = 'error'
        _this.status = 'Rejectd'
    }

    fn (resolve, reject)
}

MyPromise.prototype.then = function (onResolved,onRejected) {
    let _this = this;
    if (typeof onResolved !== 'function') {
        onResolved = function (value) {return value}
    }
    if (typeof onRejected !== 'function') {
        onRejected = function (e) {return e}
    }

    if(_this.status === 'Resolved') {
        onResolved(_this.successValue)
    }

    if(_this.status === 'Rejectd') {
        onResolved(_this.errorMessage)
    }
}

new MyPromise(function (resolve) {
    resolve('xyt')
}).then(function (res) {
    console.log(res)
})