'use strict';

function mergeSort(array) {

    let n = array.length;

    if (n > 1) {
        let mid = Math.floor(n / 2);
        let left = array.slice(0, mid);
        let right = array.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    } else {
        return array;
    }
}

function merge(left, right) {
    let i = 0;
    let j = 0;
    let k = [];

    while (i < left.length || j < right.length) {
        if (i === left.length) {
            k.push(right[j]);
            j++;
        }
        else if (j === right.length || left[i] <= right[j]) {
            k.push(left[i]);
            i++;
        } else {
            k.push(right[j]);
            j++;
        }
    }
    return k;
}

let array = [8, 4, 23, 42, 16, 15]

console.log(mergeSort(array));

module.exports = mergeSort