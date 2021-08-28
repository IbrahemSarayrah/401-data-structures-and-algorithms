'use strict';

const Node = require('./node')

class Stack {
    constructor() {
        this.top = null;
        this.stackSize = 0;
    }

    push(value) {

        if (this.top === null) {
            this.top = new Node(value);
        } else {
            const newNode = new Node(value);
            newNode.next = this.top
            this.top = newNode
        }
        this.stackSize++;
    }
    peek() {
        if (this.top !== null) {
            return this.top.value;
        }
        return ('the stack is empty')
    }

    pop() {
        if (this.top !== null) {
            const result = this.top;
            let popItem =this.top.value;
            this.top = result.next;
            this.stackSize--;

            return popItem;
        }
        return ('stack is empty')
    }

    isEmpty() {
        return this.stackSize === 0;
    }
}

let stack = new Stack();

stack.push(9);
stack.push(3); // peek
stack.push(5);
stack.push(1);
stack.pop(); // LIFO = 1
console.log(stack.peek());
stack.push(11);


console.log(stack.peek());
console.log(stack.isEmpty());



module.exports = Stack;