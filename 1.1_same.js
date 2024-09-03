// Write a function called same, which accepts two arrays. The function should return true if every value in the first array has it's corresponding value squared in the second array. The frequency of values must be the same. 

// same[(1,2,3),(4,1,9)] -- TRUE
// same[(1,2,3),(1,9)] -- FALSE
// same[(1,2,1),(4,4,1)] -- FALSE

function same(arr1,arr2){
  // length !=, FALSE
  if (arr1.length != arr2.length){
    return false
  }
  // create a counter
  let squared1 = {}
  // take square of elements in arr1 and add to counter
  for(let i=0; i<arr1.length; i++){
    let char = arr1[i] * arr1[i]
    (squared1[char]) ? squared1[char] += 1 : squared1[char] = 1
  }
  // compare elements/quantity of arr2 to counter
  for (let j=0; j<arr2.length; j++){
    let char = arr2[j]
    if (!squared1[char]){
      return false
    } else {squared1[char] -= 1}
  }
  return true
}

//TEST
console.assert(same[(1,2,3),(4,1,9)], "Assertion Failed") // true
console.assert(same[(1,2,3),(1,9)], "Assertion Failed") // false
console.assert(same[(1,2,1),(4,4,1)], "Assertion Failed") // false

// Key takeaways:
// - conditional ternary structure: condition ? exprIfTrue : exprIfFalse
// - cannot use conditional ternary for return statement in a loop that only applies to one output. In this case false. See below of correct syntax - return for both true and false outputs.
// (1) Correct:
//        function checkNumber(num) {
//          return num % 2 === 0 ? "Even" : "Odd"; // Correct
//        }
//       
// (2) Incorrect:
//        squared1[char] ? squared1[char] -= 1 : false // Incorrect
// Must use 'if/else' statement. 


// practice #2
function same(arr1, arr2){
// check lengths
if (arr1.length !== arr2.length){
  return false
}
// create a counter
let arr1squared = {}
// add square of arr1 items to counter and count the freq
for (let i=0; i<arr1.length; i++){
  let sqchar = arr1[i] * arr1[i]
  arr1squared[sqchar] ? arr1squared[sqchar] += 1 : arr1squared[sqchar] = 1
}
// check if arr2 char and freq are in arr1squared
for (let j=0; j<arr2.length; j++){
  let sqchar2 = arr2[j]
  if (arr1squared[sqchar2]){
    arr1squared[sqchar2] -= 1
    if (arr1squared[sqchar2] < 0){
      return false
    }
  } else {
    return false
  }
}
return true
}