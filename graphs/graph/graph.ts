/** Graph Node class. */

class UGraphNodeStr {
  value: string;
  adjacent: Set<UGraphNodeStr>;

  constructor(value: string, adjacent = new Set<UGraphNodeStr>()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Undirected graph. */

class UGraphStr {
  nodes: Set<UGraphNodeStr>;

  constructor() {
    this.nodes = new Set();
  }

  /** Add node to graph. */
  addNode(node: UGraphNodeStr): void {
    this.nodes.add(node)
  }

  /** Add array of nodes to graph. */
  addNodes(nodeArray: UGraphNodeStr[]): void {
    for (const node of nodeArray){
      this.addNode(node)
    }
  }

  /** Add edge between v1 and v2. */
  addEdge(v1: UGraphNodeStr, v2: UGraphNodeStr): void {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  /** Add edge between all value pairs. */
  addEdges(nodesArray: UGraphNodeStr[][]): void {
    for (const nodes of nodesArray){
      const v1 = nodes[0]
      const v2 = nodes[1]

      v1.adjacent.add(v2)
      v2.adjacent.add(v1)
    }

  }

  /** Remove edge between v1 and v2. */
  removeEdge(v1: UGraphNodeStr, v2: UGraphNodeStr): void {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  /** Remove node from graph. */
  removeNode(node: UGraphNodeStr): void {
    for (const adjacentNode of node.adjacent){
      adjacentNode.adjacent.delete(node)
    }
    node.adjacent.clear()
    this.nodes.delete(node)
  }
}

export { UGraphNodeStr, UGraphStr };