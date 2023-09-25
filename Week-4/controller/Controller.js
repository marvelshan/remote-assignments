const modelHW = require('../model/Model.js');

exports.signup = (req, res) => {
    const {email, password} = req.body;
    modelHW.signup(email, password, (err) => {
        if(err){
            res.send(err);
        } else {
            res.redirect('/success');
        }
    })
}

exports.signin = (req, res) => {
    const {email, password} = req.body;
    modelHW.signin(email, password, (err) => {
        if(err){
            res.send(err);
        } else {
            res.redirect('/member');
        }
    })
}

exports.member = (req, res) =>{
    res.send(`
        <h1>成功登入，歡迎到此網頁</h1>
        <form action="/" method="get">
            <button>登出</button>
        </form>
    `);
}

exports.success = (req, res) => {
    res.send(`
        <h1>以成功註冊!</h1>
        <form action="/" method="get">
            <button>返回登入畫面</button>
        </form>
    `)
}
