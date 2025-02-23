import { Node, printLinkedList } from "./LLCommon.js";

// Linked Lists - Zipper Problem: Zip together 2 linked lists in an alternating pattern. Lists can be of variable size.

// Test Scenarios:
// Scenario 1:
let node1 = new Node("A");
let node2 = new Node("B");
let node3 = new Node("C");
let node4 = new Node("D");

node1.next = node2;
node2.next = node3;
node3.next = node4;

// Scenario 2:
let n2a = new Node("1");
let n2b = new Node("2");
let n2c = new Node("3");
let n2d = new Node("4");
let n2e = new Node("5");
let n2f = new Node("6");
let n2g = new Node("7");
let n2h = new Node("8");
let n2i = new Node("9");

n2a.next = n2b;
n2b.next = n2c;
n2c.next = n2d;
n2d.next = n2e;
n2e.next = n2f;
n2f.next = n2g;
n2g.next = n2h;
n2h.next = n2i;

// Scenario 3:
let n3a = null;

// Method - Iterative: Reversing a linked list.
// Complexity: Time - O(n) ; Space - O(1)
const iterativeReverseLinkedList = (head) => {
  let previous = null;
  let current = head;

  while (current != null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

// Method - Recursive - From Video: Reversing a linked list.
// Complexity: Time - O(n) ; Space - O(n)
const improvedRecursiveReverseLinkedList = (head, prev = null) => {
  if (head == null) {
    return prev;
  }
  let next = head.next;
  head.next = prev;
  return improvedRecursiveReverseLinkedList(next, head);
};

// Method - Recursive - My First Attempt: Reversing a linked list.
// Complexity: Time - O(n) ; Space - O(n)
const reverseLinkedList = (head) => {
  if (head == null) {
    return null;
  }
  if (head.next.next == null) {
    let newHead = head.next;
    head.next.next = head;
    head.next = null;
    return newHead;
  }

  let newHead = reverseLinkedList(head.next);
  if (head.next.next == null) {
    head.next.next = head;
    head.next = null;
  }
  return newHead;
};

// Test Method 1:
// console.log("First Scenario: ");
// printLinkedList(iterativeReverseLinkedList(node1));

// console.log("Second Scenario: ");
// printLinkedList(iterativeReverseLinkedList(n2a));

// console.log("Third Scenario: ");
// printLinkedList(iterativeReverseLinkedList(n3a));

// // Test Method 2:
// console.log("First Scenario: ");
// printLinkedList(improvedRecursiveReverseLinkedList(node1));

// console.log("Second Scenario: ");
// printLinkedList(improvedRecursiveReverseLinkedList(n2a));

// console.log("Third Scenario: ");
// printLinkedList(improvedRecursiveReverseLinkedList(n3a));

// Test Method 2:
console.log("First Scenario: ");
printLinkedList(reverseLinkedList(node1));

console.log("Second Scenario: ");
printLinkedList(reverseLinkedList(n2a));

console.log("Third Scenario: ");
printLinkedList(reverseLinkedList(n3a));
