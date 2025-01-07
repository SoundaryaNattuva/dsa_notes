// BUBBLE SORT - algorithm where largest value bubbles to the top. Runs through list repeatedly, compares adjacent elements, and swaps them if they are out of order.

// EXAMPLE: bubbleSort([37,45,29,8,12,88,-3])

// SOLUTION: 
function bubbleSort(arr){
  for (let i=arr.length; i>=0; i--){
    for (let j=0; j<i-1; j++){
      if (arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

//SOLUTION - OPTIMIZED:
function bubbleSort(arr){
  var noSwaps;
  for (let i = arr.length; i > 0; i--){
    noSwaps = true;
    for (let j=0; j<i-1; j++){
      if (arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr
}

//TAKEAWAY:
// if noSwaps - if true, break. If false, do nothing.
// var is not used anymore. Let and Const are used when introducing a variable.
// Const - cannot be reassigned.


//----------PRACTICE--------------//
// practice #1:
function bubbleSort(arr){
  var noSwaps; 
  // iterate through array
  for (let i = arr.length; i >= 0; i--){
    noSwaps = true
    // compare 2 values - i and j
    for (let j=0; j < i-1 ; j++){
      // if i < j - do nothing - do not need to do anything
      if (arr[j] <= arr[j+1]){
        return
      // if i > j - flip
      } else if (arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
    if (noSwaps) break
    // reach end of arr, next iteration is length - 1. 
  }
  return arr
}

//practice #2:
// Example - [37,45,29,8,12,88,-3])

function bubbleSort(arr){
  // Flag to optimize and terminate early if array is sorted
  let noSwaps;
  //outer loop -  progressively reduces the range of elements to sort
  for(let i = arr.length; i > 0 ; i--){
    noSwaps = true;
    //inner loop - compares and swaps adjacent elements
    for(let j = 0; i < i-1; j++){
      if(arr[i] > arr[j+1]){
        let temp = arr[i];
        arr[i] = arr[j+1];
        noSwaps = false; 
        // set flag to indicate a swap occurred
        arr[j+1] = temp;
      }
    }
    // If no swaps were made in this pass, array is already sorted
    if(noSwaps) break;
  }
  return arr;
}