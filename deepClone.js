

function deepClone(target, cloneMap = new Map()){
    // 首先判空
    if(typeof target == null || typeof target !== 'object'){
        return target
    }

    // 判断目标对象是数组还是对象
    const isArray = Array.isArray(target)
    let result = isArray ? [] : [];

    if (cloneMap.get(target)){
        return cloneMap.get(target)
    }

    const keys = isArray ? null : Object.keys(target)

    forEach(keys || target, (value, key) => {
        if (keys){
            // 如果 keys 存在，此时是对象，value 是对象的key
            key = value
        }
        result[key] = deepClone(target[key], cloneMap)
    })

    cloneMap.set(target, result)
    return result
}


// 写个辅助函数用来对每一个数组或者对象的元素使用指定的迭代器
function forEach(array, iterator){
    let index = -1, len = array.length;
    while (++index < len){
        iterator(array[index], index)
    }
}
