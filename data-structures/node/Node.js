class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.previous = null;
    }
  
    setNextNode(node) {
      if (!(node instanceof Node)) {
        throw new Error('Next node must be a member of the Node class');
      }
      this.next = node;
    }

    setPreviousNode(node) {
        if (node instanceof Node || node === null) {
            this.previous = node;
        } else {
            throw new Error('Previous node must be a member of the Node class')
        }
    }
  
    getNextNode() {
        return this.next;
    }
    setPreviousNode() {
        return this.previous;
    }
  }
  
  module.exports = Node;