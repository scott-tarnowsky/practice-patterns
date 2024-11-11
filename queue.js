/*

FIFO - First In First Out

*/

var q = [];

q.push("first");
q.push("second");
q.push("third");

q.shift();
q.shift();
q.shift();

// ** unshift() and pop() OR shift() and shift()

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
