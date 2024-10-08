// TREE TRAVERSALS
// breadth-first search (BFS)
// depth-first search (DFS) -> preoder, postorder, inorder

/* EXAMPLE TREE to traverse
          10
      6       15
    3   8         20

*/

// BFS
function BFS(){
  let node = this.root;
    data = [];
    queue = [];
  
  queue.push(node);
  
  while(queue.length){
    node = queue.shift()
    data.push(node);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return data;
}

// DFS Pre-order --> node, left, right
function DFSpre(){
  let data =[];

  function transverse(node){
    data.push(node.value)
    if(node.left) transverse(node.left);
    if(node.right) transverse(node.right);
  }

  transverse(this.root);
  return data
}

// DFS Post-order --> left, right, node
function DFSpost(){
  let data =[]

  function transverse(node){
    if(node.left) transverse(node.left);
    if(node.right) transverse(node.right);
    data.push(node.value);
  }

  transverse(this.root);
  return data;
}

// DFS In-order --> left, node, right
function DSFin(){
  let data = []

  function transverse(node){
    if(node.left) transverse(node.left);
    data.push(node)
    if(node.right) transverse(node.right);
  }

  transverse(this.root);
  return data
}




//------------PRACTICE------------//
// BREADTH FIRST

function BFS(){
  let node = this.root;
      queue = [];
      data = [];
  
  queue.push(node)
      
  while(queue.length){
    node = queue.shift()
    data.push(node)
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return data
}

function BFS(){
  let node = this.current;
      queue =[]
      data = []

  queue.push(node)

  while(queue.length){
    node = queue.shift()
    data.push(node)
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }

  return data
}
