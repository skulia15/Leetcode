const isPalindromeNotOptimized = (x: number): boolean => {
  const nums = Array.from(String(x), String);
  if (nums[0] === "-") return false;
  if (nums.length < 2) return true;

  let first = [];
  let second = [];

  if (nums.length % 2 !== 0) {
    // odd
    let halfwayThrough = Math.floor(nums.length / 2);
    first = nums.slice(0, halfwayThrough);
    second = nums.slice(halfwayThrough + 1, nums.length);
  } else {
    // even
    first = nums.slice(0, nums.length / 2);
    second = nums.slice(nums.length / 2, nums.length);
  }
  const secondReversed = second.reverse();
  return first.join("") == secondReversed.join("");
};

const isPalindrome = (x: number): boolean => {
  const nums = String(x);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] != nums[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

// Notes:
// Biggest mistake was converting to an array instead of simply a string. This Added + o(n) complexity for no benefit

// Define test cases
const testCases: { input: number; expected: boolean }[] = [
  { input: 121, expected: true }, // A standard positive palindrome
  { input: -121, expected: false }, // Negative numbers are not palindromes
  { input: 10, expected: false }, // Not a palindrome
  { input: 0, expected: true }, // Single digit, edge case (palindrome)
  { input: 12321, expected: true }, // Odd-length palindrome
  { input: 123321, expected: true }, // Even-length palindrome
  { input: 12345, expected: false }, // Non-palindrome
  { input: -1, expected: false }, // Negative single digit, not a palindrome
  { input: 1001, expected: true }, // Palindrome with zeros in between
];

// Function to run tests
function runTests(isPalindrome: (x: number) => boolean) {
  testCases.forEach(({ input, expected }, index) => {
    const result = isPalindrome(input);
    console.log(`Test Case ${index + 1}: Input: ${input}, Output: ${result}`);
    console.assert(
      result === expected,
      `Failed Test Case ${
        index + 1
      }: Input: ${input}, Expected: ${expected}, Got: ${result}`
    );
  });
}

// Call your function with the tests
runTests(isPalindrome);
