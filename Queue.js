class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add an item to Queue
  enque(item) {
    this.items[this.count] = item;
    console.log(`Element ${item} added at position ${this.count}`);
    this.count++;
    return `${item} added at position ${this.count - 1}`;
  }

  // Remove an item from Queue
  deque() {
    const deleteItem = this.items[0];
    this.count--;
    return `deleted item - ${deleteItem}`;
  }

  // peek
  peek() {
    return this.items[0];
  }

  isEmpty() {
    if (this.count === 0) {
      return `Queue is empty`;
    } else {
      return `Queue is NOT empty`;
    }
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.items = [];
  }

  print() {
    let str = '';
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

const queue = new Queue();

queue.enque(100);
queue.enque(200);
queue.enque(300);
// console.log(queue.enque(300));

queue.deque();
// console.log(queue.deque());
// // queue.deque();
// // console.log(queue.deque());
console.log(queue.peek());

console.log(queue.isEmpty());
// queue.clear();
// console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.print());
// queue.enque(100);
// queue.enque(200);
