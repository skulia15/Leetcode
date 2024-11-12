// Run using ts-node FizzBuzz.ts
export {};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let mergedArr = nums1.concat(nums2).sort((a, b) => a - b);

  if (mergedArr.length % 2 === 0) {
    return (
      (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) /
      2
    );
  }

  return mergedArr[Math.floor(mergedArr.length / 2)];
}

function testFindMedianSortedArrays() {
  const testCases = [
    { nums1: [1, 3], nums2: [2], expected: 2.0 },
    { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
    { nums1: [0, 0], nums2: [0, 0], expected: 0.0 },
    { nums1: [], nums2: [1], expected: 1.0 },
    { nums1: [2], nums2: [], expected: 2.0 },
  ];

  testCases.forEach(({ nums1, nums2, expected }, index) => {
    const result = findMedianSortedArrays(nums1, nums2);
    console.log(`Test Case ${index + 1}:`);
    console.log(
      `nums1: ${JSON.stringify(nums1)}, nums2: ${JSON.stringify(nums2)}`
    );
    console.log(`Expected: ${expected}, Got: ${result}`);
    console.log(`Passed: ${Math.abs(result - expected) < 1e-5}\n`);
  });
}

// Run the test function
testFindMedianSortedArrays();
