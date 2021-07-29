/**
 * 顺序执行Promise - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/28 11:31 下午
 * @LastEditTime: 2021/7/28 11:31 下午
 */
function runPromiseInSequence(arr, input) {
    return arr.reduce(
        // currentFunction => function(res) {};res =>a
        (promiseChain, currentFunction) => promiseChain.then(currentFunction),
        // Promise.resolve(input) => initValue,那么第一个promiseChain就是 Promise.resolve(input)
        Promise.resolve(input)
    );
}

// promise function 1
function p1(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 5);
    });
}

// promise function 2
function p2(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 2);
    });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
    return a * 3;
}

// promise function 4
function p4(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 4);
    });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200
