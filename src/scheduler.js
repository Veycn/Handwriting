class Scheduler {
    constructor(max = 2) {
        this.max = max;
        this.count = 0;
        this.index = 0;
        this.queue = [];
    }

    run() {
        if (!this.queue.length || this.count >= this.max) {
            return;
        }
        this.count++
        this.queue.shift()().then(res => {

        }, (err) => {

        }).finally(() => {
            this.count--
            this.run()
        })
    }

    add(fn) {
        this.queue.push(fn)
    }

    start() {
        for (let i = 0; i < this.max; i++) {
            this.run()
        }
    }

    get result(){
        return this.result;
    }
}



const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time, time);
})

const scheduler = new Scheduler(3);

const addTask = (time,order) => {
    scheduler.add(() => timeout(time).then(() => {
        console.log(order)
        console.timeEnd(order)
    }))
}

console.time('1')
addTask(500, '1');
console.time('2')
addTask(200, '2');
console.time('3')
addTask(300, '3');
console.time('4')
addTask(400, '4');

scheduler.start()

