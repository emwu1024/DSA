class LinkedList {
  constructor() {
    this.head = null;
  }

  get getHead() {
    return this.head;
  }

  size() {
    // console.log("Head: " + this.head.val);
    let current = this.head;
    let count = 0;

    while (current != null) {
      count += 1;
      current = current.next;
    }

    return count;
  }

  print() {
    let current = this.head;
    let count = 1;

    while (current != null) {
      console.log("Item " + count + " : " + current.val);
      current = current.next;
      count += 1;
    }
  }

  search(item) {
    let current = this.head;

    while (current != null) {
      if (current.val == item) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  setHead(head) {
    this.head = head;
  }

  prepend(item) {
    let newNode = new Node(item);
    newNode.next = this.head;
    this.head = newNode;
  }

  /*
  All Cases:
  - List is empty
  - Index is negative
  - Index is larger than size of list
  - 
   */
  insert(item, index) {
    // a -> b -> d   - insert c at 2
    let current = this.head;
    let newNode = new Node(item);

    if (index < 0) {
      console.log("Error. Index cannot be negative");
      return;
    }

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    if (current == null && index > 0) {
      console.log("Error. Index out of bounds.");
      return;
    }

    let pos = index - 1;
    console.log("Pos: " + pos);

    while (current != null && pos > 0) {
      console.log("Next Node: " + current.val);
      current = current.next;
      pos -= 1;
    }

    if (current == null) {
      console.log("Error. Index out of bounds.");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Test Data

let ll = new LinkedList();

ll.prepend("D");
ll.prepend("B");
ll.prepend("A");

console.log("Linked List: ");
ll.print();
console.log("Size: " + ll.size());

// console.log(ll.search("waluigi"));

console.log("Linked List After operation: ");

ll.insert("C", 2);
ll.print();
console.log("Size: " + ll.size());

ll.insert("E", 4);
ll.print();
console.log("Size: " + ll.size());
