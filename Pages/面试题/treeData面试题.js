/**
 * treeData面试题 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/12 6:11 下午
 * @LastEditTime: 2021/8/12 6:11 下午
 */
// 需求：给定一个完全树结构 <含根节点> ,修改指定id的节点值(蚂蚁二面的一个编程题)
    // 数据源
const treeData = [{
        id: 'root',
        title: '根节点',
        children: [{
            id: '1-1',
            title: '层级1-1',
            children: [{
                id: '1-1-1',
                title: '层级1-1-1',
            }, {
                id: '1-1-2',
                title: '层级1-1-2',
            }, {
                id: '1-1-3',
                title: '层级1-1-3',
            }, {
                id: '1-1-4',
                title: '层级1-1-4',
            }]
        }, {
            id: '1-2',
            title: '层级1-2',
            children: [{
                id: '1-2-1',
                title: '层级1-2-1',
            }, {
                id: '1-2-2',
                title: '层级1-2-2',
            }, {
                id: '1-2-3',
                title: '层级1-2-3',
            }, {
                id: '1-2-4',
                title: '层级1-2-4',
            }]
        }, {
            id: '1-3',
            title: '层级1-3',
            children: [{
                id: '1-3-1',
                title: '层级1-3-1',
            }, {
                id: '1-3-2',
                title: '层级1-3-2',
            }, {
                id: '1-3-3',
                title: '层级1-3-3',
            }, {
                id: '1-3-4',
                title: '层级1-3-4',
            }]
        }, ]
    }]

// 深拷贝函数
const _clone = data => {
    if (!data || !(data instanceof Object) || (typeof data == "function")) {
        return data || undefined;
    }
    let constructor = data.constructor;
    let result = new constructor();
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            result[key] = _clone(data[key]);
        }
    }
    return result;
}

const changeTreePostionData = (tree, id, changeTitle) => {
    if (tree[0].id === id) {// 根节点判定
        tree[0].title = changeTitle
        return tree
    }
    const searchId = (source, id) => {// 开启递归
        for (let i = 0; i < source.length; i++) {
            const item = source[i]
            if (item.id === id) {
                item.title = changeTitle
                return
            }
            if (item.children) { // 只对非末端节点进行递归
                searchId(item.children, id)
            }
        }
    }
    searchId(tree[0].children, id)
    return tree
}

// 测试数据准备
const deepCloneData = [_clone(treeData[0])]
console.log(deepCloneData)
const testId = '1-2-3'
const testChangeValue = '完全树结构'

const resultData = changeTreePostionData(deepCloneData, testId, testChangeValue)

console.log('原始数据-->', treeData)
console.log('修改数据-->', resultData)
