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

// wowzomgwowo -11
// omg -3

naiveSearch("lorie loled", "lo")