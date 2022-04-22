const { test, expect } = require("@jest/globals");
const searchInsert = require("./searchInsertPosition.easy");

test("Example 1", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test("Example 2", () => {
  expect(searchInsert([1, 3, 5, 6, 7, 8, 9], 9)).toBe(6);
});

test("Example 3", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test("Example 4", () => {
  expect(searchInsert([1, 3, 5, 6], 4)).toBe(2);
});

test("Example 5", () => {
  expect(searchInsert([1, 3, 5, 7], 6)).toBe(3);
});

test("Example 6", () => {
  expect(searchInsert([1, 3, 5, 6, 8], 7)).toBe(4);
});

test("Example 7", () => {
  expect(searchInsert([1, 3, 5, 6, 8], 4)).toBe(2);
});

test("Example 8", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});
