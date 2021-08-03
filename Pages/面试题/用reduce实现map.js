/**
 * 用reduce实现map - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/1 2:31 下午
 * @LastEditTime: 2021/8/1 2:31 下午
 */
if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, thisArg=global) {
        return this.reduce(function(mappedArray, currentValue, index, array) {
            mappedArray[index] = callback.call(thisArg, currentValue, index, array)
            return mappedArray
        }, [])
    }
}


console.log([1, 2, , 3].mapUsingReduce(
        (currentValue, index, array) => currentValue + index + array.length
    )
)


const bird = {
    size: "small"
};
const mouse = {
    name: "Mickey",
    small: true
};


console.log(
mouse[bird.size],
mouse[bird["size"]],
)


const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => {
        console.log(this.radius)
    }
};
console.log(shape.diameter())
console.log(shape.perimeter())
console.log(Math.PI)
