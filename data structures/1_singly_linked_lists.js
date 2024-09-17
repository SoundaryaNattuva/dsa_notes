//LINKED LIST: a data structure that contains a head, tail and length property. Consist of nodes, and each node has a value and a pointer to another node or null. 


//------------------------//

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
    // create new node with value value
    var newNode = new Node(val)
    //if no head - create head and tail
    if (!this.head){
      this.head = newNode;
      this.tail = this.head
    // else connect new node to current tail and update new node to tail
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this;
  }

  pop(){
    if (!this.head) return undefined;
    // current and newTail both start at beginning
    var current = this.head;
    var newTail = current
    // while current has a node next to it...
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
      this.length++;
      return this
    }
  }

}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
