const path = require('path');

const filePath =
    '/Users/plagues/JsTest/JsProjectsPractice/nodeJsStart/index.js';
const textFilePath =
    '/Users/plagues/JsTest/JsProjectsPractice/nodeJsStart/file.txt';
const relativePath = './node/movie.mov';
const directoryPath = './node/subfolder';

console.log(path.isAbsolute(filePath)); //* True
console.log(path.isAbsolute(relativePath)); //* False

console.log(path.basename(filePath)); //* index.js
console.log(path.basename(directoryPath)); //* subfolder

console.log(path.dirname(filePath)); //*/Users/plagues/JsTest/JsProjectsPractice/nodeJsStart
console.log(path.dirname(directoryPath)); //* ./node

console.log(path.resolve(relativePath)); //* /Users/plagues/JsTest/JsProjectsPractice/nodeJsStart/07-path/node/movie.mov

console.log(path.extname(textFilePath)); //* .txt
console.log(path.extname(relativePath)); //* .mov
console.log(path.extname(directoryPath)); //* ''

console.log(path.parse(filePath));

const parsePath = path.parse(filePath);
console.log(filePath);
console.log(path.join(parsePath.dir, `renamed-${parsePath.name}.mjs`)); //* /Users/plagues/JsTest/JsProjectsPractice/nodeJsStart/renamed-index.mjs
