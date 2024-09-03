// Multiple Pointer: creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well

// PROBLEM: write a fxn called sumZero which accepts a sorted array of integers. The fxn should find the first pair where the sum is 0. Return array that includes both values that sum zero or underfined if pair does not exist. 

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3] 
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

function sumZero (arr){
  //define where the pointers are
  let left = 0;
  let right = arr.length - 1;

  //make sure the pointers are not the same
  while(left < right){
    //establish sum
    let sum = arr[left] + arr[right];
    // check sum
    if (sum === 0){
      return [arr[left], arr[right]]
    } else if(sum > 0){
      right--;
    } else {
      left++;
    }
  }
}


// TAKEAWAY:
// - Use a while loop when you don’t know the number of iterations but loop needs to stop once condition is met. 
// - Use for loop when you have to iterate through known range
// - Use when you need to execute the loop body at least once regardless of the condition.


// practice #1
function sumZero(list){
  let left = 0
  let right = list.length-1;
  while (left < right){
    let sum = list[left] + list[right]
    if (sum === 0){
      return [list[left],list[right]] 
    } else if (sum > 0){
      right --;
    } else {
      left ++;
    }
  }
}


// practice #2 - sumZero([-2,-1,0,1,3])
function sumZero(arr){
  // if length of array < 2 return false
  if (arr.length < 2){
    return undefined
  }
  // set left, right and sum variables
  let left = 0
  let right = arr.length-1

  // check sum
  while (left < right){
    let sum = arr[left] + arr[right]
    if (sum === 0){
      return [arr[left], arr[right]]
    } else if (sum > 0){
      right --
    } else {
      left ++
    }
  }
  return undefined
}





// const sumZero = require('./sumZero');

// test('finds the first pair that sums to zero', () => {
//   expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
//   expect(sumZero([-2, 0, 1, 3])).toBeUndefined();
//   expect(sumZero([1, 2, 3])).toBeUndefined();
//   expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])).toEqual([-3, 3]);
// });