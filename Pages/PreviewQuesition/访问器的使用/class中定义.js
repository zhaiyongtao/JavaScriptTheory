/**
 * class中定义 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/7/24 10:53 上午
 * @LastEditTime: 2021/7/24 10:53 上午
 */

class User {
    name;
    constructor() {
        this.name = 'zyt'
    }

    get userName (){
        return this.name
    }

    set userName (value) {
        this.name = value
    }
}


const user = new  User()
console.log(user.userName)  // zyt

