/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var versionNumbers = function (version1, version2) {
  let nums1 = version1.split('.'),
    nums2 = version2.split('.');

  for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
    let i1 = i < nums1.length ? parseInt(nums1[i]) : 0;
    let i2 = i < nums2.length ? parseInt(nums2[i]) : 0;

    if (i1 !== i2) {
      return i1 > i2 ? 1 : -1;
    }
  }
  return 0;
};

module.exports = versionNumbers;
