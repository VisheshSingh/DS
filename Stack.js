class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add an item to stack
  push(item) {
    this.items[this.count] = item;
    console.log(`Element ${item} added at position ${this.count}`);
    this.count++;
    return `${item} added at position ${this.count - 1}`;
  }

  // Remove an item from stack
  pop() {
    const deleteItem = this.items[this.count - 1];
    console.log(
      `Element ${this.items[this.count - 1]} is removed from position ${
        this.count - 1
      }`
    );
    this.count--;
    return deleteItem;
  }

  // peek
  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    if (this.count === 0) {
      return `Stack is empty`;
    } else {
      return `Stack is NOT empty`;
    }
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.items = [];
  }
}

const stack = new Stack();

stack.push(100);
stack.push(300);
// console.log(stack.push(300));

stack.pop();
stack.pop();
// stack.pop();
// console.log(stack.pop());
console.log(stack.peek());

console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());
console.log(stack.size());
stack.push(100);
stack.push(200);
