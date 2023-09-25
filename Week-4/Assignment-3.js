const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller/Controller.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/',(req, res) =>{
    res.render('home');
});

app.post('/signin', controller.signin);
app.post('/signup', controller.signup);
app.get('/member', controller.member);
app.get('/success', controller.success);

app.listen(3000, () => {
    console.log('原神~ 啟動~')
});