/**
 * Created by bamiller on 8/31/2014.
 */

var express = require('express');
var app = express();
var fs = require('fs');

var buffer = fs.readFileSync('app/index.html','utf8');


app.get('/', function(request, response) {
    response.send(buffer);
});

var port = process.env.PORT ||8080; // disabled on dev server
//var port = 8080; // enabled on dev server for browser feedback

app.listen(port, function() {
    console.log("Listening on " + port);
});

