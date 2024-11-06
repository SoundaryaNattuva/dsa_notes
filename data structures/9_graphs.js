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
}

/*
      A
    /   \
    B   C
    \   /
    D---E
    \   /
      F

A B D C E F
*/

