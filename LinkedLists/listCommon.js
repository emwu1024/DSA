// Class Definition: Basic Implementation - requires updating nodes manually
export class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Method - Iterative: Print values from the linked list
export const printLinkedList = (head) => {
  let current = head;

  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};
