import fs from 'fs';
import path from 'path';

const sourceDir = './files';
const destinstionDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
    console.warn(`Sourse dir ${sourceDir} doesn't exists!`);
    console.log('Exiting...');
    process.exit(0);
}

if (fs.existsSync(destinstionDir)) {
    fs.rmdirSync(destinstionDir, { recursive: true, forse: true });
    console.log('Destnation dir removed');
}
fs.mkdirSync(destinstionDir);

fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Start', performance.now());
    fileNames.forEach((fileName, index) => {
        const sourceFilePath = path.join(sourceDir, fileName);
        const destinstionFilePath = path.join(
            destinstionDir,
            `${index + 1}. ${fileName}`
        );

        const readFileStream = fs.createReadStream(sourceFilePath);
        const writeFileStream = fs.createWriteStream(destinstionFilePath);

        readFileStream.pipe(writeFileStream);

        writeFileStream.on('finish', () => {
            console.log(`File ${fileName} was copied`);
        });
    });
    console.log('End', performance.now());
});
