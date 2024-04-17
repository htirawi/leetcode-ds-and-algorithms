function productsSubArrayLength(arr, k) {
  if (k <= 1) return -1;

  let left = 0,
    currWindowProduct = 1,
    answer = 0;

  for (let right = 0; right < arr.length; right++) {
    currWindowProduct *= arr[right];

    while (currWindowProduct >= k) {
      currWindowProduct /= arr[left];
      left++;
    }

    answer += right - left + 1;
  }
  return answer;
}

module.exports = productsSubArrayLength;
