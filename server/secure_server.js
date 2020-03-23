/* var https = require('https');

var options = {
    key: fs.readFileSync('./certs/server-key.pem'),
    cert: fs.readFileSync('./certs/server-cert.pem'),
};
var server = https.createServer(options, app).listen(port, function () {
    console.log("Express server listening on port " + port);
}); */
/* ************ */
var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

var port = 8000;
 
const options = {
    key: fs.readFileSync(__dirname + '/certs/server-key.pem', 'utf8'),
   cert: fs.readFileSync(__dirname + '/certs/server-cert.pem', 'utf8')
 };
var app = express();

 https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});

app.get('/getDetails', function (req, res) {
    res.writeHead(200);
    console.log("object")
    res.end("hello world\n");
});