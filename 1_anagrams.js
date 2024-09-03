// Anagram: given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as 'cinema' formed from 'iceman'. 

// EXAMPLES:
// validAnagram('aaz', 'zza') // false
// validAnagram('rat', 'car') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true

// SOLUTION:
function validAnagram (str1, str2) {
  if (str1.length != str2.length){
    return false
  }
  let counter = {};
  for (let i = 0; i < str1.length; i++){
    let char = str1[i]
    counter[char] ? counter[char] += 1 : counter[char] = 1
  }
  for (let i = 0; i < str1.length; i++){
    let char = str2[i]
    if (!counter[char]){
      return false
    } else {
      counter[char] -= 1
    }
  }
  return true
}

// Anagram w/ explanation 
function validAnagram(str1, str2){
  // check if length matches
  if (str1.length !== str2.length) {
    return false; // return false and exit function if lengths do not match
  }
  // create counter
  let compareList = {};
  // 1. go through each letter of the str1 and count occurence
  for (let i=0; i < str1.length; i++){
    let char = str1[i];
    compareList[char] ? compareList[char] += 1 : compareList[char] = 1;
  }
  // 2. go through each letter of str2
  for (let i=0; i < str2.length; i++){
    let char = str2[i]; //you can use str2[i] instead of char
    // if letter does not exist (undefined) or = 0 or = -1 (doesn't get to this point), return 'false'--> exit function.
    if (!compareList[char]){
      return false;
    // if letter exists subtract one.
    } else {compareList[char] -= 1;
    }
  }
return true;
}

// TAKEAWAY
// - know difference btwn array indices and string indices. In this example, you do not need to make the string into an array using split method. 

// Example of string: 
// let str = "hello";
// console.log(str[0]); // Output: 'h'
// console.log(str[1]); // Output: 'e'

// Example of array:
// let arr = [10, 20, 30];
// console.log(arr[0]); // Output: 10
// console.log(arr[1]); // Output: 20

// - syntax for split: split(separator)
// let str = "apple,banana,orange";
// let arr = str.split(","); // Output: ["apple", "banana", "orange"]
// let arr = str.split(""); // Output: ["a","p","p",....]







// practice #1
function validAnagram (str1, str2) {
  // str1 length ! str2 length
  if (str1.length != str2.length){
    return false
  }

  //create a counter and add to it
  let counter = {};
  
  for (let i = 0; i < str1.length; i++){
    let char = str1[i]
    counter[char] ? counter[char] += 1 : counter[char] = 1
  }

  //char in str2 is preent in counter
  for (let i = 0; i < str1.length; i++){
    let char = str2[i]
    if (!counter[char]){
      return false
    } else {
      counter[char] -= 1
    }
  }
  return true
}

// practice #2
function validAnagram(str1, str2){
  //if lengths do not match - false
  if(str1.length != str2.length){
    return false
  }
  
  // set a counter
  let counter = {};

  //add letters and freq to counter
  for (let i=0; i < str1.length; i++){
    let char = str1[i]
    counter[char] ? counter[char] += 1 : counter[char] = 1
  }

  //check if str2 letters exist or add up
  for (let i=0; i < str2.length; i++){
    let char = str2[i]
    if (counter[char]){
      counter[char] -= 1
    } else return false;
  }
  return true
}

// practice #3
function validAnagram(str1, str2){
// split both strings
let splitstr1 = str1.split('')
let splitstr2 = str2.split('')
// check if lengths of strings match
if (splitstr1.length != splitstr2.length){
  return false
}
// create counter
let counter = {}
// add letter and freq to counter for str1
for (let i=0; i<splitstr1.length; i++){
  let char = splitstr1[i]
  counter[char] ? counter[char] += 1 : counter[char] = 1
}
// compare split str2 to counter
for (let j=0; j<splitstr2.length; j++){
  let char = splitstr2[j]
  if (counter[char]){
    counter[char] -= 1
    if (counter[char] < 0){
      return false
    }
  }
  else return false
}
return true
}
