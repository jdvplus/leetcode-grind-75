/*

242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

*/

const isAnagramTS = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const sortedS: string = s.split('').sort().join('');
  const sortedT: string = t.split('').sort().join('');

  return sortedS === sortedT;
};
