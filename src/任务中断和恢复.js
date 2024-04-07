
function processTasks(...tasks){

  const result = [];
  let isRunning = false;
  let currentIndex = 0;
  return {
     start(){
      return new Promise(async (resolve, reject) => {
        if (isRunning){
          return;
        }
        isRunning = true;
        while(currentIndex < tasks.length - 1){
          try{
            result[currentIndex] = await tasks[currentIndex]();
            currentIndex++;
            console.log(`任务${currentIndex + 1}完成`);
            if (!isRunning){
              return;
            }
          }catch(err){
            reject(err);
          }
        }
        resolve(result);
      })
    },

    pause(){
      isRunning = false;
    },
  }
}

