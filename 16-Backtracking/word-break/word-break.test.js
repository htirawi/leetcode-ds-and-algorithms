const wordBreak = require('./word-break');

test('Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.', () => {
  const s1 = 'catsanddog';
  const wordDict1 = ['cat', 'cats', 'and', 'sand', 'dog'];
  const answer1 = ['cat sand dog', 'cats and dog'];
  expect(wordBreak(s1, wordDict1)).toStrictEqual(answer1);

  const s2 = 'catsandog';
  const wordDict2 = ['cats', 'dog', 'sand', 'and', 'cat'];
  const answer2 = [];
  expect(wordBreak(s2, wordDict2)).toStrictEqual(answer2);

  const s3 = 'pineapplepenapple';
  const wordDict3 = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];
  const answer3 = [
    'pine apple pen apple',
    'pine applepen apple',
    'pineapple pen apple',
  ];

  expect(wordBreak(s3, wordDict3)).toStrictEqual(answer3);
});
