//STACKS
//definition: a linear data structure that stores elements in LIFO order

class Node {
  constructor(){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val){
    let newNode = new Node(val)
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size
  }

  pop(){
    if(!this.first) return null;
    let oldNode = this.first;
    if (this.first === this.last){
      this.last = null;
    } 
    this.first = this.first.next
    this.size--
    return oldNode.value;
  }
}


//---TAKEAWAYS---//
// ++ before increases this.size then returns new value.
// after ++ returns value of current this.size and then increments it.

//          end      beginning
// add -    push and unshift
// remove - pop  and shift