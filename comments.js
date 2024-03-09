//create web server 
var express = require('express');
var app = express();
var url = require('url');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//read the comments from the file
app.get('/comments', function(req, res) {
    fs.readFile('comments.json', 'utf8', function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

//write the comments to the file
app.post('/comments', function(req, res) {
    var comment = req.body;
    fs.readFile('comments.json', 'utf8', function(err, data) {
        var comments = JSON.parse(data);
        comments.push(comment);
        fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'no-cache');
            res.send(JSON.stringify(comments));
        });
    });
});

app.listen(3000);
console.log('Server started: http://localhost:3000/');