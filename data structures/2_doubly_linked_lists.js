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
      //set prev propert on new node to be tail
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
}