const { someStuff, masCollection } = require('./multiple-exports');

const someStuff_2 = 'Not new Stuff';

module.exports.someStuff = someStuff;
module.exports.someStuff_2 = someStuff_2;
//* Property names could be different from the vatriable names
module.exports.masCollectionTest = masCollection;
