/**
 * Bind和New的优先级$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: yongtao.di@hand-china.com
 * @Date: 2021/6/1 5:31 下午
 * @LastEditTime: 2021/6/1 5:31 下午
 * @Copyright: Copyright (c) 2021, Hand
 */

function f() {
    console.log(this)
    return this;
}

const g = f.bind({ a: 1 });

g();  // {a:1}

const obj = new g(); // f {}

// instanceof都为true
console.log(obj instanceof f);
console.log(obj instanceof g);

console.log(g.prototype) // undefined
console.log(obj.prototype) // undefined

console.log(obj.constructor) // [Function: f]

console.log(g.constructor) // [Function: Function]

console.log(obj.__proto__) // f {}
console.log(g.prototype) // undefined

console.log( f.prototype) //f {}

