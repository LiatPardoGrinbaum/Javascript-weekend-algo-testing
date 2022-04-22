const { test, expect } = require("@jest/globals");
const strStr = require("./strStr.easy");

test("Example 1", () => {
  expect(strStr("hello", "ll")).toBe(2);
});

test("Example 1", () => {
  expect(strStr("aaaaa", "bba")).toBe(-1);
});

test("Example 1", () => {
  expect(strStr("aaaaa", "")).toBe(0);
});

test("Example 1", () => {
  expect(strStr("aaaaa", "aaaaaaa")).toBe(-1); //needle length is greater than haystack
});
