function quickSort(arr, left=0, right=arr.length-1){
  //base case
  if (left < right){
    let pivotIndex = pivot(arr,left, right)
    // left recursive
    quickSort(arr, left, pivotIndex-1)
    // right recursive
    quickSort(arr, pivotIndex+1, right)
  }
  return arr
}


// Pivot helper function
function pivot(arr, start=0, end=arr.length-1){
  const swap = (arr, idx1, idx2) => {
    [arr[idx1],[idx2]] = [arr[idx2],[idx1]]
  }
  let swapIdx = start
  let pivot = arr[start]

  for(let i=star+1; i<arr.length; i++){
    if( pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}


//Fibonacci
function fib(n){
  if (n<=0){
    return 1
  }
  return fib(n-1) + fin(n-2)
}

fib(4)
fib(3) + fib (2)
fib(2) + fib(1) + fib(1) + fib(0)
fib(1) + fib(0) + fib(1) + fib(1) + fib(0)
1 + 1 + 1 + 1 + 1 = 5


//palindrome {racecar}
function palindrome(str){
let left = 0
let right = str.length-1
while (left<=right){
    if (left === right){
      return true
    }
    else if (str[left] !== str[right]){
      return false
    }
    left ++
    right --
  }
  return true
}

// RADIX sort practice
// getDigit(-7629, 2) - accessing i place in num
  function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10
  }

// digitCount(-7269) - how many digits are in num
  function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }

// mostDigit([-7269, 394, 29, 5, -293]) - return count of the largest # of digits in an array of nums. 
  function mostDigit(nums){
    let maxDigits = 0
    for (let i=0; i<nums.length; i++){
      maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
  }
