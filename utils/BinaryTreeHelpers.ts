// Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function constructBinaryTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]!); // Root is the first element
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift();

    if (current) {
      // Assign left child if present
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]!);
        queue.push(current.left);
      }
      i++;

      // Assign right child if present
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]!);
        queue.push(current.right);
      }
      i++;
    }
  }

  return root;
}

export function printTree(root: TreeNode | null): void {
  if (!root) return;
  console.log(
    `Node: ${root.val}, Left: ${root.left?.val || null}, Right: ${
      root.right?.val || null
    }`
  );
  printTree(root.left);
  printTree(root.right);
}
