const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + 'test')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/test/HW02.html'));
});

app.get('/home', (req, res) => {
    res.send('Hello Express');
});

app.get('/HW02.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/test/HW02.css'));
});

app.listen(3000, () => {
    console.log('Server is working');
});