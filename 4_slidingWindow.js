// Sliding Window: pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created) Ex. "hellothere" --> lother
// Very useful for keeping track of a subset of data in an array/string etc.

//PROBLEM: write a fxn called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n conecutive elements in the array. 

//maxSubarraySum ([1,2,5,2,8,1,5],2) --> 10
//maxSubarraySum ([1,2,5,2,8,1,5],4) --> 17
//maxSubarraySum ([4,2,1,6],1) --> 6
//maxSubarraySum ([0],4) --> null

// REFACTORED
function maxSubarraySum(arr, num){
let maxSum = 0;
let tempSum = 0;
if (arr.length < num){
  return null
}
for (let i = 0; i < num; i++){
  maxSum += arr[i];
}
tempSum = maxSum; // not necessary
// 
for (let i = num; i < arr.length; i++){
  tempSum = tempSum - arr[i - num] + arr[i];
  maxSum = Math.max(maxSum, tempSum);
}
return maxSum;
}

// TAKEAWAY:
// Math.max: returns bigger number
// Math.floor: rounds to next highest number
// 2nd loop for sliding window: 
//        - we are concerned with the end of the window. [i-num] and [i]

// Long way to solve
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



//------PRACTICE------//

//practice #1 - ROOKIE
function maxSubarraySum(arr, n){
  // edge case - n !> arr.length
  if (arr.length < n){
    return null
  }
  // set largestSum
  let largestSum = 0
  // outer for loop - go through array.length-n
  for (let i=0; i<arr.length-n+1; i++){
    // set currentSum
    let currentSum = 0;
    // inner for loop - go through each window of length 4 and add to currentSum
    for (let j=i; j<i+n; j++){
      currentSum += arr[j]
    }
    // compare largestSum to currentSum
    if (currentSum > largestSum){
      largestSum = currentSum
    }
  }
  // return largestSum
  return largestSum
}


//practice #2 - alternate refactored way
function maxSubarraySum(arr, n){
// if length of array > n, return false
if (array.length < n){
  return null
}
// set maxSum and tempSum
let maxSum = 0
let tempSum = 0
// loop #1 - first window
for(let i=0; i<n; i++){
  tempSum += arr[i]
}
maxSum = tempSum
// loop #2 - slides
let j=0
let k=n-1
while (j<=arr.length-n){
  tempSum -= arr[j]
  k++
  tempSum += arr[k] 
  if (maxSum < tempSum){
    maxSum = tempSum
  }
  j++
}
return maxSum
}


//practice #3 - BEST
function maxSubarraySum(arr, num){
// num > arr.length - false
  if (arr.length < num){
    return null
  }
// set max and temp sums
  let maxSum = 0
  let tempSum = 0
// loop to first window value - maxSum
  for (let i=0; i<num; i++){
    maxSum += arr[i]
  }
// loop for sliding window
  for (let i=num; i<arr.length; i++){
  tempSum = tempSum - arr[i-num] + arr[i]
  //find max of sum
  maxSum = Math.max(tempSum,maxSum)
  }
// return maxSum
  return maxSum
}