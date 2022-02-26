


Promise.prototype.all = function (promises){
    return new Promise((resolve, reject) => {
        let resolveCount = 0, result = [];
        for (let i = 0; i < promises.length; i++){
            promises[i].then(val => {
                result.push(val);
                resolveCount++
                if(result.length === promises.length){
                    resolve(result)
                }
            }, err => {
                reject(err)
            })
        }
    })
}

let p1  = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })

let p2 = new Promise((resolve, reject) => {
    resolve(2)
})



let p3  = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 500)
})

Promise.all([p1, p2, p3]).then(result => {
    console.log(result)
})
