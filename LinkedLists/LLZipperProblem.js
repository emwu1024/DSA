import { Node, printLinkedList } from "./LLCommon.js";

// Linked Lists - Zipper Problem: Zip together 2 linked lists in an alternating pattern. Lists can be of variable size.

// Test Scenarios:
// Scenario 1:
let n1a = new Node("A");
let n1b = new Node("B");
let n1c = new Node("C");
let n1d = new Node("D");

n1a.next = n1b;
n1b.next = n1c;
n1c.next = n1d;

let n11 = new Node("1");
let n12 = new Node("2");
let n13 = new Node("3");
let n14 = new Node("4");

n11.next = n12;
n12.next = n13;
n13.next = n14;

// Scenario 2:
let n2a = new Node("A");
let n2b = new Node("B");
let n2c = new Node("C");
let n2d = new Node("D");

n2a.next = n2b;
n2b.next = n2c;
n2c.next = n2d;

let n21 = new Node("1");
let n22 = new Node("2");

n21.next = n22;

// Scenario 3:
let n3a = new Node("A");
let n3b = new Node("B");

n3a.next = n3b;

let n31 = new Node("1");
let n32 = new Node("2");
let n33 = new Node("3");
let n34 = new Node("4");

n31.next = n32;
n32.next = n33;
n33.next = n34;

// Method - Iterative - First Attempt. Misses some edge cases:
// Complexity: Time - O(min(n, m)) ; Space - O(1)
const zip = (h1, h2) => {
  let c1 = h1;
  let c2 = h2;

  while (c1 != null && c2 != null) {
    let next1 = c1.next;
    let next2 = c2.next;

    c1.next = c2;
    if (next1 != null) {
      c2.next = next1;
    }

    c1 = next1;
    c2 = next2;
  }

  return h1;
};

// Method - Iterative - Better Solution from Video
// Complexity: Time - O(min(n, m)) ; Space - O(1)
const zipper = (h1, h2) => {
  let tail = h1;
  let c1 = h1.next;
  let c2 = h2;
  let count = 0;

  while (c1 != null && c2 != null) {
    if (count % 2 == 0) {
      tail.next = c2;
      c2 = c2.next;
    } else {
      tail.next = c1;
      c1 = c1.next;
    }
    tail = tail.next;
    count += 1;
  }

  if (c1 != null) tail.next = c1;
  if (c2 != null) tail.next = c2;

  return h1;
};

// Method - Recursive - Solution from Video
// Complexity: Time - O(min(n, m)) ; Space - O(n)
const recursiveZip = (h1, h2) => {
  if (h1 == null && h2 == null) return null;
  if (h1 == null) return h2;
  if (h2 == null) return h1;

  const next1 = h1.next;
  const next2 = h2.next;

  h1.next = h2;
  h2.next = recursiveZip(next1, next2);
  return h1;
};

// Test Method 1:
// console.log("First Scenario: ");
// zip(n1a, n11);
// printLinkedList(n1a);

// console.log("Second Scenario: ");
// zip(n2a, n21);
// printLinkedList(n2a);

// console.log("Third Scenario: ");
// zip(n3a, n31);
// printLinkedList(n3a);

// Test Method 2:
// console.log("First Scenario: ");
// zipper(n1a, n11);
// printLinkedList(n1a);

// console.log("Second Scenario: ");
// zipper(n2a, n21);
// printLinkedList(n2a);

// console.log("Third Scenario: ");
// zipper(n3a, n31);
// printLinkedList(n3a);

// Test Method 3:
console.log("First Scenario: ");
recursiveZip(n1a, n11);
printLinkedList(n1a);

console.log("Second Scenario: ");
recursiveZip(n2a, n21);
printLinkedList(n2a);

console.log("Third Scenario: ");
recursiveZip(n3a, n31);
printLinkedList(n3a);
