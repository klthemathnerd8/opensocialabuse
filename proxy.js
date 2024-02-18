const express = require('express');
const request = require('request');
const app = express();

app.get('/proxy', (req, res) => {
    let url = req.query.url;
    request(url).pipe(res);
});
