'use strict'

let input1 = [[1, 2, 3], [3, 5, 7], [1, 7, 10]]
let input2 = [[0, 1, 5], [-4, 7, 2], [-3, 12, 11]]


function matrix(testArray) {

    let output = [];

    testArray.map(array => {
        let sum = 0;
        array.map(number => {
            sum = sum + number;
        })
        output.push(sum)
    })
    return output
}

console.log(matrix(input1));
console.log(matrix(input2));

module.exports = matrix
