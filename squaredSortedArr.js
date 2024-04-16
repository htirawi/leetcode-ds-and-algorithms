function squaredSortedArray(arr) {
  let result = [];
  let left = 0;
  let right = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let squaredNum;

    if (Math.abs(arr[left]) < Math.abs(arr[right])) {
      squaredNum = arr[right] * arr[right];
      right--;
    } else {
      squaredNum = arr[left] * arr[left];
      left++;
    }
    result[i] = squaredNum;
  }
  return result;
}
