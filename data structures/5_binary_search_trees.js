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
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
