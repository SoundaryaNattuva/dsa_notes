// Merge Sort: splits the array into halves, recursively sorts each half, and then merges the sorted halves back together.

// Merging Arrays
merge([1,10,50], [2,14,99,100])

function merge(arr1, arr2){
  i=0;
  j=0;
  result=[];
  while (i<arr1.length && j<arr2.length){
    if (arr1[i] < arr[j]){
      result.push(arr1[i])
      i++;
    } else {
      result.push(arr2[j])
      j++;
    }
  }
  if (i >= arr1.length){
    result.push(arr2)
  } else {
    result.push(arr1)
  }
  return results
}