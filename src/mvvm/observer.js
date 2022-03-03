
// Observer
function observable(obj){
    if (!obj){
        return
    }

    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })

    return obj
}


function defineReactive(obj, key, val){
    let dep = new Dep()
    Object.defineProperty(obj, key, {
        get(){
            if (Dep.target){
                dep.add(Dep.target)
            }
            return val
        },
        set(newVal){
            if (val === newVal){
                return
            }
            val = newVal
            dep.notify()
        }
    })
}

// Dep

class Dep {
    constructor() {
        this.subs = []
    }

    add(sub){
        this.subs.push(sub)
    }

    notify(){
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

Dep.target = null

// Watcher

class Watcher{

}

