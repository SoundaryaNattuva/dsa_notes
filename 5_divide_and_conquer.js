//divide and conquer: this pattern involves dividing data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity. // ([1,2,3,4,5,6], 4) - use binary search --> Log(N)

//ex. given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1. 


// SOLUTION: 
function search(array, val){
  let min = 0;
  let max = array.length - 1;

  while (min <= max){
    let middle = (Math.floor(min + max) / 2);
    let currentElement = array[middle];
    if (array[middle] < val){
      min = middle + 1;
    }
    else if (array[middle] > val) {
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}

// TAKEAWAY:
// Do not forget to +1 or -1 depending on if value is greater than or less than midpoint
// Condition - only do it while left <= right

//------PRACTICE-------//
//practice #1
function search(array, val){
  // let left and right
  let left = 0
  let right = array.length-1 
  // val is =, > or < midpoint
  while (left <= right){
  // find the midpoint of the array + floor it
  let midp = Math.floor((right+left)/2)
  // if the val is > mp, left = mp + 1
  // if the val is < mp, right = mp - 1
  // if val = mp, return index
    if (array[midp] === val){
      return midp
    } else if (array[midp] < val){
      left = midp + 1
    } else if (array[midp] > val){
      right = midp - 1
    }
  }
  return - 1
}
