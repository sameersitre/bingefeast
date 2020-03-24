
/* ************ */

var fs = require('fs');

var https = require("https");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors')

//start mysql connection
// var connection = mysql.createConnection({
//     host: 'localhost', //mysql database host name
//     user: 'root', //mysql database user name
//     password: 'root', //mysql database password
//     database: 'DynamicProto' //mysql database name
// });

// connection.connect(function (err) {
//     if (err) throw err
//     console.log('You are now connected with mysql database...')
// })
//end mysql connection

//start body-parser configuration
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//end body-parser configuration
app.use(cors())
var options = {
    key: fs.readFileSync('./certs/server-key.pem'),
    cert: fs.readFileSync('./certs/server-cert.pem'),
};
https.createServer(options, app).listen(8000, "127.0.0.1", function () {
    
    console.log("Express server listening on  http:// ",8000);
});

//rest api to get all customers
app.get('/getDetails', function (req, res) {
     res.end('JSON.stringify(results)');
    
});
