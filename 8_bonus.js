// 1. REVERSE - Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// SOLUTION
function reverse(str){
  if (str.length <= 1){
    return str
  }
  return reverse(str.slice(1)) + str[0]
}

// practice #1 - correct but longer recursive statement
function reverse(str){
  // if length is 1, return str[0]
  if (str.length <= 1){
    return str
  }
  return str[str.length-1] + reverse(str.slice(0, str.length-1))
}

//----------------//
// 2. PALINDROME - Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true

// SOLUTION - beautifully use of true and false
function isPalindroms(str){
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)){
    return isPalindrome(str.slice(1, -1))
  }
  return false
}

//practice #1
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// practice #2
function isPalindrome(str){
  if (str.length <= 1){
    return true
  } else if (str[0] === str[str.length-1]){
    return isPalindrome(str.slice(1,-1))
  } else return false
}

//----------------//
// 3. CAPITALIZE FIRST - Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

//SOLUTION
function capitalizeFirst(arr) {
  // Base case
  if (arr.length === 0) return [];

  // Capitalize the first letter of the first word
  let capitalizedWord = arr[0][0].toUpperCase() + arr[0].slice(1);

  // Recursive case - need to go through each item in the array
  return [capitalizedWord].concat(capitalizeFirst(arr.slice(1)));
}

// TAKEAWAY
// toUpperCase - returns whole word or letter you want to capitalize
// concat - used to merge arrays! array1.concat(array2))
// notice that you have to put the capitalizedWord in brackets before concating.

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

//Practice #1
function capitalizeFirst(arr){
// if array.length is 0, return newArr
  if(arr.length === 0){
    return []
  }
  let capitalizedWord = arr[0][0].toUpperCase() + arr[0].slice(1)
  return [capitalizedWord].concat(capitalizeFirst(arr.slice(1)))
}


//----------------//
// 4. CAPITALIZE WORDS - Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

//SOLUTION
function capitalizeWords(arr){
  if (arr.length === 1) {
    return [arr[0].toUpperCase()]
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}

//TAKEAWAY
// === for comparison and = for assignment

//Practice #1
function capitalizeWords(arr){
  if (arr.length === 0){
    return []
  }
  let capitalizedWord = arr[0].toUpperCase()
  return [capitalizedWord].concat(capitalizeWords(arr.slice(1)))
}