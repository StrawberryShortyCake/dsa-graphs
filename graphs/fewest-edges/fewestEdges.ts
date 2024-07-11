import { UGraphNodeStr } from "../common/graph";
import { Queue } from "../common/queue";

/** Number of fewest edges between start and end.
 * If no path can be found, return Infinity. */

function fewestEdges(start: UGraphNodeStr, sought: UGraphNodeStr): number {

  if (start === sought) return 0;

  const toVisit = new Queue([{node: start, depth:0}]);
  const visited: UGraphNodeStr[] = [];

  while (!toVisit.isEmpty()){
    const {node, depth} = toVisit.dequeue();

    if (node.value === sought.value){
      return depth;
    }

    for (const neighbor of node.adjacent){
      if (!visited.includes(neighbor)){
        toVisit.enqueue({node: neighbor, depth: depth+1});
        visited.push(neighbor);
      }
    }
  }
  return Infinity;
}

export { fewestEdges };
