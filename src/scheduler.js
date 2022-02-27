class Scheduler {
    constructor(max = 2) {
        this.max = max;
        this.count = 0;
        this.queue = [];
    }

    run() {
        if (!this.queue.length || this.count >= this.max) {
            return
        }
        this.count++
        this.queue.shift()().then(res => {

        }, () => {

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
}



const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time);
})

const scheduler = new Scheduler();

const addTask = (time,order) => {
    scheduler.add(() => timeout(time).then(() => {
        console.log(order)
        console.timeEnd(order)
    }))
}

console.time('1')
addTask(1000, '1');
console.time('2')
addTask(5000, '2');
console.time('3')
addTask(3000, '3');
console.time('4')
addTask(4000, '4');

scheduler.start()

