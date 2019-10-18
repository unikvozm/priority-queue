const Node = require("./node");

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.length = 0;
  }

  push(data, priority) {
    let node = new Node(data, priority);
    this.insertNode(node);
    this.shiftNodeUp(node);
  }

  pop() {
    if (this.length) {
      let rootDetached = this.detachRoot();
      this.restoreRootFromLastInsertedNode(rootDetached);
      this.shiftNodeDown(this.root);
      this.length--;
      return rootDetached.data;
    }
  }

  detachRoot() {
    let rootDetached = this.root;
    if (this.parentNodes.includes(this.root)) this.parentNodes.shift();
    this.root = null;
    return rootDetached;
  }

  restoreRootFromLastInsertedNode(detached) {}

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.root = null;
    this.parentNodes = [];
  }

  insertNode(node) {
    if (this.length === 0) {
      this.root = node;
      this.parentNodes.push(node);
      this.length++;
    } else {
    }
  }

  shiftNodeUp(node) {}

  shiftNodeDown(node) {}
}

module.exports = MaxHeap;
