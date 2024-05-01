const reversePrefix = require('./reverse-prefix');

test('reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive)', () => {
  const word1 = 'abcdefd';
  const ch1 = 'd';
  const result1 = 'dcbaefd';

  expect(reversePrefix(word1, ch1)).toBe(result1);

  const word2 = 'xyxzxe';
  const ch2 = 'z';
  const result2 = 'zxyxxe';

  expect(reversePrefix(word2, ch2)).toBe(result2);

  const word3 = 'abcd';
  const ch3 = 'z';
  const result3 = 'abcd';

  expect(reversePrefix(word3, ch3)).toBe(result3);
});
