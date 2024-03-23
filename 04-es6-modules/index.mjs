import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getDataFromServ from './default-export.mjs';
import DEFAULT_SERVER, {
    USERNAME as MY_U_NAME,
    PASSWORD,
} from './mixed-exports.mjs';

console.log(season, temperature);
console.log(isRaining, humidity);

getDataFromServ('https://jsonplaceholder.typicode.com/posts/1')
    .then((post) => console.log(post))
    .catch((err) => console.log(err));

console.log(DEFAULT_SERVER);
console.log(MY_U_NAME, PASSWORD);
