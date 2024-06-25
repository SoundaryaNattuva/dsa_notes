// countUniqueValues: this accepts a sorted array and counts the unique values in the array. There can be negative numbers in array but it will always be sorted. 
// [1,2,3,4,4,4,7,7,12,13]

function countUniqueValues(arr)
{
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++){
    if (arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//takeaway: j is looping through - you do not need to add +1 to j. 