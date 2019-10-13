const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {
      let node = new Node(data,this._tail,null);
      if (this._head === null) {
        this._head = node;
      }
      if (this._tail === null) {
        this._tail = node;
      } else {
        this._tail.next = node;
        this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {
      if (this._head === null){
        return null;
      }
      return this._head.data;
    }

    tail() {
      if (this._tail === null){
        return null;
      }
      return this._tail.data;
    }

    /*indexes started with 0*/
    at(index) {
      let currentNode = this._head;
      if(index > this.length) {
        return null;
      } else {
        for (let i=1; i<=index;i++){
          currentNode = currentNode.next;
        }
      }
      return currentNode.data;
    }

    /* what if index >= this.length ?
    assume index < this.length */
    insertAt(index, data) {
      let prevNode = null;
      let nextNode = this._head;
      for (let i=1; i<=index;i++){
        nextNode = nextNode.next;
      }
      if(nextNode !== null) {
        prevNode = nextNode.prev;
      };
      
      let node = new Node(data,prevNode,nextNode);
      if(prevNode !== null) {
        prevNode.next = node;
      } else {
        this._head = node;
      }
      if(nextNode !== null){
        nextNode.prev = node;
      } else {
        this._tail = node;
      }

      this.length++;
      return this;
    }

    isEmpty() {
      if (this.length === 0) {
        return true;
      }
      return false;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
      return this;
    }

    /*what if index >= this.length ?*/
    /* assume index < this.length */
    deleteAt(index) {
      let currentNode = this._head;
      for(let i=1; i<=index;i++){
        currentNode = currentNode.next;
      }
      let prevNode = currentNode.prev;
      let nextNode = currentNode.next;
      if (prevNode !== null) {
        prevNode.next = nextNode;
      }
      if (nextNode !== null) {
        nextNode.prev = prevNode;
      }
      this.length--;
      return this;
    }

    reverse() {
      let currentNode = this._head;
      if (currentNode === null || this.length == 1){
        return this;
      }
      for (let i=0; i<this.length;i++){
        let nextNode = currentNode.next;
        currentNode.next = currentNode.prev;
        currentNode.prev = nextNode;
        currentNode = nextNode;
      }
      currentNode = this._tail;
      this._tail = this._head;
      this._head = currentNode;
      return this;
    }

    /*first match only*/
    /*return -1 if data not found*/
    indexOf(data) {
      let currentNode = this._head;
      if (currentNode === null){
        return -1;
      }
      for (let i=0; i<this.length;i++){
        if (currentNode.data == data) {
          return i;
        }
        currentNode = currentNode.next;
      }
      return -1;
    }
}

module.exports = LinkedList;

