"use strict";
// Run using tsc AddTwoNumbers.ts && AddTwoNumbers FizzBuzz.js
const addTwoNumbers = (l1, l2) => {
    if (!Array.isArray(l1) || !Array.isArray(l2)) {
        console.error("Invalid input: l1 and l2 should be arrays of numbers.");
        return null;
    }
    let l1Str = l1.slice().reverse().join("");
    let l2Str = l2.slice().reverse().join("");
    let resNum = Number(l1Str) + Number(l2Str);
    const splitRes = String(resNum)
        .split("")
        .reverse()
        .map((x) => Number(x));
    console.log("splitRes", splitRes);
    return splitRes;
};
// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];
// const res = addTwoNumbers(l1, l2);
// console.log(res);
