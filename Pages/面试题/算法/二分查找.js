/**
 * 二分查找 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/2 2:31 下午
 * @LastEditTime: 2021/8/2 2:31 下午
 */

var search = function(nums, target) {
    let l = 0, r = nums.length;
    // 区间 [l, r）
    while(l < r) {
    // >>是位运算的右移，就是把操作数对应的二进制数整体右移一位（最高位补0，最低位砍掉）。
    // >>x相当于除以2的x次方
    //     >>0就是Math.floor()
        let mid = (l + r) >> 1;
        if(nums[mid] === target) return mid;
        let isSmall = nums[mid] < target;
        l = isSmall ? mid + 1 : l;
        // 所以 mid 不会被取到
        r = isSmall ? r : mid;
    }
    return -1;
};

const  arr = [1,4,6,7,8]
console.log(search(arr, 7))
