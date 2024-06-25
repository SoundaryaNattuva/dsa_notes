// Object Recap

let foods = {
  strawberry: 20,
  apple: 4,
  bananna: 2,
}

// add items to object - dot notation. foods.i, i is i. 
foods.orange = 14
console.log(foods)

// add items to object - bracket notation. foods.i, i is oranges.
foods.mango = 20
console.log(foods)

//modify value
foods.mango = 100
console.log(foods)

foods.apple += 10
console.log(foods)

//check if key exists: 
console.log(foods.grape ? true : false)
console.log(foods.orange ? true : false)