// TREES, BINARY TREES, BINARY SEARCH TREES
// definition: a data structure that consists of nodes in a parent/child relationship

// TAKEAWAY:
// trees - nonlinear
// lists - linear

//-------SOLUTION--------//

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  
  insertNode(value){
    let newNode = new Node(value)
    
    if (this.root === null){
      this.root = newNode
      return this;
    } else {
      let current = this.root;
      while(true){
        if(value === current.value) return undefined;
        if(value < current.value){
          if(current.left === null){
            current.left = newNode;
            return this;
          } else {
            current = current.left
          }
        } else if (value > current.value){
          if(current.right === null){
            current.right = newNode;
            return this;
          } else {
            current = current.right
          }
        }
      }
    }  
  }

  findNode(value){
    // if there is no root - return false
    if(this.root === null) return false;
    // create current as what to compare value with
    let current = this.root;
        found = false;
    // while loop: loop till current doesn't exist and value is not found
    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if (value > current.value){
        current = current.right
      } else {
        return true;
      }
    }
    return false;
  }
}