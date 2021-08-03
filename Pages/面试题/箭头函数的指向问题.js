/**
 * 箭头函数的指向问题 - 描述
 * @Author: BuzzLightyear.Z
 * @Email: 501671900@qq.com
 * @Date: 2021/8/1 3:00 下午
 * @LastEditTime: 2021/8/1 3:00 下午
 */
var a = 1
var obj = {
    a: 2,
    func2: () => {
        console.log(this.a)
    },

    func3: function() {
        console.log(this.a)
        this.b = 45465;
        this.c = () => {
            console.log(this.b)
        }
        this.c()
    }
}



// func1
var func1  = () => {
    console.log(this.a)
}

// func2
var func2 = obj.func2
// func3
var func3 = obj.func3

func1()
func2()
func3()
obj.func2()
obj.func3()
