'use strict';

const HashTable = require('../hashtable');
const leftJoin = require('../leftJoin')

describe('leftJoin Test', () => {

    let left = new HashTable(50);
    let right = new HashTable(50);

    left.add('fond', 'enamored');
    left.add('wrath', 'anger');
    left.add('diligent', 'employed');
    left.add('outfit', 'garb');
    left.add('guide', 'usher');

    right.add('fond', 'averse');
    right.add('wrath', 'delight');
    right.add('diligent', 'idle');
    right.add('guide', 'follow');
    right.add('flow', 'jam');

    it('test the leftJoin ', () => {

        expect(leftJoin(left, right)).toEqual([
            [ 'wrath', 'anger', 'delight' ],
            [ 'guide', 'usher', 'follow' ],
            [ 'outfit', 'garb', null ],
            [ 'fond', 'enamored', 'averse' ],
            [ 'diligent', 'employed', 'idle' ]
          ]);
    })

    it('test the leftJoin if there is no tables ', () => {
        let tree1
        let tree2
        expect(leftJoin(tree1, tree2)).toBeNull();
    })
});