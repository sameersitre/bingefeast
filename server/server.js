/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

const express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
// var validator = require('express-validator');
var cookieParser = require('cookie-parser');
const path = require('path');
// var session = require('express-session');
var busboy = require('connect-busboy');


const app = express();
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
  app.use(busboy());

  //app.use(cors());
// app.use(validator());
app.use(cookieParser());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);