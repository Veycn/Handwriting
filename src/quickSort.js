function quickSort (nums) {
    if (nums.length <= 1) return nums;

    let pivot = nums[0];
    let left = [], right = [];

    for (let i = 1; i < nums.length; i ++) {
        if (nums[i] > pivot) {
            right.push(nums[i])
        }else {
            left.push(nums[i])
        }
    }

    return [].concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([7,3,1,9,2,5,4,6,8]));

