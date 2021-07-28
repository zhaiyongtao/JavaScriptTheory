/**
 * EasyPromise - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/25 10:18 下午
 * @LastEditTime: 2021/7/25 10:18 下午
 */

function EasyPromise(callback) {
    // 设置状态
    this.status = 'pending';
    // reject的错误消息
    this.errorMessage = '';
    // resolve的value
    this.successValue = null;

    this.onResolvedQueue = []
    this.onRejectedQueue = []


    this.resolve = (value) => {

        this.successValue = value;
        this.status = 'resolved'

        setTimeout(() => {
            this.onResolvedQueue.forEach((resolved) => {
                resolved(this.successValue)
            })
        })
    }

    this.reject = (error) => {
        this.errorMessage = error;
        this.status = "rejected"
        // 这里使用箭头函数是保证this的指向
        // setTimeout的使用是为了保证整个队列执行结束之后才能去执行接下来的then方法
        setTimeout(() => {
            this.onRejectedQueue.forEach((rejected) => {
                rejected(this.errorMessage)
            })
        })
    }

    callback(this.resolve, this.reject)
}

EasyPromise.prototype.then = function (onResolved, onRejected) {

    if (typeof onResolved !== 'function') {
        onResolved = function (x) {
            return x
        }
    }
    if (typeof onRejected !== 'function') {
        onRejected = function (e) {
            return e
        }
    }

    let _this = this;
    if (_this.status === 'resolved') {
        onResolved(_this.successValue)
    }
    if (_this.status === 'rejected') {
        onRejected(_this.errorMessage)
    }
    if (_this.status === 'pending') {
        _this.onResolvedQueue.push(onResolved)
        _this.onRejectedQueue.push(onRejected)
    }
    // 链式调用的常规操作
    return this;

}

// 缺点 第二个 then获取不到第一个then返回的值
new EasyPromise(function (resolve, reject) {
    console.log(1)
    resolve('zyt')
}).then(function (res) {
}).then(function (res) {
    console.log('嵌套：',res)
})