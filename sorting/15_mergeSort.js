// MERGE SORT: splits the array into halves, recursively sorts each half, and then merges the sorted halves back together.

// PART 1: Merging Arrays
function merge(arr1, arr2){
  let i=0;
  let j=0;
  let results =[];
  while (i < arr1.length && j < arr2.length){
    if (arr1[i] < arr2[j]){
      results.push(arr1[i])
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }
  while (i < arr1.length){
    results.push(arr1[i])
    i++;
  } 
  while (j < arr2.length){
    results.push(arr2[j])
    j++;
  }
  return results;
}
merge([1,10,50], [2,14,99,100])

// PART 2: Sorting Arrays
function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right);
}
mergeSort([4, 11 ,39, 23, 7, 1, 15])

//TAKEAWAYS: 
// Divide and conquer
// Has recursion function
// An if statement would only check and add a single element, but a while loop processes all remaining elements until the end of the array is reached.
// 2 parts: 
//    1. mergeSort: splitting array into arrays of length <= 1 
//    2. merge: comparing arrays one element at a time and adding it to new array. 

//-----------PRACTICE------------//

// Practice #1
function merge(arr1, arr2){
  // let sortedArr = []
  let sortedArr = []
  let i = 0
  let j = 0
  // loop through each array, comparing one element at a time. 
  // while arr1[i] < arr1.length && arr2[j] < arr2.length
  while (i < arr1.length && j < arr2.length){
    // if arr1[i] < arr2[j] --> sortedArr.push(arr1[i]) AND i++
    if (arr1[i] < arr2[j]){
      sortedArr.push(arr1[i])
      i++
    } else {
      // if arr1[i] > arr2[j] --> sortedArr.push(arr2[j]) AND j++
      sortedArr.push(arr2[j])
      j++
    }
  }
  // if i < arr1.length --> push arr[i] into sortedArr 
  while (i < arr1.length){
    sortedArr.push(arr1[i])
    i++
  }
  // if j < arr2.length --> push arr[j] into sortedArr 
  while (j < arr2.length){
    sortedArr.push(arr2[j])
    j++
  }
  return sortedArr
}

function mergeSort(arr){
  // if length of arr <= 1, return arr
  if (arr.length <= 1){
    return arr
  }
  // find midpoint
  let mid = Math.floor(arr.length/2)
  // find left
  let left = mergeSort(arr.slice(0, mid))
  // find right
  let right = mergeSort(arr.slice(mid))
  // return merge (left, right)
  return merge(left, right)
}



