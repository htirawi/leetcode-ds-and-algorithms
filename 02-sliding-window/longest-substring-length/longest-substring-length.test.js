const longestSubStringLength = require('./longest-substring-length');

test('Find the length of the longest substring without repeating characters.', () => {
  const s1 = 'bbbbb';
  expect(longestSubStringLength(s1)).toBe(1);

  const s2 = 'abcabcbb';
  expect(longestSubStringLength(s2)).toBe(3);

  const s3 = 'pwwkew';
  expect(longestSubStringLength(s3)).toBe(3);
});
