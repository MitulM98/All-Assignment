const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
})
router.post('/login-data', (req, res) => {
    let email = req.body.xemail;
    let pass = req.body.xpass;

    console.log(email + " " + pass);
    res.send();
})

module.exports = router;