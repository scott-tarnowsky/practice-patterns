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

Shift (remove head from beginning of list) Psuedocode:
-If there are no nodes, return undefined
-Store current head property in a variable
-Set the head property to be the current heads next property
-Return the value of the node removed

Unshift (add new node to beginning of list) Psuedocode:
-This function should accept a value
-Create a new node using the value passed to function
-If there is no head property on list, set head and
tail to be newly created node
-Otherwise set newly created node's next property to be 
current head property on the list
-Incrememnt length of list by 1
-Return linked list

Get (Find):
-Function should accept an index
-If index is less than zero or greater than or equal to length
of list, return null
-Loop thru list until you reach index and return node at that
specific index

Set (change value of node based on position in LinkedList):
-This function should accept a value and index
-Use your get function to find specific node
-If node is not found, return false
-If node is found, set value of that node to be value passed
to the function and return true

Insert:
-If index is less tha zero or greater than length, return false
-If index is same as length length, push new node to end of list
-If index is 0, unshift a new node to start of list
-Otherwise, using get method, access node at the index -1
-Set next property on that node to be new node
-Set next property on new node to be the previous next
-Increment the length
-Return true

Remove:
-If index is less than zero or greater than length, 
return undefined
-If index is same as length-1, pop
-If index is 0, shift
-Otherwise, using get method, access node at index-1
-Set next property on that node to be next of the next node
-Decrement length
-Return value of node removed
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
  pop() {
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
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove() {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
