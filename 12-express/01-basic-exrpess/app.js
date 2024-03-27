const express = require('express');

const app = express();

app.get('/', (req, res) => res.end('Response from Express'));

app.listen(5000, () => console.log('Server wa started on port 5000'));
