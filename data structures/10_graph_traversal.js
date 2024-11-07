/* DFS recursive pseudocode
DFS(vertex):
  if vertex is empty
    return (this is base case)
  add vertex to results list
  mark vertex as visited
  for each neighbor in vertex's neighbors:
    if neighbor is not visited:
      recursively call DFS on neighbor

Visiting things:
{
  "A": true,
  "B": true,
  "D": true,
}
*/

/* Depth First Iterative Pseudocode
DFS - iterative(start):
	Let S be a stack
	S.push(start)
	While S is not empty
		Vertex = S.pop()
		If vertex is not labeled as discovered:
			Visit vertex(ass to result list)
			Label vertex as discovered
			For each of vertex’s neighbors, N do S.push(N)
*/


