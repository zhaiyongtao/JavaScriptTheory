/**
 * 面试题$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/6/3 11:55 上午
 * @LastEditTime: 2021/6/3 11:55 上午
 */

foo = function(){
    this.myName = "Foo function.";
}
foo.prototype.sayHello = function(){
    console.log(this.myName); // undefined
}
foo.prototype.bar = function(){
    setTimeout(this.sayHello, 1000);
}
var f = new foo;
f.bar();


foo1 = function(){
    this.myName = "Foo function.";
}
foo1.prototype.sayHello = () => {
    console.log(this.myName); // undefined
}
foo1.prototype.bar = function(){
    setTimeout(this.sayHello, 1000);
}
var f1 = new foo;
f1.bar();