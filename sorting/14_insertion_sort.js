// insertion sort: builds up the sort by gradually creating a larger left half which is always sorted

//pseudocode: start w/ second element in array
// compare second element with previous. Swap if necessary
// continue to next element. If it is in wrong order, iterate through the sorted portion (left side) to place the element in the correct place.
// repeat till array is sorted.

function insertionSort(arr){
  for (let i=1; i<arr.length; i++){
    if (arr[i] < arr[i-1]){
      let value = arr[i]
      arr[i] = arr[i-1]
      arr[i-1] = value
      for (let j = i-1; j > 0; j--){
        if (arr[j] < arr[j-1]){
          let value2 = arr[j]
          arr[j] = arr[j-1]
          arr[j-1] = value2
        }
      }
    }
  }
  return arr
}

insertionSort([5, 3, 4, 1, 2])
insertionSort([3,5,4, 1, 2])

//Condensed code
function insertionSort(arr){
  for (let i = 1; i <arr.length; i++){
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal;
  }
  return arr
}

insertionSort([2, 1, 9, 76, 4])

