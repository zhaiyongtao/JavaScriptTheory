/**
 * 隐式类型转化 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/1 2:18 下午
 * @LastEditTime: 2021/8/1 2:18 下午
 */
// 之所以会得到如此结果，是由于表达式中使用了松散相等的运算符 ==。使用松散相等时，如果其中一个操作数与另一个类型不同，
// 则 JS 引擎将尝试将一个操作转换为另一个类型。在左边对象、右边的数字的情况下，它会尝试将对象转换为一个数，
// 首先通过调用 valueOf 如果是可调用的。否则，它会调用toString方法。我使用toString仅仅是因为它是我的第一反应，valueOf
// 会更合理。如果我不从toString返回一个字符串（而是返回数字），JS 引擎会尝试将字符串转换为一个数字，虽然有一个稍长的路径，但它仍然会给我们同样的结果。

const a = {
    value:[3,2,1],
    valueOf: function(){return this.value.pop()}
}
let  aa = a == 1 && a == 2 && a == 3
console.log(aa)


// 请注意if 语句中的奇怪间距。它是半宽度韩文=,=。这是一个 Unicode 空格字符，
// 但是 ECMAScript 不将其解释为一个空格 —— 这意味着它是一个有效的标识符。
// 因此有三个完全不同的变量，一个是a后加半宽度韩文，一个是a， 一个是a前加半宽度韩文。。。
// 用下划线 _ 替代半宽度韩文，增加可读性，相同的代码看起来像这样：

// var aﾠ = 1;
// var a = 2;
// var ﾠa = 3;
// console.log(aﾠ==1 && a== 2 &&ﾠa==3) // true
