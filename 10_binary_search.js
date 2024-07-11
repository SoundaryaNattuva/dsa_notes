// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, val){
  let min = 0
  let max = arr.length - 1
  while (min <= max){
    let middle = Math.floor((min + max) / 2)
    if (val > arr[middle]){
      min = middle + 1
    } else if (val < arr[middle]){
      max = middle - 1
    }
    else {return middle}
  }
  return - 1
}


function binarySearch(arr, val){
  let start = 0
  let end = arr.length-1
  while (start <= end){
      let avg = Math.floor((start + end) / 2)
      if (val < arr[avg]){
          end = avg-1
      }
      else if (val > arr[avg]){
          start = avg+1
      }
      else {
          return avg
      }
  }
  return -1
}