/*
Define a tree structure

Compare contrast trees and lists

Explain difference between trees, binary trees, and binary search trees

implement operations on binary search trees

** Only Parent to Child Relationships**
** Children cannot relate to children**

Root - Top Node in tree structure
Child - Node directly connected to another node when 
moving away from Root
Parent - The converse notion of children
Siblings - Group of nodes with same parent
Leaf - Node with no children
Edge - Connection between one node and another


Ex)
The DOM
Network Routing
Abstract Syntax Tree
Artificial Intelligence
Folder file structure
JSON

Tree - Any number of nodes in a tree structure
Binary Tree - Each node can have at most two children
BST:
Every Parent node has at most 2 children
Every Node to the left of parent node is always less than parent
Every node to the right of a parent node is always greater than the parent

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  // Similar to Find
  contains(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let tree = new BinarySearchTree();
tree.root - new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
