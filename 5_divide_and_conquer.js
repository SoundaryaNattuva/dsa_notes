//divide and conquer: this pattern involves dividing data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity

//ex. given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1. 

// ([1,2,3,4,5,6], 4) - use binary search --> Log(N)

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