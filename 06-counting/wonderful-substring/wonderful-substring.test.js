const wonderfulSubstrings = require('./wonderful-substring');

test('Find the number of wonderful non-empty substrings in word', () => {
  const word1 = 'aba';
  expect(wonderfulSubstrings(word1)).toBe(4);

  const word2 = 'aabb';
  expect(wonderfulSubstrings(word2)).toBe(9);

  const word3 = 'he';
  expect(wonderfulSubstrings(word3)).toBe(2);

  const word4 = 'hussein';
  expect(wonderfulSubstrings(word4)).toBe(5);
});
