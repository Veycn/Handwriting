// f(['ab', 'c', 'd', 'ab', 'c']) => ['ab1', 'c1', 'd', 'ab2', 'c2']


function strCode(arr){
    let map = {}
    for (let i = 0; i < arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]] = 1
        }else{
            map[arr[i]]++
        }
    }

    for (let key in map){
        if (map[key] === 1){
            map[key]  = 0
        }
    }

    for(let i = arr.length - 1; i >= 0; i--){
        let count = map[arr[i]] >= 1 ? map[arr[i]] : ''
        map[arr[i]] --
        arr[i] = `${arr[i]}${count}`
    }

    return arr
}

console.log(strCode(['ab', 'c', 'd', 'ab', 'c']))
