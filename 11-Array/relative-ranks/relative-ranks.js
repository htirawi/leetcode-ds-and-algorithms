let findMax = function (score) {
  let maxScore = 0;
  for (let s of score) {
    if (s > maxScore) {
      maxScore = s;
    }
  }
  return maxScore;
};

let findRelativeRanks = function (score) {
  const N = score.length;

  // Add the original index of each score to the array
  // Where the score is the key
  const M = findMax(score);
  const scoreToIndex = new Array(M + 1).fill(0);
  for (let i = 0; i < N; i++) {
    scoreToIndex[score[i]] = i + 1;
  }

  const MEDALS = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];

  // Assign ranks to athletes
  const rank = new Array(N).fill(null);
  let place = 1;
  for (let i = M; i >= 0; i--) {
    if (scoreToIndex[i] !== 0) {
      const originalIndex = scoreToIndex[i] - 1;
      if (place < 4) {
        rank[originalIndex] = MEDALS[place - 1];
      } else {
        rank[originalIndex] = String(place);
      }
      place++;
    }
  }
  return rank;
};
module.exports = findRelativeRanks;
