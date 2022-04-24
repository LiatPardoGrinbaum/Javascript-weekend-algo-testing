/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
  if (!/^[{}\[\]()]+$/.test(s)) {
    //check if input contains only brackets charecters
    return "Please choose valid characters";
  }
  const validCharOrder = ["()", "[]", "{}"];
  let bool = "";
  if (s.length % 2 !== 0) return false; //if length is odd, there is for sure an opened brackets.
  for (let i = 0; i < s.length; i += 2) {
    if (validCharOrder.includes(s[i] + s[i + 1])) {
      bool = true;
    } else {
      bool = false;
    }
  }
  return bool;
};

module.exports = isValid;
