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

}


// TAKEAWAY:
// push: (1) you do not need to transverse list when you already have tail defined. (2) when making node head and tail - this.tail = this.head
// pop:
// shift: (1) reassigning head removes oldHead
// unshift: (1) remember to add newNode by next function to head. 
