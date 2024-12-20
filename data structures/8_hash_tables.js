/* HASH TABLES: are used to store key-value pairs
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

// Fixing randomness
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

// SEPARATE CHAINING and LINEAR PROBING

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

  // SET Method - done via separate chaining
  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // GET Method
  get(key){
    let index = this._hash(key);
    if (this.keyMap[index]){
      for (let i=0; i<this.keyMap[index].length; i++){
        if (this.keyMap[index][i][0] ===  key){
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }
  //VALUES
  values(){
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]){
        for(let j = 0; j<this.keyMap[i].length; j++){
          if (!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }

  //KEYS
  keys(){
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++){
      if (this.keyMap[i]){
        for(let j = 0; j<this.keyMap[i].length; j++){
          if (!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
}

