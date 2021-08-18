'use strict';

let input1 = [2, 4, 6, -8]

let input2 = [42,8,15,23,42]

let input3 = ['a','b','d','e']

let insertShiftArray = (array, value) => {

    let output = [];

    let middleIndex = Math.ceil(array.length / 2);

    for (let i = 0; i < array.length; i++) {
        if (middleIndex == i) {
            output.push(value, array[i]);
        } else {
            output.push(array[i]);
        }
    }
    return output;
}

insertShiftArray(input1, 5)

console.log(insertShiftArray(input1, 5));

console.log(insertShiftArray(input2, 16));

console.log(insertShiftArray(input3, 'c'));

module.exports = insertShiftArray