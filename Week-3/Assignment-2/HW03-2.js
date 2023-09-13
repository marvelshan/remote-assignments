const express = require('express');

const app = express();
const router = express.Router();

router.get('/data', (req, res) => {
    let item = req.query.number;
    if(!item){
        res.send('Lack of Parameter');
    } else if (!isNaN(parseInt(item)) && isFinite(item) && Number.isInteger(parseFloat(item))){
        // parseInt(item)將item化為數字，假如是數字，條件!isNaN就回傳true
        // isFinite(item)檢查此值是否為有限數字，若是回傳true
        // Number.isInteger(parseFloat(numberParam))檢查此是否為整數
        let number = parseInt(req.query.number);
        let result = (number * (number + 1)) / 2;
        res.send(`${result}`);
    } else {
        res.send('Wrong Parameter');
    }
});

app.use('/', router);

app.listen(3000, () => {
    console.log('Server is working');
});