/*
Singly Linked List

Methods:
-search: index, indexOf, getHead, getTail
-set: set, setHead, setTail
-insert: #addAt, append, preppend,
-remove: removeAt, remove, removeHead, removeTail, clear
-helper: isEmpty, size, print
*/

module.exports = class SinglyLinkedList {
  head;
  length;

  constructor(head = null) {
    this.head = new Node(head);
    this.length = head ? 1 : 0;

  }

  index(position) {
    let counter = 0;
    let currentNode = this.getHead();
    
    if(position === 0) {
      return this.getHead() || -1;
    }

    if(position < 0 || position >= this.size()) {
      return -1
    }

    while(counter < position) {
      currentNode = currentNode.next;
      counter += 1;
    }

    return currentNode;
  }

  indexOf(value) {
    let counter = 0;
    let currentNode = this.getHead();
    
    while(counter < this.length){
      if(currentNode.value === value){
        return counter;
      }
      currentNode = currentNode.next
      counter += 1;
    }
    return -1;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    const tail = this.index(this.length - 1);
    return tail !== -1 ? tail : null;
  }

  set(value, position) {
    if (position < 0 || position > this.length) {
      return false;
    }
    
    let counter = 0;
    let currentNode = this.getHead();

    while(counter < position) {
        counter += 1;
    }

    currentNode.value = value;
    return true;
  }

  setHead(value) {
    this.head.value = value;
  }

  setTail(value) {
    const tail = this.getTail();
    tail.value = value;
    return value;
  }

  addAt(value, position) {
    if(position < 0 || position > this.length) {
      return -1;
    }
    if(position === 0) {
      return this.preppend(value);
    }
    if(position === this.length) {
      return this.append(value);
    }

    let currentNode = this.getHead();
    let previousNode = null;
    let counter = 0;

    while(counter < position) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter += 1;
    }

    const newNode = new Node(value);
    newNode.next = currentNode.next;
    previousNode.next = newNode;
    this.length += 1;

    return counter;
  }
  
  append(value) {
    let counter = 0;
    let currentNode = this.head;

    while(currentNode.next) {
      counter += 1;
      currentNode = currentNode.next;
    }

    currentNode.next = new Node(value);
    this.length += 1;
    return counter + 1;

  }

  preppend(value) {
    if(!this.head) {
      this.head = new Node(value);
      this.length += 1;
    } 
    else {
      let currentNode = this.head;
      this.head = new Node(value);
      this.head.next = currentNode;
      this.length += 1;
    } 

    return 0;
  }

  removeAt(position) {
    if(position < 0 || position >= this.length) {
      return false;
    }

    let counter = 0;
    let currentNode = this.head;
    let previousNode = null;

    while(counter < position) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter += 1;
    }

    if(position === 0) {
      currentNode.value = currentNode.next.value;
      currentNode.next = currentNode.next.next;
      this.length -= 1;
      return true;
    }

    if(position === this.length - 1) {
      previousNode.next = null;
      this.length -= 1;
      return true;
    }
  
    previousNode.next = currentNode.next;
    this.length -= 1;
    return true;
  }

  remove(value) {
    let counter = 0;
    let currentNode = this.getHead();
    let previousNode = null;

    while(counter < this.length) {
      if(currentNode.value === value) {
        break;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
      counter += 1
    }

    if(counter === 0) {
      this.removeHead();
      return counter;
    }

    if(counter === this.length - 1){
      previousNode.next = null;
      this.length -= 1;
      return counter;
    }

    if (counter === this.length) {
      return -1;
    }

    previousNode.next = currentNode.next;
    this.length -= 1;
    return counter;
  }

  removeHead() {
    this.head = this.head ? this.head.next : null;
    this.length -= 1;
    return 0;
  }

  removeTail() {
    return this.removeAt(this.length - 1);
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
  
  isEmpty() {
    return !this.length;
  }

  size() {
    return this.length;
  }

  print() {
    let currentNode = this.head;
    while(currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }

}

class Node {
  value;
  next;

  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}