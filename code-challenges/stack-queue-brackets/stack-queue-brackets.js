'use strict';

const Stack = require('./stack');

function validateBrackets(string) {

    const stack = new Stack();

    for (let i = 0; i < string.length; i++) {
        if (string[i] === '[' || string[i] === '{' || string[i] === '(') {
            stack.push(string[i]);
        } else if (stack.peek() === '[' && string[i] === ']' || stack.peek() === '{' && string[i] === '}' || stack.peek() === '(' && string[i] === ')') {
            stack.pop();
        }
    }
    if (stack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}

let test1 = '{}(){}';
let test2 = '(){}[[]]';
let test3 = '()[[Extra Characters]]';
let test4 = '{}{Code}[Fellows](())';
let test5 = '(](';
let test6 = '[({}]';

console.log(validateBrackets(test1));
console.log(validateBrackets(test2));
console.log(validateBrackets(test3));
console.log(validateBrackets(test4));
console.log(validateBrackets(test5));
console.log(validateBrackets(test6));

module.exports = validateBrackets;