// Frequency Counter: write a fxn called same which accepts two arrays. Fxn should return true if every value in the array has it's corresponding value squared in the second array. Frequency of values must be the same. 

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

//--------PRACTICE---------//
function same(arr1, arr2){
  // if the lengths of the arrays !=, return false
  if (arr1.length != arr2.length){
    return false
  }
  // set counter
  let counter = {}
  // take arr1 and square the item - add it to counter. = 1 or += 1
  for (let i = 0; i<arr1.length; i++){
    let char = arr1[i] * arr1[i]
    counter[char] ? counter[char] += 1 : counter[char] = 1
  }
  // take arr2, see if it is present in counter
  for (let i = 0; i< arr2.length; i++){
    let char=arr2[i]
    if (counter[char]){
      counter[char] -= 1
      if (counter[char] < 0){
        return false
      }
    } else return false
  }
  // return true
  return true
}