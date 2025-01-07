//INSERTION SORT: builds up the sort by gradually creating a larger left half which is always sorted

//PSEUDOCODE: start w/ second element in array
// compare second element with previous. Swap if necessary
// continue to next element. If it is in wrong order, iterate through the sorted portion (left side) to place the element in the correct place.
// repeat till array is sorted.

//EXAMPLES:
insertionSort([2, 1, 9, 76, 4])
insertionSort([5, 3, 4, 1, 2])
insertionSort([3, 5, 4, 1, 2])

//SOLUTION #1 - Elaborate: 
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

//SOLUTION #2 - Refactored: 
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

//--------------PRACTICE---------------//
[1, 2, 9, 76, 4]
function insertionSort(arr){
// iterate through unsorted #s (right)
  for (let i=1; i<arr.length; i++){
    let currentVal = arr[i]
    // iterate through sorted #s (left)
    for (let j=i-1; j<= 0 && arr[j] > currentVal; j--){
      // 3 5 7 | 8
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal
  }
}

[1,2,4,76, 9]
function insertSort(arr){
  //outer loop: sorted set
  for (let i = 0; i < arr.length; i++){
    //inner loop: sorted set 0 till j
    for(let j=0; j<i; j++){
      if(arr[j] > arr[i]){
        let temp = arr[]
      }
    }

  }
}



