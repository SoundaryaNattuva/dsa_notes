/* HASH TABLES 
- definition: are used to store key-value pairs
- in order to loop up values by a key, we need a way to convert keys into a valid array indices. A function that performs this task is called a hash function.
- we want to ensure randomness, consistent values, and constant time.
*/

// Poor randomness
function hash(key, arrayLen){
  let total = 0;
  for (let i = 0; i < key.length; i++){
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// fix randomness
function hash(key, arrayLen){
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length,100); i++){
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

/* Collisions
Even with a large array and a great hash function, collisions are inevitable. Many strategies to deal with collisions but we will focus on two: 
  - separate chaining
  - linear probing
*/


/* SEPARATE CHAINING
def: at each index in our array we store values using a more sophisticated data structure (e.g. an array or linked list). This allows us to store multiple key-value pairs at the same index.
*/

/* LINEAR PROBING
def: we search through the array to find the next empty slot. Unlike with separate chaining, this allows us to store a single key-value at each index 
*/

// HASH TABLE CLASS
class HashTable {
  // accepts size of how large hashtable should be. If we don't include size, it will resort to 53.
  constructor(size=53){
    this.keyMap = new Array(size);
  }

_hash(key){
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++){
    let char = key[i];
    let value = char.charCodeAt(0) - 96    
    total = (total * WEIRD_PRIME + value) % this.keyMap.length;
  }
  return total;
  }
}

