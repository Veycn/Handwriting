

function eatMinSpeed(piles, h){
  let max = 1;
  for(let i = 0; i < piles.length; i++){
    if (piles[i] > max) max = piles[i];
  }

  let left = 1;
  let right = max;
  while(left < right){
    let mid = Math.floor(left + (right - left) / 2);

    if (calcSum(piles, mid) > h){
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;


  function calcSum(piles, speed){
    return piles.reduce((acc, cur) => acc + Math.ceil(cur / speed), 0)
  }
}

console.log(eatMinSpeed([30,11,23,4,20], 5));

