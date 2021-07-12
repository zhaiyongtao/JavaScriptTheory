
class  EventEmitter {

    // 创建单例
    // 1) 创建一个静态变量 instance （承载实例对象）
    // 2) 创建一个静态方法
    // 3) 在静态方法中判断instance是否被赋值
    // 4) 如果没有被赋值，那么对我们的类进行初始化（new），实例对象赋值给instance
    // 5) 实例方法返回我们的是实例对象
    static eventBusInstance = null
    static EventBus() {
        if (!this.eventBusInstance) {
            this.eventBusInstance = new EventEmitter()
        }
        return this.eventBusInstance
    }

    constructor() {
        // 定义一个map
        this.handlers = {}
    }

    on = (eventName, callback) => {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = []
        }
        this.handlers[eventName].push(callback)

    }

    emit = (eventName, ...args) => {
        if (this.handlers[eventName]) {
            this.handlers[eventName].forEach((callback) => {
                callback(...args)
            })
        }
    }
}

const instance =  EventEmitter.EventBus()

instance.on('sayHello', () => {console.log('hello')})

instance.emit('sayHello')