const { test, expect } = require("@jest/globals");

//***first function***:
const twoSum = require("./twoSum.easy");

test("Example 1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("Example 2", () => {
  expect(twoSum([3, 2, 4, 1], 4)).toEqual([0, 3]);
});

//***second function***:
const twoSum2 = require("./twoSum.easy");

test("Example 1", () => {
  expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("Example 2", () => {
  expect(twoSum2([3, 2, 4, 1], 4)).toEqual([0, 3]);
});
