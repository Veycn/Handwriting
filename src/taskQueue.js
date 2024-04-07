

class TaskQueue {

    constructor() {

    }

    async sleep(time) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, time)
        })
        return Promise.resolve(this);
    }
    log(val){
        console.log(val);
        return this;
    }
}


let t = new TaskQueue()
t.log(1).sleep(2000).log(3)
