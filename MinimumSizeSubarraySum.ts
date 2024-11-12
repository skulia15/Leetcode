const minSubArrayLen = (target: number, nums: number[]): number => {
  let currentSum = 0;
  let left = 0;
  let minLength = Number.MAX_SAFE_INTEGER; // minimum length of a subarray found.

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      // console.log("=== Current Sum >= Target ===");
      // console.log(`Current Subarray: ${nums.slice(left, right + 1)}`);
      // console.log(`Current Sum: ${currentSum}, Target: ${target}`);
      // console.log(`Window Size: ${right - left + 1}`);
      // console.log("");

      // shrink array window
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};

const testMinSubArrayLen = () => {
  const testCases = [
    { target: 7, nums: [2, 3, 1, 2, 4, 3], expected: 2 },
    { target: 4, nums: [1, 4, 4], expected: 1 },
    { target: 11, nums: [1, 1, 1, 1, 1, 1, 1, 1], expected: 0 },
  ];
  testCases.forEach(({ target, nums, expected }, index) => {
    const result = minSubArrayLen(target, nums);
    console.log(`Test Case ${index + 1}:`);
    console.log(`target: ${target}, nums: ${JSON.stringify(nums)}`);
    console.log(`Expected: ${expected}, Got: ${result}`);
    console.log(`Passed: ${result === expected}\n`);
  });
};

testMinSubArrayLen();
