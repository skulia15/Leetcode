"use strict";
// Run using tsc AddTwoNumbers_LinkedList.ts && AddTwoNumbers_LinkedList FizzBuzz.js
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
// Helper function to convert an array to a linked list
function arrayToListNode(arr) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next; // return the head of the list
}
// Helper function to convert a linked list to an array
function listNodeToArray(node) {
    const result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}
function addTwoNumbersLL(l1, l2) {
    let carry = 0;
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    while (l1 !== null || l2 !== null) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = sum >= 10 ? 1 : 0;
        let newVal = sum % 10;
        current.next = new ListNode(newVal);
        current = current.next;
        if (l1)
            l1 = l1.next;
        if (l2)
            l2 = l2.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
}
function testAddTwoNumbers() {
    // Example test case 1
    const l1 = arrayToListNode([9, 9, 9, 9, 9, 9, 9]); // Represents the number 342
    const l2 = arrayToListNode([9, 9, 9, 9]); // Represents the number 465
    const expectedOutput = [8, 9, 9, 9, 0, 0, 0, 1]; // Represents the number 807
    const resultNode = addTwoNumbersLL(l1, l2);
    const resultArray = listNodeToArray(resultNode);
    console.log("Test Case 1:");
    console.log("Expected:", expectedOutput);
    console.log("Actual:  ", resultArray);
    console.log("Pass:", JSON.stringify(resultArray) === JSON.stringify(expectedOutput));
    // Add more test cases as needed
}
// Run test cases
testAddTwoNumbers();
