/**
 * 简单的嵌套Promise - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/26 12:26 上午
 * @LastEditTime: 2021/7/26 12:26 上午
 */

function MyLayerPromise(fn) {
    this.value = null;
    this.error = '';
    this.status = 'PENDING'
    this.onResolvedQueue = []
    this.onRejectedQueue = []
// 这里是保证this的指向
    let _this = this;

    function resolve(value) {
        if (_this.status !== 'PENDING') {
            return;
        }
        _this.value = value;
        _this.status = "RESOLVED"
        console.log(_this.onResolvedQueue.length)

        // setTimeout的使用是为了保证整个队列执行结束之后才能去执行接下来的then方法
        setTimeout(function () {
            _this.onResolvedQueue.forEach(resolved => {
                resolved(_this.value)
            })
        })


    }

    function reject(error) {
        if (_this.status !== 'PENDING') {
            return;
        }
        _this.error = error;
        _this.status = 'REJECTED'

        setTimeout(function () {
            _this.onRejectedQueue.forEach(rejected => {
                rejected(_this.error)
            })
        })
    }

    fn(resolve, reject)
}

MyLayerPromise.prototype.then = function (onResolved, onRejected) {
    let _this = this;
    if (typeof onResolved !== 'function') {
        onResolved = function (value) {
            return value
        }
    }
    if (typeof onRejected !== 'function') {
        onRejected = function (e) {
            return e
        }
    }

    if (_this.status === 'RESOLVED') {
        onResolved(_this.value)
    }
    if (_this.status === 'REJECTED') {
        onRejected(_this.error)
    }

    if (_this.status === 'pending') {
        _this.onResolvedQueue.push(onResolved)
        _this.onRejectedQueue.push(onRejected)
    }
    return this;
}


// 缺点 第二个 then获取不到第一个then返回的值
new MyLayerPromise(function (resolve, reject) {
    resolve('zyt')
}).then(function (res) {
}).then(function (res) {
    console.log('嵌套：', res)
})