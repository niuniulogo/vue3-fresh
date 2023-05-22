export default class EventEmitter {
    constructor() {
        this.callbacks = {}
    }
    on(envetName, callback) {
        if (!Array.isArray(this.callbacks[envetName])) {
            this.callbacks[envetName] = []
        }
        this.callbacks[envetName].push(callback)
    }
    emit(eventName, ...args) {
        if (Array.isArray(this.callbacks[eventName])) {
            this.callbacks[eventName].forEach((callback) => callback(...args))
        }
    }
    off(eventName, callback) {
        if (!Array.isArray(this.callbacks[eventName])) {
            return
        }
        if (callback) {
            this.callbacks[eventName].forEach((cb) => {
                if (callback === cb) {
                    this.callbacks[eventName].splice(this.callbacks[eventName].indexOf(callback), 1)
                }
            })
        } else {
            this.callbacks[eventName] = []
        }
    }
    once(eventName, callback) {
        const that = this
        const fn = function () {
            // eslint-disable-next-line prefer-rest-params
            callback.apply(that, [...arguments])
            that.off(eventName, fn)
        }
        that.on(eventName, fn)
    }
}
