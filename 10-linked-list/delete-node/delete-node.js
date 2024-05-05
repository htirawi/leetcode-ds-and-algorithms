// Node class
class Node {
  constructor(data) {
    // The data the node holds.
    this.data = data;
    // The next node in the list.
    this.next = null;
  }
}

// Linked list class
class LinkedList {
  constructor() {
    // The head of the list.
    this.head = null;
    // The tail of the list.
    this.tail = null;
  }

  add(data) {
    // Create a new node
    const node = new Node(data);

    // If the list is empty, set the head to the new node
    if (this.head === null) {
      this.head = node;
    } else {
      // Otherwise, set the next node of the tail to the new node
      this.tail.next = node;
    }

    // Set the tail to the new node
    this.tail = node;
  }

  // delete a node from the linked list
  /*
    Time Complexity: O(1)
    Space Complexity: O(1)
  */

  deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
  };
}

module.exports = { Node, LinkedList };
