'use strict';

const HashTable = require('./hashtable.js');

function leftJoin(left, right) {
    // to check if there is a left and right table
    if(!left || !right) {
        return null
    }

  const array1 = [];
//loop over the left hashtable
  for (let i = 0; i < left.map.length; i++) {
    const array2 = [];

    if (left.map[i] !== undefined) {
        // returns an array
      let key = (Object.keys(left.map[i].head.value)[0]);
      array2.push(key);
      array2.push(left.map[i].head.value[key]);
        // condition to check for the key
      if (right.contains(key)) {
        array2.push(right.get(key));

      } else {
        array2.push(null);
      }
      array1.push(array2);
    }
  }
  return array1;
};


let left = new HashTable(50);
let right = new HashTable(50);

left.add('fond', 'enamored');
left.add('wrath', 'anger');
left.add('diligent', 'employed');
left.add('outfit', 'garb');
left.add('guide', 'usher');

right.add('fond', 'averse');
right.add('wrath', 'delight');
right.add('diligent', 'idle');
right.add('guide', 'follow');
right.add('flow', 'jam');

let test = leftJoin(left, right);

console.log(test);

module.exports = leftJoin;