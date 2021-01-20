class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {}
}

function sumFunc(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr[0] + sumFunc(arr.slice(1));
}
