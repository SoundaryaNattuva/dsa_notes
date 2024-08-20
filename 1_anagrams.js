// Anagram:

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