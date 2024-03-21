const express = require('express');
const app = express();
const port = process.env.PORT || 6969;
const path = require('path');

const login = require('./login/loginRouter');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', login);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('base', { title: "Home"})
} )

app.listen(port, () => { console.log(`Listening on port: ${port}`) });