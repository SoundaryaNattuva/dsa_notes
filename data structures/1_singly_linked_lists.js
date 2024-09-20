//LINKED LIST: a data structure that contains a head, tail and length property. Consist of nodes, and each node has a value and a pointer to another node or null. 

//-----------SOLUTION-------------//

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    var newNode = new Node(val)
    if (!this.head){
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this;
  }

  pop(){
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
  }

  shift(){
    if (!this.head) return undefined;
    let currentHead = this.head
    this.head = currentHead.next
    this.length --;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead
  }

  unshift(val){
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this
  }

  get(index){
    if (index < 0 || index >= this.length){
      return undefined
    }
    let counter = 0
    let current = this.head
    while(counter !== index){
      counter++
      current = current.next
    }
    return current
  }

  set(val, index){
    let foundNode = this.get(index);
    if(foundNode){
      foundNode.val = val
      return true
    }
    return false
  }

  insert(index, val){
    if (index < 0 || index > this.length)
      return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    
    let newNode = new Node(val);
    let prev = this.get(index-1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index){
    if ( index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length-1) return this.pop();

    let previousNode = this.get(index-1)
    let removed = previousNode.next
    previousNode.next = removed.next

    this.length--
    return removed
  }

  reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node
    let prev = null
    let next;
    for (let i=0; i<this.length; i++){
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    node = this.head
    return this;
  }

}


// TAKEAWAY:
// push: (1) you do not need to transverse list when you already have tail defined. (2) when making node head and tail - this.tail = this.head
// pop:
// shift: reassigning head removes oldHead
// unshift: remember to add newNode by next function to head. 
// set: we do not use 'this.foundNode.val' because foundNode is not a property of the singlyLinkedList class. foundNode is a local variable.
// ** reverse is a popular interview question **


//------Pseudo Code-----//
// Node class
class Node {
  constructor(){
    this.val = val
    this.next = null
  }
}

// Singly Linked List class
class SinglyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    // create node
    let newNode = new Node(val)
    // edge case: if list is empty, add node as head and tail. 
    if (!this.head){
      this.head = newNode
      this.tail = this.head
    } else {
      // add newNode to tail
      this.tail.next = newNode
      // reassign tail to newNode
      this.tail = newNode
    }
    this.length++
    return this;
  }

  // remove from end of list
  pop(){
    // edge case: if empty list, return
    if (this.length === 0) return undefined;
    // current and newTail both start at beginning
    let current = this.head
    let newTail = current
    // while current has node next to it... allows us to find 2nd to last node
    while (current.next){
      newTail = current;
      current = current.next;
    }
    // make 2nd to last node tail
    this.tail = newTail;
    // tail.next = null
    this.tail.next = null;
    // length-- 
    this.length--;
    // edge case: if left with one node, set as head and tail - already taken care of.
    // edge case: if left with no node, set head and tail as null
    if (this.length === 0){
      this.head = null
      this.tail = null;
    }
    return this
  }

  // remove from beginning
  shift(){
    // edge case: if no head/length - return undefined
    if (!this.head) return undefined;
    // create currentHead
    let currentHead = this.head
    // make node next to currentHead the head. ** this removes currentHead from list
    this.head = currentHead.next
    // decrease length
    this.length--
    // if list is empty, set tail to null
    if (this.length === 0){
      this.tail = null;
    }
    return currentHead
  }

  //add to beginning of list
  unshift(val){
  // create the node
  let newNode = new Node(val)
  // if list is empty, make new node head and tail
  if(!this.head){
    this.head = newNode
    this.tail = this.head
  } else {
    // add head infront of newNode
    newNode.next = this.head
    // make newNode the head
    this.head = newNode
  }
  // increase length by 1
  this.length++
  }

  // retrieve value at index X
  get(index){
    // edge case: if index < 0 or >= length, return undefined
    if(index < 0 || index >= this.length) return undefined
    // set counter and current variables
    let counter = 0
    let current = this.head
    // loop through list till we hit index
    while (counter !== index){
      counter++
      current = current.next
    }
    //return node
    return current
  }

  // reassign value to node at index X
  set(val, index){
    let foundNode = this.get(index);
    if(foundNode){
      foundNode.val = val
      return true
    }
    return false
  }

  // inset node
  insert(index, val){
    if (index < 0 || index > this.length)
      return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    
    let newNode = new Node(val);
    let prev = this.get(index-1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // remove node at index X
  remove(index){
    if ( index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length-1) return this.pop();

    let previousNode = this.get(index-1)
    let removed = previousNode.next
    previousNode.next = removed.next

    this.length--
    return removed
  }

  reverse() {
    let node = this.head;     // Start with the head node
    this.head = this.tail;    // Swap head and tail
    this.tail = node;         // Now, tail is what was originally the head
    let prev = null;          // Initialize previous node as null
    let next;                 // Placeholder for the next node
    
    // Loop through the list and reverse the pointers
    for (let i = 0; i < this.length; i++) {
      next = node.next;       // Store the next node
      node.next = prev;       // Reverse the pointer of the current node
      prev = node;            // Move prev to the current node
      node = next;            // Move node to the next node (original next)
    }
    
    // By the end of the loop, node is null and prev is the new head
    node = this.head;         // Reset node to the new head
    
    return this;              // Return the reversed list
  }
}

//----------PRACTICE------------//
// [apples, oranges, greens, pinks, purples, blues]
//                    2

function get(index){
  //EC: if index < 0 or >= this.length - return undefined
  if (index < 0 || index >= this.length) return undefined;
  let count = 0;
  let node = this.head;
  // transverse through list till index
    while(count !== index){  // X not index + 1 X
      node = node.next
      count++
    }
  return node // X you put this.node X
}

function set(index, val){
  // get(index)
  let node = this.get(index) // X you forgot this.get X
  // change value of index retrieved
  if(node){                  // since output is requiring true and false, this is a good way to implement it
    node.val = val
    return true
  }
  return false

}

function insert(index, val){
  // create a node
  if (index < 0 || index > this.length) return false
  // insert at beginning - unshift
  if (index === 0) return !!this.unshift(val)
  // insert at end - push
  if (index === this.length) return !!this.push(val)
  // get(index-1) - leftNode ** no need for else statement
  let newNode = new Node(val)
  let leftNode = this.get(index-1)
  // create rightNode
  let rightNode = leftNode.next
  // create a next to that node
  leftNode.next = newNode
  // add rightNode next to node
  newNode.next = rightNode
  // ** increase length
  this.length++
  return true
}

function remove(index){
  if (index === 0) return this.shift(index)
  if (index === this.length-1) return this.pop(index)
  if (index < 0 || index > this.length) return undefined

  // can do another way
  let prev = this.get(index-1)
  let node = this.get(index)
  let after = node.next
  prev.next = after

  // alternative way
  let prev = this.get(index-1)
  let removeNode = prev.next
  let prev.next = removeNode.next

  this.length--
  return this
}

function reverse(){
  let node = this.head
  this.head = this.tail
  this.tail = node
  let prev = null
  let next;

  //loop through list
  for (let i = 0; i < this.length ; i++){
    next = node.next
    node.next = prev
    prev = node
    node = next  
  }

  node = this.head;
  return this
}