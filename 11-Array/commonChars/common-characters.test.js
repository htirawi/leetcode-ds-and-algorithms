const commonChars = require('./common-characters');

test('Find an array of all characters that show up in all strings within the words (including duplicates).', () => {
  const arr = ['bella', 'label', 'roller'];
  const answer = ['e', 'l', 'l'];

  expect(commonChars(arr)).toStrictEqual(answer);

  const arr2 = ['cool', 'lock', 'cook'];
  const answer2 = ['c', 'o'];

  expect(commonChars(arr2)).toStrictEqual(answer2);
});
