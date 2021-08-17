'use strict'

let input = [4, 8, 15, 16, 23, 42];
let input2 = [-131, -82, 0, 27, 42, 68, 179]
let input3 = [11, 22, 33, 44, 55, 66, 77]


let BinarySearch = (sortedArray, searchKey) => {
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === searchKey) {
            return i;
        }
    }
    return -1;
}


BinarySearch(input, 15);

console.log(BinarySearch(input, 15));

console.log(BinarySearch(input2, 42));

console.log(BinarySearch(input3, 90));

module.exports = BinarySearch
