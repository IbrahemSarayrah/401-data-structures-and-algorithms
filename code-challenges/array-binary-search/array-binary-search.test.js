'use strict';

let BinarySearch = require('./array-binary-search')



describe('test BinarySearch', () => {
    it('return the index of the array’s element that is equal to the value of the search key else -1', () => {
        let test1 = [4, 8, 15, 16, 23, 42]
        let test2 = [-131, -82, 0, 27, 42, 68, 179]
        let test3 =  [11, 22, 33, 44, 55, 66, 77]
        expect(BinarySearch(test1, 15)).toStrictEqual(2)
        expect(BinarySearch(test2, 42)).toStrictEqual(4)
        expect(BinarySearch(test3, 90)).toStrictEqual(-1)
    })
})
