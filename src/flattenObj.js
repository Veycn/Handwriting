/**
 * 记住这个函数，腾讯音乐面试就是栽在这里！！
 * @param current
 * @param prefix
 */

function dfs(current, prefix){
    if(typeof current === 'object' && typeof current != null){
        if (Array.isArray(current)){
            current.forEach((item, index) => {
                dfs(item, `${prefix}[${index}]`)
            })
        }else {
            for (const key in current){
                dfs(current[key], `${prefix}${prefix ? '.' : ''}${key}`)
            }
        }

    }else{
        result[prefix] = current
    }
}
