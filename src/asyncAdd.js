function promisifyAdd(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, Math.random() * 200);
    })
}

async function asyncAdd(...nums){
    if(nums.length === 1){
        return nums[0]
    }
    const promises = [];
    for (let i = 0; i < nums.length;){
        promises.push(promisifyAdd(nums[i], nums[i + 1] || 0))
        i = i + 2;
    }

    const result = await Promise.all(promises);
    console.log(result)
    return asyncAdd(...result);
}

// let a = asyncAdd(1,2,3,4,5,6,7,8,9)

// a.then(val => console.log(val))


let nums = [1,2,3,4,5,6,7,8,9,10];

function add (nums){
    let count = 0;
    while (nums.length > 1 || this.count > 0) {
        count ++
        promisifyAdd(nums.shift(), nums.shift() || 0).then(val => {
            nums.push(val)
            count --;
        })
    }
    return nums[0];
}

