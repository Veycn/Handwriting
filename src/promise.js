const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        let resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                this.onResolvedCallbacks.forEach(f => f())
            }

        }

        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(f => f())
            }

        }

        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }


    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : err => new Error(err);

        let promise = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        return resolvePromise(promise, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                }, 0)
            }

            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        return resolvePromise(promise, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                }, 0)
            }

            if (this.status === PENDING) {
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(promise, x, resolve, reject)
                        } catch (err) {
                            reject(err)
                        }
                    }, 0)
                })

                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise, x, resolve, reject)
                        } catch (err) {
                            reject(err)
                        }
                    }, 0)
                })
            }
        })
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('Chaining cycle detected for promise #MyPromise '))
    }

    let called;

    if (typeof x != null && typeof x === 'object' || typeof x === 'function') {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return;
                    called = true
                    resolvePromise(promise, y, resolve, reject)
                }, z => {
                    if (called) return;
                    called = true
                    reject(z)
                })
            } else {
                resolve(x)
            }
        } catch (err) {
            if (called) return;
            called = true
            reject(err)
        }
    } else {
        resolve(x)
    }
}


let p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log(111)
        resolve(1)
    }, 200)
})

p.then(val => {
    console.log(val)
})


MyPromise.defer = MyPromise.deferred = function () {
    let dfd = {}
    dfd.promise = new MyPromise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = MyPromise;
