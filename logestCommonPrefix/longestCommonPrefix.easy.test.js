const { test, expect } = require("@jest/globals");
const longestCommonPrefix = require("./longestCommonPrefix.easy");

test("Example 1", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test("Example 2", () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

test("Example 3", () => {
  expect(longestCommonPrefix(["abc", "a", "abcf"])).toBe("a");
});

test("Example 4", () => {
  expect(longestCommonPrefix(["wonderland", "wonderfull", "women"])).toBe("wo");
});

test("Example 5", () => {
  expect(longestCommonPrefix(["wonderland", "wonderfull", "hello"])).toBe("");
});

test("Example 6", () => {
  expect(longestCommonPrefix([])).toBe("");
});
