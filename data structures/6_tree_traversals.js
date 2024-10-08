// TREE TRAVERSALS
// breadth-first search (BFS)
// depth-first search (DFS) -> preoder, postorder, inorder

/* EXAMPLE TREE to traverse
          10
      6       15
    3   8         20

*/

// Breadth-First Search:
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
