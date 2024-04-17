// function isPalindrome(s) {
//   s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindrome('racecar'));

function sumOfTarget(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      // return [arr[left], arr[right]];
      return true;
    }
    if (sum > target) {
      right--;
    } else {
      left--;
    }
  }
  return false;
}

console.log(sumOfTarget([1, 2, 3, 4, 5, 6, 7], 10));

function sumTargetV2(arr, target) {
  debugger;
  let cachedVal = {};
  for (let i = 0; i < arr.length; i++) {
    let comp = target - arr[i];
    console.log(comp, 'comp');
    console.log(cachedVal[comp], 'cachedVal[comp]');
    if (cachedVal[comp] !== undefined) {
      console.log(cachedVal[comp], 'cachedVal[comp]');

      return [cachedVal[comp], i];
    }
    console.log(cachedVal[arr[i]], 'cachedVal[arr[i]]');

    cachedVal[arr[i]] = i;
  }
  return [-1, -1];
}

console.log(sumTargetV2([3, 2, 4], 6));
