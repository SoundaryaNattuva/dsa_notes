function quickSort(arr, left=0, right=arr.length-1){
  //base case
  if (left < right){
    let pivotIndex = pivot(arr,left, right)
    // left recursive
    quickSort(arr, left, pivotIndex-1)
    // right recursive
    quickSort(arr, pivotIndex+1, right)
  }
  return arr
}


// Pivot helper function
function pivot(arr, start=0, end=arr.length-1){
  const swap = (arr, idx1, idx2) => {
    [arr[idx1],[idx2]] = [arr[idx2],[idx1]]
  }
  let swapIdx = start
  let pivot = arr[start]

  for(let i=star+1; i<arr.length; i++){
    if( pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}