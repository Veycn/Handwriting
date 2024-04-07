/**
 * 1、允许初始传入任意数量的参数
 * 2、当传入的参数个数为0的时候认为需要最终执行，执行传入的func并返回结果
 * 3、每次传入参数通过参数数组收集起来，返回内部函数用来继续接收参数
 * 4、
 * @param func
 * @param args
 * @returns {(function(...[*]): (*))|*}
 */
function curring(func, ...args) {
    const params = [...args]
    return function temp(...rest) {
        if (rest.length === 0) {
            return func(...params)
        } else {
            params.push(...rest)
            return temp
        }
    }
}


const sum = (...args) => args.reduce((a, b) => a + b, 0)

let currySum = curring(sum, 1, 2, 3)

currySum(4)(5)(6)(7)(8, 9)

console.log(currySum()) // 45


function curry(func, ...args){
    const params = [...args];
    return function temp(...rest){
        if (rest.length === 0) {
            return func(...params)
        } else {
            params.push(...rest);
            return temp
        }
    }
}


function curry(fn) {
    let len = fn.length, params = [];
    return function temp(...args){
        params.push(...args)
        if (args.length < len) {
            return temp
        } else {
            return fn.call(null, ...params)
        }
    }
}
