'use strict';

const HashTable = require('./hashtable.js');
const Node = require('../trees/node');
const BinaryTree = require('../trees/binaryTree');

function treeIntersection(binaryTree1, binaryTree2) {

  let values = [];
  let hashTable = new HashTable(1024);

  // check if there is two binary trees
  if(!binaryTree1 || !binaryTree2) {
      return null
  }

  // add the first tree to the hash-table
  const addTable = (node) => {
      // convert the numbers that we add to the hash-table to sring  / the hash-table only take strings
    let string = JSON.stringify(node.value);
    //add the nodes left and right
    hashTable.add(string, string);
    if (node.left) {
      addTable(node.left);
    }
    if (node.right) {
      addTable(node.right);
    }
  };
  addTable(binaryTree1.root);

  // to check the values from the secend tree with first tree
  const checkTable = (node) => {
    let string = JSON.stringify(node.value);
    //to check if the key is in the map buckets
    if (hashTable.contains(string)) {
        // if true push the value to the array
      values.push(string);
    }
    // check the left and the right node
    if (node.left) {
        checkTable(node.left);
    }
    if (node.right) {
        checkTable(node.right);
    }
  };
  checkTable(binaryTree2.root);

  return values;
}

let one50 = new Node(150);
let onehundred = new Node(100);
let two50 = new Node(250);
let seventyfive = new Node(75);
let one60 = new Node(160);
let twohundred = new Node(200);
let three50 = new Node(350);
let onet25 = new Node(125);
let one75 = new Node(175);
let threehundred = new Node(300);
let fivehundred = new Node(500);

one50.left = onehundred;
one50.right = two50;
onehundred.left = seventyfive;
onehundred.right = one60;
one60.left = onet25;
one60.right = one75;
two50.left = twohundred;
two50.right = three50;
three50.left = threehundred;
three50.right = fivehundred;

let binaryTree1 = new BinaryTree(one50);

let forty2 = new Node(42);
let one00 = new Node(100);
let sixHundred = new Node(600);
let fifteen = new Node(15);
let one600 = new Node(160);
let two00 = new Node(200);
let three500 = new Node(350);
let one25 = new Node(125);
let one775 = new Node(175);
let four = new Node(4);
let five00 = new Node(500);

forty2.left = one00;
forty2.right = sixHundred;
one00.left = fifteen;
one00.right = one600;
sixHundred.left = two00;
sixHundred.right = three500;
one600.left = one25;
one600.right = one775;
three500.left = four;
three500.right = five00;

let binaryTree2 = new BinaryTree(forty2);

let result = treeIntersection(binaryTree1, binaryTree2)

console.log(result);

module.exports = treeIntersection;