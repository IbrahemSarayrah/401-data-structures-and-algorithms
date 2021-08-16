'use strict';

let insertShiftArray = require('../code-challenges/array-insert-shift/array-insert-shift')



describe('test insertShiftArray', () => {
    it('check if the array take a value to be added in the middle index', () => {
        let input = [2, 4, 6, -8]
        expect(insertShiftArray(input, 5)).toStrictEqual([2, 4, 5, 6, -8])
    })
})


