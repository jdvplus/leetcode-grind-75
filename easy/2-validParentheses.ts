/*

20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

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

const isValidTS = (s: string): boolean => {
  const brackets: Map<string, string> = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  const stack: string[] = [];

  for (let char of s) {
    if (brackets.has(char)) stack.push(char);
    else {
      if (!stack.length || brackets.get(stack.pop()!) !== char) return false;
    }
  }

  return stack.length === 0;
};

/*
OPTIMIZED SOLUTION
Runtime: 42ms (Beats 99.50% of users with TypeScript)
Memory: 42.54 MB (Beats 98.10% of users with TypeScript)
*/

interface BracketDict {
  '(': string;
  '{': string;
  '[': string;
}

const isValidOptimized = (s: string): boolean => {
  const brackets: BracketDict = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    let curr: string = s[i];

    if (brackets.hasOwnProperty(curr)) stack.push(curr);
    else {
      if (!stack.length || brackets[stack.pop()!] !== curr) return false;
    }
  }

  return stack.length === 0;
};
