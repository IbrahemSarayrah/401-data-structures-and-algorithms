'use strict';

const treeIntersection = require('../treeIntersection')
const Node = require('../../trees/node');
const BinaryTree = require('../../trees/binaryTree');

describe('treeIntersection Test', () => {

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

    it('test the treeIntersection ', () => {

        expect(treeIntersection(binaryTree1, binaryTree2)).toEqual(['100', '160','125', '175','200', '350','500']);
    })

    it('test the treeIntersection if there is no trees ', () => {
        let tree1
        let tree2
        expect(treeIntersection(tree1, tree2)).toBeNull();
    })
});