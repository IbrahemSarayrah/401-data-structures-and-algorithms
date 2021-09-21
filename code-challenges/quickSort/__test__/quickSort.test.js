'use strict';

const quickSort = require('../quickSort');

describe('test quickSort ', () => {

    it('test to quick Sort an array', () => {
        let array = [8, 4, 23, 42, 16, 15];
        let expectedArray = [4, 8, 15, 16, 23, 42];

        expect(quickSort(array)).toEqual(expectedArray);
    });

    it('test a Reverse-sorted array', () => {
        let array = [20, 18, 12, 8, 5, -2];
        let expectedArray = [-2, 5, 8, 12, 18, 20];

        expect(quickSort(array)).toEqual(expectedArray);
    });

    it('test a Few uniques array', () => {
        let array = [5, 12, 7, 5, 5, 7];
        let expectedArray = [5, 5, 5, 7, 7, 12];

        expect(quickSort(array)).toEqual(expectedArray);
    });

    it('test a Nearly-sorted array', () => {
        let array = [2, 3, 5, 7, 13, 11];
        let expectedArray = [2, 3, 5, 7, 11, 13];

        expect(quickSort(array)).toEqual(expectedArray);
    });
});