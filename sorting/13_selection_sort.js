// selection sort: instead of placing large values into sorted postion (as for bubble sort), it places small values into sorted position.
//key: selection sort finds the minimum and swaps at the end. Bubble sort - swaps for largest till the end. 

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

selectionSort([2,15,3,11,10])

//[5,7,2,4,1]