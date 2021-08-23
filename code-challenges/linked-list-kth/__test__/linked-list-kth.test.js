'use strict'

const LinkedList = require('../linked-list-kth');

describe('linkedList Test', () => {

    it('the constructor initial values', () => {
        let testList = new LinkedList();
        expect(testList.head).toBeNull();
        expect(testList.tail).toBeNull();
        expect(testList.length).toBe(0);
    })

    it('test insert first node', () => {
        let testList = new LinkedList();
        testList.insert(12);
        expect(testList.head.value).toBe(12);
        expect(testList.head.next).toBeNull()
    })

    it('test insert multiple nodes', () => {
        let testList = new LinkedList();
        testList.insert(12);
        testList.append(14);
        expect(testList.head.value).toBe(12);
        expect(testList.head.next.value).toBe(14);
    })

    it('test append', () => {
        let testList = new LinkedList();
        let value1 = 1
        testList.append(value1)
        expect(testList.head.value).toBe(value1)

        let value2 = 2
        testList.append(value2)
        expect(testList.head.next.value).toBe(value2);
        expect(testList.head.next.next).toBeNull();
        expect(testList.head.value).toBe(value1);

    })

    it('test insertBefore', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(2);
        testList.insertBefore(3, 5);
        expect(testList.head.value).toBe(1);
        expect(testList.head.next.value).toBe(5);
    });

    it('test insertAfter', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(2);
        testList.insertAfter(1, 5);
        expect(testList.head.value).toBe(1);
        expect(testList.head.next.value).toBe(5);
      })

    it('check the value is include to be true', () => {
        let testList = new LinkedList;
        testList.insert(12);
        testList.append(14);
        expect(testList.includes(14)).toBe(true);
    });

    it('check the value is include to be false', () => {
        let testList = new LinkedList;
        testList.insert(12);
        testList.append(14);
        expect(testList.includes(16)).toBe(false);
    });

    it('Returns a string representing all the values in the Linked List', () => {
        let testList = new LinkedList;
        testList.insert(12);
        testList.append(14);
        expect(testList.toString()).toBe('{12} ->{14} ->NULL');
    });

    it('it check if there is no linked list', () => {
        let testList = new LinkedList;
        testList.toString()
        expect(testList.head).toBe(null);
    });

    it('Where k is greater than the length of the linked list', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(8);
        testList.append(2);
        expect(testList.kthFromEnd(6)).toBe('Exception');
      });

      it('Where k and the length of the list are the same', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(8);
        testList.append(2);
        expect(testList.kthFromEnd(4)).toBe('Exception');
      });

      it('Where k is not a positive integer', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(8);
        testList.append(2);
        expect(testList.kthFromEnd(-2)).toBe('Exception');
      });

      it('Where the linked list is of a size 1', () => {
        let testList = new LinkedList();
        testList.insert(1);
        expect(testList.kthFromEnd(0)).toBe(1);
      });

      it('Happy Path where k is not at the end, but somewhere in the middle of the linked list', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(8);
        testList.append(2);
        expect(testList.kthFromEnd(2)).toBe(3);
      });

})