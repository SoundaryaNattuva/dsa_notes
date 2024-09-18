//Singly Linked List - a data structure which has elements(nodes) that contain a value/data and a pointer/reference. 

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
  unshift(){
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




}
