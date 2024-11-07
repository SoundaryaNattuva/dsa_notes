//GRAPHS
// Undirected Graph

class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  
  //add vertex
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  
  //add edge
  addEdge(v1,v2){
    //find v1 and add v2 to the list
    this.adjacencyList[v1].push(v2);
    //find v2 and add v1 to the list
    this.adjacencyList[v2].push(v1);
  }
  
    //remove edge
  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1);
  }

  //remove node/vertex
  removeVertex(vertex){
    //delete vertex values in other keys
    while(this.adjacencyList[vertex].length){
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex)
    }
    //delete vertex
    delete this.adjacencyList[vertex]
  }

  //Depth First - Recursive
  depthFirstRecursive(start){
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    (function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]){
          return dfs(neighbor)
        }
      })
    })(start);

    return result;
  }
  //Depth First - Iterative
  depthFirstIterative(start){
    let stack = [start];
    let result = [];
    let visited = {};
    let currentVertex;
    
    visited[start] = true;
    while(stack.length){
      // remove from stack and add to result
      currentVertex = stack.pop();
      result.push(currentVertex);
      
      // check neighbors, add to visited
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      });
    }
    return result;
  }


  //Breadth First Traversal
  breadthFirstTraversal(start){
    let queue = [start];
    let result = [];
    let visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length){
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

/*
      A
    /   \
    B   C
    \   /
    D---E
    \   /
      F

DSF recursive: A B D C E F
DSF iterative: A C E F D B
*/

/* TAKEAWAYS:
- breadth first - visit neighbors first
- objects and arrays are ways to store collections of data
- object: a collection of key-value pairs where each key is a unique identifier (string or symbol), and each key is associated value.
  let obj = { 
    key1: 'value1', 
    key2: 'value2' 
  };
- arrays(list): an ordered collection of items (values) indexed by numbers, where each item can be accessed using its position. 
  let arr = ['value1', 'value2'];

*/

