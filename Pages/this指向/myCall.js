/**
 * myCall$ - 手写API - call 改变this指向
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/5/29 12:39 下午
 * @LastEditTime: 2021/5/29 12:39 下午
 */

// 正常指向全度对象
var name = 'zyt';
var me = {
  name: 'lxy',
};

function showName() {
  console.log(this.name);
}

showName(); // 浏览器输出 zyt ，showName中的this指向window

// 使用call API 改变this 指向
showName.call(me) // 输出lxy
// 使用call 改变this 指向的等价结果
var newMe = {
  name: 'lxy',
  showName: function () {
    console.log(this.name)
  }
}

newMe.showName() // 输出lxy

// Function 对象
Function.prototype.myCall = function (context) {
  // 把函数挂载在对象上
  context.func = this
  // 执行对象下的这个函数
  context.func()
  // 执行之后，删除方法，保持原有对象
  delete  context.func
}

showName.myCall(me)

console.log(Function.prototype)