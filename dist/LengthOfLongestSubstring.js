"use strict";
// run using: tsc LengthOfLongestSubstring.ts && node LengthOfLongestSubstring.js
const lengthOfLongestSubstring = (s) => {
    const resmap = new Map();
    let start = 0;
    let record = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.length - i + record < record)
            break;
        const curr = s[i];
        if (resmap.has(curr) && resmap.get(curr) >= start) {
            start = resmap.get(curr) + 1;
        }
        else {
            record = Math.max(record, i - start + 1); // either the record, or the current length of the string
        }
        resmap.set(curr, i);
    }
    return record;
};
// const testLengthOfLongestSubstring = () => {
//   const testCases = [
//     { input: "abcabcbb", expected: 3 },
//     { input: "bbbbb", expected: 1 },
//     { input: "pwwkew", expected: 3 },
//   ];
//   testCases.forEach(({ input, expected }, index) => {
//     const result = lengthOfLongestSubstring(input);
//     console.log(`Test Case ${index + 1}:`);
//     console.log(`Input: "${input}"`);
//     console.log(`Expected: ${expected}, Got: ${result}`);
//     console.log(`Passed: ${result === expected}\n`);
//   });
// };
// testLengthOfLongestSubstring();
