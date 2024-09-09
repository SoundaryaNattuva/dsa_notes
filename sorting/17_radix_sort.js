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
  maxDigits = mostDigits(nums)
  for(let k=0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length:10}, () => [])
    for(let i=0; i<nums.length; i++){
      let digit = getDigit(nums[i],k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}



// TAKEAWAY:
// 10^0 --> ones place // 10^1 --> tens place // 10^2 --> 100s place.
// 3 % 10 = 3 --> % returns remainder.
// Math.floor --> rounds given number down to the nearest integer
// getDigit Pseudocode: (1) find absolute value (2) divide by 10^i (3) round down to whole integer (4) find remainder
// log10 0 = undefined