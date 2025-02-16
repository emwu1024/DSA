// LINKED LIST CODE:
// src: Free Code Camp Youtube - Linked Lists for Technical Interviews - Full Course

// Class Definition: Basic Implementation - requires updating nodes manually
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

let n1 = new Node(4);
let n2 = new Node(16);
let n3 = new Node(3);
let n4 = new Node(75);

n1.next = n2;
n2.next = n3;
n3.next = n4;

// Method - Iterative: Print values from the linked list
const printLinkedList = (head) => {
  let current = head;

  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};

// printLinkedList(a);

// Method - RecursiveV1: Print values from the linked list
// When coding think of the base case first
const recursivePrintLinkedList = (head) => {
  // NOTE: CANNOT BE head.val == null otherwise it will throw an error
  if (head == null) {
    return;
  } else {
    console.log(head.val);
    recursivePrintLinkedList(head.next);
  }
};

// recursivePrintLinkedList(a);

// Method - RecursiveV2: Print values from the linked list
// WRONG - must use head == null instead of head.next as the edge case of an empty list will fail.
const recursiveV2PrintLinkedList = (head) => {
  if (head.next == null) {
    // Will fail with empty list due to this line
    console.log(head.val);
    return;
  } else {
    console.log(head.val);
    recursivePrintLinkedList(head.next);
  }
};

// recursiveV2PrintLinkedList(a);

// Method - Iterative: Returning an array on all values in the linked list
// Complexity: Time - O(n) ; Space - O(n)
const getValuesArray = (head) => {
  let current = head;
  let valArray = [];
  while (current != null) {
    valArray.push(current.val);
    current = current.next;
  }
  return valArray;
};

// let arr = getValuesArray(a);
// console.log(arr);

// Method - Recursive: Returning an array on all values in the linked list
// Complexity: Time - O(n) ; Space - O(n)
// NOTE: start with the base case
const getValuesArrayV2 = (head) => {
  let valuesArray = [];
  recursiveGetValuesArray(head, valuesArray);
  return valuesArray;
};

const recursiveGetValuesArray = (head, valuesArray) => {
  if (head == null) {
    return;
  } else {
    valuesArray.push(head.val);
    recursiveGetValuesArray(head.next, valuesArray);
  }
};

// let recursiveArr = getValuesArrayV2(a);
// console.log(recursiveArr);

// Method - Iteration: Sum all values in the list
// Complexity: Time - O(n) ; Space - O(1)
const sumAllElements = (head) => {
  let current = head;
  let runningTotal = 0;
  while (current != null) {
    runningTotal += current.val;
    current = current.next;
  }
  return runningTotal;
};

// Test Setup:
// let n1 = new Node(4);
// let n2 = new Node(16);
// let n3 = new Node(3);
// let n4 = new Node(75);

// n1.next = n2;
// n2.next = n3;
// n3.next = n4;

// console.log(sumAllElements(n1));

// Method - Recursive - Functional: Sum all values in the list
// Complexity: Time - O(n) ; Space - O(n)
// NOTE: cannot do the same thing as previous recursive functions. Primitive values like Number are passed by value, not reference, so a copy gets updated each time
const recursiveSum = (head) => {
  let runningTotal = 0;
  let obtainedTotal = getTotal(head, runningTotal);
  return obtainedTotal;
};

const getTotal = (head, runningTotal) => {
  if (head == null) {
    return runningTotal;
  } else {
    // console.log(head);
    // console.log("Value: " + head.val);
    // console.log("Next: " + head.next);
    // console.log("Total: " + runningTotal);
    runningTotal += head.val;
    return getTotal(head.next, runningTotal);
  }
};

// Test Setup:
// let n1 = new Node(4);
// let n2 = new Node(16);
// let n3 = new Node(3);
// let n4 = new Node(75);

// n1.next = n2;
// n2.next = n3;
// n3.next = n4;

// console.log(recursiveSum(n1));

// Method - Recursive - Better: Sum all values in the list. This is a cleaner recursive version.
// Complexity: Time - O(n) ; Space - O(n)
const sumList = (head) => {
  if (head == null) return 0;
  return head.val + sumList(head.next);
};

// Test Setup:
// let n1 = new Node(4);
// let n2 = new Node(16);
// let n3 = new Node(3);
// let n4 = new Node(75);

// n1.next = n2;
// n2.next = n3;
// n3.next = n4;

// console.log(sumList(n1));

// Method - Iterative: Check if a given value exists in the list
// Complexity: Time - O(n) ; Space - O(1)
const isPresent = (head, target) => {
  let current = head;
  while (current != null) {
    if (current.val == target) {
      return true;
    }
    current = current.next;
  }
  return false;
};

// console.log(isPresent(a, "d")); // should return false

// Method - Recursive: Check if a given value exists in the list
// Complexity: Time - O(n) ; Space - O(n)

const recursiveIsPresent = (head, target) => {
  if (head == null) {
    return false;
  }
  if (head.val == target) {
    console.log("Head: " + head.val);
    console.log("Target " + target);
    return true;
  }
  return recursiveIsPresent(head.next, target);
};

// console.log(recursiveIsPresent(a, "d")); // should return false

// Method - Iterative: Get the value at the provided index
// Complexity: Time - O(n) ; Space - O(1)
// NOTE: Assumes 0 indexed
const getValue = (head, index) => {
  let current = head;
  let count = 0;
  while (count != index) {
    if (current == null) {
      return null;
    }
    current = current.next;
    count = count + 1;
  }

  if (current == null) {
    return null;
  }
  return current.val;
};

// Version from the video
const alternativeGetValue = (head, index) => {
  let current = head;
  let count = 0;
  while (current != null) {
    if (count == index) {
      return current.val;
    }
    current = current.next;
    count = count + 1;
  }
  return null;
};

// console.log(getValue(a, 3));
// console.log(alternativeGetValue(a, 3));

// Method - Recursive: Get the value at the provided index
// Complexity: Time - O(n) ; Space - O(n)
// NOTE: Assumes 0 indexed

const recursiveGetValue = (head, index) => {
  if (head == null) {
    return null;
  }

  if (index == 0) {
    return head.val;
  }
  return recursiveGetValue(head.next, index - 1);
};

// console.log(recursiveGetValue(a, 2));

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

// // Test Setup:
// let node1 = new Node("A");
// let node2 = new Node("B");
// let node3 = new Node("C");
// let node4 = new Node("D");

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// // console.log(reverseLinkedList(node1)); // should return D
// console.log(printLinkedList(reverseLinkedList(node1)));

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

// let node1 = new Node("A");
// let node2 = new Node("B");
// let node3 = new Node("C");
// let node4 = new Node("D");

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// console.log(iterativeReverseLinkedList(node1));
// // console.log(printLinkedList(iterativeReverseLinkedList(node1)));

// Method - Iterative - From Video: Reversing a linked list.
// Complexity: Time - O(n) ; Space - O(n)
const improvedRecursiveReverseLinkedList = (head, prev = null) => {
  if (head == null) {
    return prev;
  }
  let next = head.next;
  head.next = prev;
  return improvedRecursiveReverseLinkedList(next, head);
};

let node1 = new Node("A");
let node2 = new Node("B");
let node3 = new Node("C");
let node4 = new Node("D");

node1.next = node2;
node2.next = node3;
node3.next = node4;

// console.log(improvedRecursiveReverseLinkedList(node1));
console.log(printLinkedList(improvedRecursiveReverseLinkedList(node1)));
console.log(node2);
console.log(node1);
