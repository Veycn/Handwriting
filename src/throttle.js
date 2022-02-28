

function throttle(fn, delay) {
    let last = 0;
    return function (...args) {
        let now = Date.now()
        if (now - last > delay) {
            fn.apply(this, args)
            last = now
        }
    }
}

let f = () => console.log(1)

let tf = throttle(f, 50)


setTimeout(tf, 10)
setTimeout(tf, 10)
setTimeout(tf, 20)
setTimeout(tf, 30)
setTimeout(tf, 40)
setTimeout(tf, 10)
setTimeout(tf, 50)
