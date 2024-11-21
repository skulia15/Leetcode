// The left subtree is traversed first
// Then the root node for that subtree is traversed
// Finally, the right subtree is traversed

import {
  constructBinaryTree,
  printTree,
  TreeNode,
} from "./utils/BinaryTreeHelpers";

const inorderTraversal = (root: TreeNode | null): number[] => {
  let res: number[] = [];
  if (!root || root.val == null) return [];

  if (root?.left) {
    res = res.concat(inorderTraversal(root.left));
  }
  res.push(root.val);
  if (root.right) {
    res = res.concat(inorderTraversal(root.right));
  }

  return res;
};

// Test cases
const testCases = [
  {
    input: [1, null, 2, 3], // Example 1
    expected: [1, 3, 2],
  },
  {
    input: [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9], // Example 2
    expected: [4, 2, 6, 5, 7, 1, 3, 9, 8],
  },
  {
    input: [], // Example 3
    expected: [],
  },
  {
    input: [1], // Example 4
    expected: [1],
  },
  {
    input: [10, 5, 15, 3, 7, null, 20], // Additional test case
    expected: [3, 5, 7, 10, 15, 20],
  },
];

// Run tests
testCases.forEach(({ input, expected }, index) => {
  const root = constructBinaryTree(input);
  const result = inorderTraversal(root);
  console.log(
    `Test Case ${index + 1}:\n` +
      `Input: ${JSON.stringify(input)}\n` +
      `Expected Output: ${JSON.stringify(expected)}\n` +
      `Actual Output: ${JSON.stringify(result)}\n` +
      (JSON.stringify(result) === JSON.stringify(expected)
        ? "✅ Passed"
        : "❌ Failed")
  );
});
