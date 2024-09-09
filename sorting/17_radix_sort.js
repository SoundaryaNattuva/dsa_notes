//RADIX SORT

//HELPER FUNCTIONS
//getDigit helper function - return the digit in num at the given place value. 
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

//digitCount helper function - returns the number of digit in num
function digitCount(num){
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//mostDigits helper function - given an array of numbers, returns the number of digits in the largest numbers in the list.
function mostDigits(nums){
  let maxDigits = 0
  for(let i=0; i<nums.length; i++){
    maxDigit = Math.max(maxDigits, digitCount(nums[i])) 
  }
  return maxDigits
}

//SOLUTION
function radixSort(nums){
  let maxDigitCount = mostDigits(nums)
  for(let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => []);
    for(let i = 0; i<nums.length; i++){
      let digit = getDigit(nums[i],k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

function radixSort(nums){
  // find maxDigit from nums
  let maxDigits = mostDigit(nums)
  // outerloop - maxDigit as limit
  for (let k=0; k<maxDigits; k++){
    // create buckets
    // innerloop - iterate through each num in nums
    for (let i=0; i<nums.length; i++){
      // find digit of interest
      let digitValue = getDigit(num[i],k)
      // push into bucket
      buckets[digitValue].push(num[i])
    }
    // concat bucket into nums
    nums.concat(...buckets)
  }
  // return nums
  return nums
}

//PSEUDOCODE radixSort()
function radixSort(nums){
  // find maxDigit from nums
  let maxDigits = mostDigit(nums)
  // outerloop - maxDigit as limit
  for (let k=0; k<maxDigits; k++){
    // create buckets**
    let digitBuckets = Array.from({length:10}, () => [])
    // innerloop - iterate through each num in nums
    for (let i=0; i<nums.length; i++){
      // find digit of interest
      let digitValue = getDigit(num[i],k)
      // push into bucket **
      digitBuckets[digitValue].push(num[i])
    }
    // concat bucket into nums **
    nums = [].concat(...digitBuckets)
  }
  // return nums
  return nums
}


// TAKEAWAY:
// 10^0 --> ones place // 10^1 --> tens place // 10^2 --> 100s place.
// 3 % 10 = 3 --> % returns remainder.
// Math.floor --> rounds given number down to the nearest integer
// getDigit Pseudocode: (1) find absolute value (2) divide by 10^i (3) round down to whole integer (4) find remainder
// log10 0 = undefined