'use strict';

const HashTable = require('./hashtable');

function repeatedWord(string) {
	const hashTable = new HashTable(1024);
	// regex to remove all the special characters from the string
	string = string.replace(/[^a-zA-Z0-9 ]/g, '');
	
	// split the string and lower case all letters and store it in the array
	const stringArray = string.toLowerCase().split(' ');
	// loop stringArray
	for (let i = 0; i < stringArray.length; i++) {
		// condition to check for the repeated word
		if (hashTable.contains(stringArray[i])) {
			return (stringArray[i]);
		}
		
		hashTable.add(stringArray[i]);
	}
	// if not contain a repeated word
	return null;
}


const test = repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...')
console.log(test);

module.exports = repeatedWord;