// RECURSION: a process (function in our case) that calls itself

// 1st way for recursive fxn
function countDown(num){
  if (num <= 0){               //establish base case
    console.log("All Done!")
    return
  }
  console.log(num);
  num --;
  countDown(num)              //recursive case
}

// 2nd way for recursive function
function sumRange(num){
  if (num === 1){
    return 1
  };
  return num + sumRange(num - 1)
}

// factorial example
function factorial(num){
  if (num === 1){
    return 1
  }; //base case
  return num * factorial(num - 1) // recursive case
}


//helper method 
function outer(input){
  var outerScopedVariable = {}
  function helper(helperInput){
    // modify the outScopedVariable
    helper(helperInput--)
  }
  helper(input)
  return outerScopedVariable;
}

// helper method example
function collectOddValues(arr){
  let result = []
  function helper(helperInput){
    if(helperInput.length === 0){
      return
    }
    if (helperInput[0] % 2 !== 0){
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result;
}

// TRY IT YOURSELF
//--------------------//

// 1. POWER - Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// SOLUTION for POWER
function power(base,exponent){
  if (exponent === 0){
    return 1
  }
  return base * power(base, exponent - 1)
}

// EXPLAINATIOn
// power(2,2)
// 2 * power(2,1) --> 2 * 2
//   2 * power(2,0) --> 2 * 1 = 2

// Practice #1
function power(base, exp){
  if (exp === 0){
    return 1
  }
  return base * power(base, exp-1)
}

//--------------------//
// 2. FACTORIAL - Write a function called factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// SOLUTION
function factorial(num){
  if (num === 0){
    return 1
  }
  return num * factorial(num - 1)
}

// Practice #1
function factorial(num){ 
  if(num === 0){
    return 1
  }
  return num * factorial(num - 1)
}

//--------------------//
// 3. PRODUCT OF ARRAY - Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// SOLUTION
function productOfArray(arr){
  if(arr.length === 1){
    return arr[0]
  }
  return arr[0] * productOfArray(arr.slice(1))
}

// Practice #1
function productOfArray(arr){
  if (arr.length === 1){
    return arr[0]
  }
  return arr[0] * productOfArray(arr.splice(1))
}

//---------------------//
// 4. RECURSIVE RANGE - Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// SOLUTION
function recursiveRange(num){
  if (num === 0){
    return 0
  }
  return num + recursiveRange(num - 1)
}

// EXPLAINATION
// num = 4
// 4 + recursiveRange(3)
//     3 + recursiveRange(2)
//           2 + recursiveRange (1)
//               1 + recursiveRange (0)


// Practice #1
function recursiveRange(num){
  //establish base case
  if (num === 0){
    return 0
  }
  return num + recursiveRange(num - 1)
}

//---------------------//
// 5. FIB - Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
// fib(4) // 3 --> 1, 1, 2, 3 
// fib(10) // 55 // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// fib(28) // 317811
// fib(35) // 9227465

// SOLUTION
function fib(num){
  if (num <= 1){
    return num
  }
  return fib(num-1) + fib(num-2)
}

// TAKEAWAY: memorize this! remeber, it is return num not 1. 

// Practice #1
function fib(num){

}
//---------------------//