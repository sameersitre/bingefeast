const serverless = require('serverless-http');
const express = require('express')
const fetch = require('node-fetch');
const axios = require('axios');
var bodyparser = require('body-parser');
var mainRouter = require('./routes/router');
var cookieParser = require('cookie-parser');
global.config = require('./config');

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

// app.post('/getDetails', async function (req, res) {
//   let resp = null;
//   await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=a2d451cdbcf87912820b3b17b82514c3`)
//     .then(res => {
//       resp = res.data.results
//       console.log(resp)
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//   console.log(resp)
//   res.send(resp)
// })

module.exports.handler = serverless(app);
