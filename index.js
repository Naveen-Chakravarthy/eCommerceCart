
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('./js/connection.js');
var mainHandler = require('./handler/mainHandler.js');
var discountHandler = require('./handler/discountHandler.js');
var showcartHandler = require('./handler/showcartHandler.js');
var app = express();
let debug = false;

const connection = new mysql.Connection('localhost', 'naveen', 'jYo34xweTYMZj_qCv', 'celcius_wa_genericutil');
const dotenv = require('dotenv');
dotenv.config();
if (process.env.NODE_ENV) {
  if (process.env.NODE_ENV == 'development') {
    debug = true;
  }
}

var router = {
  '/test/updatediscount/': discountHandler.HandleDiscount,
  '/test/': mainHandler.ShowMain,
  '/test/showcart/': showcartHandler.ShowCart,
  '/test/updateToDB/': discountHandler.HandleDiscount
};

app.use(express.json());
app.set('view engine', 'ejs');
app.use('/test/js/', express.static(__dirname + '/js'));
app.use('/test/css/', express.static(__dirname + '/css'));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

notFoundFunction = function (data, callback) {
  data.res.sendStatus(404);
};

HandleRequest = function(req, res) {
  var data = {
    'path': req.originalUrl,
    'req': req,
    'res': res,
    'method': req.method,
    'debug': debug,
    'connection': connection
  };
  var chosenHandler = typeof (router[req.originalUrl]) !== 'undefined' ? router[req.originalUrl] : notFoundFunction;
  chosenHandler(data, function (resp) {
    console.log('done');
  });
}


app.all('*', function (req, res) {
  HandleRequest(req, res);
});

app.listen(4050, () => {
  console.log(`App Started on PORT 4050`);
});