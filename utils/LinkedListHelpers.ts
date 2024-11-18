export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Helper function to convert a linked list to an array
export function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Helper function to create a linked list from an array
export function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
