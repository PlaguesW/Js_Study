const fs = require('fs');
let isRunning = true;

setTimeout(() => (isRunning = false), 10);
process.nextTick(() => console.log('Next Tick'));

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve()); //* with just 'resolve()' we stay on the same loop iteration.
    });
}

async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log('While loop ended'));
