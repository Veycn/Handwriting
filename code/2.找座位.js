// 10001 隔一个位置坐一个人，输出剩余可以坐几个人

function findSeats (str) {
  let count = 0;
  let index = 0;
  const arr = str.split('');
  while(index < arr.length){
    debugger;
    if (arr[index] === '0'){
      const leftNull = index === 0 || arr[index - 1] == '0';
      const rightNull = index === arr.length - 1 || arr[index + 1] == '0';

      if (leftNull && rightNull){
        count++;
        arr[i] = '1';
      }
    }
    index++;
  }

  return count;
}


console.log(findSeats('10001'));
