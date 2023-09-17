const express = require('express');
var cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// let returnPage = (req, res, next) => {
//     if(req.query.name === '999'){
//         res.sendFile('index.html', {root: __dirname});
//     } else {
//         next();
//     }
// };
// 這邊是我嘗試使用middleware的痕跡，但沒使用成功，先放在這裡

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
    console.log('原神!啟動!')
});