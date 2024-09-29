/*
recursion
*/

let number = 6;
let countdown = function (num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
};
countdown(number);

////////////////////////////////////////////////////////////////

let sumRange = function (num) {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1);
};
sumRange(3);

////////////////////////////////////////////////////////////////

// Non-recursive
// let factorial = function (num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// };
// factorial(4);

// Recursive
let factorial = function (num) {
  if (num === 1) return 1; // base case
  return num * factorial(num - 1);
};

// helper method pattern
// Outer function not recursive, Inner function recursive

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}
collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// PURE RECURSION
function collectOdds(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}
collectOdds([1, 2, 3, 4, 5]);
