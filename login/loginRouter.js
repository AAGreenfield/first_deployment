const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './login.html'));
})

router.get('/login.js', (req, res) => {
    res.sendFile(path.join(__dirname, './login.js'))
});

router.get('/login.css', (req, res) => {
    res.sendFile(path.join(__dirname, './login.css'))
});

module.exports = router;