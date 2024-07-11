import { Stack } from "../common/stack";
import { UGraphNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: UGraphNodeStr,
    result: UGraphNodeStr[] = [],
    visited = new Set([start])): UGraphNodeStr[] {
      result.push(start);

      for (const node of start.adjacent) {
        if (!visited.has(node)) {
          visited.add(node);
          rDfs(node, result, visited);
        }
      }

  return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): UGraphNodeStr[] {

  let result: UGraphNodeStr[] = []
  let visited: UGraphNodeStr[] = []
  let toVisit = new Stack([start])

  while (!toVisit.isEmpty){
    const nodeToVisit = toVisit.pop()

    if (!visited.includes(nodeToVisit)){
      result.push(nodeToVisit)
      visited.push(nodeToVisit)
      for (const adjNode of nodeToVisit.adjacent){
        toVisit.push(adjNode)
      }
    }

  }

  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): UGraphNodeStr[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };