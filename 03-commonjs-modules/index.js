// console.log(arguments.callee.toString());
// console.log(module);
// console.log(__filename);
// console.log(__dirname);
// console.log(require);
// console.log(exports === module.exports);

// //* Not the bets way for export
// module.exports.some = function () {
//     console.log('Nothing');
// };

// //* If you use this method, you can export only one value
// module.exports = function () {
//     console.log('Some');
// };

const {
    someStuff,
    masCollection,
    randomNumber,
} = require('./multiple-exports');
const {
    someStuff: anotherStuff,
    someStuff_2,
    masCollectionTest,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');

//* Import from multiple-exports
console.log(someStuff);
console.log(masCollection);
console.log(randomNumber);

//* Import from single-export
console.log(greetingFn);
greetingFn(someStuff);

masCollection.push('Lot #4');

//* Imports from export-and-import
console.log(anotherStuff, someStuff_2);
console.log(masCollectionTest);
