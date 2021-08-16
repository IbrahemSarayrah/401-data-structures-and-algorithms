'use strict';

let input = [2, 4, 6, -8]

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

insertShiftArray(input, 5)

console.log(insertShiftArray(input, 5));

module.exports = insertShiftArray