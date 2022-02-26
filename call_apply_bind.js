

Function.prototype.myCall = function(thisArg, ...args){
    thisArg = thisArg || window
    thisArg['fn'] = this
    const result = thisArg['fn'](...args)
    delete thisArg['fn']
    return result
}

// function hello(){
//     console.log(this.name)
// }
//
// let o = {name: 'kar'}
// console.log(hello.myCall(o))
