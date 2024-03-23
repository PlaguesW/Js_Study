const someStuff = 'NewStuff';
const masCollection = ['Lot #1', 'Lot #2', 'Lot #3'];
const randomNumber = 113;

//* Module.exports and export reference the same object in memory
module.exports.someStuff = someStuff;
module.exports.masCollection = masCollection;
module.exports.randomNumber = randomNumber;
