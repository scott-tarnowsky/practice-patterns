/*

LinkedList: 
Like Array.  Data Structure that contains head, tail and length
Contains nodes. Each node has a value and a pointer to another node or null

Like a train car

LinkedList vs Array

Push Psuedocode:
-Function should accept value
-Create a new node using value passed to the function
-If there is no head property on the list, set the head 
and tail to be newly created node
-Otherwise set the next property on the tail to be the new
node and set the tail property on list to be newly created node
-Increment length by one

Pop Psuedocode:
-If there are no nodes in the list, return undefined
-Loop through the list until you reach tail
-Set the next property of the 2nd to last node to be null
-Set the tail to be the 2nd to last node
-Decrement length of list by one
-Return the value of the node removed


*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(val) {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}
let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
