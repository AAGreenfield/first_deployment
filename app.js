const express = require('express');
const app = express();
const port = process.env.PORT || 6969;

app.listen(PORT, () => { console.log(`Listening on port: ${port}`) });