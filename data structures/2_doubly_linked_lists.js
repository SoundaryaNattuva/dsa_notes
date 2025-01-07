//DOUBLY LINKED LIST

const { after } = require("node:test");

//Node: val, next, prev
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//DoublyLinkedList: head, tail, length
class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val){
    //create newNode with value passed to the function
    let newNode = new Node(val)
    // if head prop is null, set head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode 
      this.tail = newNode 
    } else {
      //if not, set next property on tail to new node
      this.tail.next = newNode
      //set prev property on new node to be tail
      newNode.prev = this.tail
      // set tail to be newly created node
      this.tail = newNode
    }
    //increment length + return DLL
    this.length++
    return this
  }

  pop(){
    //if no head, return undefined
    if(!this.head) return undefined
    // store current tail in variable to return later
    let oldTail = this.tail
    // if length is 1, set head and tail to be null
    if (this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
    //update tail to be prev node
    this.tail = oldTail.prev
    // set new Tails next to null
    this.tail.next = null
    }
    //decrement length
    this.length--
    //return value remove
    return oldTail
  }

  shift(){
    // length 0 - undefined
    if(!this.head) return undefined
    // store current head property in variable
    let oldHead = this.head
    // if length = 1, head and tail = null
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      // head should be oldHead.next
      this.head = oldHead.next
      // head prev = null
      this.head.prev = null
      //break the connection between the old head and the rest of the list.
      oldHead.next = null; 
    }
    //decrement length
    this.length--
    // return oldHead
    return oldHead
  }

  unshift(){
    //create new node with value passed
    let newNode = new Node(val)
    // if length === 0, new node is tail and head
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set prev prop on head to new node
      this.head.prev = newNode
      // set new node next prop on head
      newNode.next = this.head
      // make new node, head
      this.head = newNode
    }
    // increment length
    this.length++
    // return list
    return this
  }

  get(index){
    // if index is < 0 or >= length, return null
    if (index < 0 || index >= length){
      return undefined
    }
    let count, current;
    
    // if index is <= half length of list...
      // loop starts at beginning till  middle
      //return found node
    if(index <= this.length/2){
      count = 0;
      current = this.head;
      while (count != index){
        current = current.next;
        count++;
      }
    } else {
      // if index is > half length of list...
        // loop starts at end to middle
        // return found node
      count = this.length -1;
      current = this.tail;
      while (count !== index){
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, newValue){
    let foundNode = this.get(index)
    if (foundNode != null){
      foundNode.val = val;
      return true
    }
    return false
  }

  insert(index, val){
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let prevNode = this.get(index-1);
    let afterNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevIndex;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++
    return true
  }

  remove(index){
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length-1) return this.pop();
    let removedNode = this.get(index)
    //removedNode.prev.next = removedNode.next;
    //removedNode.next.prev = removedNode.prev; this elimated the bottom 4 lines of code
    let prevNode = removedNode.prev
    let afterNode = removedNode.next
    prevNode.next = afterNode
    afterNode.prev = prevNode
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode;
  }
}

//---Practice #1----//

pop(){
  if(!this.head) return undefined;
  let removeTail = this.tail;
  if(this.length === 1){
    this.head = null;
    this.tail = null;
  } else {
    this.tail = removeTail.prev;
    this.tail.next = null;
    removeTail.prev = null;
  }
  this.length--;
  return removeTail;
}

//remove node from beginning of list
shift(){
  if(!this.head) return undefined;
  let removeNode = this.head
  if(!this.head.next){
    this.head = null;
    this.tail = null;
  } else {
    this.head = removeNode.next;
    this.head.prev = null;
    removeNode.next = null;
  }
  this.length--;
  return removeNode;
}

//add node to beginning of list
unshift(val){
  let newNode = new Node(val);
  if(!this.head){
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this
}

//get
get(index){
  if(index < 0 || index >= this.length) return null;
  let counter, current;
  if(index < this.length/2){
    counter = 0;
    current = this.head;
    while(counter !== index){
      counter++;
      current=current.next
    }
  } else {
    counter = 0;
    current = this.tail;
    while(count !== index){
      counter--;
      current = current.prev
    }
  }
  return current
}

//set
set(index, value){
  // find the node - get!
  let replaceNode = this.get(index);
  // check if node is valid
  if(replaceNode){
    // if valid - replace with value + return true
    replaceNode.val = value;
    return true
  }
  // if invalid - return false
  return false
}

//insert
insert(index, value){
  let newNode = new Node(value);
  // if index is 0 - unshift method add at beginning
  if(index === 0){
    this.unshift(val);
    return true;
  }
  // if index is length - push method add at end
  if(index === this.length){
    this.push(val);
    return true;
  }
  // if index is valid
  if(index > 0 && index < this.length){
    // use get for prev node (index-1)
    let prevNode = this.get(index-1)
    // use get for next node (index)
    let nextNode = this.get(index)
    // set pointers
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }
  return false
}

//remove
remove(index){
  // if index < 0 or index > length return false
  if(index < 0 || index >= this.length) return false;
  // if index is 0, shift
  if(index === 0) return this.shift()
  // if index is this.length-1, pop
  if(index === this.length-1) return this.pop()
  if(index > 0 && index < this.length){
    // get node of interest
    let removeNode = this.get(index);
    // get prev node
    let prevNode = removeNode.prev;
    // get after node
    let afterNode = removeNode.next;
    // set pointers
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    // remove pointers on removedNode
    removeNode.prev = null;
    removeNode.next = null;
    this.length--
    return removeNode
  }
}
