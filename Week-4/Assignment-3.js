const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect(err => {
    if(err){
        console.log('無法連接' + err.stack);
        return;
    }
    console.log('成功連接' + db.threadId);
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/signup', (req, res) => {
    const {email, password} = req.body;
    if(!email){
        res.send('必須填寫email');
    }
    db.query('SELECT * FROM user WHERE email = ?', [email], (error, results) =>{
        if(error){
            res.send('Sign up error');
            return;
        }
        if(results.length > 0){
            res.send(`
                <h1>此帳號已註冊</h1>
                <form action="/" method="get">
                    <button>返回登入畫面</button>
                </form>
            `);
        } else {
            db.query('INSERT INTO user (email, password) VALUES (?, ?)', 
            [email, password], (Error) => {

                if(Error){
                    console.error('註冊錯誤:' + Error);
                    res.send('註冊失敗');
                    return;
                }
                res.redirect('/success');
            })
        }   
    })
});

app.post('/signin', (req, res) => {
    const {email, password} = req.body;
    db.query('SELECT * FROM user WHERE email = ? AND password = ?',
    [email, password], (error, results) => {
        if(error){
            console.log(error);
            res.send('登入失敗');
            return;
        }
        if(results.length === 0){
            res.send(`
            <h1>密碼錯誤，請再次輸入</h1>
            <form action="/" method="get">
                <button>返回登入畫面</button>
            </form>
        `)
        } else {
            res.redirect('/member');
        }
    })
})

app.get('/member', (req, res) =>{
    res.send(`
        <h1>成功登入，歡迎到此網頁</h1>
        <form action="/" method="get">
            <button>登出</button>
        </form>
    `);
})

app.get('/success', (req, res) => {
    res.send(`
        <h1>以成功註冊!</h1>
        <form action="/" method="get">
            <button>返回登入畫面</button>
        </form>
    `)
})

app.listen(3000, () => {
    console.log('原神~ 啟動~')
});