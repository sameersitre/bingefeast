const serverless = require('serverless-http');
const express = require('express')
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
mainRouter.configure(app);

// COMMENT ON PRODUCTION : sls deploy
// app.listen(3300, "127.0.0.1", function () {
//   console.log("Example app listening at 3300 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     ###############################")
// });

module.exports.handler = serverless(app);
