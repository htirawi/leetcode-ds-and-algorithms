const longestOnesSubstring = require('./longest-ones-substring');

test('Finding the longest substring achievable that contains only "1"', () => {
  const s1 = '11001011';
  expect(longestOnesSubstring(s1)).toBe(4);

  const s2 = '1101100111';
  expect(longestOnesSubstring(s2)).toBe(5);

  const s3 = '1111111';
  expect(longestOnesSubstring(s3)).toBe(7);

  const s4 = '00000';
  expect(longestOnesSubstring(s4)).toBe(1);
});
