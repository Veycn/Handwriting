

function debounce(fn, delay, immediate){
    let timer = null;
    return function (...args){
        if(immediate){
            fn.apply(this, args)
        }
        if (timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}


let f = () => console.log(1)

let df = debounce(f, 1000)

df()
