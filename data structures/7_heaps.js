// HEAPS

const { valid } = require("semver");

// MaxBinaryHeap: add to the end, bubble up. 

class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }

  insert(element){
    //insert new value into values
    this.values.push(element);
    //insert in correct position
    this.bubbleUp();
  }

  bubbleUp(){
    // find idx of new added element
    let idx = this.values.length - 1;
    // retrieve value of element
    let element = this.value[idx];
    while(true){
      // find idx of parent
      let parentIdx = Math.floor((idx-1)/2);
      // find value of parent
      let parent = this.value[parentIdx];
      // swap parent with child if parent value is less than child
      if(element > parent){
        // swap values
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        // set new index for 55. This will allow you to find parent of idx 
        idx = parentIdx;
      }
    }
  }

  extractMax(element){
    // assign root to return later
    let max = this.vales[0];
    // remove last element
    let end = this.values.pop();
    // replace root value with last element in array
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    // bubble down
    return max;
    
  }

  sinkDown(element){
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];

    while(true){
      // find index of child nodes of the parent (0)
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      // for now initialize/declare the variables
      let leftChild, rightChild;
      // 
      let swap = null;

      // see if childs exist
      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if (leftChild > element){
          swap = leftChildIdx;
          this.values[leftChildIdx] = element
          this.values[idx] = leftChild
          idx = leftChildIdx
        }
      }
      if (rightChild < length){
        rightChild = this.values[rightChildIdx];
        if(
            (swap === null && rightChild > element) || 
            (swap !== null && rightChild > leftChild) 
        ) {
          swap = rightChildIdx
        }
      }
      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }
}

// BUILDING A PRIORITY QUEUE //
// def: a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities. 

class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority){
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
  }
  bubbleUp(){
      let idx = this.values.length - 1;
      const element = this.values[idx];
      while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element.priority >= parent.priority) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
      }
  }
  dequeue(){
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length > 0){
          this.values[0] = end;
          this.sinkDown();
      }
      return min;
  }
  sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let leftChild,rightChild;
          let swap = null;

          if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild.priority < element.priority) {
                  swap = leftChildIdx;
              }
          }
          if(rightChildIdx < length){
              rightChild = this.values[rightChildIdx];
              if(
                  (swap === null && rightChild.priority < element.priority) || 
                  (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                  swap = rightChildIdx;
              }
          }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
      }
  }
}




//-------- TAKEAWAY ---------//
// - Heaps are read left to right
// - MaxHeaps - used for heapsort
// - MinHeaps - priority queues
// - Array of a tree are written left to right, top to bottom.
// - Removing a heap for Max/Min is to remove root.
// - Sink down: the procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap - aka bubble-down, trickle down...etc)

