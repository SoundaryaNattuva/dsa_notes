// Multiple Pointer: creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. 

// Very efficient for solving problems with minimal space complexity as well

// Ex. write a fxn called sumZero which accepts a sorted array of integers. The fxn should find the first pair where the sum is 0. Return array that includes both values that zume zero or underfined if pair does not exist. 

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

const sumZero = require('./sumZero');

test('finds the first pair that sums to zero', () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
  expect(sumZero([-2, 0, 1, 3])).toBeUndefined();
  expect(sumZero([1, 2, 3])).toBeUndefined();
  expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])).toEqual([-3, 3]);
});
