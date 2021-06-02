/**
 * call和箭头函数$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/2 7:25 下午
 * @LastEditTime: 2021/6/2 7:25 下午
 */

var a = 100
var data = {
    a: 3,
    fn: () => {
        console.log(this.a) // 浏览器中输出100 说明箭头函数的指向不受call影响,指向的依旧是全局作用域
    }
}
data.fn.call({a: 4}) //输出的是4

var data2 = {
    a:5,
    fn: function () {
        console.log(this.a)
    }
}

data2.fn.call({a: 4})
