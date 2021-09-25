'use strict';

const HashTable = require("../hashtable");



describe('HashTable Test', () => {
    const hashTable = new HashTable(512);

    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
        const hashTable = new HashTable(512);
        hashTable.add('key', 'value');

        expect(hashTable.get('key')).toBe('value');
        expect(hashTable.contains('key')).toBe(true);
        expect(hashTable.contains('ket2')).toBe(false);
    })

    it('Retrieving based on a key returns the value stored', () => {
        const hashTable = new HashTable(512);
        hashTable.add('key', 'value');

        expect(hashTable.get('key')).toBe('value');
        expect(hashTable.contains('key')).toBe(true);
        expect(hashTable.contains('key2')).toBe(false);
    })

    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        const hashTable = new HashTable(512);
        hashTable.add('key', 'value');

        expect(hashTable.get('key')).toBe('value');
        expect(hashTable.get('key2')).toBeNull();
        expect(hashTable.contains('key')).toBe(true);
        expect(hashTable.contains('key2')).toBe(false);

    })

    it('Successfully handle a collision within the hashtable', () => {

        const hashTable = new HashTable(512);
        hashTable.add('key', 'value');
        hashTable.add('kye', 'collision');

    
        expect(hashTable.hash('key')).toBe(13);
        expect(hashTable.hash('kye')).toBe(13);
        let handleCollision1 = hashTable.map[13].head.value;
        let handleCollision2 = hashTable.map[13].head.next.value;
        expect(handleCollision1).toEqual({"key": "value"});
        expect(handleCollision2).toEqual({"kye": "collision"});
    })

    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

        const hashTable = new HashTable(512);
        hashTable.add('key', 'value');
        hashTable.add('kye', 'collision');

        expect(hashTable.hash('key')).toBe(13);
        expect(hashTable.hash('kye')).toBe(13);
        expect(hashTable.get('key')).toBe('value');
        expect(hashTable.get('kye')).toBe('collision');

    })

    it('Successfully hash a key to an in-range value', () => {
        const hashTable = new HashTable(3);

        expect(hashTable.hash('key')).toBeLessThanOrEqual(hashTable.size);
        expect(hashTable.hash('key2')).toBeLessThanOrEqual(hashTable.size);
        expect(hashTable.hash('newKey')).toBeLessThanOrEqual(hashTable.size);
        expect(4 <= hashTable.size).toBe(false);
    })

});