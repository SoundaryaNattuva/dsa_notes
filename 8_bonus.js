// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(word){
  let splitWord = word.split("")
  let reversedArr = []
  for (let i=splitWord.length-1; i>=0; i--){
    reversedArr.push(splitWord[i])
  }
  reversedArr = reversedArr.join("")
  return reversedArr
}

// recursive reverse fxn
function reverse(str){
  if (str.length <= 1){
    return word
  }
  return reverse(str.slice(1)) + str[0]
}

//isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true

function isPalindroms(str){
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)){
    return isPalindrome(str.slice(1, -1))
  }
  return false
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
  // Base case
  if (arr.length === 0) return [];

  // Capitalize the first letter of the first word
  let capitalizedWord = arr[0][0].toUpperCase() + arr[0].slice(1);

  // Recursive case - need to go through each item in the array
  return [capitalizedWord].concat(capitalizeFirst(arr.slice(1)));
}

//Udemy solution

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

//capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr){
  if (arr.length === 1) {
    return [arr[0].toUpperCase()]
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}

let fruits = ['apple', 'banana', 'cherry', 'date'];
// ['apple', 'banana', 'cherry'].push(array.slice(array.length-1)[0].toUpperCase())
// ['apple', 'banana', 'cherry'].push(array.slice(3)[0].toUpperCase())
// ['apple', 'banana', 'cherry'].push(['date'][0].toUpperCase())