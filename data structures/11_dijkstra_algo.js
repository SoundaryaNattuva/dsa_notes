// Dijkstra's Algorithm

// Write a weighted graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node:vertex2, weight});
    this.adjacencyList[vertex2].push({node:vertex1, weight});

  }
}


//Simple Priority Queue - gives us the smallest value
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority){
    this.values.push({val, priority});
    this.sort();
  };
  dequeue(){
    return this.values.shift();
  };
  sort(){
    this.values.sort((a,b) => a.priority - b.priority)
  };
}











/* TAKE AWAY
- Know graphs, priority queues with Binary Heaps
- Uses: GPS (fastest route), Netwrok routing (shortest path for data), Biology (used o model the spread of viruses among humans), airline tickets (cheapest route to your destination), etc. 
*/

