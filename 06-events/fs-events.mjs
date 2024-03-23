import { EventEmitter } from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();

const filePath = './first.txt';

fileEmitter.on('writeComplete', () => {
    console.log(`File ${filePath} was written`);
    fs.appendFile(filePath, '\nOne more line', () => {
        fileEmitter.emit('appendComlete');
    });
});

fileEmitter.on('appendComplete', () => {
    console.log(`Append text to ${filePath} file`);
    fs.rename(filePath, './renamed-first.txt', () => {
        fileEmitter.emit('renameComplete');
    });
});

fileEmitter.on('renameComplete', () => {
    console.log('File was renamed');
});

fs.writeFile(filePath, 'First file text', () => {
    fileEmitter.emit('writeComplete');
});
