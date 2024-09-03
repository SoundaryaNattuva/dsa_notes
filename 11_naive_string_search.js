// NAIVE SEARCH: suppose you want to count the number of times a smaller string appears in a longer string. Long approach: checking pairs of characters individually. 

//SOLUTION - ex naiveSearch("lorieloled", "lol")
function naiveSearch (long, short){
  let totalMatches = 0
  for (let l=0; l<=long.length-short.length; l++){
    for (let s=0; s<short.length; s++){
      if (long[s+l] !== short[s]) break
      if (s === short.length-1) totalMatches++
    }
  }
  return totalMatches
}

// TAKEAWAY
// inner loop can use variables from outer loop
// match count should be stated before the loops
// break vs return - break exit the for loop, return moves to next index

// Practice #1
function naiveSearch(long, short){
  // edge case - short > long, return -1
  if (short.length > long.length){
    return false
  }
  totalMatches = 0
  // outer loop: loops through long
  for (let l=0; l<long.length-short+1; l++){
    // inner loop: loop through short
    for (let s=0; s < short.length; s++){
      // if no letter match, break
      if (short[s] !== long[s+l]) break
      // if match, add +1 
      if (s === short.length-1) totalMatches++
    }
    // return 
    return totalMatches
  }
}


//WRITING IT OUT
// w o r d l e    d l e
// 0 1 2 3 4 5    0 1 2
// l       3 4 5
// s       0 1 2