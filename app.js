const express = require('express');
const app = express();
const port = process.env.PORT || 6969;
const path = require('path');

const login = require('./login/loginRouter');

app.use('/', login);

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => { console.log(`Listening on port: ${port}`) });