


Promise.prototype.myAll = function (promises){
    return new Promise((resolve, reject) => {
        const len = promises.length;
        let result = [], doneCount = 0;
        for (let i = 0; i < len; i++){
            Promise.resolve(promises[i]).then((value) => {
                // 根据索引设置结果，保证数据顺序返回
                result[i] = value
                if (++doneCount === len){
                    resolve(result)
                }
            }, (err) => {
                return reject(err)
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

Promise.prototype.myAll([p1, p2, p3]).then(result => {
    console.log(result)
})
