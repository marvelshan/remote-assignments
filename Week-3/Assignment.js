const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/test'));
app.use(express.static(__dirname + '/sum'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/test/HW02.html'));
});

app.get('/HW02.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/test/HW02.css'));
});

app.get('/home', (req, res) => {
    res.send(`<h1>Hello Express</h1>`);
});

app.get('/data', (req, res) => {
    let item = req.query.number;
    if(!item){
        res.send('Lack of Parameter');
    } else if (!isNaN(parseInt(item)) && isFinite(item) && Number.isInteger(parseFloat(item))){
        // parseInt(item)將item化為數字，假如是數字，條件!isNaN就回傳true
        // isFinite(item)檢查此值是否為有限數字，若是回傳true
        // Number.isInteger(parseFloat(numberParam))檢查此是否為整數
        let number = parseInt(req.query.number);
        let result = (number * (number + 1)) / 2;
        res.json({result});
    } else {
        res.send('Wrong Parameter');
    }
});

app.get('/myName', (req, res) => {
    const userName = req.cookies.userName;
    if(userName){
        res.send(`Hi ${userName}`);
    } else {
        res.send(`    
            <form action="/trackName" method="post">
                <label for="name">輸入名稱:</label>
                <input type="text" id="name" name="name">
                <button type="submit">Submit</button>
            </form>
        `);
    }
});

app.post('/trackName', (req, res) => {
    const userName = req.body.name;
    if(userName){
        res.cookie('userName', userName);

    } else {
        res.clearCookie('userName');
    }
    const redirectURL = `/trackName?name=${encodeURIComponent(userName)}`;
    res.redirect(redirectURL);
});

app.get('/trackName', (req, res) => {
    const userName = req.query.name;
    if(userName){
        res.sendFile('public/index.html', {root:__dirname});
    } else {
        res.redirect('/myname');
    }
})

app.listen(3000, () => {
    console.log('原神!啟動!');
});