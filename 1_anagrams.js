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