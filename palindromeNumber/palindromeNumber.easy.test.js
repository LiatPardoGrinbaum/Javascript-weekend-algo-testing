const { test, expect } = require("@jest/globals");
const palindromeNumber = require("./palindromeNumber.easy");

test("Example 1", () => {
  expect(palindromeNumber(121)).toBe(true);
});

test("Example 2", () => {
  expect(palindromeNumber(-121)).toBe(false);
});

test("Example 3", () => {
  expect(palindromeNumber(10)).toBe(false);
});

test("Example 4", () => {
  expect(palindromeNumber()).toBe("Please enter a number"); //not getting any input - means it is not a number
});

test("Example 5", () => {
  expect(palindromeNumber("121")).toBe("Please enter a number"); //input is not a number (a string in this case)
});
