/* Dynamic Programming
- Key: Overlapping subproblems and Optimal substructure
- Top Down approach
- Using past knowledge to make solving future problems easier!

*/

// Fibonnaci - recursive solution
function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

/* Big O Notation of Fibonnaci
- tree grows larger with increase in n value
- O(2^N)
- what's the problem: we are repeating things! there is overlap of subproblems
*/

// A Memo-ized solution
function fib (n, memo=[]){
  //if n in memory, return its value
  if(memo[n] !== undefined) return memo[n];
  // base case
  if(n <= 2) return 1;
  // store result for fib(n) in memo
  let res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res
}

/* Big O
- Big O (2^n) - non-memoized fibonacci
- Big O (N) - memoized fibonacci
*/

/* Tabulation
- storing the result of a previous result in a "table" (usually an array)
usually done using iteration
-better space complexity can be achieved using tabulation
- Bottom Up approach
*/

// Fibonacci - Tabulation
function fib(n){
  if(n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for(let i = 3; i <= n; i++){
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}