'use strict';

let insertShiftArray = require('./array-insert-shift')



describe('test insertShiftArray', () => {
    it('check if the array take a value to be added in the middle index', () => {
        let input = [2, 4, 6, -8]
        let input2 = [42,8,15,23,42]
        let input3 = ['a','b','d','e']
        expect(insertShiftArray(input, 5)).toStrictEqual([2, 4, 5, 6, -8])
        expect(insertShiftArray(input2, 16)).toStrictEqual([42,8,15,16,23,42])
        expect(insertShiftArray(input3, 'c')).toStrictEqual(['a','b','c','d','e'])
    })
})


