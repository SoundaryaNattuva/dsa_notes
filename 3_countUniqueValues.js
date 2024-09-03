// Count Unique Values: this accepts a sorted array and counts the unique values in the array. There can be negative numbers in array but it will always be sorted. 

// countUniqueValue([1,1,1,1,1,2]) // 2
// countUniqueValue([1,2,3,4,4,4,7,7,12, 12, 13]) // 7
// countUniqueValue([]) // 0
// countUniqueValue([-2,-1,-1,0,1]) // 4

// SOLUTION: 
function countUniqueValues(arr)
{
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++){
    if (arr[i] !== arr[j]){
      i++;
      // value of arr[j] is assigned to value on the left
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//TAKEAWAYS: 
// - j is looping through - you do not need to add +1 to j.
// - return i + 1! 
// - correct: !==       not correct: !=

// practice #1 - countUniqueValues([1,2,3,4,4,5,6,6,6,7])
function countUniqueValues(array){
  if (array.length === 0){
    return false
  }
  // assign i and j values
  let i = 0;
  for (let j=1; j < array.length; j++){
    if (array[i] !== array[j]){
      i++
      array[i] = array[j]
    } else{
      j++
    }
  }
}

//practice #2 - time O(n)   space O(1) - countUniqueValues([1,2,3,4,4,5,6,6,6,7])
function countUniqueValues(array){
  // edge case: check if length of array is 0
  if (array.length === 0){
    return false
  }
  // set two variables - i is creating unique list and j scouts entire list
  let i = 0
  // j - for loop
  for (let j=1; j<array.length; j++){
    if (array[i] !== array[j]){
      i++
      array[i] = array[j]
    } else {
      j++
    } 
  }
  // return index / i

}


//practice #3 -
function countUniqueValues(arr){
  // if length of array is < 2, return array.length
  if (arr.length < 2){
    return arr.length
  }
  let i = 0
  for (let j=1; j<arr.length; j++){
    if (arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    } 
  }
  return i + 1
  // compare two values - i and j; i is the count and j is the scout. j loops through 
}

//alternative solution w/o use of counting unique values
function countUniqueValues(array){
  // check length of array
  if (array.length === 0){
    return 0
  }
  // set a counter/object
  let counter = {}
  // loop through array and add to counter
  for (let i=0; i<array.length; i++){
    let char = array[i]
    counter[char] ? counter[char] += 1 : counter[char] = 1
  }
  // count keys in object
  return Object.keys(counter).length
} 