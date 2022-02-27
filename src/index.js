// function maxArea(arr){
//     let left = 0, right = arr.length - 1, res = 0;
//     while(left < right){
//         let x = right - left;
//         let y = Math.min(arr[left], arr[right])
//         let area = x*y;
//         if(area > res){
//             res = area;
//         }
//         if(arr[left] <= arr[right]){
//             left++
//         }else{
//             right--
//         }
//     }
//     console.log(res)
// }

function maxArea(arr){
    let left = 0, right = arr.length - 1, res = 0;
    while(left < right){
        let x = right - left;
        let y = Math.min(arr[left], arr[right])
        let area = x*y;
        if(area > res){
            res = area;
        }
        if(arr[left] <= arr[right]){
            left++
        }else{
            right--
        }
    }
    console.log(res)
}

maxArea([10,9,8,7,6,5,4,3,2,1])
