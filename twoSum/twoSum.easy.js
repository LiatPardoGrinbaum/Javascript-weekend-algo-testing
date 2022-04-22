/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @description {Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]}
 */

//I implemented this in two ways:
//first solution , simple solution by using two for loops. ( runtime complexity O(n^2) which is not very good)
//assuming each input has one solution
const twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

module.exports = twoSum;
//second solution. A more complex solution but the runtime complexity is O(n) which is better.
//I used one for loop and an object which I saved there the number as a key and the index as the value.
//each iteration I calculated a number (target - num) that if I add it to current num, the result will be equal to the target.
//if the number was already exist in the object. then I solve it (the indexes are the current num index, and the index saved in the object). else, I will put the current number with is index- in the object and have more iterations.
const twoSum2 = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let numberNeeded = target - nums[i];
    let prevIndex = obj[numberNeeded];
    if (prevIndex === undefined) {
      obj[nums[i]] = i;
    } else {
      return [prevIndex, i];
    }
  }
};

module.exports = twoSum2;
