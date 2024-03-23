const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Start new express');
});

app.listen(3000);
