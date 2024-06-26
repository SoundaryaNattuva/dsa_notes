// 1. Frequency Counter: write a fxn called same which accepts two arrays. Fxn should return true if every value in the array has it's corresponding value squared in the second array. Frequency of values must be the same. 

// Time complexity is O(n)

function same (arr1, arr2){
  // check if arr lenghts are same
  if (arr1.length != arr2.length){
    return false;
  } 
  // counter for arr1 and arr2
  let freqCounter1 = {}
  let freqCounter2 = {}
  for (let val of arr1){
    freqCounter1[val] = (freqCounter1[val] || 0) + 1
  }
  for (let val of arr2){
    freqCounter2[val] = (freqCounter2[val] || 0) + 1
  }
  for (let key in freqCounter1){
    // does ^2 value exist in freqCount2
    if (!(key ** 2 in freqCounter2)){
      return false
    } 
    // do the values match for the same key
    if (freqCounter2[key ** 2] !== freqCounter1[key]){
      return false
    }
  }
  return true
}