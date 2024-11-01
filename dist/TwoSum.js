"use strict";
// run using: tsc TwoSum.ts && node TwoSum.js
const twoSum = (nums, target) => {
    let numToIndex = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;
        if (numToIndex.hasOwnProperty(diff)) {
            return [numToIndex[diff], i];
        }
        numToIndex[num] = i;
    }
    return [];
};
twoSum([2, 7, 11, 15], 9); // expect [0,1]
twoSum([3, 2, 4], 6); // expect [1,2]
twoSum([3, 3], 6); // expect [0,1]
