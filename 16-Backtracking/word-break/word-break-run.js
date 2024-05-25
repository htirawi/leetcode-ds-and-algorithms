const wordBreak = require('./word-break.js');

const s = 'catsanddog';
const wordDict = ['cat', 'cats', 'and', 'sand', 'dog'];

const result = wordBreak(s, wordDict);

console.log(result);
