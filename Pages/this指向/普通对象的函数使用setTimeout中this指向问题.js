/**
 * setTimeout中this指向问题$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/3 4:21 下午
 * @LastEditTime: 2021/6/3 4:21 下午
 */

let obj = {
    a: 1,
    name: 'zyt',
    init: function () {
        console.log('this in init: ', this);
    }
}
obj.getName = function () {
    console.log('this in getName: ', this.name);
}

// 代码输出
obj.init();   //obj
obj.getName();   //alice

setTimeout(obj.init, 1000) // node 环境指向Timeout对象,浏览器环境指向window对象
setTimeout(obj.getName, 1000)// undefined

// 等同于
setTimeout(function () {
    console.log('this in init', this)
}, 1000)

setTimeout(function () {
    console.log('this in getName', this.name) // node 环境指向Timeout对象,浏览器环境指向window对象
}, 1000) // undefined

// 等同于
// 也就是说
// setTimeout(obj.init,1000)
// setTimeout(obj.getName,1000)
// obj.init，obj.getName和原有对象obj已经没有关系了，其实就是两个单纯且单独的函数
function fun1() {
    console.log('this in init', this)
}

function fun2() {
    console.log('this in getName', this.name) // undefined
}

setTimeout(fun1, 1000)
setTimeout(fun2, 1000)
// 总结：，因此函数中this的值在非严格模式下指向window对象。所以这里两个延时回调函数中的this，都是window。
// setTimeout(function () {
//     console.log(this) // this在非严格模式下指向window对象
// }, 1000)

//解决办法（1）
setTimeout(function () {
    console.log(this) //// node 环境指向Timeout对象,浏览器环境指向window对象
    obj.init() //  obj.init函数中中的this指向obj，this in init:  { a: 1, name: 'zyt', init: [Function: init], getName: [Function] }
}, 1000)

setTimeout(function () {
    obj.getName() //obj.getName函数中中的this指向obj，zyt
}, 1000)

// 总结
// 第一，调用环境下的this，称之为第一个this；this的指向是需要根据上下文来确定的，默认为window
// 第二，把延迟执行函数中的this称之为第二个this；this就是指向window。

// 解决办法（2）
setTimeout(() => {
   console.log('箭头函数',this)  // node 环境指向{}对象,浏览器环境指向window对象
    obj.init() // obj.init函数中中的this指向obj，this in init:  { a: 1, name: 'zyt', init: [Function: init], getName: [Function] }
}, 1000);

setTimeout(() => {
    obj.getName() // //obj.getName函数中中的this指向obj，zyt
}, 1000);

// 解决办法（3）
// setTimeout(obj.init.call(obj), 1000);  // this in init:  {a: 1, name: "zyt", init: ƒ, getName: ƒ},浏览器中输出正常，node环境报错
// setTimeout(obj.init.apply(obj), 1000);
// setTimeout(obj.init.bind(obj)(), 1000);
//
// setTimeout(obj.getName.call(obj), 1000); // this in getName:  zyt
// setTimeout(obj.getName.apply(obj), 1000);
// setTimeout(obj.getName.bind(obj)(), 1000);

// 解决办法（4）

