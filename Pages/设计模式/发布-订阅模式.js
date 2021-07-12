
class  EventEmitter {

    // 创建单例
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