const express = require('express');
const port = 3333;
const app = express();

const dir = __dirname;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

const loginPage = require('./routes/login');
const rPage = require('./routes/resgister');

app.use('/login', loginPage);
app.use('/register', rPage);

app.listen(port, () => {
    console.log(`Server :- ${port}`);
})