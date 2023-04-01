/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
nums = [3, 2, 4];
target = 6;
debugger;

var twoSum = function (nums, target) {
  let sum = 0;
  for (var x = 0; x < nums.length; x++) {
    for (var y = 0; y < nums.length; y++) {
      sum = nums[x] + nums[y];

      if (sum == target) {
        return [x, y];
      }
    }
  }
};
console.log(twoSum(nums, target));
