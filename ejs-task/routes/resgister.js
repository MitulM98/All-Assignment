const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const parentPath = require('../app');

router.use(express.json());
router.use(express.urlencoded({
    extended : false
}))

// const dir = __dirname+'/../';

router.get('/', (req, res) => {
    res.render('register');
})

router.post('/register-data', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let pass = req.body.pass;
    let city = req.body.city;
    let age = req.body.age;
    let data = ('name: ' +name + '\n email : ' + email + '\n password : ' + pass + '\n age : ' +age + '\n city : '+ city);
    if(!fs.existsSync(`./user/${email}`)){
        fs.mkdirSync(`./user/${email}`);
        fs.writeFileSync(`./user/${email}/details.txt`,`${data.toString()}`);
    }
    else{
        res.send("already registered");
    }
    // `${dir}/user/${email}`
    res.send(`File is created`);
})

module.exports = router;