function twoPointersTwoSortedArray(arr1, arr2) {
  let answer = [];
  let i = (j = 0);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      answer.push(arr1[i]);
      i++;
    } else {
      answer.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    answer.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    answer.push(arr2[j]);
    j++;
  }

  return answer;
}
