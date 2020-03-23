/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var mainRouter = require('./routes/router');
var validator = require('express-validator');
var cookieParser = require('cookie-parser');
var path = require('path');

global.config = require('./config');

// creating server instance
var app = express();
app.set('view engine', 'ejs');
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

  if (req.method === 'OPTIONS') {
    res.send();
  } else {
    next();
  }
});

app.use(cookieParser());
app.use(
  bodyparser.json({ limit: '50mb', extended: true }),
  bodyparser.urlencoded({ limit: '50mb', extended: true })
);
// app.use(busboy());
//app.use(bodyparser.json());
mainRouter.configure(app);

//listening application on port 8000
var server = app.listen(8080, function () {
  console.log('Server Listening on port ' + server.address().port);
});
//server.setTimeout(600000, function(){
//    console.log("API TIMED OUT");
//});
server.timeout = 60 * 10 * 1000;
