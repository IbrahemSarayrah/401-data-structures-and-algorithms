'use strict'

let input = [4, 8, 15, 16, 23, 42];
let input2 = [-131, -82, 0, 27, 42, 68, 179]
let input3 = [11, 22, 33, 44, 55, 66, 77]
let input4 = [1, 2, 3, 5, 6, 7]


let BinarySearch = (sortedArray, searchKey) => {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;
    while (startIndex <= endIndex){

        let middleIndex = Math.floor((startIndex + endIndex)/ 2);
        // console.log(middleIndex);
        if (searchKey === sortedArray[middleIndex]){
            return middleIndex
        } else if (searchKey > sortedArray[middleIndex]){
            startIndex = middleIndex +1
        } else if ( searchKey < sortedArray[middleIndex]){
            endIndex = middleIndex -1
        }
    }
    return -1
}


BinarySearch(input, 15);

console.log(BinarySearch(input, 15));

console.log(BinarySearch(input2, 42));

console.log(BinarySearch(input3, 90));

console.log(BinarySearch(input4, 4));

module.exports = BinarySearch
