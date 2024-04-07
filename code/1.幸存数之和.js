

function sumOfLeft (nums, jump, left){
  let now = 1;

  while(nums.length > left){
    now += jump;
    now %= nums.length;
    nums.splice(now, 1);
  }

  return nums.reduce((acc, cur) => acc + cur, 0);
}

const arr = [1,2,3,4,5,6,7,8,9];

console.log(sumOfLeft(arr, 4, 3));