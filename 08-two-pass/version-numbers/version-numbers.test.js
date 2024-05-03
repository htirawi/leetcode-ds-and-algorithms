const versionNumbers = require('./version-numbers');

test('Given two version numbers, version1 and version2, compare them', () => {
  const v1 = '1.01';
  const v2 = '1.001';

  expect(versionNumbers(v1, v2)).toBe(0);

  const v3 = '1.0';
  const v4 = '1.0.0';

  expect(versionNumbers(v3, v4)).toBe(0);

  const v5 = '0.1';
  const v6 = '1.1';

  expect(versionNumbers(v5, v6)).toBe(-1);
});
