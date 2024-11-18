import {
  createLinkedList,
  linkedListToArray,
  ListNode,
} from "./utils/LinkedListHelpers";

const reverseList = (head: ListNode | null): ListNode | null => {
  let curr = head;
  let prev = null;

  while (curr != null) {
    let nextNode = curr!.next;
    curr!.next = prev;

    prev = curr;
    curr = nextNode;
  }
  return prev;
};

// Test cases
const testCases: { input: number[]; expected: number[] }[] = [
  { input: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
  { input: [1, 2], expected: [2, 1] },
  { input: [], expected: [] },
  { input: [0], expected: [0] },
];

// Function to run tests
function runTests(reverseList: (head: ListNode | null) => ListNode | null) {
  testCases.forEach(({ input, expected }, index) => {
    const head = createLinkedList(input);
    const reversedHead = reverseList(head);
    const result = linkedListToArray(reversedHead);
    console.log(`Test Case ${index + 1}:`, result);
    console.assert(
      JSON.stringify(result) === JSON.stringify(expected),
      `Failed Test Case ${index + 1}: Expected ${JSON.stringify(
        expected
      )}, but got ${JSON.stringify(result)}`
    );
  });
}

runTests(reverseList);
