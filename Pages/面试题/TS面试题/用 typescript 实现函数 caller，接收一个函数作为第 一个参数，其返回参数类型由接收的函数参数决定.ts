/**
 * 用 typescript 实现函数 caller，接收一个函数作为第 一个参数，其返回参数类型由接收的函数参数决定$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: yongtao.di@hand-china.com
 * @Date: 2021/7/28 11:52 下午
 * @LastEditTime: 2021/7/28 11:52 下午
 * @Copyright: Copyright (c) 2021, Hand
 */
type ParamType<T> = T extends (param: infer P) => any ? P : T;

type Caller<T extends (...args: any[]) => any> = () => ParamType<T>;

function tx(x: string) {
    return x;
}

const caller: Caller<typeof tx> = () => {
    return "x";
};

function test (x:number) : number {
    return 123
}

// 继承就是从我自己定义的类型参数到别人那里找到自己没有的属性
// array: [] array有length属性
// array: T array不知道有没有length属性。需要继承一个有length属性的类型

type CallerA<T> =  (arg : T) => T extends (param :infer p) => any ? p :never;

const callerA: CallerA<typeof test> = (test) =>{
    return 1
}

