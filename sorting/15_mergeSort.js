// Merge Sort: splits the array into halves, recursively sorts each half, and then merges the sorted halves back together.

// Part #1: Merging Arrays
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

// An if statement would only check and add a single element, but a while loop processes all remaining elements until the end of the array is reached.

// Part #2: sorting arrays 

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right);
}

mergeSort([4, 11 ,39, 23, 7, 1, 15])