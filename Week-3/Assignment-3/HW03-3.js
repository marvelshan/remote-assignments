const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    const number = parseInt(req.query.number);
    console.log(req.query.number);
    const result = (number * (number + 1)) / 2;

    res.json({result});
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
    console.log('Server is working');
});