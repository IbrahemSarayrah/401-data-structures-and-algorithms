'use strict'

let input1 = [1,2,3,4,5,6]
let input2 = [89, 2354, 3546, 23, 10, -923, 823, -12]
let input3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]


let reverseArray = (arr)=> {

  let output = []

  for(let i =  arr.length -1; i >= 0; i--) {
  output.push(arr[i])
  }
    return output;
}

reverseArray(input1);
console.log(reverseArray(input1));
console.log(reverseArray(input2));
console.log(reverseArray(input3));

module.exports = reverseArray