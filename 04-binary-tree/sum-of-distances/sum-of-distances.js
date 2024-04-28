/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function sumOfDistancesInTree(n, edges) {
  let graph = new Array(n).fill().map(() => new Array());

  for (let [s, t] of edges) {
    graph[s].push(t);
    graph[t].push(s);
  }

  let count = new Array(n).fill(1);
  let answer = new Array(n).fill(0);

  var dfs1 = function (node, parent) {
    for (let child of graph[node]) {
      if (child !== parent) {
        dfs1(child, node);
        count[node] += count[child];
        answer[node] += answer[child] + count[child];
      }
    }
  };

  var dfs2 = function (node, parent) {
    for (let child of graph[node]) {
      if (child !== parent) {
        answer[child] = n - count[child] + answer[node] - count[child];
        dfs2(child, node);
      }
    }
  };

  dfs1(0, -1);
  dfs2(0, -1);

  return answer;
}

module.exports = sumOfDistancesInTree;
