// Sliding Window: pattern involves creating a window which can either be an array or number from one position to another.

//Depending on a certain condition, the window can either increase of closes (and a new window is created)
//Ex. "hellothere" --> lother
// Very useful for keeping track of a subset of data in an array/string etc.

//Example: write a fxn called maxSubarraySum which accepst an array of integers and a number called n. The function should calculate the maximum sum of N conecutive elements in the array. 

//maxSubarraySum ([1,2,5,2,8,1,5],2) --> 10
//maxSubarraySum ([1,2,5,2,8,1,5],4) --> 17
//maxSubarraySum ([4,2,1,6],1) --> 6
//maxSubarraySum ([0],4) --> null

function maxSubarraySum(arr,num){
  //if num is > arr length -> null
  if (num > arr.length){
    return null
  }
  // -Infinity is set to the smallest possible value. This ensures that any real number you compare it to will be larger! 
  var max = -Infinity;
  // first loop ensures window starts at 0 and stops loop at the correct index to make sure window size (num) is accounted for.
  for (let i = 0; i < arr.length - num + 1; i ++){
    // temp = sum value for each secondary loop. 
    temp = 0
    // loop within window for sum
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    // if current window sum is larger than prev window sum (max), update is made.
    if (temp > max){
      max = temp;
    }
  }
  return max;
}

// REFACTORED
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num){ return null};
  for (let i = 0; i < num; i++){
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}