const express = require('express');
const mysql = require('mysql');
const app = express();


// Osnovni endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});
