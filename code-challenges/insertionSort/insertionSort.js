'use strict';

function insertionSort(array) {

    for (let i = 0; i < array.length; i++) {

        let temp = array[i]
        let j = i - 1

        while ((j >= 0) && (temp < array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp
    }
    return array
}

let array = [8, 4, 23, 42, 16, 15]

console.log(insertionSort(array));

module.exports = insertionSort