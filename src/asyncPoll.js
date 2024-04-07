const asyncPool = async  (poolLimit, array, iteratorFn) => {
    const resultList = [];
    const executing = [];
    for (const item of array) {
        const p = Promise.resolve().then(() => {
            return iteratorFn(item);
        })
        resultList.push(p);

        if (poolLimit <= array.length) {
            const e = p.then(() => {
                return executing.splice(executing.indexOf(e), 1);
            });

            executing.push(e)

            if (executing.length >= poolLimit) {
                console.log(executing)
                const res = await Promise.race(executing);
                // console.log(res.then(val => console.log(val)))
            }
        }
    }
    return Promise.all(resultList);
}
async function pool (limit, array, fn) {
    const result = [];
    const execute = [];

    for (let task of array) {
        let p = Promise.resolve().then(() => {
            return fn(task)
        })

        result.push(p);

        if (limit <= array.length) {
            const e = p.then(() => {
                return execute.splice(execute.indexOf(e), 1);
            })

            execute.push(e);

            if (execute.length >= limit) {
                await Promise.race(execute)
            }
        }
    }
    return Promise.all(result);
}
const timeout = (i) => new Promise(resolve => setTimeout(resolve, i, i));

const main = async () => {
    const aa = await pool(3, [
        10,20,30,40,50,60,60,70,80,1000
    ], timeout)
    console.log(aa)
}


main();




