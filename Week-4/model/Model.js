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

class modelHW{
    static signup(email, password, callback) {
        db.query('SELECT * FROM user WHERE email = ?', [email], (error, results) =>{
            if(error){
                callback('Sign up error');
            } else if(results.length > 0){
                callback('此帳號已註冊');
            } else {
                db.query('INSERT INTO user (email, password) VALUES (?, ?)', 
                [email, password], (Error) => {
                    if(Error){
                        console.error('註冊錯誤:' + Error);
                        callback('註冊失敗');
                    } else {
                    callback(null, '註冊成功');
                    }
                })
            }   
        })
    }
    static signin(email, password, callback) {
        db.query('SELECT * FROM user WHERE email = ? AND password = ?',
        [email, password], (error, results) => {
            if(error){
                console.log(error);
                callback('登入失敗');
            } else if(results.length === 0){
                callback('密碼錯誤，請再次輸入')
            } else {
                callback(null, results[0]);
            }
        })
    }
}

module.exports = modelHW;
