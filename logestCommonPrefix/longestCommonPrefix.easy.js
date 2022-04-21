/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */
const strs = ["flower", "flow", "flight"];
// [ 'ca', 'car', 'cark' , 'catt']
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""; // if array is empty return ""
  //I sorted the array in ascending order . the shortest word is the restrictive factor (the longest prefix can be the length of the shortest word in the array)
  strs.sort((word1, word2) => word1.length - word2.length);
  let longestPrefix = "";
  let letter = "";
  let count = 0;
  let shortesrWord = strs[0];
  let i = 0;
  while (i < shortesrWord.length) {
    for (let j = 1; j < strs.length; j++) {
      if (shortesrWord[i] === strs[j][i]) {
        letter = shortesrWord[i];
        count++;
      }
    }
    if (count === strs.length - 1) {
      // ^ means i compared the letter in the first word ( in place i) to the letter in all other words in the array in the same index (i)
      longestPrefix += letter;
      count = 0;
    } else {
      //means there is no longer match
      return longestPrefix;
    }
    i++;
  }
  return longestPrefix;
};

// console.log(longestCommonPrefix(strs));

module.exports = longestCommonPrefix;
