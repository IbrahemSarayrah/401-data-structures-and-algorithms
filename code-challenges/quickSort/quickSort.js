'use strict';

function quickSort(array, left, right) {

    left = left || 0;
    right = right || array.length - 1;

    let pivot = partition(array, left, right);

    if (left < pivot - 1) {
        quickSort(array, left, pivot - 1);
    }

    if (right > pivot) {
        quickSort(array, pivot, right)
    }

    return array;

}

function partition(array, left, right) {
    let pivot = Math.floor((left + right) / 2);

    while (left <= right) {
        while (array[left] < array[pivot]) {
            left++
        }
        while (array[right] > array[pivot]) {
            right--
        }

        if (left <= right) {
            swap(array, left, right);
            left++
            right--
        }
    }
    return left;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let array = [5, 12, 7, 5, 5, 7];

console.log(quickSort(array));

module.exports = quickSort