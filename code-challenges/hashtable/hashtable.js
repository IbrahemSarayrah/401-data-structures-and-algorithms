'use strict';

const LinkedList = require('./linked-list');

// creating the HashTable class
class HashTable {
    constructor(size) {
        //create a map of buckets with the size 
        this.size = size;
        this.map = new Array(size)
    }
    // hash() method that will take a key value and transform it into an index.
    hash(key) {
        let hash = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0) * 677 % this.size;
        // console.log(hash);
        // return the index for the key
        return hash
    }
    // add method with Arguments: key, value
    add(key, value) {
        // index for the key
        let hash = this.hash(key);

        // check if there is a linked list at the hashed index, if not add a new linkedlist
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }

        // add the key and the value to the buckets and use linkedList insert
        let addBucket = { [key]: value };
        this.map[hash].insert(addBucket);
    }

    // get method with Arguments: key to get the value for that key
    get(key) {

        // index for the key
        let hash = this.hash(key);

        // check if the key is in the map buckets
        if (!this.map[hash]) {
            return null
        };

        // the first value in the linkedlist for the key and return the value
        let current = this.map[hash].head;
        if (current.value[key]) {
            return current.value[key]
        };
        // while loop for the next value in the linkedlist if 2 values have the same hashed key[index]
        while (current.next) {
            current = current.next;
            if (current.value[key]) {
                return current.value[key]
            };
        }
    }
    // contains method with Arguments: key to check if that key in the hash table
    contains(key) {
        // index for the key
        let hash = this.hash(key);
        // condition to check if the key is in the map buckets and return true or false
        return this.map[hash] ? true : false;
    };
}

const hashTable = new HashTable(512);
hashTable.add('name', 'ibrahem');
hashTable.add('abc', 'second');
hashTable.add('bac', 'third');

console.log(hashTable.get('name'));
console.log(hashTable.get('abc'));
console.log(hashTable.get('bac'));
console.log(hashTable.contains('name2'));
console.log(hashTable.contains('name'));
console.log(hashTable.contains('abc'));
console.log(hashTable.contains('bac'));


module.exports = HashTable;

