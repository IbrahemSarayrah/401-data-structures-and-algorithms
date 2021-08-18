'use strict'

let matrix = require("./class-04")

describe('test matrix', () => {
    it('will return the sum in the arrays inside the array', () => {
        let test1 = [[1, 2, 3], [3, 5, 7], [1, 7, 10]]
        let test2 = [[0, 1, 5], [-4, 7, 2], [-3, 12, 11]]
        expect(matrix(test1, 15)).toStrictEqual([6, 15, 18])
        expect(matrix(test2, 42)).toStrictEqual([6, 5, 20])
    })
})