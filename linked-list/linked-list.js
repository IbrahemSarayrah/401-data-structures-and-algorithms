'use strict'

const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail = newNode;
            this.tail.next = newNode;
        }
        this.length++
        return this.head;
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }
    
    includes(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                console.log(`${value} already in list`)
                return true
            }
            current = current.next;
        }
        console.log(`${value} not in list`);
        return false
    }

    toString() {
        let current = this.head;
        if (!current) {
            console.error('there is no linked list')
        }

        let listFormat = ''
        while (current) {
            listFormat = listFormat + `{${current.value}} ->`
            current = current.next
        }
        return (listFormat = listFormat + 'NULL')
    }

}

let list = new LinkedList();
list.insert(12);
list.append(14);

console.log(list.toString());
console.log(list.includes(14));
console.log(list.includes(16));

module.exports= LinkedList