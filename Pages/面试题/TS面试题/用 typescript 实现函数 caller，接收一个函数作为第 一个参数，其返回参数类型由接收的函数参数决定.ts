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
