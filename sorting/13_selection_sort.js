// SELECTION SORT: instead of placing large values into sorted postion (as for bubble sort), it places small values into sorted position.
//KEY: selection sort finds the minimum and swaps at the end. Bubble sort - swaps for largest as it goes till the end. 

// EXAMPLE: selectionSort([2,15,3,11,10])

// SOLUTION: 
function selectionSort(arr){
  for (let i=0; i<= arr.length; i++){
    let small = i;
    for (let j=i+1; j<= arr.length; j++){
      if (arr[j] < arr[small]){
        small = j;
      }
    }
    if (i !== small){
      var temp = arr[i];
      arr[i] = arr[small];
      arr[small] = temp;
    }
  }
  return arr
}
// TAKEAWAY:
// Know what selectionSort is doing - we are trying to swap arr[i] with the smallest number as we iterate through the array. 

//---------------PRACTICE--------------------------//
// practice #1
function selectionSort(arr){
  // iterate through array. Left most will be the smallest #'s
  for(let i=0; i<arr.length; i++){
    let small = i
    // compare as you iterate through array
    for (let j=i+1; j<arr.length; j++){
    // if arr[j] < arr[small] --> small = j
      if (arr[j] < arr[small]){
        small = j
      }
    }
    // after iteration, check if small = i. If not, set arr[i] to small
    if (i !== small){
      let temp = arr[i]
      arr[i] = arr[small]
      arr[small] = temp
    }
  }
  return arr
}

//practice #2
// [2,15,3,11,10]
function selectionSort(arr){
  //outer loop: progressively decreases
  for(let i = 0; i< arr.length ; i++){
    // keep track of index with smallest value
    let smallIndex = i;
    //inner loop: loops through set
    for(let j = i+1; j< arr.length; j++){
      if(arr[j] < arr[smallIndex]){
        smallIndex = j
      }
    }
    // if initial index doesn't match later index, swap
    if(i !== smallIndex){
      let temp = arr[i];
      arr[i] = arr[smallIndex];
      arr[smallIndex] = temp;
    }
  }
  //return sorted arr
  return arr
}