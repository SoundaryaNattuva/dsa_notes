// QUEUES
// definition: FIFO data structure.
// uses: background tasks, uploading resources, printing/task processing.

// Big O:
// - Insertion O(1)
// - Removal O(1)
// - Searching O(N)
// - Access O(N)

//TAKEAWAYS:
// FIFO can be achieved with: 
//   - unshift/pop - Unshift adds to beginning, Pop removes from the end.
//   - push/shift - Push adds to the end, shift removes at the beginning.

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to end
  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size
  }

  // remove from beginning
  dequeue(val){
    if (!this.first) return null;

    let removedNode = this.first
    if (this.first === this.last){
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
      this.size--;
      return removedNode.value;
  }
}