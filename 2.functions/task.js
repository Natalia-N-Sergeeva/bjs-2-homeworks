// Задание 1
function getArrayParams(arr) {
  let minElement, maxElement, sum, avg;
  minElement = arr [0];
  maxElement = arr [0];
  sum = arr[0];
  for (let i=1; i < arr.length; i++) {
    if (arr [i] > maxElement) {
      maxElement = arr [i];    
    }
    if (arr[i] < minElement) {
      minElement = arr[i];
      }    
    sum = sum + arr[i];
  }
  avg = sum/arr.length;
  avg = avg.toFixed(2);
  avg = Number(avg);
  return {max : maxElement, min: minElement, avg: avg};
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for (i=0; i<arr.length; i++) {
  sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let maxArr = func (arrOfArr[0]);
  for (j=1; j<arrOfArr.length; j++) {
    if (func(arrOfArr[j]) > maxArr) {
      maxArr = func(arrOfArr[j]);    
    }
    
  }
  return maxArr;
}

// Задание 3
function worker2(arr) {
  let minElement, maxElement, sum;
  minElement = arr [0];
  maxElement = arr [0];
  sum = arr[0];
  for (let i=1; i < arr.length; i++) {
    if (arr [i] > maxElement) {
      maxElement = arr [i];    
    }
    if (arr[i] < minElement) {
      minElement = arr[i];
      }    
    sum = sum + arr[i];
  }
   let difference = maxElement - minElement;
   Math.abs(difference);
  
  return difference;
}



