// QUICK SORT: based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array

// BREAKDOWN/KEY POINTS
// When a # < pI:
//     - pI ++
//     - Swap the current element with the element at pI.
// When end of array:
//     - Swap arr[0] w/ arr[pI]
// Recursive:
//     - Recursively apply Quick Sort to the left and right parts of the array (excluding the pivot).
// For the parameters "start=0" and "end=arr.length-1", this indicates to use default values for start and end when not explicitly stated. For ex. quickSort([4,2,6,7,1,9]) --> quickSort([4,2,6,7,1,9], start=0, end=5)

// SOLUTION

// Pivot helper function
function pivot(arr, start=0, end=arr.length - 1){
  // define swap function
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  // assume pivot is always first element
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++){
    if (pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i)
    }
  }

  // Swap elements at start pivot with the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

// Quick sort function
function quickSort(arr, left=0, right=arr.length-1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right)
    //left
    quickSort(arr, left, pivotIndex-1);
    //right
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}

quickSort([4,6,8,1,2,5])

// SUMMARY:

