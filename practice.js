/* Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false */

function sameFrequency(num1, num2){
  // split array
      let array1 = num1.toString().split('');
      let array2 = num2.toString().split('');
  
  // if array lengths do not match, false
    if (array1.length !== array2.length){
        return false
    }
  // freqCounter
    let freqCount1 = {}
    let freqCount2 = {}
  
    for (let num of array1){
      freqCount1[num] = (freqCount1[num] || 0) + 1
    }
    for (let num of array2){
      freqCount2[num] = (freqCount2[num] || 0) + 1
    }
  // if key does not exist in arr2, false
    for (let key in freqCount1){
      if (!freqCount2[key]){
          return false
      }
  // if values do not match, false
      if (freqCount2[key] !== freqCount1[key]){
          return false
      }
    }
  return true
}

completed